document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("score").textContent = localStorage.getItem("quizScore") + " / " + 3;
});

function restartQuiz() {
    window.location.href = "index.html";
}
