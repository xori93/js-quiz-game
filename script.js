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
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const scoreElement = document.getElementById("score");
const progressBar = document.getElementById("progress-bar");
const explanation = document.getElementById("explanation");

// Optional sounds
const correctSound = new Audio("mixkit-correct.wav");
const wrongSound = new Audio("mixkit-wrong.wav");
// correctSound.play().catch(e => console.log("Sound blocked:", e));
// wrongSound.play().catch(e => console.log("Sound blocked:", e));

// Quiz data
const questions = [
  {
    question: "What does JS stand for?",
    answers: ["JavaSource", "JavaScript", "JustScript", "JScript"],
    correct: "JavaScript",
    explanation: "JS stands for JavaScript."
  },
  {
    question: "Which keyword is used to declare a variable?",
    answers: ["var", "let", "const", "All of the above"],
    correct: "All of the above",
    explanation: "var, let, and const can all be used to declare variables in JavaScript."
  },
  {
    question: "What will this return? typeof []",
    answers: ["array", "object", "list", "undefined"],
    correct: "object",
    explanation: "Arrays are a type of object in JavaScript, so typeof [] returns 'object'."
  },
  {
    question: "Which method converts JSON to a JavaScript object?",
    answers: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
    correct: "JSON.parse()",
    explanation: "JSON.parse() changes a JSON string into a JavaScript object."
  },
  {
    question: "What is the output of: 2 + '2' ?",
    answers: ["4", "22", "NaN", "undefined"],
    correct: "22",
    explanation: "Because one value is a string, JavaScript joins them together as text."
  },
  {
    question: "Which array method adds an item to the end?",
    answers: ["push()", "pop()", "shift()", "unshift()"],
    correct: "push()",
    explanation: "push() adds a new item to the end of an array."
  },
  {
    question: "Which method removes the last item from an array?",
    answers: ["push()", "pop()", "shift()", "slice()"],
    correct: "pop()",
    explanation: "pop() removes the last item from an array."
  },
  {
    question: "Which method removes the first item from an array?",
    answers: ["shift()", "pop()", "unshift()", "map()"],
    correct: "shift()",
    explanation: "shift() removes the first item from an array."
  },
  {
    question: "What does '===' mean in JavaScript?",
    answers: ["Loose equality", "Strict equality", "Assignment", "Comparison only for numbers"],
    correct: "Strict equality",
    explanation: "=== checks both value and data type."
  },
  {
    question: "What will console.log(typeof 'hello') return?",
    answers: ["string", "text", "object", "undefined"],
    correct: "string",
    explanation: "Text values in JavaScript are strings."
  },
  {
    question: "Which of these is a JavaScript data type?",
    answers: ["number", "string", "boolean", "All of the above"],
    correct: "All of the above",
    explanation: "number, string, and boolean are all JavaScript data types."
  },
  {
    question: "Which symbol is used for comments in JavaScript (single line)?",
    answers: ["//", "##", "<!-- -->", "**"],
    correct: "//",
    explanation: "// is used for single-line comments in JavaScript."
  },
  {
    question: "Which method loops through an array?",
    answers: ["forEach()", "parse()", "create()", "assign()"],
    correct: "forEach()",
    explanation: "forEach() runs code for each item in an array."
  },
  {
    question: "What does 'NaN' mean?",
    answers: ["Not a Name", "Not a Number", "Null and None", "New and Next"],
    correct: "Not a Number",
    explanation: "NaN means Not a Number."
  },
  {
    question: "Which keyword creates a constant variable?",
    answers: ["let", "var", "const", "static"],
    correct: "const",
    explanation: "const creates a variable that cannot be reassigned."
  },
  {
    question: "Which operator is used to assign a value?",
    answers: ["==", "===", "=", "!="],
    correct: "=",
    explanation: "= is the assignment operator."
  },
  {
    question: "What does 'document.getElementById()' do?",
    answers: ["Creates an element", "Selects an element", "Deletes an element", "Styles an element"],
    correct: "Selects an element",
    explanation: "document.getElementById() selects an HTML element by its id."
  },
  {
    question: "Which method adds an item to the beginning of an array?",
    answers: ["push()", "unshift()", "shift()", "slice()"],
    correct: "unshift()",
    explanation: "unshift() adds an item to the beginning of an array."
  },
  {
    question: "What will Boolean(0) return?",
    answers: ["true", "false", "null", "undefined"],
    correct: "false",
    explanation: "0 is a falsy value, so Boolean(0) returns false."
  },
  {
    question: "Which keyword is used for functions?",
    answers: ["func", "function", "define", "method"],
    correct: "function",
    explanation: "The function keyword is used to create a function."
  },
  {
    question: "Which event runs when a button is clicked?",
    answers: ["hover", "submit", "click", "load"],
    correct: "click",
    explanation: "The click event runs when a button is clicked."
  },
  {
    question: "What is the output of: console.log([] + []) ?",
    answers: ["''", "'[]'", "0", "undefined"],
    correct: "''",
    explanation: "Two empty arrays become empty strings when converted and added together."
  },
  {
    question: "What is the output of: console.log([] == ![])?",
    answers: ["true", "false", "TypeError", "undefined"],
    correct: "true",
    explanation: "Because of type coercion, [] == ![] becomes true."
  },
  {
    question: "What does 'use strict' do in JS?",
    answers: ["Enables ES6", "Prevents global variable leaks", "Enables async/await", "Nothing"],
    correct: "Prevents global variable leaks",
    explanation: "'use strict' helps catch mistakes and prevents certain unsafe behavior."
  },
  {
    question: "What is the output of: console.log(0.1 + 0.2 === 0.3)?",
    answers: ["true", "false", "NaN", "TypeError"],
    correct: "false",
    explanation: "Because of floating-point precision, 0.1 + 0.2 is not exactly 0.3."
  },
  {
    question: "What is closure in JS?",
    answers: ["Function with memory", "Variable scope", "Global function", "Anonymous function"],
    correct: "Function with memory",
    explanation: "A closure is a function that remembers variables from where it was created."
  },
  {
    question: "What is hoisting?",
    answers: ["Variables are undefined", "Function & var declarations are moved to top", "Block scope", "None of the above"],
    correct: "Function & var declarations are moved to top",
    explanation: "Hoisting means declarations are treated as if they are moved to the top of their scope."
  },
  {
    question: "Which is true about 'this' in arrow functions?",
    answers: ["Points to global object", "Points to enclosing scope", "Points to function itself", "Undefined"],
    correct: "Points to enclosing scope",
    explanation: "Arrow functions do not get their own this. They use the surrounding scope's this."
  },
  {
    question: "What is the output: console.log(typeof NaN)?",
    answers: ["number", "NaN", "undefined", "object"],
    correct: "number",
    explanation: "NaN is still considered a number in JavaScript."
  },
  {
    question: "What does bind() do?",
    answers: ["Calls function", "Changes this permanently", "Binds variable", "Throws error"],
    correct: "Changes this permanently",
    explanation: "bind() creates a new function with this set to a chosen value."
  },
  {
    question: "What is the difference between var, let, const?",
    answers: ["Scope & mutability", "Only type", "Hoisting", "Nothing"],
    correct: "Scope & mutability",
    explanation: "They differ in scope rules and whether reassignment is allowed."
  },
  {
    question: "Which runs first: setTimeout(fn, 0) or Promise.resolve().then(fn)?",
    answers: ["setTimeout", "Promise.then", "They run together", "Depends on browser"],
    correct: "Promise.then",
    explanation: "Promise callbacks run before setTimeout callbacks in the event loop."
  },
  {
    question: "What is the event loop responsible for?",
    answers: ["Memory management", "Async execution order", "Function compilation", "DOM rendering"],
    correct: "Async execution order",
    explanation: "The event loop helps JavaScript handle asynchronous tasks in the right order."
  },
  {
    question: "What is the difference between call and apply?",
    answers: ["call takes args array, apply takes args separately", "call binds this, apply doesn’t", "call takes args separately, apply takes args array", "No difference"],
    correct: "call takes args separately, apply takes args array",
    explanation: "call() passes arguments one by one, while apply() passes them in an array."
  },
  {
    question: "What will this output? console.log([] == 0)?",
    answers: ["true", "false", "TypeError", "undefined"],
    correct: "true",
    explanation: "Because of type coercion, [] is converted and compared to 0."
  },
  {
    question: "What will this output? console.log(null == undefined)?",
    answers: ["true", "false", "TypeError", "NaN"],
    correct: "true",
    explanation: "With loose equality, null and undefined are equal to each other."
  },
  {
    question: "What will this output? console.log(null === undefined)?",
    answers: ["true", "false", "TypeError", "NaN"],
    correct: "false",
    explanation: "Strict equality checks type too, and null is not the same type as undefined."
  },
  {
    question: "Which method merges objects in ES6?",
    answers: ["Object.assign()", "Object.merge()", "Object.combine()", "Object.concat()"],
    correct: "Object.assign()",
    explanation: "Object.assign() can copy properties from one object into another."
  },
  {
    question: "What does Object.freeze() do?",
    answers: ["Prevents modification", "Deletes object", "Copies object", "Throws error"],
    correct: "Prevents modification",
    explanation: "Object.freeze() stops an object from being changed."
  },
  {
    question: "What is the output of: console.log(typeof function(){})?",
    answers: ["function", "object", "undefined", "error"],
    correct: "function",
    explanation: "Functions have the type 'function' in JavaScript."
  },
  {
    question: "Difference between == and ===?",
    answers: ["Type coercion vs strict", "Nothing", "Both compare value only", "Both compare type only"],
    correct: "Type coercion vs strict",
    explanation: "== allows type conversion, while === requires both value and type to match."
  },
  {
    question: "What is the output: console.log([1,2,3].map(x => x * 2))?",
    answers: ["[2,4,6]", "[1,2,3]", "undefined", "TypeError"],
    correct: "[2,4,6]",
    explanation: "map() creates a new array with each value doubled."
  },
  {
    question: "What is the output: console.log([1,2,3].filter(x => x>1))?",
    answers: ["[2,3]", "[1,2,3]", "[1]", "undefined"],
    correct: "[2,3]",
    explanation: "filter() keeps only the values greater than 1."
  },
  {
    question: "What is the output: console.log([1,2,3].reduce((a,b)=>a+b,0))?",
    answers: ["6", "123", "undefined", "Error"],
    correct: "6",
    explanation: "reduce() adds all the numbers together and returns 6."
  },
  {
    question: "What is IIFE?",
    answers: ["Immediately Invoked Function Expression", "Internal Function Expression", "Interface Function", "Invalid Function Expression"],
    correct: "Immediately Invoked Function Expression",
    explanation: "An IIFE is a function that runs immediately after it is created."
  },
  {
    question: "Difference between null and undefined?",
    answers: ["null is assigned, undefined is missing", "Both same", "null is object, undefined is string", "None"],
    correct: "null is assigned, undefined is missing",
    explanation: "null is an intentional empty value, while undefined usually means no value was given."
  },
  {
    question: "What is NaN compared to itself?",
    answers: ["true", "false", "NaN", "undefined"],
    correct: "false",
    explanation: "NaN is the only value in JavaScript that is not equal to itself."
  },
  {
    question: "Which is true for shallow copy?",
    answers: ["Nested objects shared", "Entire object copied", "New references everywhere", "Cannot copy objects"],
    correct: "Nested objects shared",
    explanation: "A shallow copy copies the top level, but nested objects still share references."
  },
  {
    question: "Which is true for deep copy?",
    answers: ["Entire object copied", "Reference shared", "Cannot copy", "Only arrays copied"],
    correct: "Entire object copied",
    explanation: "A deep copy creates fully separate nested data too."
  },
  {
    question: "Which is true for arrow function syntax?",
    answers: ["No this binding", "Creates new this", "Cannot return", "No parameters"],
    correct: "No this binding",
    explanation: "Arrow functions do not create their own this."
  },
  {
    question: "What does 'new' keyword do?",
    answers: ["Creates object instance", "Runs function", "Deletes object", "Throws error"],
    correct: "Creates object instance",
    explanation: "new creates an instance from a constructor or class."
  },
  {
    question: "Which array method returns index?",
    answers: ["map()", "findIndex()", "filter()", "reduce()"],
    correct: "findIndex()",
    explanation: "findIndex() returns the position of the first matching item."
  },
  {
    question: "What is the output: console.log(typeof Symbol('a'))?",
    answers: ["symbol", "string", "object", "undefined"],
    correct: "symbol",
    explanation: "Symbols have the type 'symbol'."
  },
  {
    question: "What is the difference between let and const?",
    answers: ["const cannot reassign", "Scope difference", "Both same", "Const is block-scoped only"],
    correct: "const cannot reassign",
    explanation: "A const variable cannot be reassigned after it is created."
  },
  {
    question: "What is the output: console.log(+'2' + 2)?",
    answers: ["4", "22", "NaN", "undefined"],
    correct: "4",
    explanation: "The + before '2' converts it into a number, so 2 + 2 becomes 4."
  },
  {
    question: "What does 'async' keyword do?",
    answers: ["Marks function as async returning promise", "Pauses function", "Makes sync", "Blocks loop"],
    correct: "Marks function as async returning promise",
    explanation: "async makes a function return a promise."
  },
  {
    question: "What does 'await' do?",
    answers: ["Pauses until promise resolves", "Creates promise", "Blocks everything", "Converts to sync"],
    correct: "Pauses until promise resolves",
    explanation: "await waits for a promise to finish inside an async function."
  },
  {
    question: "What is a generator function?",
    answers: ["Function returning iterator", "Function returning promise", "Async function", "Regular function"],
    correct: "Function returning iterator",
    explanation: "A generator function returns an iterator and can pause with yield."
  },
  {
    question: "Which method converts string to number?",
    answers: ["parseInt()", "Number()", "Both", "None"],
    correct: "Both",
    explanation: "Both parseInt() and Number() can convert strings into numbers."
  },
  {
    question: "Which operator returns first truthy?",
    answers: ["&&", "||", "??", "!"],
    correct: "||",
    explanation: "The || operator returns the first truthy value."
  },
  {
    question: "Which operator returns first defined?",
    answers: ["&&", "||", "??", "!"],
    correct: "??",
    explanation: "The ?? operator returns the first value that is not null or undefined."
  },
  {
    question: "What is the output: console.log(typeof undefined)?",
    answers: ["undefined", "null", "NaN", "object"],
    correct: "undefined",
    explanation: "The type of undefined is 'undefined'."
  },
  {
    question: "Which method removes whitespace from start/end?",
    answers: ["trim()", "slice()", "replace()", "strip()"],
    correct: "trim()",
    explanation: "trim() removes spaces from the beginning and end of a string."
  },
  {
    question: "What is the output: console.log(!!'false')?",
    answers: ["true", "false", "NaN", "undefined"],
    correct: "true",
    explanation: "A non-empty string is truthy, so !!'false' becomes true."
  },
  {
    question: "Which method merges promises sequentially?",
    answers: ["Promise.all()", "async/await loop", "Promise.race()", "Promise.resolve()"],
    correct: "async/await loop",
    explanation: "Using async/await inside a loop lets promises run one after another."
  },
  {
    question: "What is the output: console.log([] === [])?",
    answers: ["true", "false", "TypeError", "undefined"],
    correct: "false",
    explanation: "Different arrays are different references, so strict equality returns false."
  },
  {
    question: "Which creates private variables in ES6 class?",
    answers: ["#", "_", "private", "var"],
    correct: "#",
    explanation: "The # syntax is used for private class fields."
  }
];

