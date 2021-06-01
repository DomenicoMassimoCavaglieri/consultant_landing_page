//Esempio POST
const postUrl = "https://60b21f9562ab150017ae1b08.mockapi.io/maxServer/user";
const formUser = {
    "name": "",
    "password": ""
};


getFormBtn().onclick = () => {
    fetchUser(createUser(formUser));
}

getFormClose().onclick = () => hideFormOverlay();


//This takes the data from the form and places it in the constant formUser
function createUser(userObj) {
    userObj.name = getFormName().value;
    userObj.password = getFormPassword().value;
    return userObj;
}



//The button sends user to the API
function fetchUser(userObj) {
    fetch(postUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userObj)
    })
        .then(
            response => {
                return response.json();
            }
        )
        .then(
            bodyResponse => {
                printTextInOverlay(`Congratulations, registered user: ${JSON.stringify(bodyResponse)}`);
                console.log(JSON.stringify(bodyResponse));
            }
        )
        .catch(
            error => {
                console.log(printTextInOverlay(error));
            }
        )
}



//This prints the message in the overlay
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
