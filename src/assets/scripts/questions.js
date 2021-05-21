class QuestionsAnswers {
    constructor(q, a) {
        this.Question = q;
        this.Answer = a;
    };
    printQA() {
        console.log(`Question: ${this.Question} Answer: ${this.Answer}`);
    }
}
let singleQuestion = new QuestionsAnswers("Come ti chiami?", "Giovanni");

console.log(singleQuestion);
singleQuestion.printQA();



showAnswerArrow();
function showAnswerArrow() {
    for (let arrow of getAnswerArrow()) {
        arrow.onclick = (event) => {
            let answer = event.target.parentNode.nextElementSibling;
            let answerHeight = answer.scrollHeight;
            if (!answer.classList.contains("show-answer")) {
                answer.classList.add("show-answer");
                answer.style.height = `${answerHeight}px`;
                arrow.style.transform = `rotate(90deg)`
            } else {
                answer.classList.remove("show-answer");
                answer.style.height = `0`;
                arrow.style.transform = `rotate(0)`
            }
        }
    }
}

function showAnswerLabel() {
    for (wrapper of getQuestionWrapper()) {
        wrapper.onclick = (event) => {
            console.log(event.target);
        }
    }
}

function getAnswerArrow() {
    return document.querySelectorAll(".answer-arrow");
}

function getQuestionWrapper() {
    return document.querySelectorAll(".question-wrapper");
}

function getSingleQAndAWrapper() {
    return document.querySelectorAll(".single-q-and-a-wrapper");
}

