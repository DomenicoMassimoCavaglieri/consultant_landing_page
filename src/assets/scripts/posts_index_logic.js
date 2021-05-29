/**
 * This creates a progressive counter
 * @param {integer} index Current index
 * @param {integer} numberOfitems Number of items to scroll
 * @returns {integer} Next index
 */
function getNextIndexPost(index, numberOfitems) {
    let nextIndex = index;
    if (nextIndex < numberOfitems-1) {
        nextIndex++;
        return nextIndex
    }
    else if (nextIndex === numberOfitems-1) {
        nextIndex = 0;
        return nextIndex}
}

export {getNextIndexPost};