// State
let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let autoNextTimeOut = 0

// Start quiz
function startQuiz() {
  currentQuestion = 0;
  score = 0;
  userAnswers = [];
  clearTimeout(autoNextTimeOut);
  nextBtn.textContent = "Next"
  // nextBtn.style.display = "none";
  scoreElement.textContent = `Score: ${score}`;
  showQuestion();
}

// Show question
function showQuestion() {
  reset();
  const quest = questions[currentQuestion];
  questionElement.textContent = quest.question;

  quest.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.className = "answer-btn";
    button.addEventListener("click", () => {
      if (userAnswers[currentQuestion] === undefined) {
        selectAnswer(button, answer)
      } 
    });
    answersElement.appendChild(button)
  });

if (userAnswers[currentQuestion] !== undefined) {
  restorePreviousAnswers();
}

// added styling to the back button
backBtn.style.display = currentQuestion === 0 ? "none" : "inline-block";

  // Update progress bar
  const progress = ((currentQuestion) / questions.length) * 100;
  progressBar.style.width = `${progress}%`;
}

// Select answer
function selectAnswer(button, answer) {
  const quest = questions[currentQuestion];
  userAnswers[currentQuestion] = answer;
  nextBtn.style.display = "inline-block";

  // Disable all buttons
  Array.from(answersElement.children).forEach(btn => btn.disabled = true);

  // Correct/wrong feedback
  if (answer === quest.correct) {
    score++;
    scoreElement.textContent = `Score: ${score}`;
    button.classList.add("correct");
    // correctSound.play();
  } else {
    button.classList.add("wrong");
    wrongSound.play();
    // highlight correct answer
    Array.from(answersElement.children).forEach(btn => {
      if (btn.textContent === quest.correct) btn.classList.add("correct");
    });
  }
  explanation.textContent = quest.explanation

  // Delay before next question
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) showQuestion();
    else showFinalScore();
  }, 6000);
}

