import { app, today } from "./db";
export function retrieveDate(presetDate) {
    let d, hours, format;
    if (presetDate) {
        d = new Date(presetDate);
    }
    else {
        d = new Date();
    }
    let months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (d.getHours() === 0) {
        hours = '12';
    }
    else { // @ts-ignore
        if (d.getHours() >= '12') {
            hours = d.getHours() - 12;
        }
        else {
            hours = d.getHours();
        }
    }
    // @ts-ignore
    if (d.getHours() >= '12') {
        format = 'PM';
    }
    else {
        format = 'AM';
    }
    return (days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear() + ', ' + hours + ':' + d.getMinutes() + ' ' + format);
}
export function reFormatScriptTag(element) {
    var _a;
    (_a = element.childNodes) === null || _a === void 0 ? void 0 : _a.forEach(function (element) {
        if (element.nodeName === 'SCRIPT') {
            app.document.body.insertBefore(element, app.document.body.lastElementChild);
        }
        else {
            reFormatScriptTag(element);
        }
    });
}
export function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
export function numberFormat(num) {
    return num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
export function retrieveTimeByDate(nextUpdate) {
    let ld = new Date(nextUpdate);
    let duration = ld.getTime() - today.getTime();
    let drtime = new Date(duration);
    return drtime.getTime();
}
export function startTimer(duration, display) {
    var timer = duration, /*hours,*/ minutes, seconds;
    /*let seconds:any = parseInt(String(duration), 10);*/
    setInterval(function () {
        /*let days: any = Math.floor(seconds / (3600 * 24));
        seconds -= days * 3600 * 24;
        let hours: any = Math.floor(seconds / 3600);
        seconds -= hours * 3600;
        let minutes: any = Math.floor(seconds / 60);
        seconds -= minutes * 60;*/
        /*hours = parseInt(String(timer / 3600), 10);*/
        minutes = parseInt(String(timer / 60), 10);
        seconds = parseInt(String(timer % 60), 10);
        /*hours = hours < 10 ? "0" + hours : hours;*/
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = /*days + " Days, " + hours + " Hours, " +*/ minutes + " Minutes, " + seconds + " Seconds";
        if (--timer < 0) {
            /*alert(timer)*/
            timer = duration;
        }
    }, 1000);
}
//# sourceMappingURL=lib-functions.js.map