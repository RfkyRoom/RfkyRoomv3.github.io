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

document.getElementById("submit-btn").addEventListener("click", function () {
    event.preventDefault();
    const answers = {
      q1: "A",
      q2: "A",
      q3: "C",
      q4: "B",
      q5: "A",
      q6: "B", 
      q7: "B",
      q8: "A",
      q9: "A",
      q10: "A",
    };
  
    let score = 0;
    let totalQuestions = Object.keys(answers).length;
  
    for (let question in answers) {
      const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
      if (selectedAnswer && selectedAnswer.value === answers[question]) {
        score++;
      }
    }
  
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h3>Your Score: ${score} / ${totalQuestions}</h3>`;
  });