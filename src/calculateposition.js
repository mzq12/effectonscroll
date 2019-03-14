/** 
 * 获取 DOM 元素的位置
 * 
 * @param {Node} DOM 元素
 * 
 * @return {Object} top, left 距离
 * */
const windowHeight = window.innerHeight
const extraOffset = 120
const postion = function (el) {
    let _x = 0;
    let _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - (el.tagName != 'BODY' ? el.scrollLeft : 0);
        _y += el.offsetTop - (el.tagName != 'BODY' ? el.scrollTop : 0);
        el = el.offsetParent
    }
    return {
        left: _x,
        top: _y
    }
}
const positionIn = function (el, offset) {
    let thePoint = postion(el).top - windowHeight
    return thePoint + extraOffset
}
const postionOut = function (el) {
    let elOffsetTop = postion(el).top
    return elOffsetTop + el.offsetHeight - extraOffset
}

const calcuate = function (el, offset) {
    el.position = {
        in: positionIn(el.node, offset),
        out: postionOut(el.node)
    }
}
export default calcuate