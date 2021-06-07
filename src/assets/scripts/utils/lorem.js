/**
 * This generates a Lorem Ipsum with a maximum length of 66 words, with a selectable rage
 * @param {integer} minNumbersOfWords Minimum number of words
 * @param {integer} maxNumberOfWords Maximum number of words
 * @returns 
 */
function randomLoremGenMax66Words(minNumbersOfWords, maxNumberOfWords) {
    const lorem66 = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud esercizio ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim";
    let numberOfWords = randomNumberOfWords(minNumbersOfWords, maxNumberOfWords);
    let words = lorem66.split(" ").slice(0,numberOfWords);
    return words.join(" ") + ".";
}

/**
 * This generates a random integer in a selected range
 * @param {integer} min Minimum number of the range
 * @param {integer} max Maximum number of the range
 * @returns 
 */
function randomNumberOfWords(min,max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


/**
 * This is for testing purposes only
 * @param {string} input 
 * @param {integer} maxNumberOfWords 
 * @returns {string}
 */
function loremGenerator(input, maxNumberOfWords) {    
        let words = input.split(" ").slice(0, maxNumberOfWords);
        return words.join(" ");
    }


export {loremGenerator, randomLoremGenMax66Words};
