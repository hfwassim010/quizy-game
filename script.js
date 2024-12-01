const quiz = [
  {
    question: "Which of the following is the correct way to declare a variable in JavaScript?",
    correctAnswer: 2,
    answers: ["let x == 5;", "var x <- 5;", "let x = 5;", "x := 5;"]
  },
  {
    question: "What does `typeof null` return in JavaScript?",
    correctAnswer: 1,
    answers: ["'null'", "'object'", "'undefined'", "'string'"]
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    correctAnswer: 0,
    answers: ["//", "#", "&lt;!-- --&gt;", "'"]
  },
  {
    question: "How do you write an arrow function in JavaScript?",
    correctAnswer: 3,
    answers: [
      "function x => { return x * 2; }",
      "x -> { return x * 2; }",
      "def x => x * 2;",
      "(x) => { return x * 2; }"
    ]
  },
  {
    question: "Which of these is NOT a valid JavaScript loop?",
    correctAnswer: 1,
    answers: ["for", "repeat-until", "while", "for...in"]
  },
  {
    question: "Which keyword is used to define a constant in JavaScript?",
    correctAnswer: 3,
    answers: ["var", "let", "immutable", "const"]
  },
  {
    question: "Which method converts a JSON string into a JavaScript object?",
    correctAnswer: 1,
    answers: ["JSON.stringify()", "JSON.parse()", "Object.create()", "JSON.objectify()"]
  },
  {
    question: "What will `console.log(typeof NaN)` output?",
    correctAnswer: 3,
    answers: ["'undefined'", "'null'", "'number'", "'NaN'"]
  },
  {
    question: "Which operator is used to check equality without type conversion?",
    correctAnswer: 2,
    answers: ["=", "==", "===", "!=="]
  },
  {
    question: "How do you write a conditional (ternary) operator in JavaScript?",
    correctAnswer: 0,
    answers: ["condition ? expr1 : expr2", "if condition { expr1 } else { expr2 }", "if (condition) expr1; else expr2;", "condition : expr1 ? expr2"]
  },
  {
    question: "Which method adds an element to the end of an array?",
    correctAnswer: 1,
    answers: ["shift()", "push()", "pop()", "append()"]
  },
  {
    question: "How do you declare a function in JavaScript?",
    correctAnswer: 2,
    answers: [
      "def functionName() {}",
      "function = functionName() {}",
      "function functionName() {}",
      "func functionName() {}"
    ]
  },
  {
    question: "What will `console.log(5 + '5')` output?",
    correctAnswer: 3,
    answers: ["10", "NaN", "'55'", "Error"]
  },
  {
    question: "Which keyword is used to create a class in JavaScript?",
    correctAnswer: 2,
    answers: ["className", "object", "class", "define"]
  },
  {
    question: "Which built-in method is used to convert a string to lowercase?",
    correctAnswer: 1,
    answers: ["toLower()", "toLowerCase()", "lower()", "convertToLower()"]
  },
  {
    question: "Which of these is a valid way to declare a variable with block scope?",
    correctAnswer: 0,
    answers: ["let", "var", "const", "block"]
  },
  {
    question: "What does `console.log(5 == '5')` return?",
    correctAnswer: 1,
    answers: ["false", "true", "NaN", "undefined"]
  },
  {
    question: "What will be the result of `0 === false` in JavaScript?",
    correctAnswer: 0,
    answers: ["false", "true", "undefined", "NaN"]
  },
  {
    question: "How do you define a JavaScript object?",
    correctAnswer: 2,
    answers: ["object obj = {}", "var obj = ()", "let obj = {}", "object obj = () => {}"]
  },
  {
    question: "What will the expression `[] == []` return?",
    correctAnswer: 0,
    answers: ["false", "true", "undefined", "null"]
  },
  {
    question: "Which of these methods is used to add a new element to the beginning of an array?",
    correctAnswer: 0,
    answers: ["unshift()", "push()", "pop()", "shift()"]
  },
  {
    question: "Which type of data can be stored in an array?",
    correctAnswer: 2,
    answers: ["Only numbers", "Only strings", "Any data type", "Only objects"]
  },
  {
    question: "What is the result of `5 + '5'` in JavaScript?",
    correctAnswer: 2,
    answers: ["'10'", "'55'", "NaN", "Error"]
  },
  {
    question: "What does `null == undefined` return?",
    correctAnswer: 1,
    answers: ["true", "false", "undefined", "null"]
  },
  {
    question: "Which of these methods returns the number of elements in an array?",
    correctAnswer: 1,
    answers: ["size()", "length()", "count()", "lengthOf()"]
  },
  {
    question: "What is the result of `5 > 4 && 3 < 2` in JavaScript?",
    correctAnswer: 0,
    answers: ["false", "true", "undefined", "NaN"]
  },
  {
    question: "Which of the following is a way to create a new object in JavaScript?",
    correctAnswer: 2,
    answers: ["let obj = new Object;", "let obj = new Object[];", "let obj = {}; ", "let obj = {}"]
  },
  {
    question: "What will `console.log([1] == [1])` output?",
    correctAnswer: 0,
    answers: ["false", "true", "undefined", "NaN"]
  },
  {
    question: "What is the correct syntax to define a JavaScript function?",
    correctAnswer: 3,
    answers: [
      "functionName() => {}",
      "function functionName() {}",
      "function functionName {}",
      "function functionName() {}"
    ]
  },
  {
    question: "What is the result of `typeof NaN` in JavaScript?",
    correctAnswer: 2,
    answers: ["'string'", "'object'", "'number'", "'undefined'"]
  },
  {
    question: "How do you define a default parameter for a function in JavaScript?",
    correctAnswer: 0,
    answers: ["function add(a, b = 5) {}", "function add(a, b) = 5 {}", "function add(a, b) { return 5 }", "function add(a, b) { b = 5 }"]
  },
  {
    question: "What does the `Array.isArray()` method do in JavaScript?",
    correctAnswer: 1,
    answers: ["Returns true if an object is a set", "Checks if the value is an array", "Returns the length of an array", "Converts an array into a string"]
  },
  {
    question: "What does the `JSON.stringify()` method do?",
    correctAnswer: 1,
    answers: ["Parses a JSON string", "Converts a JavaScript object to a JSON string", "Creates a new JavaScript object", "Converts an object into a string"]
  },
  {
    question: "What is the result of `3 * '3'` in JavaScript?",
    correctAnswer: 2,
    answers: ["'9'", "NaN", "9", "Error"]
  },
  {
    question: "Which method is used to find the index of an element in an array?",
    correctAnswer: 2,
    answers: ["indexOf()", "findIndex()", "lastIndexOf()", "find()"]
  },
  {
    question: "What will `console.log('a' + +'b')` output?",
    correctAnswer: 0,
    answers: ["'aNaN'", "'ab'", "'NaN'", "Error"]
  },
  {
    question: "How do you convert a string into a number in JavaScript?",
    correctAnswer: 1,
    answers: ["parseInt(string)", "Number(string)", "parseFloat(string)", "string.toNumber()"]
  }
];

