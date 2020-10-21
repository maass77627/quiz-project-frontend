const quizContainer = document.getElementById(`quiz`);
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

let i = 0

// let A = allQuestions[i].answera
// let B = allQuestions[i].answerb
// let C = allQuestions[i].answerc

//buildQuiz(i)

// const answerItema = document.createElement("li")
// const answerItemb = document.createElement("li")
// const answerItemc = document.createElement("li")
// const allAnswers = []

submitButton.addEventListener("click", function(){

    quizContainer.innerHTML = " "
    submitButton.innerHTML = "Submit"
    //i++
    buildQuiz(i)
  })


// function buildQuiz(num) {
//     // for (i=0; i < myQuestions.length; i++) {

//     let newQuestion = myQuestions[num].question
//     let heading = document.createElement("h2")
//     heading.innerHTML = newQuestion
//     quizContainer.appendChild(heading)


//     let ol = document.createElement("ol")
//     ol.setAttribute('type', 'A')
//     quizContainer.appendChild(ol)


//     let answerA = myQuestions[num].answers.a;
//     let answerB = myQuestions[num].answers.b;
//     let answerC = myQuestions[num].answers.c;

//     answerItema.innerText = answerA
//     answerItemb.innerText = answerB
//     answerItemc.innerText = answerC

//     ol.appendChild(answerItema)
//     ol.appendChild(answerItemb)
//     ol.appendChild(answerItemc)

//     allAnswers.push(answerItema, answerItemb, answerItemc)

//     selectAnswers(allAnswers)

//   }

//   function selectAnswers(allAnswers) {

//     let A = allAnswers[0]
//     let B = allAnswers[1]
//     let C = allAnswers[2]


//     A.addEventListener("click", function(){
//     B.style.color = "blue"
//     C.style.color = "blue"
//     A.style.color = "red"
//     })

//     A.addEventListener("mouseover", function(){
//       A.style.color = "yellow"
      
//       })

//       B.addEventListener("click", function(){
//       A.style.color = "blue"
//       C.style.color = "blue"
//       B.style.color = "red"
//       }) 

//       B.addEventListener("mouseover", function(){
//         B.style.color = "yellow"
//         }) 

//       C.addEventListener("click", function(){
//         A.style.color = "blue"
//         B.style.color = "blue"
//         C.style.color = "red"
//     })
//     C.addEventListener("mouseover", function(){
//       C.style.color = "yellow"
//   })

//   collectAnswers(allAnswers)
// }

    
//     let A = allAnswers[0]
//  ]  let B = allAnswers[1]
//     let C = allAnswers[2]

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
  BB.innerText = B
  CC.innerText = C
  let ol = document.createElement("ol")
  ol.setAttribute('type', 'A')
  quizContainer.appendChild(ol)

  
  ol.appendChild(AA)
  ol.appendChild(BB)
  ol.appendChild(CC)

  i++

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



