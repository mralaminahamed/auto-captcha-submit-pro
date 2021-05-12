'use strict';
/*required variables*/
export let globalAppMonitorURL;
export let appPaymentURL;
/*initialize on extension installed*/
/*#!if ENV === 'production'*/
globalAppMonitorURL = 'https://www.mishusoft.com/monitor/browser/';
appPaymentURL = 'https://www.mishusoft.com/payment/';
/*#!else*/
globalAppMonitorURL = 'http://localhost/monitor/browser/';
appPaymentURL = 'http://localhost/payment/';
//# sourceMappingURL=lib-main.js.map