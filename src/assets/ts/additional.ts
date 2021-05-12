import {acsComPortFront} from "./messanger";
import {Tracker} from "./tracker";

const Clr = new Tracker(window.location.href);
Clr.init(function () {
    acsComPortFront.postMessage({
        command: "saveNavigateData",
        data: {
            username: 'visitor',
            workWebsite: window.location.origin
        }
    });
});
/*new tracker added*/

/*#!if debug===true*/
/*GRecaptcha.run(window.location);*/
/*#!endif*/
