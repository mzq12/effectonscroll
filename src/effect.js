import '../effects/effect.scss'
import queryElements from './element.js'
import calcPosition from './calculateposition.js'
import scroll from './scroll.js'
import throttle from 'lodash/throttle.js'
import deboundce from 'lodash/debounce.js'
import observe from './observe.js'
import {
    SCROLLIN,
    SCROLLOUT
} from './eventTypes.js'
let Options = {
    offset: 120,
    easing: 'ease',
    duration: 400,
    in: function(){
        return false
    },
    out: function(){
        return false
    },
    observe: function(){
        return false
    }
}
const throttleDelay = 90

const initScroll = function initScroll() {
    const $elements = queryElements()
    $elements.forEach(element => {
        calcPosition(element)
    });
    scroll($elements);
    window.addEventListener(
        'scroll',
        throttle(() => {
            scroll($elements)
        }, throttleDelay)
    )
}
const init = function (settings) {
    Options = Object.assign(Options, settings)
    const body = document.querySelector('body')
    body.setAttribute('data-effect-easing', Options.easing)
    body.setAttribute('data-effect-duration', Options.duration)
    const deboundceDelay = 50
    window.addEventListener('resize', deboundce(initScroll, deboundceDelay, true))
    window.addEventListener('orientationchange', deboundce(initScroll, deboundceDelay, true))
    document.addEventListener(SCROLLIN, function (data) {
        Options.in(data.detail)
    }, true)
    document.addEventListener(SCROLLOUT, function (data) {
        Options.out(data.detail)
    }, true)
    initScroll()
    observe(function(addedNodes){
        initScroll()
        Options.observe(addedNodes)
    })
}
export default {
    init
}