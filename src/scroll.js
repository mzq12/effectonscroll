import fireEvent from './event.js'
import {
    SCROLLIN,
    SCROLLOUT
} from './eventTypes.js'
const visual = function (el, top) {
    const {
        node,
        position
    } = el
    const show = () => {
        if (el.animated) {
            return
        }
        node.classList.add('animated')
        fireEvent(SCROLLIN, node)
        el.animated = true
    }
    const hide = () => {
        if (!el.animated) {
            return
        }
        node.classList.remove('animated')
        fireEvent(SCROLLOUT, node)
        el.animated = false
    }
    if (top >= position.in) {
        show()
    } else if (top >= position.out) {
        hide()
    } else if (el.animated) {
        hide()
    }
}


const handleScroll = elements => {
    elements.forEach(element => {
        visual(element, window.pageYOffset)
    });
}
export default handleScroll