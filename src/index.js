const quizContainer = document.getElementById(`quiz`);
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
let i = -1

submitButton.addEventListener("click", function(){
    if (i <= 8) {
    quizContainer.innerHTML = " "
    submitButton.innerHTML = "Submit"
    i++
    buildQuiz(i)
    }
  })

function buildQuiz(i) {
  
  let h2 = document.createElement("h2")
  h2.innerText = allQuestions[i].number + ". " + allQuestions[i].question;
  quizContainer.appendChild(h2)

  let allAnswers = []
  let A = allQuestions[i].answera
  let B = allQuestions[i].answerb
  let C = allQuestions[i].answerc
  allAnswers.push(A, B, C)
  
  let AA = document.createElement("li")
  let BB = document.createElement("li")
  let CC = document.createElement("li")
  AA.innerText = A
  AA.id = "1"
  BB.innerText = B
  BB.id = "2"
  CC.innerText = C
  CC.id = "3"
  let ol = document.createElement("ol")
  ol.setAttribute('type', 'A')
  quizContainer.appendChild(ol)

  ol.appendChild(AA)
  ol.appendChild(BB)
  ol.appendChild(CC)

  AA.addEventListener("click", function(){
    BB.style.color = "blue"
    CC.style.color = "blue"
    AA.style.color = "red"
  })

  BB.addEventListener("click", function(){
    CC.style.color = "blue"
    AA.style.color = "blue"
    BB.style.color = "red"
  })

  CC.addEventListener("click", function(){
    AA.style.color = "blue"
    BB.style.color = "blue"
    CC.style.color = "red"
  })
  let answerOptions = []
 answerOptions.push(AA, BB, CC)
 console.log(answerOptions)
 collectAnswers(answerOptions)
}























