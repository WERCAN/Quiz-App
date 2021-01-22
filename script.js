const quizData = [{
        question: "What's the Bebus?",
        a: "ekmek",
        b: "corba",
        c: "Mervis",
        d: "Kasik",
        correct: "c",
    }, {
        question: "What's the most used programing language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of BebusLand?",
        a: "Ms Mervis",
        b: "kedi",
        c: "civciv",
        d: "domates",
        correct: "a",
    },
    {
        question: "What does HTML stand for?",
        a: "Hiyar Tomato Marul Lemon",
        b: "He TeMam La",
        c: "HayaT Mayat Liyakat",
        d: "Hypertext Markup Language",
        correct: "d"
    }
]

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll(".answer");

const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;

        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;

    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> 
        <button onclick="location.reload()">Reload</button>`;

        }

    }
});