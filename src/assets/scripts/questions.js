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



getLoadQAndABtn().onclick = showQuestion;

function showQuestion() {
    if (getQuestionsBox1().childElementCount <= 7) {
        getQuestionsBox1().appendChild(createQuestionBlock("Domanda 1", "Risposta 1: Sì, almeno un po’, qualche medico ci ha pensato sin dall’inizio, altri ci stanno arrivando adesso, è sempre più chiaro che la cura contro il Covid-19 comincia a casa, fin dai primi sintomi, quando il virus si sta già replicando nel nostro organismo senza che noi ce ne accorgiamo. I primi dieci giorni sono cruciali per fermare il virus, prima che raggiunga le cellule del sangue per poi diffondersi dappertutto, quei dieci giorni non li dobbiamo perdere. E di tutte le cose che si possono fare a casa, la prima e la più importante è incontrare il proprio medico. «How are you in yourself?», chiedeva sempre Stuart Cameron — grande nefrologo e grandissimo medico — ai suoi pazienti. Sarebbe «Come ti senti dentro te stesso?»: a un medico bravo basta questo per capire come vanno le cose. Poi certo, ci sono anche i farmaci, anche se sulle cure a casa gli studi controllati (quelli che hanno valore scientifico) sono davvero pochini; ecco perché è sbagliato criticare le indicazioni del Ministero e dell’Aifa nella gestione domiciliare dei pazienti con infezione da SARS-CoV-2, senza studi impeccabili e pubblicati, le istituzioni non possono fare di più"));
    } else if (getQuestionsBox2().childElementCount <= 6) {
        getQuestionsBox2().appendChild(createQuestionBlock("Domanda 1", "Risposta 1: Sì, almeno un po’, qualche medico ci ha pensato sin dall’inizio, altri ci stanno arrivando adesso, è sempre più chiaro che la cura contro il Covid-19 comincia a casa, fin dai primi sintomi, quando il virus si sta già replicando nel nostro organismo senza che noi ce ne accorgiamo. I primi dieci giorni sono cruciali per fermare il virus, prima che raggiunga le cellule del sangue per poi diffondersi dappertutto, quei dieci giorni non li dobbiamo perdere. E di tutte le cose che si possono fare a casa, la prima e la più importante è incontrare il proprio medico. «How are you in yourself?», chiedeva sempre Stuart Cameron — grande nefrologo e grandissimo medico — ai suoi pazienti. Sarebbe «Come ti senti dentro te stesso?»: a un medico bravo basta questo per capire come vanno le cose. Poi certo, ci sono anche i farmaci, anche se sulle cure a casa gli studi controllati (quelli che hanno valore scientifico) sono davvero pochini; ecco perché è sbagliato criticare le indicazioni del Ministero e dell’Aifa nella gestione domiciliare dei pazienti con infezione da SARS-CoV-2, senza studi impeccabili e pubblicati, le istituzioni non possono fare di più"));
    }
}

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

    console.log(visibleAnswers);
}

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

function getLoadQAndABtn() {
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