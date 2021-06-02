/**
 *Check for empty field 
 * @param {string} inputValue 
 * @returns {boolean} true if match is correct
 */
function isOneFieldEmpty(inputValue) {
    return inputValue == "";
}

/**
 *Check Regular Expression username 
 * @param {string} inputValue 
 * @returns {boolean} true if match is correct
 */
function isValidUsername(inputValue) {
    let usernameFormat = /^.{8,12}$/;
    return inputValue == inputValue.match(usernameFormat); 
}

/**
 *Check Regular Expression password 
 * @param {string} inputValue 
 * @returns {boolean} true if match is correct
 */
function isValidPassword(inputValue) {
    let passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/;
    return inputValue == inputValue.match(passwordFormat); 
}

export {isOneFieldEmpty, isValidUsername, isValidPassword};
