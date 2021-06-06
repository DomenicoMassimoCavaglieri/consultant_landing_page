import {currentDate} from "./tools/current_date";
import {formSubmit} from "./form_validation";
import {displayPreloader, removePreloader} from "./tools/preloader/preloader";

const fetchPost = "https://60b21f9562ab150017ae1b08.mockapi.io/maxServer/user";
const timeOutPreloaderForm = 500; //time in milliseconds

//Subscribe the form
getFormBtn().onclick = () => {
    if (formSubmit()) {
        fetchUser(createUser(getFormName(),getFormPassword()));
    }
}

//Close the form validation modal
getFormClose().onclick = () => hideFormOverlay();



/**
 * The button sends user to the API
 * @param {objrct} userObj An object that complies with the agreement with the API 
 */
function fetchUser(userObj) {
    displayPreloader(getFormWrapper());
    fetch(fetchPost, {
        method: "POST",
        headers: {"Content-Type": "application/json","Accept": "application/json"},
        body: JSON.stringify(userObj)})
        .then(response => response.json())      
        .then((bodyResponse) => {
            removePreloader(getFormWrapper(), timeOutPreloaderForm);
            printTextInOverlay(
            `Welcome ${bodyResponse.name}.<br><br>New user: 
            ${JSON.stringify(bodyResponse)}<br>Created at:<br>${currentDate().time} on ${currentDate().date}`)
        })
        .catch(error => printTextInOverlay(error))
}


/**
 * This takes the data from the form and places it in a object that returns
 * The structure of the object complies with the agreement with the API 
 * @param {string} inputName 
 * @param {string} inputPassword 
 * @returns 
 */
 function createUser(inputName,inputPassword) {
    const userObj = {};
    userObj.name = inputName.value;
    userObj.password = inputPassword.value;
    return userObj;
}



//This prints a message in the form overlay
/**
 * 
 * @param {string} message to print in form overlay 
 */
function printTextInOverlay(message) {
    showFormOverlay();
    getFormOverlayText().innerHTML = message;
}


//These manage the form overlay

function showFormOverlay() {
    getFormOverlay().classList.remove("hidden");
    getFormOverlayText().classList.remove("hidden");
}

function hideFormOverlay() {
    getFormOverlay().classList.add("hidden");
    getFormOverlayText().classList.add("hidden");
}


//Toggle between hidden and visible password
getEye().onclick =  () => {
    if (getFormPassword().getAttribute("type") === "password") {
        getFormPassword().setAttribute("type", "text");
    } else {
        getFormPassword().setAttribute("type", "password");
    }
    getEye().classList.toggle("closed-eye");
};

//These return elements of the DOM that make up the form

function getEye() {
    return document.getElementById("eye");
}

function getFormClose() {
    return getFormWrapper().querySelector("#form__overlay-clear");
}

function getFormOverlayText() {
    return getFormWrapper().querySelector("#form__overlay-text");
}

function getFormOverlay() {
    return getFormWrapper().querySelector("#form__overlay");
}

function getFormBtn() {
    return getFormWrapper().querySelector("#form-btn");
}

function getFormPassword() {
    return getFormWrapper().querySelector("#input-password");
}

function getFormName() {
    return getFormWrapper().querySelector("#input-name");
}

function getFormWrapper() {
    return document.querySelector("#form-wrapper");
}

export {getFormName, getFormPassword, printTextInOverlay};
