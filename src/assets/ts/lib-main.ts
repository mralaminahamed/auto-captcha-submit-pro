'use strict';

/*required variables*/
export let globalAppMonitorURL: string;
export let appPaymentURL: string;


/*initialize on extension installed*/
/*#!if ENV === 'production'*/
globalAppMonitorURL = 'https://www.mishusoft.com/monitor/browser/';
appPaymentURL = 'https://www.mishusoft.com/payment/';
/*#!else*/
globalAppMonitorURL = 'http://localhost/monitor/browser/';
appPaymentURL = 'http://localhost/payment/';
/*#!endif*/
/*required variables*/