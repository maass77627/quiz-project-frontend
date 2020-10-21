const animalHeading = document.getElementById("name");
const animalImage = document.getElementById('myImage');
const animalDescription = document.getElementById('context');

function collectAnswers(alltAnsers) {
    let userAnswers = []
submitButton.addEventListener("click", function(){
    

    for (answer of alltAnsers) {
    if (answer.style.color == "red") {
        userAnswers.push(answer)
    }
    }

    })
    console.log(userAnswers)
}









// submitButton.addEventListener("click", function(){
//         if 
    
//   })

// function calculations(array) {



// }