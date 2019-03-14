const visual = function (el, top) {
    const {
        node,
        position
    } = el
    const show = () => {
        node.classList.add('animated')
    }
    const hide = () => {
        node.classList.remove('animated')
    }
    if (top >= position.in) {
        show()
    }
    if (top >= position.out) {
        hide()
    }
}


const handleScroll = elements => {
    elements.forEach(element => {
        visual(element, window.pageYOffset)
    });
}
export default handleScroll