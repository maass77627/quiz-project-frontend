var form = document.getElementById("myform")
//let currentUser = ""

document.getElementById("sub").addEventListener("click", function(event){
    event.preventDefault()
    form.style.display = "none"
    let newUsername = document.getElementById("username").value; 
    submitData(newUsername)
  });

function submitData(newUsername) {
 
  let formData = {
      username: newUsername
      
  };
  
  let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
  };

  fetch("http://localhost:3001/users", configObj)
      .then(function(response) {
        return response.json();
      })
      .then(function(object) {
        console.log(object);
        // let currentUser = object
        // newFunction(currentUser)
      });
    }

    // function newFunction(currentUser) {
    //   console.log(currentUser)
    // }

  //   class User {
  //     constructor(userJSON) {
  //         this.userName = userJSON.name
  //         this.id = userJSON.id
  //     }
  // }

  //class User {
    //        constructor(username, result) {
    //            this.username = username
    //            this.result = result
    
    //        }
    //    }