getMenuBtnClosed().onclick = () => getMobileMenu().classList.remove("hidden");

getMenuBtnOpen().onclick = () => getMobileMenu().classList.add("hidden");

function getMobileMenu() {
    return document.querySelector("#mobile-menu-overlay");
}

function getMenuBtnOpen() {
    return document.querySelector("#mobile-menu-btn-open");
}

function getMenuBtnClosed() {
    return document.querySelector("#mobile-menu-btn-closed")
}
