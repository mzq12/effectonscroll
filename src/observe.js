const mutationOberver = (function(){
    return (
        window.MutationObserver || 
        window.WebkitMutationObserver || 
        window.MozMutationObserver
    )
})()
const hasDataEffect = function(nodes){
    let i, currentNode, result
    let len = nodes.length
    for(i = 0; i<len;i++){
        currentNode = nodes[i]
        if(currentNode.dataset && currentNode.dataset.effect){
            return true
        }
        result = currentNode.children && hasDataEffect(currentNode.children)
        if(result){
            return true
        }
    }
    return false
}
const listenNodesChange = function(callback){
    return function(mutations){
        if(!mutations){
            return false
        }
        mutations.forEach(mutation => {
            let addedNodes = Array.prototype.slice.call(mutation.addedNodes)
            let removedNodes = Array.prototype.slice.call(mutation.removedNodes)
            const allNodes = addedNodes.concat(removedNodes)
            if(hasDataEffect(allNodes)){
                return callback(addedNodes)
            }
        });
    }
}
const doc = window.document
const initObserve =  function(callback){
    const observer = new mutationOberver(listenNodesChange(callback))
    observer.observe(doc.documentElement, {
        childList: true,
        subtree: true,
        removeNodes: true
    })
}
export default initObserve