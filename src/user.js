fetchUsers()

const userInfo = document.getElementById("userInfo")
const usersResults = document.getElementById("userResults")

function fetchUsers() {
    fetch('http://localhost:3001/users').then(response => response.json()).then(users => putUsersOnDom(users))
    
   }
 

   function putUsersOnDom(users) {
       
       let lastTen = users.slice(Math.max(users.length - 10, 1))
       let ul = document.createElement("ul")
       usersResults.appendChild(ul)
       for (element of lastTen){
        let li = document.createElement("li")
        li.innerText = element.username //+ element.result
        ul.appendChild(li)
        let li2 = document.createElement("li")
        li2.innerText = element.score
        li.appendChild(li2)
        // let comment = document.getElementById("info")
        // li2.appendChild(comment)
       
        li.addEventListener("click", function(){
            let comment = document.getElementById("info")
            comment.removeAttribute('hidden')
            li.appendChild(comment)
        })

        li.addEventListener("mouseover", function(){
            li.style.color = "green"
        })
    }
        document.getElementById("sent").addEventListener("click", function(){
            
            let newComment = document.getElementById("example").value
            newComment.user_id = currentUser.id
            console.log(newComment)
            saveComment(newComment)

        })
       // }

        function saveComment(newComment) {
            let formData = {
                name: newComment,
                user_id: currentUser.id
            };
            
            let configObj = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json"
                },
                body: JSON.stringify(formData)
                
            };
            //console.log(formData)
          
            fetch("http://localhost:3001/comments", configObj)
                .then(function(response) {
                  return response.json();
                })
                .then(function(json) {
                  //console.log(json);
                  
                });



        }
   }



