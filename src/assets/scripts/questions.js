import { randomLoremGenMax66Words } from "./utils/lorem";

//The LOAD MORE button loads questions and answers until the appropriate container is filled.
//When the question boxes are full, they are alternately emptied 
//and filled with new questions by pressing the button, endlessly.


let numberOfQuestion = 1; //Questions and answers start numbering
let phaseAppendQuestions = 0; //Starting phase for the addition of the questions


//Listener on the user's screen resolution
const mobileMedia = window.matchMedia("(max-width: 1199px)");
mobileMedia.addListener(setAppendQuestionBasedOnDisplay);


//Questions and answers have the same numbering and the texts are created with a random Lorem generator
//They are contained in an object that contains the print method
class QuestionAndAnswer {
    constructor(quest, ans, num) {
        this.question = quest;
        this.answer = ans;
        this.id = num;
    };
    
    getQuestion() {
        return `Question ${this.id} : ${this.question}`;
    }

    getAnswer() {
        return  `Answer ${this.id} : ${this.answer}`;
    }
}


//This loads the first question on the page
loadQuestion();

//The LOAD MORE button loads a question onto the page
getLoadQuestionsBtn().onclick = () => {
    setAppendQuestionBasedOnDisplay(mobileMedia, phaseAppendQuestions);
    loadQuestion();
}


//This loads a question on the page
function loadQuestion() {
    let singleQuestion = new QuestionAndAnswer
    (
        randomLoremGenMax66Words(7, 20),
        randomLoremGenMax66Words(3, 66),
        numberOfQuestion
    );

    showQuestion(
        singleQuestion.getQuestion(),
        singleQuestion.getAnswer(),
        phaseAppendQuestions
    );
    //Global change
    numberOfQuestion++;
}


/*These functions handle the addition of the Question Block component
This section of the DOM is divided into two boxes*/
/**
 * This manages the addition of questions by dividing it into 7 phases (7 cases)
 * @param {string} question Question text
 * @param {string} answer Answer text
 * @param {integer} counter Counter of the phases 
 */
function showQuestion(question, answer, counter) {
    switch (counter) {
        case 0:
            appendFirstQuestionOnBox1(question, answer, 1);
            break;
        case 1:
            appendQuestionsOnBox1(question, answer, 2);
            break;
        case 2:
        case 6:
            appendQuestionsOnBox2(question, answer, 3);
            break;
        case 3:
            resetQuestionOnBox1(question, answer, 4);
            break;
        case 4:
            appendQuestionsOnBox1(question, answer, 5);
            break;
        case 5:
            resetQuestionOnBox2(question, answer, 6);
            break;
        case 7:
            replaceFirstQuestionsOnBox1(question, answer, 1, mobileMedia);
        default:
            phaseAppendQuestions = 0; 
    }

}


/**
 * This adds first question on box1
 * @param {string} question Question text
 * @param {string} answer Answer text
 * @param {integer} nextCase phase number to go to next
 */
function appendFirstQuestionOnBox1(question, answer, nextCase) {
    getQuestionsBox1().appendChild(createQuestionBlock(question, answer));
    phaseAppendQuestions = nextCase;
}

/**
 * Media query: This changes the addition of questions based on the media query
 * @param {boolean} mediaQuery is the mobile mediaquery respected?
 */
function setAppendQuestionBasedOnDisplay(mediaQuery) {
    if (mediaQuery.matches) {
        phaseAppendQuestions = 7;
        removeElement(getQuestionsBox1(), 2);
        removeElement(getQuestionsBox2(), 1);
    }
}


/**
 * This replaces the first question in the box-1, removing the remaining ones in box-1 e box-2
 * @param {string} question Question text
 * @param {string} answer Answer text
 * @param {integer} nextCase phase number to go to next
 * @param {boolean} mediaQuery is the mobile mediaquery respected?
 */
function replaceFirstQuestionsOnBox1(question, answer, nextCase, mediaQuery) {
    if (mediaQuery.matches) {
        getQuestionsBox1().replaceChild(
            createQuestionBlock(question, answer),
            getQuestionsBox1().children[1]
        );
    } else {
        phaseAppendQuestions = nextCase;
    }
}


/**
 * This adds the questions in the box-1
 * @param {string} question Question text
 * @param {string} answer Answer text
 * @param {integer} nextCase phase number to go to next
 */
function appendQuestionsOnBox1(question, answer, nextCase) {
    if (getQuestionsBox1().childElementCount <= 6) {
        getQuestionsBox1().appendChild(createQuestionBlock(question, answer));
    } else if (getQuestionsBox1().childElementCount === 7) {
        getQuestionsBox1().appendChild(createQuestionBlock(question, answer));
        //Global change
        phaseAppendQuestions = nextCase;
    }
}

