const animalHeading = document.getElementById("name");
const animalImage = document.getElementById('myImage');
const animalDescription = document.getElementById('context');
let userAnswers = []

function collectAnswers(answerOptions) {
    
 submitButton.addEventListener("click", function(){

    for (answer of answerOptions) {
    
    if (answer.style.color == "red") {
        console.log(answer)
        userAnswers.push(answer)
        answer.style.color = "blue"
    }
}
    })
    
}

    









// submitButton.addEventListener("click", function(){
//         if 
    
//   })

// function calculations(array) {



