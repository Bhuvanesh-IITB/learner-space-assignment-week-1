
function showsection(sectionid){
    var sections=document.querySelectorAll('section');
    sections.forEach(function(section){
        section.classList.remove('active');
    });
    document.getElementById(sectionid).classList.add('active');
}
const quizData = [
    {
      question: "What is the maximum number of players in a single Free Fire match?",
      options: ["50","60","70","100"],
      answer: "50"
    },
    {
      question: "Which character in Free Fire has the ability called Drop the Beat?",
      options: ["DJ Alok","chrono","Andrew","Natasha"],
      answer: "DJ Alok"
    },
    // Add more questions here...
    {
        question: "Which of the following is NOT a game mode in Free Fire?",
        options: ["Battle Royal","Team Deathmatch","Clash Squad","Survival"],
        answer: "Survival"
      },
      {
        question: "What is the primary in-game currency used to purchase items in Free Fire?",
        options: ["Gold","Daimonds","credits","coins"],
        answer: "Daimonds"
      },
      {
        question: "Which of the following vehicles is NOT available in Free Fire?",
        options: ["Motorbike","Jeep","Hoverboard","Helicopter"],
        answer: "Helicopter"
      },
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();