var stepHistory = [];
var step;
var chance = 0;
var score = 0;
var timeIN = 5
var timeLeft = 0
var totalTimeConsume = 0


function getRandomQuizStep(number) {

  let step;
  do {
    step = Math.floor(Math.random() * number); // Generate valid random steps
  } while (stepHistory.includes(step)); // Ensure the step is unique

  stepHistory.push(step);
  return step;
}





function loadQuiz() {
  if (stepHistory.length == quiz.length) {
    endGame();
    return;
  }
  let scoreElement = document.getElementById("score");
  let questionNum = document.getElementById("q-num");
  let question = document.getElementById("question");

  step = getRandomQuizStep(quiz.length);

  scoreElement.innerText = `+${score.toFixed(2)}💎`;
  questionNum.innerText = `Question ${chance + 1} / ${quiz.length} :`;
  question.innerText = quiz[step].question;

  let listAnswers = document.getElementById("list-answers");
  listAnswers.style.pointerEvents = 'auto'
  listAnswers.innerHTML = "";

  quiz[step].answers.forEach((answer, index) => {
    let content = `
      <div class="answer">
          <div class="a-${index} a-num">${index + 1}</div>
          <button onclick="play(${index})"><p id="a-${index}">${answer}</p></button>
      </div>
      `;
    listAnswers.innerHTML += content;
    
  });
  listAnswers.style.opacity = '100%'
}



function play(id) {
  let selectedAnswer = document.getElementById(`a-${id}`);
  let listAnswers = document.getElementById("list-answers")
  if(id != -1){
    if (quiz[step].correctAnswer === id) {
      selectedAnswer.style.backgroundColor = "rgb(51, 242, 99)";
      score += 100 / quiz.length;
    } else {
      selectedAnswer.style.backgroundColor = "rgb(242, 51, 57)";
    }
    totalTimeConsume += timeLeft
    timeLeft = 0  
    listAnswers.style.pointerEvents = 'none'
  }


  listAnswers.style.opacity = '0%';  // Hide answers
  chance++;  // Increase chance or perform any additional logic
  setTimeout(() => {
    loadQuiz();  // Load next question after delay
  }, 1000);
  totalTimeConsume += timeLeft
  timeLeft = 0
}

