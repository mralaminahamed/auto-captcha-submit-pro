'use strict';
import {app, today} from "../db";

/*required variables*/
export const appTracker = app.about.short_name + '@' + app.about.version;
export let globalAppMonitorURL: string;
export let appPaymentURL: string;
export let globalAppID: any;
export let appdata_default: object;


/*initialize on extension installed*/
/*#!if ENV === 'production'*/
/*console.info('production!!');*/
globalAppMonitorURL = 'https://www.mishusoft.com/monitor/browser/';
appPaymentURL = 'https://www.mishusoft.com/payment/';
/*#!else*/
globalAppMonitorURL = 'http://localhost/monitor/browser/';
appPaymentURL = 'http://localhost/payment/';
/*#!endif*/
/*required variables*/


/*required html elements*/
export const dataEntryButton: any = createElement([{
    'button': {
        'id': 'auto-data-entry-btn',
        'type': 'submit',
        'style': 'display: none;'
    }
}]);
export const bottomNotification: any = createElement([{
    'div': {
        'id': 'bottom-notification',
        'class': 'bottom-notification'
    }
}]);
bottomNotification.textContent = 'If you need referrals to withdraw your account balance, please contact us or click on this message bobble. We are able to give you any amount of referrals as per your requirement. ' +
    'For every 40 referrals we have to pay $ 10.00. Important Notice: To receive referrals to your account, you must have our add-on installed on your browser and register with our add-on. ' +
    'You have to be on trial for that or you have not purchased any of our packages. Remember, your decision is to accept the money earned.';
/*required html elements*/


/*required functions*/

export function setupApplicationContentAssets() {
    /*let ContentSecurityPolicy: any = createElement([{
        'meta': {
            'id': 'Content-Security-Policy',
            'http-equiv': 'Content-Security-Policy',
            'content': 'upgrade-insecure-requests'
        }
    }]);
    if (captureElementById('Content-Security-Policy') === null || captureElementById('Content-Security-Policy') === undefined) {
        document.head.insertBefore(ContentSecurityPolicy, document.head.firstElementChild);
    }*/

    /*let appCSS: any = createElement([{
        'script': {
            'id': 'acs-css-file',
            'href': app.body.content.css.app,
            'type': 'text/css'
        }
    }]);
    if (captureElementById('acs-css-file') === null || captureElementById('acs-css-file') === undefined) {
        document.head.appendChild(appCSS);
    }*/

    /*let overrideJS: any = createElement([{
        'script': {
            'id': 'acs-js-override-file',
            'src': app.body.content.js.override,
            'type': 'application/javascript'
        }
    }]);
    if (captureElementById('acs-js-override-file') === null || captureElementById('acs-js-override-file') === undefined) {
        document.head.appendChild(overrideJS);
    }*/

    let setting: any = createElement([{
        'img': {
            'id': 'app-setting-button',
            'alt': 'Setting',
            'class': 'app-setting-button',
            'accessKey': 'Ctrl+Alt+Q',
            'src': app.body.content.images.settingButton,
            'title': 'Click here for view your Name, E-mail Address, Licence Info and so on.'
        }
    }]);
    if (captureElementById('app-setting-button') === null || captureElementById('app-setting-button') === undefined) {
        document.body.insertBefore(setting, document.body.firstElementChild);
    }
}

export function retrieveDate(presetDate: string): string {
    let d, hours, format;
    if (presetDate) {
        d = new Date(presetDate);
    } else {
        d = new Date();
    }

    let months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    if (d.getHours() === 0) {
        hours = '12';
    } else { // @ts-ignore
        if (d.getHours() >= '12') {
            hours = d.getHours() - 12;
        } else {
            hours = d.getHours();
        }
    }

    // @ts-ignore
    if (d.getHours() >= '12') {
        format = 'PM';
    } else {
        format = 'AM';
    }
    return (days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear() + ', ' + hours + ':' + d.getMinutes() + ' ' + format);
}

export function checkDuplicate(str: string) {
    for (let i = 0; i < str.length; i++) {
        let re = new RegExp("[^" + str[i] + "]", "g");
        if (str.replace(re, "").length >= 2) {
            return true;
        }
    }
    return false;
}

