const animalHeading = document.getElementById("name");
const animalImage = document.getElementById('myImage')//.src;
const animalDescription = document.getElementById('context');
let userAnswers = []
let animalArray = []
let obj = {}, mostFreq = 0, which = [];
let userScore = []

function collectAnswers(answerOptions) {
 submitButton.addEventListener("click", function(){
     //if (userAnswers.length <= 10) {
         for (answer of answerOptions) {
            if (answer.style.color == "red") {
                userAnswers.push(answer)
                answer.style.color = "blue"
            }
        }
        if (userAnswers.length == 10) {
        nextStep(userAnswers)   
        }
    })
}

function nextStep(userAnswers) {
    console.log(userAnswers)
    //let animalArray = []
    if (userAnswers[0].id == "1"){
        animalArray.push("otter")
    } else if (userAnswers[0].id == "2") {
        animalArray.push("sloth")
    } else {
        animalArray.push("beaver")
    }

    if (userAnswers[1].id == "1"){
        animalArray.push("owl")
    } else if (userAnswers[1].id == "2") {
        animalArray.push("otter")
    } else {
        animalArray.push("dog")
    }

    if (userAnswers[2].id == "1"){
        animalArray.push("cat")
    } else if (userAnswers[2].id == "2") {
        animalArray.push("lion")
    } else {
        animalArray.push("owl")
    }

    if (userAnswers[3].id == "1"){
        animalArray.push("cat")
    } else if (userAnswers[3].id == "2") {
        animalArray.push("dog")
    } else {
        animalArray.push("lion")
    }

    if (userAnswers[4].id == "1"){
        animalArray.push("sloth")
    } else if (userAnswers[4].id == "2") {
        animalArray.push("dog")
    } else {
        animalArray.push("cat")
    }

    if (userAnswers[5].id == "1"){
        animalArray.push("otter")
    } else if (userAnswers[5].id == "2") {
        animalArray.push("beaver")
    } else {
        animalArray.push("sloth")
    }

    if (userAnswers[6].id == "1"){
        animalArray.push("otter")
    } else if (userAnswers[6].id == "2") {
        animalArray.push("dog")
    } else {
        animalArray.push("sloth")
    }

    if (userAnswers[7].id == "1"){
        animalArray.push("cat")
    } else if (userAnswers[7].id == "2") {
        animalArray.push("lion")
    } else {
        animalArray.push("beaver")
    }

    if (userAnswers[8].id == "1"){
        animalArray.push("cat")
    } else if (userAnswers[8].id == "2") {
        animalArray.push("lion")
    } else {
        animalArray.push("beaver")
    }

    if (userAnswers[9].id == "1"){
        animalArray.push("otter")
    } else if (userAnswers[9].id == "2") {
        animalArray.push("owl")
    } else {
        animalArray.push("sloth")
    }
        //showResults(animalArray)
        mostFreqStr(animalArray)
    }

    function mostFreqStr(arr) {
        // let obj = {}, mostFreq = 0, which = [];
  
        arr.forEach(ea => {
          if (!obj[ea]) {
            obj[ea] = 1;
          } else {
            obj[ea]++;
          }
  
          if (obj[ea] > mostFreq) {
            mostFreq = obj[ea];
            which = [ea];
          } else if (obj[ea] === mostFreq) {
            which.push(ea);
          }
        });
        console.log(which)
        callResults(which)
        return which;
        
      }
    

    function callResults(which) {
        if (which[0] == "dog"){
            console.log("dog")
            displayResults(dog)
        } else if (which[0] == "cat"){
            console.log("cat")
            displayResults(cat)
        } else if (which[0] == "otter"){
            console.log("otter")
            displayResults(otter)
        } else if (which[0] == "lion"){
            console.log("lion")
            displayResults(lion)
        } else if (which[0] == "owl"){
            console.log("owl")
            displayResults(owl)
        } else if (which[0] == "beaver"){
            console.log("beaver")
            displayResults(beaver)
        } else if (which[0] == "sloth"){
            console.log("sloth")
            displayResults(sloth)
        }
    }

    function displayResults(animal) {
        animalHeading.innerText = animal.name
        animalImage.src = animal.imgsrc
        animalDescription.innerText = animal.description
        userScore.push(animal.name, animal.imgsrc, animal.description)
    }
// animalHeading
// animalDescription
// animalImage

//name, imgsrc, description
    









// submitButton.addEventListener("click", function(){
//         if 
    
//   })

// function calculations(array) {



