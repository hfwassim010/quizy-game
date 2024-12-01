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
    question: "What is polymorphism in Object-Oriented Programming?",
    correctAnswer: 2,
    answers: [
      "Restricting access to object properties.",
      "Inheriting properties from another class.",
      "The ability of a method to behave differently based on the object that calls it.",
      "The process of overriding the parent class constructor."
    ]
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
    question: "What will the following code output?\n\nclass Parent {\n  constructor() {\n    this.name = 'Parent';\n  }\n  sayHello() {\n    return `Hello from ${this.name}`;\n  }\n}\n\nclass Child extends Parent {\n  constructor() {\n    super();\n    this.name = 'Child';\n  }\n}\n\nconst instance = new Child();\nconsole.log(instance.sayHello());",
    correctAnswer: 3,
    answers: [
      "Hello from Parent",
      "Hello from undefined",
      "SyntaxError: super must be called",
      "Hello from Child"
    ]
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
    question: "What will be the output of the following code?\n\nlet sum = 0;\nfor (let i = 1; i <= 3; i++) {\n  sum += i;\n}\nconsole.log(sum);",
    correctAnswer: 0,
    answers: ["6", "3", "1", "undefined"]
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
    question: "What type of loop would be most appropriate for iterating through an array?\n",
    correctAnswer: 2,
    answers: ["while", "do...while", "for", "none"]
  },
  {
    question: "What is the result of `5 + '5'` in JavaScript?",
    correctAnswer: 2,
    answers: ["'10'", "'55'", "NaN", "Error"]
  },
  {
    question: "What will the following code output?\n\nclass BankAccount {\n  #balance = 0;\n  constructor(initialBalance) {\n    this.#balance = initialBalance;\n  }\n  getBalance() {\n    return this.#balance;\n  }\n}\n\nconst account = new BankAccount(100);\nconsole.log(account.getBalance());\nconsole.log(account.#balance);",
    correctAnswer: 2,
    answers: [
      "100, undefined",
      "100, null",
      "100, SyntaxError",
      "undefined, undefined"
    ]
  },
  {
    question: "What does `null == undefined` return?",
    correctAnswer: 1,
    answers: ["true", "false", "undefined", "null"]
  },
  {
    question: "What will the following code output?\n\nlet i = 0;\nwhile (i < 3) {\n  console.log(i);\n  i++;\n}",
    correctAnswer: 1,
    answers: ["0 1", "0 1 2", "3", "undefined"]
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
    question: "How many times will the loop execute?\n\nfor (let i = 0; i < 5; i += 2) {\n  console.log(i);\n}",
    correctAnswer: 2,
    answers: ["2", "3", "4", "5"]
  },
  {
    question: "What is the correct syntax to define a JavaScript function?",
    correctAnswer: 1,
    answers: [
      "functionName() => {}",
      "function functionName() {}",
      "function functionName {}",
      "function function#Name() {}"
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
    question: "Which statement best describes the difference between polymorphism and abstraction?",
    correctAnswer: 1,
    answers: [
      "Polymorphism is about data hiding, while abstraction is about reusability.",
      "Polymorphism deals with behavior across multiple objects, while abstraction focuses on exposing only essential features.",
      "Abstraction is used for inheritance, while polymorphism is used for encapsulation.",
      "Polymorphism allows multiple classes to inherit, while abstraction prevents it."
    ]
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
    question: "What is the key difference between a `while` loop and a `do...while` loop?",
    correctAnswer: 0,
    answers: ["`do...while` always executes the body at least once", "They are identical", "`while` is faster", "`do...while` is only for infinite loops"]
  },
  {
    question: "What will the following code output?\n\nclass Vehicle {\n  constructor(type) {\n    this.type = type;\n  }\n  describe() {\n    return `This is a ${this.type}.`;\n  }\n}\n\nclass Car extends Vehicle {\n  constructor(brand) {\n    super('Car');\n    this.brand = brand;\n  }\n  describe() {\n    return `${super.describe()} It is a ${this.brand}.`;\n  }\n}\n\nconst myCar = new Car('Toyota');\nconsole.log(myCar.describe());",
    correctAnswer: 0,
    answers: [
      "This is a Car. It is a Toyota.",
      "This is a Vehicle. It is a Toyota.",
      "Error: super() must be called before accessing 'this'",
      "This is a Toyota."
    ]
  },
  {
    question: "Which method is used to find the index of an element in an array?",
    correctAnswer: 2,
    answers: ["indexOf()", "findIndex()", "lastIndexOf()", "find()"]
  },
  {
    question: "What will `console.log('a' + +'b')` output?",
    correctAnswer: 3,
    answers: ["'aNaN'", "'ab'", "'NaN'", "Error"]
  },
  {
    question: "How do you convert a string into a number in JavaScript?",
    correctAnswer: 1,
    answers: ["parseInt(string)", "Number(string)", "parseFloat(string)", "string.toNumber()"]
  },
  {
    question: "What will the following code output?\n\nclass Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n  greet() {\n    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;\n  }\n}\n\nconst person = new Person('Alice', 25);\nconsole.log(person.greet());",
    correctAnswer: 0,
    answers: [
      "Hello, my name is Alice and I am 25 years old.",
      "Hello, my name is undefined and I am undefined years old.",
      "Error",
      "Hello, my name is Alice."
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
