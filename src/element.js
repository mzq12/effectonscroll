export default () => {
    const elements = document.querySelectorAll('[data-effect]')
    return Array.prototype.map.call(elements, node => ({
        node
    }))
}