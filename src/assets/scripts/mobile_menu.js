getMenuBtnClosed().onclick = () => {
    getMobileMenuOverlay().classList.remove("hidden");
    getMobileMenu().classList.remove("hidden");
    document.body.classList.add("mobile-menu-noscroll");
    getMenuBtnClosed().classList.add("hidden");
}

getMenuBtnOpen().onclick = () => {
    getMobileMenuOverlay().classList.add("hidden");
    getMobileMenu().classList.add("hidden");
    document.body.classList.remove("mobile-menu-noscroll");
    getMenuBtnClosed().classList.remove("hidden");
}

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
