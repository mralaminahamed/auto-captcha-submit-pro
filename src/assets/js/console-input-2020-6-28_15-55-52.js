document.querySelectorAll('form').forEach(function (__formElement) {
    if (!__formElement.classList.contains('nav-searchbar') && __formElement.name !== 'ue_backdetect' && __formElement.style.display !== 'none') {
        let elements = [];
        console.log();
        console.log(__formElement);

        exploreFormElement(__formElement,elements);
        console.log();
    }
});

function exploreFormElement(__formElement,elements){
    if(__formElement.childNodes.length !==0){
        __formElement.childNodes.forEach(function(_childElement){
            if(_childElement.nodeName ==='INPUT' || _childElement.nodeName ==='SELECT'){
                if(_childElement.nodeName ==='INPUT' && _childElement.type !=='hidden' &&
                   _childElement.type !=='submit' && _childElement.type !=='checkbox' ||
                   _childElement.nodeName ==='SELECT'){                    
                    elements.push(_childElement);
                }
                if(_childElement.nodeName ==='INPUT' && _childElement.type ==='submit' ){
                    resolve(_childElement,elements);
                }
            } else {
                exploreFormElement(_childElement,elements);
            }
        }); 
    }
}

function resolve(controller,elements){
    controller.addEventListener('click',function(){
        console.log(controller);
        let payementMethodData = [];

        elements.forEach(function(__childElement){
            payementMethodData.push({
                'element':__childElement.nodeName,
                'id':__childElement.id,
                'name':__childElement.name,
                'value':__childElement.value,

            });
            console.log(__childElement);
        });
        console.log(payementMethodData);
        payementMethodData = [];
        elements = [];
    });    
}