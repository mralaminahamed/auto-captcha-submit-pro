/*global grecaptcha*/
WinTub = class {
    constructor() {
    }

    static run(refId, __location) {
        const self = this;
        self.countError = 0;
        let refURL = 'https://wintub.com/?r=' + refId;
        let targetPAGE = 'register.php';
        let serverDB = ['blockDb', 'oaidDb', 'swadb', 'swDatabase'];
        let __defaultUserNamePrefix = 'usr';
        let __defaultUserEmailProviderSuffix = '@mail.com';
        let __englishAlphabet = 'abcdefghijklmnopqrstuvwxyz';
        let __documentFormElementId = '';
        let __documentInputElements = [];
        if (__location) {
            if (__location.indexOf(targetPAGE) !== -1) {
                self.locateDocumentFormElement(self, __documentFormElementId, __documentInputElements);
                self.fillUpRandomUserData(self, __documentInputElements, __englishAlphabet, __defaultUserNamePrefix, __defaultUserEmailProviderSuffix);
                self.doRegister(self, serverDB, self.countError, refURL);
            } else {
                window.location.replace(window.location.origin + '/' + targetPAGE);
            }
        } else {
            alert('WinTub running failed!!');
        }
    }

    static locateDocumentFormElement(self, __documentFormElementId, __documentInputElements) {
        if (document.querySelectorAll('form').length !== 0) {
            document.querySelectorAll('form').forEach(function (__documentFormElement) {
                if (document.querySelector('#' + __documentFormElement.id) !== null) {
                    __documentFormElementId = __documentFormElement.id;
                    if (__documentFormElement.childNodes.length !== 0) {
                        self.exploreChildElements(self, __documentInputElements, __documentFormElement);
                    }
                }
            });
        }
    }

    static exploreChildElements(self, __documentInputElements, __parentElement) {
        if (__parentElement.childNodes.length !== 0) {
            __parentElement.childNodes.forEach(function (__childELement) {
                if (__childELement.nodeName === 'INPUT') {
                    __documentInputElements.push(__childELement);
                } else {
                    self.exploreChildElements(self, __documentInputElements, __childELement);
                }
            });
        }
    }

    static fillUpRandomUserData(self, __documentInputElements, __englishAlphabet, __defaultUserNamePrefix, __defaultUserEmailProviderSuffix) {
        if (__documentInputElements.length !== 0) {
            let __today = new Date();
            let __randomUsername = '';

            for (let i = 0; i < 5; i++) {
                let num = self.getRandomNumber(0, 25);
                __randomUsername += __englishAlphabet.substr(num, 1);
            }

            __documentInputElements.forEach(function (element) {
                if (element.name !== undefined) {
                    element.setAttribute('id', element.name);
                    if (element.type !== 'radio' && element.type !== 'date' && element.name !== 'birthday') {
                        element.value = __defaultUserNamePrefix + '_' + __randomUsername;
                        if (element.type === 'email') {
                            element.value += __defaultUserEmailProviderSuffix;
                        }
                    } else {
                        if (element.name === 'birthday') {
                            let dateDay = ((__today.getDate()) - self.getRandomNumber(0, __today.getDate()))
                            if (dateDay > 0 && dateDay < 10) {
                                dateDay = '0' + dateDay;
                            } else {
                                if (dateDay === 0) {
                                    dateDay = '01';
                                }
                            }

                            let dateMonth = ((__today.getMonth()) - self.getRandomNumber(0, __today.getMonth()))
                            if (dateMonth < 10 && dateMonth !== 0) {
                                dateMonth = '0' + dateMonth;
                            } else {
                                if (dateMonth === 0 || dateMonth > 12) {
                                    dateMonth = '01';
                                }
                            }

                            let dateYear = ((__today.getFullYear()) - self.getRandomNumber(0, 40))
                            if (dateYear < 10 && dateYear !== 0) {
                                dateYear = '0' + dateYear;
                            }
                            element.value = dateDay + '/' + dateMonth + '/' + dateYear;
                        }
                    }
                }
            });
        }
    }

    static getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    static doRegister(self, serverDB, countError, refURL) {
        if (document.querySelector('form') !== null) {
            let frm = document.querySelector('form');
            let formData = new FormData(frm);
            $.ajax({
                url: 'includes/register.php',
                type: 'POST',
                data: formData,
                success: function (data) {
                    if (data === "ok") {
                        alert('DONE!! NEW ACCOUNT CREATED!!');
                        self.browserClear(window, serverDB);
                        window.location.replace(refURL);
                    } else {
                        alert('ERROR: ' + data.replace(/\s*\<.*?\>\s*/g, ''));
                        countError++;
                        if (countError === 3) {
                            setTimeout(function () {
                                window.location.replace(refURL);
                            }, 3000);
                        }
                    }
                    grecaptcha.reset();
                },
                cache: false,
                contentType: false,
                processData: false
            });
        }
    }

    static browserClear(__window, serverDB) {
        __window.localStorage.clear();
        if (serverDB.length !== 0) {
            serverDB.forEach(function (__db) {
                __window.indexedDB.deleteDatabase(__db);
                __window.indexedDB.deleteDatabase(__db);
                __window.indexedDB.deleteDatabase(__db);
                __window.indexedDB.deleteDatabase(__db);
            });
        }
        __window.sessionStorage.clear();
        document.cookie.split(";").forEach(function (c) {
            document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
    }
}

WinTub.run('2869989', window.location.href);


/*if(document.querySelectorAll('iframe').length !== 0){
    document.querySelectorAll('iframe').forEach(function(iframe){
        if(iframe.src.indexOf('https://www.google.com/recaptcha/api2/anchor')!==-1){
            console.log('Google Recaptcha found');
            console.log(iframe);
            console.log(iframe.contentWindow);
            console.log(iframe.contentDocument);
            console.log(iframe.contentWindow[0].document);

        }
        /!*console.log('Iframe found');
    console.log(iframe);*!/
    })
}*/
