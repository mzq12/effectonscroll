import detector from './detector.js'
const fireEvent = function (eventName, data) {
    let customEvent;
    if (detector.isIE()) {
        customEvent = document.createEvent('CustomEvent');
        customEvent.initCustomEvent(eventName, true, true, {
            detail: data
        })
    } else {
        customEvent = new CustomEvent(eventName, {
            detail: data
        })
    }
    return document.dispatchEvent(customEvent)
}
export default fireEvent