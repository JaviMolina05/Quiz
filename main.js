import './style.css'

const body = document.querySelector("body");
let div1 = document.createElement("div");
div1.setAttribute("class", "container");
body.appendChild(div1);

let h2 = document.createElement("h2");
let p = document.createElement("p");
let ul = document.createElement("ul");
let div2 = document.createElement("div");

h2.textContent = 'Quiz Question';
p.textContent = 'What is the capital of France';
ul.setAttribute("class", "container-answers");

div1.appendChild(h2);
div1.appendChild(p);
div1.appendChild(ul);
div1.appendChild(div2);

let li = document.createElement("li");
let button = document.createElement("button");
button.setAttribute("class", "answer-btn");
const answers = [ 
  "London",
  "Berlin",
  "París",
  "Madrid"
]

answers.forEach(answer => {
  let li = document.createElement("li");
  let button = document.createElement("button");
  button.setAttribute("class", "answer-btn");
  button.textContent = answer;
  ul.appendChild(li.appendChild(button))
});

div2.setAttribute("class", "container-footer");

const answers2 = [ 
  "Preview",
  "Next"
]

answers2.forEach(answer2 => {
  let buttonfooter = document.createElement("button");
  buttonfooter.setAttribute("class", "footer-btn");
  buttonfooter.textContent = answer2;
  div2.appendChild(buttonfooter);
});
//