function convertSecondsToHM(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let remainingSeconds = seconds % 60;

  let result = '';

  if (hours > 0) {
    result += hours + ' hour' + (hours > 1 ? 's' : '') + ' ';
  }

  if (minutes > 0) {
    result += minutes + ' minute' + (minutes > 1 ? 's' : '') + ' ';
  }

  if (remainingSeconds > 0 || seconds === 0) {
    result += remainingSeconds + ' second' + (remainingSeconds > 1 ? 's' : '');
  }

  return result.trim();
}

function getMotivationMessage(score) {
  let message = '';
  
  if (score < 50) {
    message = 'Don\'t give up! Keep practicing, and you\'ll get better. Try reviewing the questions you missed and improve your knowledge!';
  } else if (score >= 50 && score < 70) {
    message = 'Good job! You\'re getting there. Try to focus on the areas where you lost points and aim for a higher score!';
  } else if (score >= 70 && score < 90) {
    message = 'Great work! You\'re almost at the top. Keep refining your skills to aim for a perfect score!';
  } else if (score >= 90 && score < 100) {
    message = 'Excellent! You\'re very close to a perfect score. Just a bit more focus and you\'ll master it!';
  } else {
    message = 'Amazing! You aced it with a perfect score! Keep up the great work!';
  }

  return message;
}

function endGame() {
  let msg;
  let quizScene = document.getElementById("container");
  quizScene.style.opacity = "0%";
  
  setTimeout(() => {
    quizScene.setAttribute('id', "container-2");

    // Motivation message based on score
    const motivationMessage = getMotivationMessage(score);
    
    if (score < 50) {
      msg = `🥹<br><span style='color:rgb(242, 51, 57);'>Quiz over</span><br>Your score is: ${score.toFixed(2)} / 100 💎<br>Time Consuming 🕰️: ${convertSecondsToHM(totalTimeConsume)} / ${convertSecondsToHM(timeIN * quiz.length)}<br><br>${motivationMessage}<br><button id="restart-btn" onclick="startGame()">Play again !</button>`;
    } else {
      msg = `😍<br><span style='color:rgb(51, 242, 99);'>You win</span><br>Your score is: ${score.toFixed(2)} / 100 💎<br>Time Consuming 🕰️: ${convertSecondsToHM(totalTimeConsume)} / ${convertSecondsToHM(timeIN * quiz.length)}<br><br>${motivationMessage}<br><button id="restart-btn" onclick="startGame()">Play again !</button>`;
    }

    quizScene.innerHTML = `<span id="msg">${msg}</span>`;
    
    quizScene = document.getElementById("container-2");
    quizScene.style.opacity = "100%";
    timeLeft = 0
    delay("stop")
  }, 500);
}


function startGame() {
  let quizScene = document.getElementById("container-2")
  quizScene.innerHTML = `<span id="msg">Loading ...</span>`
  setTimeout(()=>{
    quizScene.setAttribute("id", "container"); // Reset the container ID
    stepHistory = []
    score = 0
    chance = 0
    quizScene.innerHTML = `
      <span id="q-num"></span>
      <div id="question"></div>
      <div class="list-answers" id="list-answers"></div>
    `;
  },2000)
  
  setTimeout(()=>{
    loadQuiz()
  },2000)
  timeLeft = 0
  totalTimeConsume = 0
  delay()
}



function loadTimer(){
  const timeDisplay = document.getElementById('time');
  const timeDisplayConsume = document.getElementById('time-c');
  timeLeft++;

  // Conditional color assignment based on timeIN - timeLeft
  let color;
  if (timeIN - timeLeft < 5) {
    color = "rgb(248, 0, 50)"; // Red
  } else if (timeIN - timeLeft < 10) {
    color = "rgb(248, 173, 0)"; // Yellow
  } else {
    color = "rgb(0, 248, 99)"; // Green
  }

  // Update the time display
  timeDisplay.innerHTML = `<span style="color:${color}">${timeIN - timeLeft}s</span>`;

  // Update the total time consumed
  timeDisplayConsume.innerText = totalTimeConsume;
  if (timeIN - timeLeft <= 0) {
    play(-1); // Execute the callback function
  }
  
}


function delay(state = "start") {
  if (state === "start") {
    // Start the timer
    timer = setInterval(loadTimer, 1000); // Pass the function reference
  } else if (state === "stop") {
    // Stop the timer
    clearInterval(timer);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadQuiz()
  delay()  
});
