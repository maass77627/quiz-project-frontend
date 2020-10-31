

class Scenario {

  constructor(number, question, answera, answerb, answerc, ) {
  this.number = number
  this.question = question
  this.answera = answera
  this.answerb = answerb
  this.answerc = answerc

}
}

const question1 = new Scenario("1", "When the weekend comes I like too..", "hit the bars or a new restaurant with friends", "veg out on the couch alone", "catch up on work, chores or the gym");
const question2 = new Scenario("2", "You are planning a vacation with your friend.. do you", "meticulously plan every detail", "jump in the car and wing it, you fly by the seat of your pants", "have somewhat of a plan but you are open to change");
const question3 = new Scenario("3", "When you are in a work environment you ", "prefer to work independently, you get more done", "Usually are jumping to take charge and lead your coworkers", "are the person people go to for help and advice");
const question4 = new Scenario("4", "You are going to a movie what would you most like to see", "a documentary", "a comedy", "action/war movie");
const question5 = new Scenario("5", "What kind of music would you most enjoy", "mellow", "soft rock", "classical");
const question6 = new Scenario("6", "A big test is coming up in school..are you more likely to", "wait till last minute and pull an all nighter", "Start studying a week in advance", "wing it your confident you'll be fine");
const question7 = new Scenario("7", "You had plans to go to a concert with a friend and they cancel last minute..", "you shrug it off and make new plans", "go anyway, flying solo could be fun", "sulk at home your night is ruined");
const question8 = new Scenario("8", "If you hear a strange noise late at night", "you stay in bed and hide under covers", "jump up and go investigate yourself", "call someone for help");
const question9 = new Scenario("9", "What type of person are you..", "morning", "night", "evening");
const question10 = new Scenario("10", "You ordering pizza which would you prefer", "mushrooms and spinach", "anchovies", "pepperoni and sausage");

let allQuestions = []
allQuestions.push(question1, question2, question3, question4, question5, question6, question7, question8, question9, question10)
//can do for each scenario

//for (i=0; i < all)