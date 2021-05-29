import IconPost from '../images/feature-post-icon.svg';
import { getNextIndexPost } from "./posts_index_logic";



//Test object containing posts
const fetchPosts = [
    {
        text: "From most barricade or traffic control companies located in the phone book. They employ certified Traffic Control Supervisors (TCS) who can generate and certify the traffic control plan. ",
        name: "Simon Sandberg",
        icon: IconPost,
        numberOfStars: 5,
        starsText: 5,
        id: 0
    },
    {
        text: "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering. I sense much fear in you.",
        name: "Yoda",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Retrato_del_Maestro_Yoda.jpg/1200px-Retrato_del_Maestro_Yoda.jpg",
        numberOfStars: 5,
        starsText: 5,
        id: 1
    },
    {
        text: "You Don't Know The Power Of The Dark Side!",
        name: "Darth Vader",
        icon: "https://www.projectnerd.it/wp-content/uploads/2016/06/darth-vader.jpg",
        numberOfStars: 5,
        starsText: 5,
        id: 2
    },
    {
        text: "He's no good to me dead.",
        name: "Boba Fett",
        icon: "https://cdn11.bigcommerce.com/s-2zs1uo/images/stencil/1280x1280/products/1084/9937/SW_BobaFett_Milestone_12__82086.1615844406.jpg?c=2?imbypass=on",
        numberOfStars: 5,
        starsText: 5,
        id: 3
    }
];


//Scroll through posts as objects contained in an array. 
//Indexing is achieved by adding and updating a specific attribute to the post container.

printPost(fetchPosts, 0);

getPostBtn().onclick = () => {
    printNextPost(
        fetchPosts,
        parseInt(getPostWrapper().getAttribute("numberOfId")),
        fetchPosts.length
    )
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
    console.log("Print Index is: ", index);
    getPostText().innerHTML = posts[index].text;
    getPostName().innerHTML = posts[index].name;
    getPostIcon().setAttribute("src", posts[index].icon);
    getPostWrapper().setAttribute("numberOfId", posts[index].id);
}


//These return elements of the DOM that make up the post
function getPostBtn() {
    return getPostWrapper().querySelector("#post-btn");
}

function getPostName() {
    return getPostWrapper().querySelector("#post-name");
}

function getPostIcon() {
    return getPostWrapper().querySelector("#post-icon");
}

function getPostText() {
    return getPostWrapper().querySelector("#post-text");
}

function getPostWrapper() {
    return document.querySelector("#post-wrapper");
}
