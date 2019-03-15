function ua() {
    return navigator.userAgent || navigator.vendor || window.opera || ''
}
const detector = function () {}
detector.prototype.isIE = function () {
    return ('-ms-scroll-limit' in document.documentElement.style &&
        '-ms-ime-align' in document.documentElement.style)
}
export default new detector()