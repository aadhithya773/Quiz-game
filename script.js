const questions = [
    "What is the capital of Australia?",
    "Who wrote the play Romeo and Juliet?",
    "Which planet is known as the Red Planet?",
    "What is the largest ocean on Earth?"
];

const options = [
    ["A. Sydney", "B. Melbourne", "C. Canberra", "D. Brisbane"],
    ["A. Shakespeare", "B. Dickens", "C. Twain", "D. Austen"],
    ["A. Earth", "B. Mars", "C. Jupiter", "D. Saturn"],
    ["A. Pacific", "B. Indian Ocean", "C. Atlantic", "D. Arctic Ocean"]
];

const answers = ["C", "A", "B", "A"];
let guesses = [];
let points = 0;
let currentQuestion = 0;

function startQuiz() {
    document.getElementById('start').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById('question').innerText = questions[currentQuestion];
        const optionsList = document.getElementById('options');
        optionsList.innerHTML = '';
        options[currentQuestion].forEach(option => {
            const button = document.createElement('button');
            button.innerText = option;
            button.onclick = () => selectOption(option.charAt(0));
            optionsList.appendChild(button);
        });
    } else {
        showResults();
    }
}

function selectOption(selected) {
    guesses.push(selected);
    if (selected === answers[currentQuestion]) {
        points++;
    }
    currentQuestion++;
    setTimeout(displayQuestion, 500); // Add a slight delay before showing the next question
}

function showResults() {
    const score = (points / questions.length) * 100;
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = `
        <div id="results">
            <h2>Quiz Completed!</h2>
            <p>Correct Answers: ${answers.join(' ')}</p>
            <p>Your Guesses: ${guesses.join(' ')}</p>
            <p>Your Total Score: ${score}%</p>
            ${score < 50 ? '<p class="low-score">Better luck next time!</p>' : '<p class="high-score">Great job!</p>'}
        </div>
    `;
    quizContainer.classList.add('show-results');
}