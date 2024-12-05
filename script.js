document.getElementById("submit-btn").addEventListener("click", function () {
    const answers = {
      q1: "B", // Jawaban benar untuk pertanyaan 1
      q2: "D", // Jawaban benar untuk pertanyaan 2
      q3: "C", // Jawaban benar untuk pertanyaan 3
      q4: "C", // Jawaban benar untuk pertanyaan 4
      q5: "D", // Jawaban benar untuk pertanyaan 5
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