import IconPost from '../images/feature-post-icon.svg';
import {getNextIndexPost} from "./posts_index_logic";
import {displayPreloader, removePreloader} from "./tools/preloader/preloader";


//This when loading the page loads the first post from API
fetchPostOnPageLoad(0);

//The button loads other posts from the API
getPostBtn().onclick = () => {
    fetchPosts(getCurrentIndex());
}



//Fetch management

/**
 * This when loading the page loads the first post from API
 * @param {integer} indexFirstPost Index of the first post to show
 */
function fetchPostOnPageLoad(indexFirstPost) {
    displayPreloader(getPostWrapper());
    fetch("https://60b21f9562ab150017ae1b08.mockapi.io/maxServer/postQuotes")
        .then((response) => {
            printResponseData(response);
            return response.json();
        })
        .then((fetchPosts) => {
            removePreloader(getPostWrapper(), 500);
            printPost(fetchPosts, indexFirstPost);
        })
        .catch(error => printError(error));
}

/**
 * The button loads other posts from the API
 * @param {*} currentPostIndex Index of the post to be printed
 */
function fetchPosts(currentPostIndex) {
    displayPreloader(getPostWrapper());
    fetch("https://60b21f9562ab150017ae1b08.mockapi.io/maxServer/postQuotes")
        .then((response) => {
            printResponseData(response);
            return response.json();
        })
        .then((fetchPosts) => {
            removePreloader(getPostWrapper(), 500);
            printNextPost(
                fetchPosts,
                parseInt(currentPostIndex),
                fetchPosts.length
            )
        })
        .catch(error => printError(error));
}


//Response data print

function printResponseData(responseData) {
    getPostResponse().innerHTML =
        `status: ${responseData.status}, ${responseData.statusText} at ${currentDate().time} on ${currentDate().date}`;
}

function printError(responseError) {
    getPostResponse().style.color = "red";
    getPostResponse().innerHTML = `Sorry, ${responseError}`;
}


//This returns an object with the current date and time
function currentDate() {
    let dates = new Date();
    dates.time = dates.toLocaleTimeString();
    dates.date = dates.toLocaleDateString();
    return dates;
}
export {currentDate};

//Scroll through posts as objects contained in an array. 
//Indexing is achieved by adding and updating a specific attribute to the post container.

//This gets the index of the current post
function getCurrentIndex() {
    return getPostWrapper().getAttribute("numberOfId");
}

/**
 * This prints the next post
 * @param {array of objects} posts List of posts
 * @param {integer} index Index of the post to be printed
 * @param {integer} numberOfitems Number of posts to scroll
 */
function printNextPost(posts, index, numberOfitems) {
    printPost(posts, getNextIndexPost(index, numberOfitems));
}

/**
 * This prints a single post from an array of post objects
 * @param {array of objects} posts List of posts
 * @param {integer} index Index of the post to be printed
 */
function printPost(posts, index) {
    getPostText().innerHTML = posts[index].text;
    getPostName().innerHTML = posts[index].name;
    if (posts[index].icon === "local") {
        getPostIcon().setAttribute("src", IconPost);
        getPostIcon().setAttribute("alt", "User profile picture");
    } else {
        getPostIcon().setAttribute("src", posts[index].icon);
    }
    getPostWrapper().setAttribute("numberOfId", posts[index].id - 1);
}


//These return elements of the DOM that make up the post

function getPostName() {
    return getPostWrapper().querySelector("#post-name");
}

function getPostIcon() {
    return getPostWrapper().querySelector("#post-icon");
}

function getPostText() {
    return getPostWrapper().querySelector("#post-text");
}

function getPostResponse() {
    return getPostWrapper().querySelector("#post-response");
}

function getPostBtn() {
    return getPostWrapper().querySelector("#post-btn");
}

function getPostWrapper() {
    return document.querySelector("#post-wrapper");
}
