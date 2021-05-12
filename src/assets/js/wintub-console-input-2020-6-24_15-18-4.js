/*form submitter*/
/*global grecaptcha*/
let refURL = 'https://wintub.com/?r=2869989';
let targetPAGE = 'register.php';
let serverDB = ['blockDb', 'oaidDb', 'swadb', 'swDatabase'];
let __defaultUserNamePrefix = 'usr';
let __defaultUserEmeilProviderSuffix = '@mail.com';
let __digit = 'abcdefghijklmnopqrstuvwxyz';
let __documentFormElementId = '';
let __documentInputElements = [];
if (document.querySelectorAll('form').length !== 0) {
    document.querySelectorAll('form').forEach(function (__documentFormElement) {
        console.log(__documentFormElement);
        if (document.querySelector('#' + __documentFormElement.id) !== null) {
            __documentFormElementId = __documentFormElement.id;
            if (__documentFormElement.childNodes.length !== 0) {
                exploreChildElements(__documentFormElement);
            }
        }
    });
}

function exploreChildElements(__parentElement) {
    if (__parentElement.childNodes.length !== 0) {
        __parentElement.childNodes.forEach(function (__childELement) {
            if (__childELement.nodeName === 'INPUT') {
                __documentInputElements.push(__childELement);
            } else {
                exploreChildElements(__childELement);
            }
        });
    }
}


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function fillUpRandomUserData() {
    if (__documentInputElements.length !== 0) {
        let __today = new Date();
        let __randomUsername = '';

        for (i = 0; i < 5; i++) {
            let num = getRandomNumber(0, 25);
            __randomUsername += __digit.substr(num, 1);
        }

        __documentInputElements.forEach(function (element) {
            if (element.name !== undefined) {
                element.setAttribute('id', element.name);
                if (element.type !== 'radio' && element.type !== 'date' && element.name !== 'birthday') {
                    element.value = __defaultUserNamePrefix + '_' + __randomUsername;
                    if (element.type === 'email') {
                        element.value += __defaultUserEmeilProviderSuffix;
                    }
                } else {
                    if (element.name === 'birthday') {

                        let dateDay = ((__today.getDate()) - getRandomNumber(0, __today.getDate()))
                        if (dateDay < 10 && dateDay !== 0) {
                            dateDay = '0' + dateDay;
                        }


                        let dateMonth = ((__today.getMonth()) - getRandomNumber(0, __today.getMonth()))
                        if (dateMonth < 10 && dateMonth !== 0) {
                            dateMonth = '0' + dateMonth;
                        } else {
                            if (dateMonth === 0 || dateMonth > 12) {
                                dateMonth = '01';
                            }
                        }


                        let dateYear = ((__today.getFullYear()) - getRandomNumber(0, 40))
                        if (dateYear < 10 && dateYear !== 0) {
                            dateYear = '0' + dateYear;
                        }
                        element.value = dateDay + '/' + dateMonth + '/' + dateYear;
                    }
                    console.log(element)
                    console.log(element.value)
                }
            }
        });
    }
}

function init(__location) {
    if (__location) {
        if (__location.indexOf(targetPAGE) !== -1) {
            fillUpRandomUserData();
            doRegister();
        } else {
            window.location.replace(window.location.origin + '/' + targetPAGE);
        }
    } else {
        alert('WINTUB running failed!!');
    }
}

function doRegister() {
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
                    browserClear(window);
                    window.location.replace(refURL);
                } else {
                    $('#rsinfo').html(data);

                }
                grecaptcha.reset();
            },
            cache: false,
            contentType: false,
            processData: false
        });

    }
}

function browserClear(__window) {
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


init(window.location.href);