export class GRecaptcha {
    constructor() {
    }
    static run(url) {
        if (url !== undefined) {
            let interval = setInterval(function () {
                if (document.querySelector('#rc-anchor-container') !== null) {
                    clearInterval(interval);
                    /*#!if debug==true*/
                    console.log(document.querySelector('#rc-anchor-container'));
                    console.log();
                    console.log(document.querySelector('#recaptcha-token'));
                    /*#!endif*/
                    if (document.querySelector('#recaptcha-token') !== null) {
                        document.querySelector('#recaptcha-token').click();
                    }
                    /*#!if debug==true*/
                    console.log('Google ReCaptcha started!!');
                    console.log(url.origin);
                    console.log(url.href);
                    /*#!endif*/
                }
            }, 100);
            /*#!if debug==true*/
            /*else {*/
            /*console.error('Google recaptcha not found!!');*/
            /*}*/
            /*#!endif*/
        }
        else {
            /*#!if debug==true*/
            console.error('URL not found!!');
            /*#!endif*/
        }
    }
}
//# sourceMappingURL=grecaptcha.js.map