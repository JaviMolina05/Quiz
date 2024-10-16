import './style.css'

const body = document.querySelector("body");
let div1 = document.createElement("div");
div1.setAttribute("class", "container");
body.appendChild(div1);

let h2 = document.createElement("h2");
let p = document.createElement("p");
let ul = document.createElement("ul");
let div2 = document.createElement("div");
let questionCounter = 0;
/*
const questions = [
  'What is the capital of France?',
  'What is the longest river in the world?',
  'Who wrote Romeo and Juliet',
  'How many planets have our Solar System'
]*/
const quiz = [{
  preguntas: 'What is the capital of France?',
  respuestas: ["London",
    "Berlin",
    "París",
    "Madrid"]
},
{
  preguntas: 'What is the longest river in the world?',
  respuestas: ["Amazonas",
  "Nilo",
  "Yangstese",
  "Miño"]
},
{
  preguntas: 'Who wrote Romeo and Juliet',
  respuestas: ["Jane Austen",
  "Cervantes",
  "William Shakerpeare",
  "Charles Dickens"]
},
{
  preguntas: 'How many planets have our Solar System',
  respuestas: ["7",
  "8",
  "9",
  "10"]
}]
h2.textContent = 'Quiz Question';

ul.setAttribute("class", "container-answers");

div1.appendChild(h2);
div1.appendChild(p);
div1.appendChild(ul);
div1.appendChild(div2);

let li = document.createElement("li");
let button = document.createElement("button");
button.setAttribute("class", "answer-btn");
/*
const answers = [[
  "London",
  "Berlin",
  "París",
  "Madrid"
],
[
  "Amazonas",
  "Nilo",
  "Yangstese",
  "Miño"
],
[
  "Jane Austen",
  "Cervantes",
  "William Shakerpeare",
  "Charles Dickens"
],
[
  "7",
  "8",
  "9",
  "10"
]]
*/
function respuestas(indice) {
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  quiz[indice].respuestas.forEach(answer => {
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.setAttribute("class", "answer-btn");
    button.textContent = answer;
    ul.appendChild(li.appendChild(button))
  });
}

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

respuestas(questionCounter);

/*
let btn = document.querySelectorAll('.footer-btn');
let buttonPreview = btn[0];
let buttonNext = btn[1];


buttonNext.addEventListener('click', ()=>{
  index++;
  p.textContent = preguntas[index];
  if (index == 3){
    buttonNext.setAttribute('disabled', true);
  } 
  if (index < 3){
    buttonNext.setAttribute('disabled', false);
  }
})
buttonPreview.addEventListener('click', ()=>{
  index--;
  p.textContent = preguntas[index];
  
})
console.log(index);
*/
//Funcionalidad botones

let footerBtns = document.querySelectorAll(".footer-btn");
let btnPreview = footerBtns[0];
let btnNext = footerBtns[1];
// Primer inicio de quiz
if (questionCounter == 0) {
  btnPreview.disabled = true;
  p.textContent = quiz[questionCounter].preguntas;
}
//Evento de botón Next
btnNext.addEventListener("click", () => {
  if (questionCounter == 0) {
    btnPreview.disabled = false;
  }
  questionCounter++;
  respuestas(questionCounter);
  p.textContent = quiz[questionCounter].preguntas;
  if (questionCounter === quiz.length - 1) {
    btnNext.disabled = true;
  }
})
//Evento de botón preview
btnPreview.addEventListener("click", () => {
  if (questionCounter === quiz.length - 1) {
    btnNext.disabled = false;
  }
  questionCounter--;
  respuestas(questionCounter);
  p.textContent = quiz[questionCounter].preguntas;
  if (questionCounter === quiz.length - 1) {
    btnPreview.disabled = true;
  }
})

console.log(questionCounter);
