import {getFormName, getFormPassword, printTextInOverlay} from "./form";
import {isOneFieldEmpty, isValidUsername, isValidPassword} from "./form_utility";

//Validation of the correct compilation of the form
function formSubmit() {
    
    if (isOneFieldEmpty(getFormName().value)) {
        printTextInOverlay("Sorry, username is required.");
        return false;
    }

    if (isOneFieldEmpty(getFormPassword().value)) {
        printTextInOverlay("Sorry, password is required.");
        return false;
    }
    
    if (!isValidUsername(getFormName().value)) {
        printTextInOverlay("Sorry, the name requires between 8 and 12 characters.");
        return false;
    }

    if (!isValidPassword(getFormPassword().value)) {
        printTextInOverlay("Sorry, the password requires a minimum of 8 characters, a maximum of 12 characters, at least one uppercase character, one lowercase character, one number and one symbol.");
        return false;
    }

    return true;
}

export {formSubmit};