/**
 * This adds the questions in the box-2
 * @param {string} question Question text
 * @param {string} answer Answer text
 * @param {integer} nextCase phase number to go to next
 */
function appendQuestionsOnBox2(question, answer, nextCase) {
    if (getQuestionsBox2().childElementCount <= 5) {
        getQuestionsBox2().appendChild(createQuestionBlock(question, answer));
    } else if (getQuestionsBox2().childElementCount === 6) {
        getQuestionsBox2().appendChild(createQuestionBlock(question, answer));
        //Global change
        phaseAppendQuestions = nextCase;
    }
}

/**
 * This removes all questions from box-1 and adds a new one
 * @param {string} question Question text
 * @param {string} answer Answer text
 * @param {integer} nextCase phase number to go to next
 */
function resetQuestionOnBox1(question, answer, nextCase) {
    while (getQuestionsBox1().childElementCount > 1) {
        getQuestionsBox1().removeChild(getQuestionsBox1().lastElementChild);
    }
    getQuestionsBox1().appendChild(createQuestionBlock(question, answer));
    phaseAppendQuestions = nextCase;
}

/**
 * This removes all questions from box-2 and adds a new one
 * @param {string} question Question text
 * @param {string} answer Answer text
 * @param {integer} nextCase phase number to go to next
 */
function resetQuestionOnBox2(question, answer, nextCase) {
    while (getQuestionsBox2().childElementCount > 1) {
        getQuestionsBox2().removeChild(getQuestionsBox2().lastElementChild);
    }
    getQuestionsBox2().appendChild(createQuestionBlock(question, answer));
    phaseAppendQuestions = nextCase;
}

/**
 * This removes the desired elements in order from the bottom
 * @param {Html Element} container DOM Element
 * @param {integer} except Number of items to keep
 */
function removeElement(container, except) {
    while (container.childElementCount > except) {
        container.removeChild(container.lastElementChild);
    }
}


//These functions manage generation and functionality of the Question Block component:

//This function manages the visibility of the answer in the Question Block component
function answertoggle(event) {
    let arrow = event.target;
    let answer = event.target.parentNode.nextElementSibling;
    let answerHeight = answer.scrollHeight;

    let visibleAnswers = getQuestionsWrapper().querySelectorAll(".visible-answer");
    let rotateArrows = getQuestionsWrapper().querySelectorAll(".rotate-arrow")


    if (!answer.classList.contains("visible-answer")) {
        answer.classList.add("visible-answer");
        answer.style.height = `${answerHeight}px`;
        arrow.classList.add("rotate-arrow");
    } else {
        answer.classList.remove("visible-answer");
        answer.style.height = `0`;
        arrow.classList.remove("rotate-arrow");
    }

    for (let visibleAnswer of visibleAnswers) {
        visibleAnswer.classList.remove("visible-answer");
        visibleAnswer.style.height = `0`;
    }

    for (let rotateArrow of rotateArrows) {
        rotateArrow.classList.remove("rotate-arrow");
    }
}

/**
 * This function generates the Question Block component 
 * and accepts text for Q&A as arguments
 * @param {string} Question 
 * @param {string} Answer 
 * @returns {Html Element} Question component
 */
function createQuestionBlock(question, answer) {
    let singleQuestion = document.createElement("div");
    singleQuestion.classList.add("single-question");
    let questionLabel = document.createElement("div");
    questionLabel.classList.add("question-label");
    let questionText = document.createElement("p");
    questionText.classList.add("question-text");
    questionText.innerHTML = question;

    let answerArrow = document.createElement("div");
    answerArrow.classList.add("answer-arrow");
    answerArrow.addEventListener("click", answertoggle);
    let answerText = document.createElement("p");
    answerText.classList.add("answer-text");
    answerText.innerHTML = answer;

    questionLabel.appendChild(questionText);
    questionLabel.appendChild(answerArrow);
    singleQuestion.appendChild(questionLabel);
    singleQuestion.appendChild(answerText);
    return singleQuestion;
}


//These functions return elements within the Questions Section

function getLoadQuestionsBtn() {
    return document.querySelector("#loadQuestionsBtn");
}

function getQuestionsBox2() {
    return document.querySelector("#questions-box-2");
}

function getQuestionsBox1() {
    return document.querySelector("#questions-box-1");
}

function getQuestionsWrapper() {
    return document.querySelector("#questions-wrapper");
}
