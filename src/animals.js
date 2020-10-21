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

let owl = new Animal("Owl", "newowl.png", "description");
let dog = new Animal("Dog", "dog.jpg", "description");
let cat = new Animal("Cat", "cat.jpg", "description");
let sloth = new Animal("Sloth", "sloth.jpg", "description");
let otter = new Animal("Otter", "otter.jpg", "description");
let beaver = new Animal("Beaver", "beav.jpg", "description");
let lion = new Animal("Lion", "lion.png", "description");