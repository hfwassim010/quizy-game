const quiz = [
  {
    question: "How do you declare a variable in JavaScript?",
    correctAnswer: 0,
    answers: ["let x = 5;", "var x == 5;", "x := 5;", "let x"]
  },
  {
    question: "What does `typeof null` return?",
    correctAnswer: 1,
    answers: ["'null'", "'object'", "'undefined'", "'string'"]
  },
  {
    question: "Which symbol is used for single-line comments?",
    correctAnswer: 0,
    answers: ["//", "#", "<!-- -->", "'"]
  },
  {
    question: "How do you write an arrow function?",
    correctAnswer: 3,
    answers: [
      "function x => { return x; }",
      "x -> { return x; }",
      "def x => x;",
      "(x) => x"
    ]
  },
  {
    question: "Which keyword defines a constant?",
    correctAnswer: 3,
    answers: ["var", "let", "immutable", "const"]
  },
  {
    question: "What does `JSON.parse()` do?",
    correctAnswer: 1,
    answers: [
      "Converts an object to JSON",
      "Parses JSON to an object",
      "Validates a JSON string",
      "Encodes JSON data"
    ]
  },
  {
    question: "What is OOP?",
    correctAnswer: 0,
    answers: [
      "Programming based on objects and classes.",
      "Code executed only line by line.",
      "Programming without functions.",
      "Building apps with no logic."
    ]
  },
  {
    question: "What is a class in JavaScript?",
    correctAnswer: 2,
    answers: [
      "A blueprint for variables.",
      "A CSS concept.",
      "A blueprint for objects.",
      "An external library."
    ]
  },
  {
    question: "Which keyword creates a class?",
    correctAnswer: 0,
    answers: ["class", "define", "constructor", "createClass"]
  },
  {
    question: "What does `super()` do in a class?",
    correctAnswer: 3,
    answers: [
      "Creates a new object.",
      "Calls the parent method.",
      "Adds a new property.",
      "Calls the parent constructor."
    ]
  },
  {
    question: "What is polymorphism?",
    correctAnswer: 2,
    answers: [
      "Hiding class data.",
      "Reusing code from other classes.",
      "Methods behaving differently for different objects.",
      "Returning multiple results."
    ]
  },
  {
    question: "What does `this` refer to?",
    correctAnswer: 0,
    answers: ["Current object", "Parent object", "Global context", "None"]
  },
  {
    question: "Which method converts a JSON object to a string?",
    correctAnswer: 1,
    answers: ["JSON.parse()", "JSON.stringify()", "toString()", "JSON.convert()"]
  },
  {
    question: "What is encapsulation?",
    correctAnswer: 0,
    answers: [
      "Restricting access to object data.",
      "Inheriting methods.",
      "Defining a new object.",
      "Exporting a class."
    ]
  },
  {
    question: "Which method adds an item to an array?",
    correctAnswer: 1,
    answers: ["shift()", "push()", "pop()", "add()"]
  },
  {
    question: "What is inheritance?",
    correctAnswer: 3,
    answers: [
      "Sharing class data with variables.",
      "Duplicating code.",
      "Returning multiple results.",
      "Reusing properties and methods of a parent class."
    ]
  },
  {
    question: "Which loop is best for iterating over an array?",
    correctAnswer: 3,
    answers: ["while", "do...while", "for...in", "for"]
  },
  {
    question: "What is the default value of uninitialized variables?",
    correctAnswer: 2,
    answers: ["null", "0", "undefined", "NaN"]
  },
  {
    question: "What is a constructor?",
    correctAnswer: 0,
    answers: [
      "A method for initializing objects.",
      "A loop in JavaScript.",
      "A class.",
      "A reserved variable."
    ]
  },
  {
    question: "Which keyword is used to inherit a class?",
    correctAnswer: 1,
    answers: ["inherit", "extends", "super", "parent"]
  },
  {
    question: "What does `5 == '5'` return?",
    correctAnswer: 1,
    answers: ["false", "true", "NaN", "Error"]
  },
  {
    question: "What is abstraction?",
    correctAnswer: 0,
    answers: [
      "Hiding implementation details.",
      "Restricting access.",
      "Simplifying inheritance.",
      "Building functions."
    ]
  },
  {
    question: "What is `Object.create()` used for?",
    correctAnswer: 2,
    answers: [
      "Parsing JSON.",
      "Cloning an array.",
      "Creating objects with a prototype.",
      "Creating arrays."
    ]
  },
  {
    question: "What will `typeof NaN` return?",
    correctAnswer: 2,
    answers: ["'undefined'", "'null'", "'number'", "'NaN'"]
  },
  {
    question: "How do you define a function?",
    correctAnswer: 2,
    answers: [
      "func x() {}", "define x() {}", "function x() {}", "x => {}"
    ]
  },
  {
    question: "Which method removes the last item of an array?",
    correctAnswer: 2,
    answers: ["shift()", "push()", "pop()", "splice()"]
  },
  {
    question: "How do you check equality without type conversion?",
    correctAnswer: 2,
    answers: ["=", "==", "===", "!=="]
  },
  {
    question: "What is the prototype chain?",
    correctAnswer: 0,
    answers: [
      "Inheritance mechanism in JavaScript.",
      "A data structure.",
      "A type of array.",
      "String concatenation."
    ]
  },
  {
    question: "Which keyword defines a private field?",
    correctAnswer: 1,
    answers: ["_", "#", "private", "sealed"]
  },
  {
    question: "What is a static method?",
    correctAnswer: 3,
    answers: [
      "A global function.",
      "A method attached to instances.",
      "A dynamic method.",
      "A method attached to the class itself."
    ]
  },
  {
    question: "What does `Object.keys()` return?",
    correctAnswer: 0,
    answers: [
      "An array of keys.", "Object values.", "Object prototype.", "Object methods."
    ]
  },
  {
    question: "What will `console.log([] == [])` return?",
    correctAnswer: 0,
    answers: ["false", "true", "undefined", "Error"]
  },
  {
    question: "How do you declare a private field?",
    correctAnswer: 0,
    answers: ["#field", "private field", "_field", "field"]
  },
  {
    question: "What will `5 + '5'` return?",
    correctAnswer: 1,
    answers: ["10", "'55'", "NaN", "Error"]
  },
  {
    question: "What does `Array.isArray()` check?",
    correctAnswer: 0,
    answers: [
      "If a value is an array.",
      "If a value is iterable.",
      "If a value is null.",
      "If a value is a string."
    ]
  },
  {
    question: "What does `console.log(this)` print?",
    correctAnswer: 2,
    answers: ["Parent object.", "Undefined.", "Depends on the context.", "Error."]
  },
  {
    question: "Which loop guarantees one execution?",
    correctAnswer: 0,
    answers: ["do...while", "for", "while", "for...of"]
  },
  {
    question: "What is method overriding?",
    correctAnswer: 0,
    answers: [
      "Redefining a parent method in a child class.",
      "Accessing parent methods.",
      "Using global functions.",
      "Executing methods in order."
    ]
  },
  {
    question: "What will `console.log(0 === false)` return?",
    correctAnswer: 0,
    answers: ["false", "true", "undefined", "NaN"]
  },
  {
    question: "What does the `length` property of an array return?",
    correctAnswer: 0,
    answers: ["Number of elements.", "Array keys.", "Array methods.", "Object size."]
  },
  {
    question: "Which operator combines objects?",
    correctAnswer: 1,
    answers: ["concat", "spread (...)", "merge", "reduce"]
  },
  {
    question: "What is `bind()` used for?",
    correctAnswer: 0,
    answers: [
      "Set `this` context of a function.",
      "Clone functions.",
      "Freeze objects.",
      "Define methods."
    ]
  }
];


var stepHistory = [];
var step;
var chance = 0;
var score = 0;
var timeIN = 30 
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
