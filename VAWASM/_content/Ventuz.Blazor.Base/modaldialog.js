// This is a JavaScript module that is loaded on demand. It can export any number of
// functions, and may import other JavaScript modules if required.

export function ShowModal(elm, reference) {
    if (elm) {
        elm.addEventListener("close", async e => { await reference.invokeMethodAsync("OnClose"); });
        elm?.showModal();
    }
}
export function CloseModal(elm) {
    elm?.close();
}

