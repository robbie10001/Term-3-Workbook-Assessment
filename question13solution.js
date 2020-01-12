
//we create a new class called Car
class Car {
    //we create an object type of brand using the constructor function.
    constructor(brand) {
    //class properties are passed into this as arguments.
    //the next line is creating a holding spot, for the value of carname once it is defined. 
    
      this.carname = brand;
    }
    //
    present() {
      return 'I have a ' + this.carname;
    }
  }
  //we create a new class called Model.
  //the extends method allows this class to inherit all the functions from it's parent class (car)
  class Model extends Car {
    //we once again use the constructor method.
    //within our constructor we have the objects brand and mod
    constructor(brand, mod) {
    //the super method refers to the parent class. 
    //By calling it we call the parent's constructor method and we access cars properties and methods. 
      super(brand);
    //we once again use the this. function to create a placeholder for the value of mod based on the data contained in model. 
     //this allows us to create dynamic values.
    this.model = mod;
    }
    //
    show() {
      return this.present() + ', it was made in ' + this.model;
    }
  }
  //we create an array of car makes 
  let makes = ["Ford", "Holden", "Toyota"]
  //we create an array of models for every year from 1980 to 2019 (we would need one more for 2020)
  let models = Array.from(new Array(40), (x,i) => i + 1980)

  //we create a function that takes two arguments (min and max)
  function randomIntFromInterval(min,max) { // min and max included
    console.log(Math.floor(Math.random()*(max-min+1)+min));
    //we return the function.
 //Math.floor gives us the largest whole number <= to a given number
 //Math.random returns a random number between 0 and 1. 
 //we then return a number between the min 0 and the max  argument
    return Math.floor(Math.random()*(max-min+1)+min);
    
  }
  //we create a loop that runs for as long as we have a model for a car. 
  for (model of models) {
  //we create a variable called make. 
  //random make element is created through the use of the array and its indexies.
    make = makes[randomIntFromInterval(0,makes.length-1)]
//random year is gain from the models array using indexies again.
    model = models[randomIntFromInterval(0,makes.length-1)]
 //we create a new myCar variable that includes a random make and a random model.     
    mycar = new Model(make, model);
//we then print out this data for as many times as the loop iterates. 
    console.log(mycar.show())
  }