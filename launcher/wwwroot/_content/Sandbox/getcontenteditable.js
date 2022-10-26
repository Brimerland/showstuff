
export function getContent(elm) {
    if (elm) {
        let target = elm;
        if (target.localName == "div") {
            if (!target.value && !target.__contenteditable) target.__contenteditable = true;
            if (target.__contenteditable) return target.innerText;
        }
    }

    return "nope";
}


export function stripHTML(target) {
    target.innerHTML = target.innerText;    
}