// const owlimage = document.createElement('img')
// owlimage.src  = 'newowl.png'
// //document.querySelector('.container').appendChild(image)

class Animal {

  constructor(name, imgsrc, description) {
    this.name = name
    this.imgsrc = imgsrc
    this.description = description
  } 
}

let owl = new Animal("Owl", "newowl.png", "wise, planner night");
let dog = new Animal("Dog", "dog.jpg", "loyal social playful friendly");
let cat = new Animal("Cat", "cat.jpg", "independent scared");
let sloth = new Animal("Sloth", "sloth.jpg", "lazy tired");
let otter = new Animal("Otter", "otter.jpg", "playful, curious, energetic, social");
let beaver = new Animal("Beaver", "beav.jpg", "hard working");
let lion = new Animal("Lion", "lion.png", "brave leader outgoing");