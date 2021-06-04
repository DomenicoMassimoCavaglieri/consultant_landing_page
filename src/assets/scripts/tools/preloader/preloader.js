//Preloader

function hidePreloader(wrapperInDOM) {
    setTimeout(() => wrapperInDOM.removeChild(document.querySelector("#preloader-overlay")), 500);
}


function displayPreloader(wrapperInDOM) {
    wrapperInDOM.appendChild(createPreloader());
}


function createPreloader() {
    const preloadOverlay = document.createElement("div");
    const preloader = document.createElement("div");
    preloadOverlay.setAttribute("id","preloader-overlay");
    preloader.setAttribute("id", "preloader");
    preloadOverlay.appendChild(preloader);
    
    return preloadOverlay;
}

export {displayPreloader, hidePreloader};
