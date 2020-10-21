var form = document.getElementById("myform")

document.getElementById("sub").addEventListener("click", function(event){
    event.preventDefault()
    form.style.display = "none"
  });


document.getElementById("sub").addEventListener("click", submitData());

function submitData() {
 
  let formData = {
      username: username
      
  };
  console.log(formData);
  let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
  };
//return
  fetch("http://localhost:3001/users", configObj)
      .then(function(response) {
        return response.json();
      })
      .then(function(object) {
        console.log(object);
      });
    }