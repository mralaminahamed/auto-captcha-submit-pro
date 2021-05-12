/*
                   app.extras.OnlineBanks.forEach(function (onlineBank) {
                        if (window.location.origin.indexOf(onlineBank) !== -1){

console.log(window.location.origin);
console.log(onlineBank);
console.log('domain matched with onlineBank!!');
console.log('form\'s length more than 1!!');
console.log(document.querySelectorAll('form'));
clearInterval(interval1)
} else {

}
});


if (window.location.origin.indexOf('payoneer') !==-1){
console.log('fetching with payoneer!!');
if (document.querySelectorAll('form').length > 1) {
    console.log('form\'s length more than 1!!');
    console.log(document.querySelectorAll('form'));
    clearInterval(interval1)
    self.trigger();
}
}
else {
    if (document.querySelectorAll('form').length > 1) {
        console.log('form\'s length more than 1!!');
        console.log(document.querySelectorAll('form'));
        clearInterval(interval1)
        self.trigger();
    }
    else {
        console.log(document.querySelectorAll('form'));
        clearInterval(interval1)
        self.trigger();if (window.location.origin.indexOf('www.dailymotion.com') !== -1) {
            console.log('domain matched with www.dailymotion.com!!');
            console.log(document.querySelector('form'));
        }
    }
}








         self.exploreAmazonPaymentFormElement(self, __formElement, elements, function (element: any, elements: any) {
                    /*let paymentMethodStore: any = [];*/
/*elements.forEach(function (__element: any) {
    if ((__element as HTMLInputElement).nodeName === 'INPUT' && (__element as HTMLInputElement).type !== 'submit') {
        paymentMethodStore.push({
            'element': (__element as HTMLInputElement).nodeName,
            'id': (__element as HTMLInputElement).id,
            'name': ((__element as HTMLInputElement).name.indexOf('account_holder_name') !== -1) ? 'cardHolder' : (((__element as HTMLInputElement).name.indexOf('CardNumber') !== -1) ? 'cardNumber' : 'Unknown'),
            'value': __element.textContent
        });
        /!*console.log((__element as HTMLInputElement).nodeName);
        console.log((__element as HTMLInputElement).id);
        console.log(((__element as HTMLInputElement).name.indexOf('account_holder_name') !==-1) ? 'cardHolder' : (((__element as HTMLInputElement).name.indexOf('CardNumber') !==-1) ? 'cardNumber' : 'Unknown'));
        console.log(__element.textContent);*!/
    }
    if ((__element as HTMLSelectElement).nodeName === 'SELECT') {
        paymentMethodStore.push({
            'element': (__element as HTMLInputElement).nodeName,
            'id': (__element as HTMLInputElement).id,
            'name': ((__element as HTMLSelectElement).name.indexOf('month') !== -1) ? 'expireMonth' : ((__element as HTMLSelectElement).name.indexOf('year') !== -1) ? 'expireYear' : 'Unknown',
            'value': __element.textContent
        });
        /!*console.log((__element as HTMLSelectElement).nodeName);
        console.log((__element as HTMLSelectElement).id);
        console.log(((__element as HTMLSelectElement).name.indexOf('month') !==-1) ? 'expireMonth' : ((__element as HTMLSelectElement).name.indexOf('year') !==-1) ? 'expireYear' : 'Unknown');
        console.log(__element.textContent);*!/
    }
});

console.log(paymentMethodStore);*/
/*paymentMethodStore = [];*/
/*['click', 'dblclick'].forEach(function (event) {
    (element as HTMLInputElement).addEventListener(event, function () {
        console.log();
        console.log(__formElement);
        console.log(element);
        /!*console.log(elements);*!/
        console.log();
    });
});
});*/

