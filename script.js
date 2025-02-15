const questions = [
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: 1 },
    { question: "Capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: 2 },
    { question: "Who developed Java?", options: ["Microsoft", "Sun Microsystems", "Google", "IBM"], answer: 1 }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timer;

document.addEventListener("DOMContentLoaded", loadQuestion);

function loadQuestion() {
    clearInterval(timer);
    timeLeft = 30;
    document.getElementById("time").textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
        if (timeLeft === 0) nextQuestion();
    }, 1000);

    let q = questions[currentQuestion];
    document.getElementById("question-text").textContent = q.question;
    document.getElementById("options").innerHTML = "";

    q.options.forEach((option, index) => {
        let btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(index);
        document.getElementById("options").appendChild(btn);
    });
}

function checkAnswer(index) {
    if (index === questions[currentQuestion].answer) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        localStorage.setItem("quizScore", score);
        window.location.href = "results.html";
    }
}
