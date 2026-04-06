// Arrays of objects
// Tracking index
// Updating UI dynamically


// Render answers as buttons
// Track score
// Go to next question
// Show final score

// DOM elements
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const scoreElement = document.getElementById("score");
const progressBar = document.getElementById("progress-bar");

// Optional sounds
const correctSound = new Audio("correct.mp3"); // add correct.mp3 in project folder
const wrongSound = new Audio("wrong.mp3");

// Quiz data
const questions = [
  { question: "What does JS stand for?", answers: ["JavaSource", "JavaScript", "JustScript", "JScript"], correct: "JavaScript" },
  { question: "Which keyword is used to declare a variable?", answers: ["var", "let", "const", "All of the above"], correct: "All of the above" },
  { question: "What will this return? typeof []", answers: ["array", "object", "list", "undefined"], correct: "object" },
  { question: "Which method converts JSON to a JavaScript object?", answers: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"], correct: "JSON.parse()" },
  { question: "What is the output of: 2 + '2' ?", answers: ["4", "22", "NaN", "undefined"], correct: "22" },
  { question: "Which array method adds an item to the end?", answers: ["push()", "pop()", "shift()", "unshift()"], correct: "push()" },
  // ... add all your other questions here
  {
    question: "Which method removes the last item from an array?",
    answers: ["push()", "pop()", "shift()", "slice()"],
    correct: "pop()"
  },
  {
    question: "Which method removes the first item from an array?",
    answers: ["shift()", "pop()", "unshift()", "map()"],
    correct: "shift()"
  },
  {
    question: "What does '===' mean in JavaScript?",
    answers: ["Loose equality", "Strict equality", "Assignment", "Comparison only for numbers"],
    correct: "Strict equality"
  },
  {
    question: "What will console.log(typeof 'hello') return?",
    answers: ["string", "text", "object", "undefined"],
    correct: "string"
  },
  {
    question: "Which of these is a JavaScript data type?",
    answers: ["number", "string", "boolean", "All of the above"],
    correct: "All of the above"
  },
  {
    question: "Which symbol is used for comments in JavaScript (single line)?",
    answers: ["//", "##", "<!-- -->", "**"],
    correct: "//"
  },
  {
    question: "Which method loops through an array?",
    answers: ["forEach()", "parse()", "create()", "assign()"],
    correct: "forEach()"
  },
  {
    question: "What does 'NaN' mean?",
    answers: ["Not a Name", "Not a Number", "Null and None", "New and Next"],
    correct: "Not a Number"
  },
  {
    question: "Which keyword creates a constant variable?",
    answers: ["let", "var", "const", "static"],
    correct: "const"
  },
  {
    question: "Which operator is used to assign a value?",
    answers: ["==", "===", "=", "!="],
    correct: "="
  },
  {
    question: "What does 'document.getElementById()' do?",
    answers: ["Creates an element", "Selects an element", "Deletes an element", "Styles an element"],
    correct: "Selects an element"
  },
  {
    question: "Which method adds an item to the beginning of an array?",
    answers: ["push()", "unshift()", "shift()", "slice()"],
    correct: "unshift()"
  },
  {
    question: "What will Boolean(0) return?",
    answers: ["true", "false", "null", "undefined"],
    correct: "false"
  },
  {
    question: "Which keyword is used for functions?",
    answers: ["func", "function", "define", "method"],
    correct: "function"
  },
  {
    question: "Which event runs when a button is clicked?",
    answers: ["hover", "submit", "click", "load"],
    correct: "click"
  },


  // 50 Questions

  { question: "What is the output of: console.log([] + []) ?", 
    answers: ["''", "'[]'", "0", "undefined"], 
    correct: "''" 
  },
  { question: "What is the output of: console.log([] == ![])?", 
    answers: ["true", "false", "TypeError", "undefined"], 
    correct: "true" 
  },
  { question: "What does 'use strict' do in JS?", 
    answers: ["Enables ES6", "Prevents global variable leaks", "Enables async/await", "Nothing"], 
    correct: "Prevents global variable leaks" 
  },
  { question: "What is the output of: console.log(0.1 + 0.2 === 0.3)?",
    answers: ["true", "false", "NaN", "TypeError"], 
    correct: "false" 
  },
  { question: "What is closure in JS?", 
    answers: ["Function with memory", "Variable scope", "Global function", "Anonymous function"], 
    correct: "Function with memory" 
  },
  { question: "What is hoisting?", 
    answers: ["Variables are undefined", "Function & var declarations are moved to top", "Block scope", "None of the above"], 
    correct: "Function & var declarations are moved to top" 
  },
  { question: "Which is true about 'this' in arrow functions?", 
    answers: ["Points to global object", "Points to enclosing scope", "Points to function itself", "Undefined"], 
    correct: "Points to enclosing scope" 
  },
  { question: "What is the output: console.log(typeof NaN)?", 
    answers: ["number", "NaN", "undefined", "object"], 
    correct: "number" },
  { question: "What does bind() do?", 
    answers: ["Calls function", "Changes this permanently", "Binds variable", "Throws error"], 
    correct: "Changes this permanently" 
  },
  { question: "What is the difference between var, let, const?", 
    answers: ["Scope & mutability", "Only type", "Hoisting", "Nothing"], correct: "Scope & mutability" 
  },

  { question: "Which runs first: setTimeout(fn, 0) or Promise.resolve().then(fn)?", 
    answers: ["setTimeout", "Promise.then", "They run together", "Depends on browser"], 
    correct: "Promise.then" 
  },
  { question: "What is the event loop responsible for?", 
    answers: ["Memory management", "Async execution order", "Function compilation", "DOM rendering"], 
    correct: "Async execution order" 
  },
  { question: "What is the difference between call and apply?", 
    answers: ["call takes args array, apply takes args separately", "call binds this, apply doesn’t", "call takes args separately, apply takes args array", "No difference"], 
    correct: "call takes args separately, apply takes args array" 
  },
  { question: "What will this output? console.log([] == 0)?", 
    answers: ["true", "false", "TypeError", "undefined"], 
    correct: "true" 
  },
  { question: "What will this output? console.log(null == undefined)?", 
    answers: ["true", "false", "TypeError", "NaN"], 
    correct: "true" 
  },
  { question: "What will this output? console.log(null === undefined)?",   answers: ["true", "false", "TypeError", "NaN"], 
    correct: "false" 
  },
  { question: "Which method merges objects in ES6?", 
    answers: ["Object.assign()", "Object.merge()", "Object.combine()", "Object.concat()"], 
    correct: "Object.assign()" 
  },
  { question: "What does Object.freeze() do?", 
    answers: ["Prevents modification", "Deletes object", "Copies object", "Throws error"], 
    correct: "Prevents modification" 
  },
  { question: "What is the output of: console.log(typeof function(){})?", answers: ["function", "object", "undefined", "error"], 
    correct: "function" 
  },
  { question: "Difference between == and ===?", 
    answers: ["Type coercion vs strict", "Nothing", "Both compare value only", "Both compare type only"], 
    correct: "Type coercion vs strict" 
  },

  { question: "What is the output: console.log([1,2,3].map(x => x * 2))?",     answers: ["[2,4,6]", "[1,2,3]", "undefined", "TypeError"], 
    correct: "[2,4,6]" 
  },
  { question: "What is the output: console.log([1,2,3].filter(x => x>1))?", answers: ["[2,3]", "[1,2,3]", "[1]", "undefined"], 
    correct: "[2,3]" 
  },
  { question: "What is the output: console.log([1,2,3].reduce((a,b)=>a+b,0))?", answers: ["6", "123", "undefined", "Error"], 
    correct: "6" 
  },
  { question: "What is IIFE?", 
    answers: ["Immediately Invoked Function Expression", "Internal Function Expression", "Interface Function", "Invalid Function Expression"], 
    correct: "Immediately Invoked Function Expression" },
  { question: "Difference between null and undefined?", 
    answers: ["null is assigned, undefined is missing", "Both same", "null is object, undefined is string", "None"], 
    correct: "null is assigned, undefined is missing" 
  },
  { question: "What is NaN compared to itself?", 
    answers: ["true", "false", "NaN", "undefined"], 
    correct: "false" 
  },
  { question: "Which is true for shallow copy?", 
    answers: ["Nested objects shared", "Entire object copied", "New references everywhere", "Cannot copy objects"], 
    correct: "Nested objects shared" 
  },
  { question: "Which is true for deep copy?", 
    answers: ["Entire object copied", "Reference shared", "Cannot copy", "Only arrays copied"], 
    correct: "Entire object copied" 
  },
  { question: "Which is true for arrow function syntax?", 
    answers: ["No this binding", "Creates new this", "Cannot return", "No parameters"], 
    correct: "No this binding" 
  },
  { question: "What does 'new' keyword do?", 
    answers: ["Creates object instance", "Runs function", "Deletes object", "Throws error"], 
    correct: "Creates object instance" 
  },
  { question: "Which array method returns index?", 
    answers: ["map()", "findIndex()", "filter()", "reduce()"], 
    correct: "findIndex()" 
  },
  { question: "What is the output: console.log(typeof Symbol('a'))?", 
    answers: ["symbol", "string", "object", "undefined"], 
    correct: "symbol" 
  },
  { question: "What is the difference between let and const?", 
    answers: ["const cannot reassign", "Scope difference", "Both same", "Const is block-scoped only"], 
    correct: "const cannot reassign" 
  },
  { question: "What is the output: console.log(+'2' + 2)?", 
    answers: ["4", "22", "NaN", "undefined"], 
    correct: "4" 
  },
  { question: "What does 'async' keyword do?", 
    answers: ["Marks function as async returning promise", "Pauses function", "Makes sync", "Blocks loop"], 
    correct: "Marks function as async returning promise" 
  },
  { question: "What does 'await' do?", 
    answers: ["Pauses until promise resolves", "Creates promise", "Blocks everything", "Converts to sync"], 
    correct: "Pauses until promise resolves" 
  },
  { question: "What is a generator function?", 
    answers: ["Function returning iterator", "Function returning promise", "Async function", "Regular function"], 
    correct: "Function returning iterator" 
  },
  { question: "Which method converts string to number?", 
    answers: ["parseInt()", "Number()", "Both", "None"], 
    correct: "Both" 
  },
  { question: "Which operator returns first truthy?", 
    answers: ["&&", "||", "??", "!"], 
    correct: "||" 
  },
  { question: "Which operator returns first defined?", 
    answers: ["&&", "||", "??", "!"], 
    correct: "??" 
  },
  { question: "What is the output: console.log(typeof undefined)?", 
    answers: ["undefined", "null", "NaN", "object"], 
    correct: "undefined" 
  },
  { question: "Which method removes whitespace from start/end?", 
    answers: ["trim()", "slice()", "replace()", "strip()"], 
    correct: "trim()" 
  },
  { question: "What is the output: console.log(!!'false')?", 
    answers: ["true", "false", "NaN", "undefined"], 
    correct: "true" 
  },
  { question: "Which method merges promises sequentially?", 
    answers: ["Promise.all()", "async/await loop", "Promise.race()", "Promise.resolve()"], 
    correct: "async/await loop" 
  },
  { question: "What is the output: console.log([] === [])?", 
    answers: ["true", "false", "TypeError", "undefined"], 
    correct: "false" 
  },
  { question: "Which creates private variables in ES6 class?", 
    answers: ["#", "_", "private", "var"], 
    correct: "#" 
  }
];

// State
let currentQuestion = 0;
let score = 0;

// Start quiz
function startQuiz() {
  currentQuestion = 0;
  score = 0;
  scoreElement.textContent = `Score: ${score}`;
  nextBtn.style.display = "none";
  showQuestion();
}

// Show question
function showQuestion() {
  reset();
  const q = questions[currentQuestion];
  questionElement.textContent = q.question;

  q.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.className = "answer-btn";
    button.addEventListener("click", () => selectAnswer(button, answer));
    answersElement.appendChild(button);
  });

  // Update progress bar
  const progress = ((currentQuestion) / questions.length) * 100;
  progressBar.style.width = `${progress}%`;
}

