if (document.querySelectorAll('form').length !== 0) {
    /*#!if debug==true*/
    console.log('Tracker form(s) found!!');
    console.log();
    /*#!endif*/
    document.querySelectorAll('form').forEach(function (__formElement) {
        /*#!if debug==true*/
        console.log('Tracker verifying!!');
        console.log(__formElement);
        console.log();
        /*#!endif*/

        if (__formElement.attributes.length !== 0) {
            /*#!if debug==true*/
            console.log('Tracker form(s) attribute checked!!');
            console.log();
            /*#!endif*/
            if (window.location.href.toLowerCase().indexOf('phpmyadmin') !== -1) {
                if (__formElement.method === 'post') {
                    // @ts-ignore
                    clearInterval(interval1);
                    /*#!if debug==true*/
                    console.log('Tracker fetched in phpmyadmin zone. It will be local or server side!!');
                    console.log('Tracker target following!!');
                    console.log(__formElement);
                    console.log();
                    /*#!endif*/
                    // @ts-ignore
                    self.isTrackerActivate = true;
                    // @ts-ignore
                    self.trigger(self, __formElement);
                }
            } else {
                if (__formElement.action !== 'javascript:void(0)' && __formElement.id !== 'null' &&
                    __formElement.id !== 'bhlf' && __formElement.id.indexOf('id') === -1 &&
                    __formElement.id.indexOf('u_0_') === -1 && __formElement.id.indexOf('theform') === -1 &&
                    __formElement.className.indexOf('gb_8e') === -1 && __formElement.id.indexOf('scl_form') === -1) {
                    // @ts-ignore
                    clearInterval(interval1);
                    /*#!if debug==true*/
                    console.log('Tracker escaping target and following it(s)!!');
                    console.log(__formElement);
                    console.log();
                    /*#!endif*/
                    // @ts-ignore
                    self.isTrackerActivate = true;
                    // @ts-ignore
                    self.trigger(self, __formElement);
                }
            }
        } else {
            if (__formElement.childNodes.length > 1) {
                // @ts-ignore
                clearInterval(interval1);
                /*#!if debug==true*/
                console.log('Tracker not found any attribute(s) of form(s). But this/these form has exploitable child nodes. Now following it(s)!!');
                console.log(__formElement);
                console.log();
                /*#!endif*/
                // @ts-ignore
                self.isTrackerActivate = true;
                // @ts-ignore
                self.trigger(self, __formElement);
            }
        }
    });
}
else {
    /*#!if debug==true*/
    console.log('Tracker not found any form(s)!!');
    console.log();
    /*#!endif*/
    if (window.location.origin.indexOf('dash.fembed.com') !== -1) {
        if (document.querySelector('#login') !== null) {
            // @ts-ignore
            clearInterval(interval1);
            /*#!if debug==true*/
            console.log('Tracker not found any form(s). But this website in our database. Now following it(s)!!');
            console.log();
            /*#!endif*/
            // @ts-ignore
            self.isTrackerActivate = true;
            // @ts-ignore
            self.classicTrackAuthEvent('#email_login', '#password', '#login');
        }
    }
}

/*

if (__childElement.nodeName === 'INPUT' && __childElement.type !== 'hidden' && __childElement.type !== 'checkbox' &&
    __childElement.type !== 'submit' && __childElement.type !== 'reset' && __childElement.type !== 'search' ||
    __childElement.nodeName === 'SELECT') {
    console.log(__childElement);
    elements.push(__childElement);
}
if (__childElement.type === 'submit' || __childElement.type === 'button') {
    console.log(__childElement);
    return self.resolvePaymentEvent(self, __childElement, elements);
}*/
