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
        fetchUsers()
      });
    }

   

    class User {
      constructor(currentUser) {
          this.userName = currentUser.name
          this.id = currentUser.id
          this.score = currentUser.score
          this.comments = currentUser.comments
      }
  }

  document.getElementById("scores").addEventListener("click", function(){
      fetch(`http://localhost:3001/comments`).then(response => response.json()).then(allcomments => putCommentsOnDom(allcomments))
  })

 

  function putCommentsOnDom(allcomments) {
    let div = document.getElementById("userInfo")
    
    let userComments = allcomments.filter(com => {
      return com.user_id === currentUser.id
    })

    for (comment of userComments) {
    let li = document.createElement("li")
    li.innerHTML = comment.name
    div.appendChild(li)
    }
  }