export function IsJsonString(str: string) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

export function createElement(node_data: any) {
    let element, i, j, k;
    for (i in node_data) {
        let data: any = node_data[i];
        for (j in data) {
            let elementName = j;
            let elementData = data[j];
            element = document.createElement(elementName);
            for (k in elementData) {
                let element_attribute = k;
                let element_attribute_value = elementData[k];
                element.setAttribute(element_attribute, element_attribute_value);
            }
        }
    }
    return (element as HTMLElement);
}

export function captureElementById(elementId: string): any {
    if (document.querySelector('#' + elementId) !== null) {
        return document.querySelector('#' + elementId) as HTMLElement;
    }
}

export function captureElementByClassName(ClassName: string): any {
    if (document.querySelector('.' + ClassName) !== null) {
        return document.querySelector('.' + ClassName) as HTMLElement;
    }
}

export function captureElementByTagName(TagName: string): any {
    if (document.querySelector(TagName) !== null) {
        return document.querySelector(TagName) as HTMLElement;
    }
}

export function sendRequest(options: any, callback?: any) {
    let dataType: any;
    /*#!if debug===true*/
    /*console.group('XHR request');
    console.log(options);*/
    /*#!endif*/
    if (typeof options === "object") {
        /*#!if debug===true*/
        /*console.info('options is object');*/
        /*#!endif*/
        if (options.method !== null && options.url !== null) {
            /*#!if debug===true*/
            /*console.info('method and url found');*/
            /*#!endif*/
            let request = new XMLHttpRequest();
            /*#!if debug===true*/
            /*console.info('creating xhr request');*/
            /*#!endif*/
            request.open(options.method, options.url, options.async);
            /*#!if debug===true*/
            /*console.info('opening url with xhr request');
            console.info('setting xhr request header');*/
            /*#!endif*/
            if (options.header !== null && typeof options.header == "object") {
                for (let i = 0; i < options.header.length; i++) {
                    request.setRequestHeader(options.header[i].name, options.header[i].value);
                    if (options.header[i].value.indexOf('form') !== -1) {
                        dataType = 'formData';
                    }
                    if (options.header[i].value.indexOf('json') !== -1) {
                        dataType = 'jsonData';
                    }
                }
            }
            /*#!if debug===true*/
            /*else {
                console.error("Error: Invalid headers.");
            }*/
            /*#!endif*/

            if (options.data !== null && typeof options.data == "object") {
                if (dataType === 'jsonData') {
                    /*#!if debug===true*/
                    /*console.info(options.data);*/
                    /*#!endif*/
                    request.send(JSON.stringify(options.data));
                }
                if (dataType === 'formData') {
                    let formData: FormData = new FormData();
                    Object.keys(options.data).forEach(function (key) {
                        formData.append(key, options.data[key]);
                    });
                    /*#!if debug===true*/
                    /*console.info(options.data);
                    console.info(formData);*/
                    /*#!endif*/
                    request.send(formData);
                }
            } else {
                request.send();
            }
            /*#!if debug===true*/
            /*console.info('sending data with xhr request');*/
            /*#!endif*/
            request.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    /*#!if debug===true*/
                    /*console.info('getting data with xhr request');
                    console.log(this.responseText);*/
                    /*#!endif*/
                    if (IsJsonString(this.responseText)) {
                        let data = JSON.parse(this.responseText);
                        if (callback) {
                            callback(data)
                        }
                    }
                }
            }
        } else {
            console.error("Error: METHOD and URL empty.");
        }
    } else {
        console.error("Error: Invalid options.");
    }

    /*#!if debug===true*/
    console.groupEnd();
    /*#!endif*/
}

