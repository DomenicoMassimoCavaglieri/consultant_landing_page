//Preloader

/**
 * This removes the preloader after at the set time
 * @param {DOM Element} wrapperInDOM 
 * @param {integer} time time in milliseconds
 */
function removePreloader(wrapperInDOM, time) {
    setTimeout(() => wrapperInDOM.removeChild(document.querySelector("#preloader-overlay")), time);
}

/**
 * This shows the preloader, inserting it into the DOM
 * @param {DOM Element} wrapperInDOM 
 */
function displayPreloader(wrapperInDOM) {
    wrapperInDOM.appendChild(createPreloader());
}

//This creates the preloader element, ready to be inserted into the DOM
function createPreloader() {
    const preloadOverlay = document.createElement("div");
    const preloader = document.createElement("div");
    preloadOverlay.setAttribute("id","preloader-overlay");
    preloader.setAttribute("id", "preloader");
    preloadOverlay.appendChild(preloader);
    
    return preloadOverlay;
}

export {displayPreloader, removePreloader};
