class QuestionsAnswers {
    constructor(q, a) {
        this.Question = q;
        this.Answer = a;
    };
    printQA() {
    }
}
let singleQuestion = new QuestionsAnswers("Come ti chiami?", "Giovanni");

singleQuestion.printQA();

function answertoggle(event) {
    let arrow = event.target;
    let answer = event.target.parentNode.nextElementSibling;
    let answerHeight = answer.scrollHeight;
    if (!answer.classList.contains("visible-answer")) {
        answer.classList.add("visible-answer");
        answer.style.height = `${answerHeight}px`;
        arrow.style.transform = `rotate(90deg)`
    } else {
        answer.classList.remove("visible-answer");
        answer.style.height = `0`;
        arrow.style.transform = `rotate(0)`
    }
}

getLoadQAndABtn().onclick = (event) => {
    createOneQAndABlock("Question 1", "Answer 1");
}

function getLoadQAndABtn() {
    return document.querySelector("#load-q-and-a-btn");
}

function getAnswerArrow() {
    return document.querySelectorAll(".answer-arrow");
}


function getSingleQAndAWrapper() {
    return document.querySelectorAll(".single-question");
}

function createOneQAndABlock(question, answer) {
    let qAndAWrapper = document.createElement("div");
    qAndAWrapper.classList.add("single-question");
    let questionWrapper = document.createElement("div");
    questionWrapper.classList.add("question-wrapper");
    let questionText = document.createElement("p");
    questionText.classList.add("question-text");
    questionText.innerHTML = question;

    let answerArrow = document.createElement("div");
    answerArrow.classList.add("answer-arrow");
    answerArrow.addEventListener("click", answertoggle);
    let answerText = document.createElement("p");
    answerText.classList.add("answer-text");
    answerText.innerHTML = answer;

    questionWrapper.appendChild(questionText);
    questionWrapper.appendChild(answerArrow);
    qAndAWrapper.appendChild(questionWrapper);
    qAndAWrapper.appendChild(answerText);

    getQAndAWrapper().appendChild(qAndAWrapper);
}

function getQAndAWrapper() {
    return document.querySelector("#questions-box-2");
}
