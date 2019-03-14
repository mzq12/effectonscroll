import queryElements from './element.js'
import calcPosition from './calculateposition.js'
import scroll from './scroll.js'
import throttle from 'lodash/throttle.js'
const $elements = queryElements()
$elements.forEach(element => {
    calcPosition(element)
});
scroll($elements);
let Options = {
    offset: 120,
    throttleDelay: 90
}
window.addEventListener(
    'scroll',
    throttle(() => {
        scroll($elements)
    }, Options.throttleDelay)
)