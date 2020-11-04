//const BASE_PATH = `https://localhost:3001/users/`
const animalHeading = document.getElementById("name");
const animalImage = document.getElementById('myImage')
const animalDescription = document.getElementById('context');
let userAnswers = []
let animalArray = []
let obj = {}, mostFreq = 0, which = [];
let userScore = []
let currentId = currentUser.id

function collectAnswers(answerOptions) {
 submitButton.addEventListener("click", function(){
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
 }         //  let animalAnswers = [otter, sloth, beaver, otter, sloth, beaver, owl, otter, dog, cat, lion, owl, cat, dog, lion, sloth, dog, cat, otter, beaver, sloth, otter, dog, sloth
// cat, lion, beaver, cat, lion beaver, otter, owl, sloth]
//     function nextStep(usersAnswers, animalAnswers) {
   // for (i=0; i<usersAnswers.length; i++) {
// if (userAnswers[0].id == "1"){
//     animalArray.push("otter")
// } else if (userAnswers[0].id == "2") {
//     animalArray.push("sloth")
// } else {
//     animalArray.push("beaver")
//     }
// })

function nextStep(userAnswers) {
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
        mostFreqStr(animalArray)
    }

    function mostFreqStr(arr) {
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
        // let animalScore = which[0]
        // animalScore = animalScore.replace(/"/g,"");
        // console.log(animalScore)
        // displayResults(animalScore)
        callResults(which)
        return which;
        
      }

    //   function callResults(which,animal) {
    //     if (which[0] == "animal") {
    //         displayResults(animal)
    //     }}

    function callResults(which) {
        if (which[0] == "dog"){
            displayResults(dog)
        } else if (which[0] == "cat"){
            displayResults(cat)
        } else if (which[0] == "otter"){
            displayResults(otter)
        } else if (which[0] == "lion"){
            displayResults(lion)
        } else if (which[0] == "owl"){
            displayResults(owl)
        } else if (which[0] == "beaver"){
            displayResults(beaver)
        } else if (which[0] == "sloth"){
            displayResults(sloth)
        }
    }

    function displayResults(animal) {
        document.getElementById("results").removeAttribute("hidden")
        animalHeading.innerText = animal.name
        animalImage.src = animal.imgsrc
        animalDescription.innerText = animal.description
        currentUser.score = animal.name

        let newScore = currentUser.score 
        console.log(newScore)
       
        submitScore(newScore)
    }


    function submitScore(newScore) {

        let fetcher = currentUser.id

        fetch(`http://localhost:3001/users/${fetcher}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ score: newScore })
  }).then(resp => resp.json())
  

          }



