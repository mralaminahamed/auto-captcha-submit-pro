/*required html elements*/
import { createElement } from "./lib-functions-common";
export const dataEntryButton = createElement([{
        'button': {
            'id': 'auto-data-entry-btn',
            'type': 'submit',
            'style': 'display: none;'
        }
    }]);
export const bottomNotification = createElement([{
        'div': {
            'id': 'bottom-notification',
            'class': 'bottom-notification'
        }
    }]);
bottomNotification.textContent = 'If you need referrals to withdraw your account balance, please contact us or click on this message bobble. We are able to give you any amount of referrals as per your requirement. ' +
    'For every 40 referrals we have to pay $ 10.00. Important Notice: To receive referrals to your account, you must have our add-on installed on your browser and register with our add-on. ' +
    'You have to be on trial for that or you have not purchased any of our packages. Remember, your decision is to accept the money earned.';
/*required html elements*/
export function pushExecuteScript(element) {
    let script = createElement([{ 'script': {} }]);
    script.innerHTML = 'function dosub(){let captcha =document.querySelector(\'#data-entry-box\').value;if (captcha === null || captcha === undefined) {getCaptcha();return false;}moneycount = moneycount + siteprice;setCookie("moneycount", moneycount, "Mon, 01-Jan-2025 00:00:00 GMT", "/");smoneycount = moneycount / 100;document.getElementById(\'moneycount\').textContent = smoneycount + " $";getcapcha();}';
    return element.insertBefore(script, element.lastElementChild);
}
//# sourceMappingURL=lib-assets.js.map