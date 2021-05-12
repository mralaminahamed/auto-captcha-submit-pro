/**
 * Auto captcha submit
 * Developer: Mr Abir Ahamed
 * Website: https://www.mishusoft.com
 * Official Link: https://download.mishusoft.com/addons/autocapsubmitpro/
 * Git:https://www.github.com/mrabirahamed/auto-captcha-submit
 * */
'use strict';
import { app, coll } from "./db";
import { browser } from "webextension-polyfill-ts";
import { acsComPortFront, webMessageReceiver } from "./messanger";
import { dataEntryButton } from "./lib-assets";
import { captureElementById, createElement } from "./lib-functions-common";
import { addAppWindow, assembleAppContent, getLoggedInUsername, getLoggedInUsersEarned, getLoggedInUsersReferralsAttracted, modifyFixedWebContent, setupApplicationContentAssets, getLoggedInUsersEarnedByReferrals, trackSimilarWebsite, addWelcomeWindow, addPriceListWindow, addWaitForNextDayWindow } from "./lib-assets-app";
import { retrieveDate, retrieveTimeByDate, startTimer } from "./lib-functions";
/*communication channel*/
acsComPortFront.onMessage.addListener(contentResponder);
/*communication channel*/
/*payment confirm agent*/
webMessageReceiver('mishusoft-payment-confirm', function (payload) {
    browser.storage.local.remove("appsetting");
    acsComPortFront.postMessage({ 'command': 'setLicence', 'licence': payload.licence });
});
/*payment confirm agent*/
if (window.location.origin.indexOf(app.domain.commonText) !== -1) {
    app.domain.extension.forEach(function (ext) {
        coll.dom.extAbility = (coll.dom.extPos = app.domain.name.indexOf(ext)) !== -1;
        if (coll.dom.extAbility) {
            acsComPortFront.postMessage({ 'command': "checkSettings" });
            /*#!if debug===true*/
            acsComPortFront.onDisconnect.addListener(function (e) {
                console.error('ERROR: Using port (' + e.name + ') are disconnected!!');
            });
            /*#!endif*/
            /*#!if debug===true*/
            console.info('current domain in rage!!');
            /*#!endif*/
            coll.dom.commonText = app.domain.name.substr(coll.dom.extPos - app.domain.commonText.length, app.domain.commonText.length);
            if ((coll.dom.currentPageNameLastPos = app.baseURI.indexOf(app.page.ext)) !== -1) {
                coll.dom.scannableFullLength = ((coll.dom.currentPageNameLastPos + app.page.ext.length) - app.domain.origin.length);
                coll.dom.currentPage = app.baseURI.substr(app.domain.origin.length, coll.dom.scannableFullLength);
            }
            if (coll.dom.commonText === app.domain.commonText) {
                /*#!if debug===true*/
                console.info('current domain matched!!');
                /*#!endif*/
                /*#!if debug===true*/
                console.log('app loader window creating!!');
                /*#!endif*/
                let loaderWindow = createElement([{
                        'div': {
                            'id': 'app-loader',
                            'class': 'app-window'
                        }
                    }]);
                /*#!if debug===true*/
                console.log('app loader window created!!');
                /*#!endif*/
                /*detect loaderWindow content*/
                /*#!if debug===true*/
                console.log('app loader creating!!');
                /*#!endif*/
                let loader = createElement([{
                        'img': {
                            'alt': 'Loading...',
                            'class': 'app-loader-box app-loader',
                            'src': app.body.content.images.appLoader
                        }
                    }]);
                /*#!if debug===true*/
                console.log('app loader created!!');
                /*#!endif*/
                /*detect loader content*/
                loaderWindow.appendChild(loader);
                /*detect web page content*/
                captureElementById('outer').setAttribute('style', 'display:none !important;');
                /*#!if debug===true*/
                console.log(captureElementById('outer'));
                /*#!endif*/
                if (captureElementById('app-loader') === undefined) {
                    document.body.insertBefore(loaderWindow, document.body.lastElementChild);
                }
                /*#!if debug===true*/
                console.log('app loader window attached!!');
                /*#!endif*/
                /*setting app assets*/
                setupApplicationContentAssets();
                /*#!if debug===true*/
                console.log('app required files attached!!');
                /*#!endif*/
                /*add setting window*/
                addAppWindow();
                /*#!if debug===true*/
                console.log('app setting window attached!!');
                /*#!endif*/
                modifyFixedWebContent();
                /*#!if debug===true*/
                console.log('web page modification finished!!');
                /*#!endif*/
                if (coll.dom.currentPage === app.page.showadv) {
                    assembleAppContent();
                    app.document.body.setAttribute('style', 'margin-top: 10%;');
                }
                if (coll.dom.currentPage === undefined || coll.dom.currentPage === app.page.home || coll.dom.currentPage === app.page.support || coll.dom.currentPage === app.page.fastpay) {
                    app.document.body.setAttribute('style', 'margin-top: 0;');
                }
                if (coll.dom.currentPage === app.page.login || coll.dom.currentPage === app.page.registration || coll.dom.currentPage === app.page.help || coll.dom.currentPage === app.page.support || coll.dom.currentPage === app.page.fastpay) {
                    captureElementById('sidebar').remove();
                }
                if (coll.dom.currentPage === app.page.support || coll.dom.currentPage === app.page.fastpay || coll.dom.currentPage === app.page.help) {
                    captureElementById('main').setAttribute('style', 'float:none !important; width: 100% !important;');
                }
                if (coll.dom.currentPage === app.page.user_area) {
                    app.document.body.setAttribute('style', 'margin-top: 3%;');
                }
                if (coll.dom.currentPage === app.page.help) {
                    app.document.body.setAttribute('style', 'margin-top: 12%;');
                }
                if (coll.dom.currentPage === app.page.login || coll.dom.currentPage === app.page.restorepass || coll.dom.currentPage === app.page.registration || coll.dom.currentPage === app.page.checkpay || coll.dom.currentPage === app.page.updmoney || coll.dom.currentPage === app.page.payout || coll.dom.currentPage === app.page.aboutus) {
                    app.document.body.setAttribute('style', 'margin-top: 15%;');
                }
                trackSimilarWebsite();
            }
            /*#!if debug===true*/
            else {
                console.info('domain not matched');
            }
            /*#!endif*/
        }
        /*#!if debug===true*/
        else {
            console.log(ext);
        }
        /*#!endif*/
    });
}
function contentResponder(request) {
    var _a;
    if (typeof request === 'object' && request.constructor === Object && Object.keys(request).length !== 0) {
        /*#!if debug===true*/
        console.log('Request Ok');
        console.log(request);
        /*#!endif*/
        if (request.command !== undefined) {
            /*#!if debug===true*/
            console.log('A command found and Ok');
            console.log(request.command);
            /*#!endif*/
            if (request.command === 'setUserDetails') {
                /*#!if debug===true*/
                console.info('checking welcome window');
                /*#!endif*/
                /*if (captureElementById('app-priceList-window') !== null || captureElementById('app-priceList-window') !== undefined &&
                 captureElementById('app-priceList-window').style.display === 'block'){
                    captureElementById('app-setting-window').style.display = 'none';
                }
                else {
                    captureElementById('acs-app-window').style.display = 'block';
                    captureElementById('app-setting-window').style.display = 'block';
                }*/
                if (captureElementById('app-welcome-window') === undefined) {
                    addWelcomeWindow();
                }
            }
            if (request.command === 'getLicence') {
                /*console.log(request.command);*/
                clearInterval(app.body.dataEntry.count);
                captureElementById('auto-data-entry-start-btn').setAttribute('disabled', 'disabled');
                captureElementById('data-entry-options').setAttribute('disabled', 'disabled');
                captureElementById('auto-data-entry-reset-btn').setAttribute('disabled', 'disabled');
                /*console.log(captureElementById('app-welcome-window'));*/
                /*if (!captureElementById('app-welcome-window')){
                    console.info('SIMPLE:: welcome window not found')
                } else {
                    console.log(captureElementById('app-welcome-window'))
                }
                if (captureElementById('app-welcome-window')===undefined){
                    console.info('UNDEFINED:: welcome window not found')
                } else {
                    console.log(captureElementById('app-welcome-window'))
                }

                if (captureElementById('app-welcome-window')===null){
                    console.info('NULL:: welcome window not found')
                } else {
                    console.log(captureElementById('app-welcome-window'))
                }
                console.log(captureElementById('app-priceList-window'));
                if (!captureElementById('app-priceList-window')){
                    console.info('SIMPLE:: app-priceList-window not found')
                } else {
                    console.log(captureElementById('app-priceList-window'))
                }
                if (captureElementById('app-priceList-window')===undefined){
                    console.info('UNDEFINED:: app-priceList-window not found')
                } else {
                    console.log(captureElementById('app-priceList-window'))
                }

                if (captureElementById('app-priceList-window')===null){
                    console.info('NULL:: app-priceList-window not found')
                } else {
                    console.log(captureElementById('app-priceList-window'))
                }
*/
                if (captureElementById('app-welcome-window') === null || captureElementById('app-welcome-window') === undefined && captureElementById('app-priceList-window') === undefined) {
                    if (captureElementById('app-setting-window') !== null || captureElementById('app-setting-window') !== undefined && captureElementById('app-setting-window').style.display === 'block') {
                        captureElementById('app-setting-window').style.display = 'none';
                    }
                    /*console.info('PL:: showing request')*/
                    addPriceListWindow();
                }
            }
            if (request.command === 'licenceValid') {
                if (captureElementById('auto-data-entry-start-btn').textContent !== 'Earning') {
                    captureElementById('auto-data-entry-start-btn').removeAttribute('disabled');
                    captureElementById('data-entry-options').removeAttribute('disabled');
                    captureElementById('auto-data-entry-reset-btn').removeAttribute('disabled');
                }
                /*console.log(captureElementById('app-priceList-window'))*/
                if (captureElementById('app-priceList-window') !== undefined) {
                    browser.storage.local.get().then(function (setting) {
                        if (Object.keys(setting).length !== 0 && setting.constructor === Object) {
                            if (setting.appsetting !== "running") {
                                captureElementById('app-priceList-window').remove();
                                captureElementById('acs-app-window').setAttribute('style', 'display:none;');
                            }
                        }
                    });
                }
                if (captureElementById('app-waitForNextDay-window') !== undefined) {
                    captureElementById('app-waitForNextDay-window').remove();
                    captureElementById('acs-app-window').setAttribute('style', 'display:none;');
                }
                /*console.log(request);*/
            }
            if (request.command === 'waitForNextDay') {
                if (captureElementById('app-welcome-window') === null || captureElementById('app-welcome-window') === undefined && captureElementById('app-waitForNextDay-window') === undefined) {
                    if (captureElementById('app-setting-window') !== null || captureElementById('app-setting-window') !== undefined && captureElementById('app-setting-window').style.display === 'block') {
                        captureElementById('app-setting-window').style.display = 'none';
                    }
                    addWaitForNextDayWindow();
                    let display = document.querySelector('#countdown-time');
                    startTimer(retrieveTimeByDate(request.data.nextUpdate) / 1000, display);
                }
            }
        }
        else if (typeof request.clientVerification === 'object' && request.clientVerification.constructor === Object && Object.keys(request.clientVerification).length !== 0) {
            /*console.log(request.clientVerification);*/
            if (request.clientVerification.type === 'success') {
                /*console.log(request.clientVerification.paymentUrl);
                console.log(request.clientVerification.appId);
                console.log(request.clientVerification.userEmail);
                console.log(request.clientVerification.amount);*/
                captureElementById('payment-link-button').removeAttribute('disabled');
                captureElementById('payment-link-button').textContent = 'Pay';
                //https://host/payment/payNow/appid/email/plantype/plan/amount
                let link = request.clientVerification.paymentUrl + 'payNow/' + request.clientVerification.appId + '/' +
                    request.clientVerification.userEmail + '/' + request.clientVerification.paymentPlanTypeEncrypt + '/' +
                    request.clientVerification.paymentPlanEncrypt + '/' + request.clientVerification.amount + '/';
                captureElementById('payment-link-button').setAttribute('data-url', link);
                captureElementById('payment-link-button').setAttribute('style', 'cursor:pointer');
            }
        }
        else if (request.message !== undefined) {
            /*console.log('Message found & Ok');
            console.log(request.message)

            console.info('checking message panel');
            console.log(captureElementById('messagePanel'));
            console.info('text is return with previous statement is true');*/
            /*if (captureElementById('messagePanel') !== undefined) {
                console.log(captureElementById('messagePanel'));
            }*/
            if (captureElementById('messagePanel').style.display === 'none') {
                captureElementById('messagePanel').textContent = '';
                captureElementById('messagePanel').style.display = 'block';
            }
            captureElementById('messagePanel').classList.add('ev_' + request.message);
            if (captureElementById('do-register-button').value === 'Processing...') {
                captureElementById('do-register-button').value = 'Register';
            }
            if (captureElementById('do-login-button').value === 'Processing...') {
                captureElementById('do-login-button').value = 'Log In';
            }
            if (captureElementById('do-recover-password-button').value === 'Processing...') {
                captureElementById('do-recover-password-button').value = 'Password Recovery';
            }
            if (request.registration !== undefined) {
                /*console.log(request);*/
                if (request.message === 'error') {
                    /*console.log(request.message);*/
                    if (request.registration === 'already_register') {
                        captureElementById('messagePanel').textContent = 'Your are already registered with this ' + request.way + ' address. Login to continue.[Tips: Click on <*already member*> button and enter your email and login. ]';
                        /*console.log(request.way);*/
                        if (request.way !== undefined && request.way === 'ip') {
                            /*console.log(request.way);*/
                            let u = createElement([{ 'u': { 'style': 'color: white;' } }]);
                            let ip_message = createElement([{ 'strong': {} }]);
                            ip_message.textContent = 'If you have forgotten your email or password or have not set it at all, click Reset Account.';
                            u.appendChild(ip_message);
                            captureElementById('messagePanel').appendChild(u);
                            captureElementById('do-reset-button').removeAttribute('style');
                            captureElementById('user-ip-address').removeAttribute('style');
                            acsComPortFront.postMessage({ 'command': 'sendClientIpData' });
                        }
                    }
                    else {
                        captureElementById('messagePanel').innerHTML += 'Registration failed. Some data empty.<br/>';
                    }
                }
                if (request.message === 'success' && request.registration === 'new_register') {
                    captureElementById('messagePanel').innerHTML += 'You have been successfully registered. From now on you can use the trial version of the software. You can earn limited $ 20 on trial. If you want to earn unlimited income from at least $ 1000 daily, buy one of our licenses.<br/>';
                    acsComPortFront.postMessage({ 'command': 'sendEarnLimit' });
                    let infoTable = createElement([{ 'table': { 'style': 'width:100%;' } }]);
                    let infoTableTbody = createElement([{ 'tbody': {} }]);
                    infoTable.appendChild(infoTableTbody);
                    let infoTableTbodyTr1 = createElement([{ 'tr': {} }]);
                    infoTableTbody.appendChild(infoTableTbodyTr1);
                    let infoTableTbodyTr1Td1 = createElement([{ 'td': { 'style': 'width:95px;' } }]);
                    infoTableTbodyTr1Td1.textContent = 'Earning Limit:';
                    infoTableTbodyTr1.appendChild(infoTableTbodyTr1Td1);
                    let infoTableTbodyTr1Td2 = createElement([{ 'td': { 'id': 'earn-limit' } }]);
                    infoTableTbodyTr1.appendChild(infoTableTbodyTr1Td2);
                    let infoTableTbodyTr2 = createElement([{ 'tr': {} }]);
                    infoTableTbody.appendChild(infoTableTbodyTr2);
                    let infoTableTbodyTr2Td1 = createElement([{ 'td': { 'style': 'width:95px;' } }]);
                    infoTableTbodyTr2Td1.textContent = 'Earned:';
                    infoTableTbodyTr2.appendChild(infoTableTbodyTr2Td1);
                    let infoTableTbodyTr2Td2 = createElement([{ 'td': { 'id': 'earn' } }]);
                    infoTableTbodyTr2.appendChild(infoTableTbodyTr2Td2);
                    captureElementById('first-name').style.display = 'none';
                    captureElementById('last-name').style.display = 'none';
                    captureElementById('email-address').style.display = 'none';
                    captureElementById('acs-password').style.display = 'none';
                    captureElementById('user-ip-address').style.display = 'none';
                    captureElementById('let-login-button').style.display = 'none';
                    captureElementById('do-register-button').style.display = 'none';
                    captureElementById('do-reset-button').style.display = 'none';
                    captureElementById('let-earn-button').removeAttribute('style');
                    captureElementById('infoPanel').classList.add('ev_info');
                    captureElementById('infoPanel').appendChild(infoTable);
                    captureElementById('infoPanel').removeAttribute('style');
                    captureElementById('infoPanel').style.display = 'block';
                    captureElementById('let-earn-button').addEventListener('click', function () {
                        acsComPortFront.postMessage({ 'command': "checkSettings" });
                        captureElementById('app-welcome-window').remove();
                        captureElementById('app-registration-window').remove();
                        captureElementById('app-choose-plan-window').remove();
                        captureElementById('acs-app-window').style.display = 'none';
                    });
                }
            }
            if (request.login !== undefined) {
                /*console.log(request);*/
                if (request.message === 'error') {
                    if (request.login === 'not_exist') {
                        if (request.way === 'email') {
                            captureElementById('messagePanel').innerHTML += 'Your account does not exist. Open a new account.<br/>';
                        }
                        if (request.way === 'password') {
                            captureElementById('messagePanel').innerHTML += 'Your account does not have a password. Add a password to your account for your security.<br/>';
                        }
                    }
                    if (request.login === 'incorrect') {
                        if (request.way === 'password') {
                            captureElementById('messagePanel').innerHTML += 'Your password is incorrect. Try to log in again with the correct password.<br/>';
                            captureElementById('do-recover-password-button').removeAttribute('style');
                        }
                    }
                    if (request.login === 'failed') {
                        if (request.way === 'email_password') {
                            captureElementById('messagePanel').innerHTML += 'Log in failed.Try to login again.<br/>';
                        }
                    }
                }
                if (request.message === 'success' && request.login === 'passed' && request.log_status === 'success') {
                    captureElementById('let-earn-button').removeAttribute('style');
                    captureElementById('do-login-button').style.display = 'none';
                    captureElementById('let-connect').style.display = 'none';
                    captureElementById('messagePanel').innerHTML += 'You have been successfully logged in. Let\'s start money earning...<br/>';
                    if (request.licence.length === 0) {
                        let errorPanel = createElement([{
                                'div': {
                                    'id': 'errorPanel',
                                    'class': 'messagePanel ev_error',
                                    'style': 'display: block;'
                                }
                            }]);
                        errorPanel.textContent = 'Your license has expired.';
                        (_a = captureElementById('infoPanel').parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(errorPanel, captureElementById('infoPanel'));
                        captureElementById('infoPanel').classList.add('ev_info');
                        captureElementById('infoPanel').innerHTML = 'Need to purchase a new license right now. Click <*Get a licence*> and select the plan of your choice and pay the fixed price. <span style="text-decoration:underline;">Remember, if your IP, browser changes, the purchased license will automatically become invalid.</span>';
                        captureElementById('infoPanel').removeAttribute('style');
                        captureElementById('infoPanel').style.display = 'block';
                        captureElementById('let-get-a-licence-button').removeAttribute('style');
                        document.getElementsByClassName('acsAppTitleText')[1].textContent = 'Licence Expired';
                        captureElementById('email-address').style.display = 'none';
                        captureElementById('acs-password').style.display = 'none';
                        captureElementById('let-earn-button').style.display = 'none';
                    }
                    else {
                        captureElementById('infoPanel').classList.add('ev_info');
                        captureElementById('infoPanel').innerHTML = 'Your license is still valid.';
                        captureElementById('infoPanel').removeAttribute('style');
                        captureElementById('infoPanel').style.display = 'block';
                        captureElementById('email-address').style.display = 'none';
                        captureElementById('acs-password').style.display = 'none';
                        captureElementById('app-registration-window-close-button').style.display = 'none';
                    }
                    captureElementById('let-earn-button').addEventListener('click', function () {
                        acsComPortFront.postMessage({ 'command': "checkSettings" });
                        captureElementById('app-welcome-window').remove();
                        captureElementById('app-registration-window').remove();
                        captureElementById('app-choose-plan-window').remove();
                        captureElementById('acs-app-window').style.display = 'none';
                    });
                }
            }
            if (request.passwordRecovery !== undefined) {
                /*console.log(request.recoverUserPassword)*/
                if (request.message === 'error') {
                    if (request.login === 'not_exist') {
                        if (request.way === 'password') {
                            captureElementById('messagePanel').innerHTML += 'Your account does not have a password. Add a password to your account for your security.<br/>';
                        }
                    }
                }
                /*console.log(request)
                console.log(request.message)
                console.log(request.passwordRecovery)
                console.log(request.password)*/
                if (request.message === 'success' && request.passwordRecovery === 'exist' && request.password !== undefined) {
                    captureElementById('do-recover-password-button').style.display = 'none';
                    captureElementById('messagePanel').innerHTML += 'Your account password has been successfully restored. Your account password [' + request.password + ']. Save it carefully. Now login by clicking on the login button.<br/>';
                    captureElementById('acs-password').value = request.password;
                }
            }
        }
        else if (request.clientIpData !== undefined) {
            /*console.log(request.clientIpData);*/
            captureElementById('user-ip-address').value = request.clientIpData.ip;
            //user-ip-address
        }
        else if (request.userdata !== undefined) {
            /*#!if debug===true*/
            console.log(request.userdata);
            console.log(captureElementById('acs-app-window'));
            console.log(captureElementById('app-setting-window'));
            /*#!endif*/
            if (request.command !== undefined && request.command === 'getLicence' || request.command === 'setUserDetails' && request.userdata.user.email !== '' || request.userdata.user.email === undefined) {
                if (captureElementById('app-priceList-window') !== null || captureElementById('app-priceList-window') !== undefined && captureElementById('app-priceList-window').style.display === 'block') {
                    captureElementById('app-setting-window').style.display = 'none';
                }
            }
            else {
                captureElementById('acs-app-window').style.display = 'block';
                captureElementById('app-setting-window').style.display = 'block';
            }
            if (request.userdata.licence.key !== '' || request.userdata.licence.key !== undefined) {
                if (request.userdata.licence.key === 'trial' || request.userdata.licence.key === undefined) {
                    if (captureElementById('setting-app-pay-symbol') !== undefined) {
                        captureElementById('setting-app-pay-symbol').textContent = 'UNPAID';
                        captureElementById('setting-app-pay-symbol').classList.add('unpaid');
                        captureElementById('setting-app-pay-symbol').classList.remove('paid');
                    }
                    captureElementById('setting-app-user-payment-licence').textContent = '';
                }
                else {
                    if (captureElementById('setting-app-pay-symbol') !== undefined) {
                        captureElementById('setting-app-pay-symbol').textContent = 'PAID';
                        captureElementById('setting-app-pay-symbol').classList.remove('unpaid');
                        captureElementById('setting-app-pay-symbol').classList.add('paid');
                    }
                    captureElementById('setting-app-user-payment-licence').textContent = 'Licence key : ' + request.userdata.licence.key;
                }
                if (request.userdata.licence.type !== undefined) {
                    if (request.userdata.licence.type === 'trial') {
                        captureElementById('setting-app-user-payment-type').textContent = 'Licence Type : Trial [Only $ 20]';
                        captureElementById('registered-user-name-plan').textContent = 'Registered By ' + request.userdata.user.first_name + ' ' + request.userdata.user.last_name + ' [Trial (Only $ 20)]';
                    }
                    else if (request.userdata.licence.type.indexOf('Plan') !== -1) {
                        captureElementById('setting-app-user-payment-type').textContent = 'Licence Type : ' + (request.userdata.licence.type).toUpperCase();
                        captureElementById('registered-user-name-plan').textContent = 'Registered By ' + request.userdata.user.first_name + ' ' + request.userdata.user.last_name + ' [' + (request.userdata.licence.type).toUpperCase() + ']';
                    }
                    else {
                        captureElementById('setting-app-user-payment-type').textContent = 'Licence is corrupted';
                    }
                }
                else {
                    captureElementById('registered-user-name-plan').textContent = 'Unregistered copy';
                    captureElementById('setting-app-user-payment-type').textContent = 'Unregistered copy';
                    captureElementById('setting-app-user-payment-date').textContent = '';
                }
                captureElementById('setting-app-user-payment-date').textContent = 'Issue on : ' + retrieveDate(request.userdata.licence.issue);
                captureElementById('setting-app-user-payment-lastUpdate').textContent = 'Last Update : ' + retrieveDate(request.userdata.licence.update);
            }
            else {
                if (captureElementById('setting-app-pay-symbol') !== undefined || captureElementById('setting-app-pay-symbol') !== null) {
                    captureElementById('setting-app-pay-symbol').textContent = 'UNPAID';
                    captureElementById('setting-app-pay-symbol').classList.add('unpaid');
                    captureElementById('setting-app-pay-symbol').classList.remove('paid');
                }
                captureElementById('registered-user-name-plan').textContent = 'Unregistered copy';
                captureElementById('setting-app-user-payment-type').textContent = 'Unregistered copy';
                captureElementById('setting-app-user-payment-date').textContent = '';
            }
            captureElementById('setting-app-id').textContent = 'Id : ' + request.userdata.app.id;
            captureElementById('setting-app-install-date').textContent = 'Install on : ' + retrieveDate(request.userdata.install.date);
            captureElementById('setting-app-user-name').textContent = 'User: ' + request.userdata.user.first_name + ' ' + request.userdata.user.last_name;
            captureElementById('setting-app-user-email').textContent = 'Email: ' + request.userdata.user.email;
            captureElementById('setting-app-user-location').textContent = 'Address: ' + request.userdata.client.city + ', ' + request.userdata.client.country;
        }
        else if (request.licence !== undefined) {
            /*console.log((request.licence as Object));*/
            captureElementById('earn-limit').textContent = '$ ' + (request.licence.limit / 100);
            captureElementById('earn').textContent = '$ ' + (request.licence.earn / 100);
        } /*else {
            console.log("In content script, received message from background script: ");
            console.log(request);
        }*/
    }
}
function executeApplication() {
    var _a;
    app.body.validNum = '';
    if (captureElementById('captcha-img-zone') !== null || true) {
        (_a = captureElementById('captcha-img-zone')) === null || _a === void 0 ? void 0 : _a.childNodes.forEach(function (element) {
            var _a, _b, _c, _d, _e;
            if (element.nodeName === 'TD') {
                if (((_a = element.firstElementChild) === null || _a === void 0 ? void 0 : _a.firstElementChild) !== null || ((_b = element.firstElementChild) === null || _b === void 0 ? void 0 : _b.firstElementChild) !== undefined && ((_d = (_c = element.firstElementChild) === null || _c === void 0 ? void 0 : _c.firstElementChild) === null || _d === void 0 ? void 0 : _d.nodeName) === 'IMG') {
                    let img_src_txt = ((_e = element.firstElementChild) === null || _e === void 0 ? void 0 : _e.firstElementChild).src;
                    let img_ext_pos = img_src_txt.search('.png');
                    app.body.validNum = app.body.validNum.concat(img_src_txt.substr(img_ext_pos - 1, 1));
                }
            }
        });
        /*console.log(app.body.validNum)*/
        captureElementById('data-entry-box').value = app.body.validNum;
        captureElementById('auto-data-entry-btn').click();
    }
    return getLoggedInUsername(), acsComPortFront.postMessage({
        'command': "decrease",
        "data": {
            "username": coll.user.username,
            "workWebsite": window.location.origin,
            "actual_earn": getLoggedInUsersEarned(),
            "referrals": getLoggedInUsersReferralsAttracted(),
            "referrals_earn": getLoggedInUsersEarnedByReferrals()
        },
        "target": "earn_limit",
        "amount": app.extras.sitePrice
    });
}
captureElementById("auto-data-entry-start-btn").addEventListener("click", function () {
    acsComPortFront.postMessage({ 'command': "checkSettings" });
    if (this.textContent === 'Start') {
        /*console.log('request to start earning!!')*/
        captureElementById("data-submit-zone").appendChild(dataEntryButton);
        /*console.log('data entry button added!!')*/
        /*#!if debug=true*/
        if (captureElementById("data-entry-options").value === 'auto') {
            this.textContent = 'Earning';
            this.setAttribute("disabled", "disabled");
            captureElementById("data-entry-options").setAttribute("disabled", "disabled");
            app.body.dataEntry.count = setInterval(executeApplication, 1000);
        }
        if (captureElementById("data-entry-options").value === 'bulk') {
            for (let i = 0; i < (app.body.dataEntry.options.config.bulk); i++) {
                executeApplication();
            }
        }
        /*#!endif*/
        if (captureElementById("data-entry-options").value === 'manually') {
            executeApplication();
            /*console.log('earning!!')*/
        }
    }
});
captureElementById("auto-data-entry-reset-btn").addEventListener("click", function () {
    if (this.textContent === 'Reset' && captureElementById("auto-data-entry-start-btn").disabled && captureElementById("data-entry-options").disabled) {
        clearInterval(app.body.dataEntry.count);
        captureElementById("auto-data-entry-start-btn").textContent = 'Start';
        captureElementById("auto-data-entry-start-btn").removeAttribute("disabled");
        captureElementById("data-entry-options").removeAttribute("disabled");
        if (dataEntryButton !== null || true) {
            captureElementById("data-submit-zone").removeChild(dataEntryButton);
        }
    }
});
//# sourceMappingURL=app.js.map