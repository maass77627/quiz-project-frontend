const quizContainer = document.getElementById(`quiz`);
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
let i = 0
//const myAnimals.

const answerItema = document.createElement("li")
const answerItemb = document.createElement("li")
const answerItemc = document.createElement("li")
const allAnswers = []

submitButton.addEventListener("click", function(){

    quizContainer.innerHTML = " "
    submitButton.innerHTML = "Submit"
    i++
    buildQuiz(i)
  })


function buildQuiz(num) {
    // for (i=0; i < myQuestions.length; i++) {

    let newQuestion = myQuestions[num].question
    let heading = document.createElement("h2")
    heading.innerHTML = newQuestion
    quizContainer.appendChild(heading)


    let ol = document.createElement("ol")
    ol.setAttribute('type', 'A')
    quizContainer.appendChild(ol)


    let answerA = myQuestions[num].answers.a;
    let answerB = myQuestions[num].answers.b;
    let answerC = myQuestions[num].answers.c;

    // let answerItema = document.createElement("li")
    // let answerItemb = document.createElement("li")
    // let answerItemc = document.createElement("li")

    answerItema.innerText = answerA
    answerItemb.innerText = answerB
    answerItemc.innerText = answerC

    ol.appendChild(answerItema)
    ol.appendChild(answerItemb)
    ol.appendChild(answerItemc)

    allAnswers.push(answerItema, answerItemb, answerItemc)

    selectAnswers(allAnswers)

  }

  function selectAnswers(allAnswers) {

    for (let a = 0; a < allAnswers.length; a++){

      allAnswers[a].addEventListener("click", function() {
        allAnswers[a].style.color = "red";
        })

    }
  }
    // for (answer of allAnswers) {

  //   answer.addEventListener("click", function() {
  //     answer.style.color = "red";
      
    
  // })

    

 





















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



