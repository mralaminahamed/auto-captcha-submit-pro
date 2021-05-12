export function checkDuplicate(str) {
    for (let i = 0; i < str.length; i++) {
        let re = new RegExp("[^" + str[i] + "]", "g");
        if (str.replace(re, "").length >= 2) {
            return true;
        }
    }
    return false;
}
export function IsJsonString(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}
export function captureElementById(elementId) {
    if (document.querySelector('#' + elementId) !== null) {
        return document.querySelector('#' + elementId);
    }
}
export function captureElementByClassName(ClassName) {
    if (document.querySelector('.' + ClassName) !== null) {
        return document.querySelector('.' + ClassName);
    }
}
export function captureElementByTagName(TagName) {
    if (document.querySelector(TagName) !== null) {
        return document.querySelector(TagName);
    }
}
export function createElement(node_data) {
    let element, i, j, k;
    for (i in node_data) {
        let data = node_data[i];
        for (j in data) {
            let elementName = j;
            let elementData = data[j];
            element = document.createElement(elementName);
            for (k in elementData) {
                let element_attribute = k;
                let element_attribute_value = elementData[k];
                element.setAttribute(element_attribute, element_attribute_value);
            }
        }
    }
    return element;
}
//# sourceMappingURL=lib-functions-common.js.map