//This brings up the modal with the menu and changes the button icon
getMenuBtnClosed().onclick = () => {
    document.body.classList.add("mobile-menu-noscroll");
    getMobileMenuOverlay().classList.remove("hidden-notransition");
    getMenuBtnClosed().classList.add("hidden-notransition");
    getMobileMenu().classList.remove("hidden-notransition");
}

//This makes the modal with the menu disappear and changes the button icon
getMenuBtnOpen().onclick = () => {
    getMobileMenuOverlay().classList.add("hidden-notransition");
    getMobileMenu().classList.add("hidden-notransition");
    document.body.classList.remove("mobile-menu-noscroll");
    getMenuBtnClosed().classList.remove("hidden-notransition");
}


//These return elements of the DOM that make up the mobile menu

function getMobileMenu() {
    return document.querySelector("#mobile-menu");
}

function getMobileMenuOverlay() {
    return document.querySelector("#mobile-menu-overlay");
}

function getMenuBtnOpen() {
    return document.querySelector("#mobile-menu-btn-open");
}

function getMenuBtnClosed() {
    return document.querySelector("#mobile-menu-btn-closed")
}
