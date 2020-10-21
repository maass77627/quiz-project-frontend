function fetchUsers() {
    fetch('http://localhost:3001/users').then(response => response.json()).then(users => putUsersOnDom(users))
   }

   function putUsersOnDom(users) {
       console.log(users)
   }