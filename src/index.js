const quizContainer = document.getElementById(`quiz`);
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
//let answerOptions = []

let i = -1

submitButton.addEventListener("click", function(){
    if (i <= 8) {
    quizContainer.innerHTML = " "
    submitButton.innerHTML = "Submit"
    i++
    buildQuiz(i)
    // } else {
    //   //quizContainer.innerHTML = " "
    //   collectAnswers(answerOptions)
    }
  })

function buildQuiz(i) {
  
  let h2 = document.createElement("h2")
  h2.innerText = allQuestions[i].number + "." + allQuestions[i].question;
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




















// fetch("http://localhost:3001/questions")
// .then(function(response) {
//   return response.json();
// })
// .then(function(json){
//     let questionArray = []
//     questionArray.push(json)
//     console.log(questionArray)
//     allQuestions = questionArray
//     buildQuiz(allQuestions)
// })



// function buildQuiz(allQuestions) {
//     for (i = 0; i < allQuestions.length; i++) {
//          let newQuestion = allQuestions[0][i]["question"];
//          let heading =  document.createElement("h2")
//          heading.innerHTML = newQuestion
//          quizContainer.appendChild(heading)

        //  let ol = document.createElement("ol")
        //  ol.setAttribute('type', 'A')
        //  quizContainer.appendChild(ol)
         
         
         
//          let answerA = allQuestions[0][i]["answera"];
//          let answerB = allQuestions[0][i]["answerb"];
//          let answerC = allQuestions[0][i]["answerc"];

//          let answerItema = document.createElement("li")
//          let answerItemb = document.createElement("li")
//          let answerItemc = document.createElement("li")

//          answerItema.innerText = answerA
//          answerItemb.innerText = answerB
//          answerItemc.innerText = answerC
         
//          ol.appendChild(answerItema)
//          ol.appendChild(answerItemb)
//          ol.appendChild(answerItemc)
//     }
// }



