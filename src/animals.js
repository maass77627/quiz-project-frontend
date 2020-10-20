// const owlimage = document.createElement('img')
// owlimage.src  = 'newowl.png'
// //document.querySelector('.container').appendChild(image)


// const myAnimals = [

//     {
//         Animal: "Owl" ,
//         pic: owlimage,
//         description: "1"
//       },
//       {
//         animal: "Cat",
//         pic: owlimage,
//         description: "2"
//     }

// ]

class Animal {

  constructor(name, imgsrc, description) {
    this.name = name
    this.imgsrc = imgsrc
    this.description = description
  } 
}

let owl = new Animal("Owl", "video-frontend/newowl.png", "description");