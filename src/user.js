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
        li.innerText = element.username
        ul.appendChild(li)
        let li2 = document.createElement("li")
        li2.innerText = element.score
       }
   }

   class User {
       constructor(username, result) {
           this.username = username
           this.result = result

       }
   }