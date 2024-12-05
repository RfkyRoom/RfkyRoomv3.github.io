const toggleDarkMode = document.createElement("button");
toggleDarkMode.textContent = "Dark Mode";
toggleDarkMode.style.position = "fixed";
toggleDarkMode.style.bottom = "20px";
toggleDarkMode.style.right = "20px";
toggleDarkMode.style.padding = "10px";
toggleDarkMode.style.borderRadius = "5px";
toggleDarkMode.style.backgroundColor = "#007acc";
toggleDarkMode.style.color = "white";
document.body.appendChild(toggleDarkMode);

toggleDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

        const correctAnswers = {
            q1: "C",
            q2: "A",
            q3: "B",
            q4: "C",
            q5: "B",
            q6: "C",
            q7: "D",
            q8: "B",
            q9: "D",
            q10: "A"
        };

        function submitQuiz() {
            const form = document.getElementById('quizForm');
            const formData = new FormData(form);
            let score = 0;
            let totalQuestions = Object.keys(correctAnswers).length;

            for (let [key, correctAnswer] of Object.entries(correctAnswers)) {
                if (formData.get(key) === correctAnswer) {
                    score++;
                }
            }

            let percentage = (score / totalQuestions) * 100;
            let feedback = document.getElementById('feedback');

            if (percentage >= 90) {
                feedback.textContent = `Excellent! Your Score ${percentage}%. Very Good, Keep It Up!`;
                feedback.style.color = "green";
            } else if (percentage >= 75) {
                feedback.textContent = `Good Job! Your Score ${percentage}%. Keep It Going!.`;
                feedback.style.color = "orange";
            } else {
                feedback.textContent = `Your Score ${percentage}%. Don't Give Up!`;
                feedback.style.color = "red";
            }
        }