function restorePreviousAnswers() {
  const quest = questions[currentQuestion];
  const saved = userAnswers[currentQuestion];

  Array.from(answersElement.children).forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === saved) {
      btn.classList.add(saved === quest.correct ? "correct" : "wrong");
    }
    if (btn.textContent === quest.correct) {
      btn.classList.add("correct");
    }
  });
  explanation.textContent = quest.explanation;
}


// Reset UI
function reset() {
  // clear time out and pass auto next timeout
  // updated the explanationElement text content to an empty string
  answersElement.innerHTML = "";
   backBtn.style.display = "none";
   nextBtn.style.display = userAnswers[currentQuestion] !== undefined ? "inline-block" : "none";
   clearTimeout(autoNextTimeOut);
   explanation.textContent = "";
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

// Back button 
backBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
})
// Next button restart
// nextBtn.addEventListener("click", () => {
//   if (currentQuestion < questions.length - 1) {
//     currentQuestion++;
//     showQuestion();
//   }
// });

nextBtn.addEventListener("click", () => {
  if (nextBtn.textContent === "Restart Quiz") {
    startQuiz(); // ← restart if on final screen
  } else if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  }
});


// Initialize
startQuiz();

// textContent - You can add or update text inside the element
{/* <p>Bye</p> */}

// innerHTML - You can add more elements inside the one you already have in your HTML DOC and also updates text inside the element just like textContent.
// document.createElement("div")




// explainantion to the correct answers
// add a go back button
//add longer time when quiz ia answered



//going to keep track of the score when we go back
//need to add the explantion