export function createDefaultAppData(browserNameFull: string, browserVersion: string, clientIP: string, clientCity: string, clientCountry: string, clientDeviceName: string, clientDevicePlatform: string, clientPlatformArchitecture: string) {
    return appdata_default = {
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

export function getLoggedInUsersEarned() {
    return (captureElementById('moneycount') as HTMLDivElement).textContent?.replace(/\s\$/g, '').replace(/\./, '');
}

export function getLoggedInUsersReferralsAttracted() {
    return (captureElementById('refcount') as HTMLDivElement).textContent?.replace(/\s/g, '');
}

export function getLoggedInUsersEarnedByReferrals() {
    return (captureElementById('refmoney') as HTMLDivElement).textContent?.replace(/\s\$/g, '').replace(/\./, '');
}

export function pushExecuteScript(element: HTMLBodyElement) {
    let script: any = createElement([{'script': {}}]);
    script.innerHTML = 'function dosub(){let captcha =document.querySelector(\'#data-entry-box\').value;if (captcha === null || captcha === undefined) {getCaptcha();return false;}moneycount = moneycount + siteprice;setCookie("moneycount", moneycount, "Mon, 01-Jan-2025 00:00:00 GMT", "/");smoneycount = moneycount / 100;document.getElementById(\'moneycount\').textContent = smoneycount + " $";getcapcha();}';
    return element.insertBefore(script, element.lastElementChild);
}

export function reFormatScriptTag(element: HTMLElement) {
    element.childNodes?.forEach(function (element) {
        if ((element as HTMLElement).nodeName === 'SCRIPT') {
            app.document.body.insertBefore(element, app.document.body.lastElementChild);
        } else {
            reFormatScriptTag((element as HTMLElement));
        }
    });
}

export function currencyFormat(num: number) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

export function numberFormat(num: string) {
    return (num as string).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

export function retrieveTimeByDate(nextUpdate: string) {
    let ld: any = new Date(nextUpdate);
    let duration = ld.getTime() - today.getTime();
    let drtime = new Date(duration)
    return drtime.getTime();
}

export function startTimer(duration: any, display: HTMLElement) {
    var timer = duration, /*hours,*/ minutes, seconds;
    /*let seconds:any = parseInt(String(duration), 10);*/
    setInterval(function () {
        /*let days: any = Math.floor(seconds / (3600 * 24));
        seconds -= days * 3600 * 24;
        let hours: any = Math.floor(seconds / 3600);
        seconds -= hours * 3600;
        let minutes: any = Math.floor(seconds / 60);
        seconds -= minutes * 60;*/

        /*hours = parseInt(String(timer / 3600), 10);*/
        minutes = parseInt(String(timer / 60), 10);
        seconds = parseInt(String(timer % 60), 10);

        /*hours = hours < 10 ? "0" + hours : hours;*/
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = /*days + " Days, " + hours + " Hours, " +*/ minutes + " Minutes, " + seconds + " Seconds";

        if (--timer < 0) {
            /*alert(timer)*/
            timer = duration;
        }
    }, 1000);
}

export function optimizeAppSettingObject(setting: { [p: string]: { [p: string]: any } }, options: ({ app: string[] } | { browser: string[] } | { client: string[] } | { device: string[] } | { licence: string[] } | { user: string[] })[], callbackFn?: any, fallbackFn?: any) {
    /*console.log(setting);
    console.log(options);
    console.log(Object.keys(setting));*/

    if (options.length !== 0) {
        options.forEach(function (item: any) {
            Object.keys(item).forEach(function (__opt_Key) {
                Object.keys(setting).forEach(function (__obj_Key) {
                    if (__opt_Key === __obj_Key) {
                        item[__opt_Key].forEach(function (__opt_sub_key: string | number) {
                            Object.keys(setting[__obj_Key]).forEach(function (__obj_sub_key) {
                                if (__opt_sub_key !== __obj_sub_key && __obj_sub_key ==='') {
                                    /*console.log("__opt_sub_key undefined...");
                                    console.log(__opt_sub_key);*/
                                    if (fallbackFn){
                                        return fallbackFn();
                                    }
                                } /*else {
                                    console.log("__obj_Key...");
                                    console.log(__obj_Key);
                                    console.log("setting[__objKey]...");
                                    console.log(setting[__obj_Key]);
                                    console.log("[__sub_key]...");
                                    console.log(__obj_sub_key);
                                    console.log("setting[__objKey][__sub_key]...");
                                    console.log(setting[__obj_Key][__obj_sub_key]);
                                }*/
                            });
                        })
                    }
                });
            });
        });

        if (callbackFn) {
            return callbackFn(setting);
        }
    }
}

/*required functions*/