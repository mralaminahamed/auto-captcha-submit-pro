export function checkDuplicate(str: string) {
    for (let i = 0; i < str.length; i++) {
        let re = new RegExp("[^" + str[i] + "]", "g");
        if (str.replace(re, "").length >= 2) {
            return true;
        }
    }
    return false;
}

export function IsJsonString(str: string) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}


export function captureElementById(elementId: string): any {
    if (document.querySelector('#' + elementId) !== null) {
        return document.querySelector('#' + elementId) as HTMLElement;
    }
}

export function captureElementByClassName(ClassName: string): any {
    if (document.querySelector('.' + ClassName) !== null) {
        return document.querySelector('.' + ClassName) as HTMLElement;
    }
}

export function captureElementByTagName(TagName: string): any {
    if (document.querySelector(TagName) !== null) {
        return document.querySelector(TagName) as HTMLElement;
    }
}

export function createElement(node_data: any) {
    let element, i, j, k;
    for (i in node_data) {
        let data: any = node_data[i];
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
    return (element as HTMLElement);
}