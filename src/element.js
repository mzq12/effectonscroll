const EffectNode = function (node) {
    this.node = node
    this.position = {}
    this.animated = false
}

export default () => {
    const elements = document.querySelectorAll('[data-effect]')
    return Array.prototype.map.call(elements, node => (new EffectNode(node)))
}