// Reset UI
function reset() {
  answersElement.innerHTML = "";
  nextBtn.style.display = "none";
}

// Select answer
function selectAnswer(button, answer) {
  const q = questions[currentQuestion];

  // Disable all buttons
  Array.from(answersElement.children).forEach(btn => btn.disabled = true);

  // Correct/wrong feedback
  if (answer === q.correct) {
    score++;
    scoreElement.textContent = `Score: ${score}`;
    button.classList.add("correct");
    correctSound.play();
  } else {
    button.classList.add("wrong");
    wrongSound.play();
    // highlight correct answer
    Array.from(answersElement.children).forEach(btn => {
      if (btn.textContent === q.correct) btn.classList.add("correct");
    });
  }

  // Delay before next question
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) showQuestion();
    else showFinalScore();
  }, 800);
}

// Final score
function showFinalScore() {
  questionElement.textContent = getFinalMessage();
  answersElement.innerHTML = "";
  nextBtn.textContent = "Restart Quiz";
  nextBtn.style.display = "block";

  // Fill progress bar
  progressBar.style.width = `100%`;
}

function getFinalMessage() {
  const percent = (score / questions.length) * 100;
  if (percent > 90) return `🔥 Genius! You scored ${score}/${questions.length}`;
  else if (percent > 70) return `👍 Not bad! You scored ${score}/${questions.length}`;
  else return `💀 Try again! You scored ${score}/${questions.length}`;
}

// Next button restart
nextBtn.addEventListener("click", startQuiz);

// Initialize
startQuiz();

// textContent - You can add or update text inside the element
{/* <p>Bye</p> */}

// innerHTML - You can add more elements inside the one you already have in your HTML DOC and also updates text inside the element just like textContent.
// document.createElement("div")




