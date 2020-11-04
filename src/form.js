var form = document.getElementById("myform")
let currentUser = {}

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
        currentUser = object
        
      });
    }

   

    class User {
      constructor(currentUser) {
          this.userName = currentUser.name
          this.id = currentUser.id
          this.score = currentUser.score
          this.comments = currentUser.comments //
      }
  }

  // document.getElementById("scores").addEventListener("click", function(){
  //   let fetcher = currentUser.id

  //   //fetch(`http://localhost:3001/comments/${fetcher}`, {
  //     fetch(`http://localhost:3001/users/${fetcher}`).then(response => response.json()).then(usercomment => putCommentsOnDom(usercomment))
  // })

  console.log(currentUser.comments)

  // function putCommentsOnDom(usercomment) {
  //   console.log(usercomment)
  //   let allComments = usercomment.comment
  //   console.log(allComments)
  //   let div = document.getElementById("userInfo")
  //   for (comment of allComments) {
  //     console.log(comment)
  //   let li = document.createElement("li")
  //   li.innerHTML = comment
  //   div.appendChild(li)
  //   }
  // }