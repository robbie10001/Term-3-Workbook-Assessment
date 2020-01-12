//Q7. Explain control flow, 
//using an example from the JavaScript programming language


//EXAMPLE OF TRYING TO GET INTO A BAR! 

//We create a variable for someones age. We then give this variable the value of 18. 
let age = 18;
//We declare the start of our control flow, by using the if keyword (in this example).
//we then declare the if someone is under the age of 18 we move to the following piece of code,
//"No entry to the bar for those under 18."
//through the use of basic logic, we know that if someone is not younger than 18 they must be 18 or older. 
//Therefore, if they are over 18 the following code will run 
//"What drink can i get you"
if(age < 18) {
    console.log("No entry to the bar for those under 18")
} else {
    console.log("What drink can i get you?")
};

//Another way we can use Control Flow, in JavaScript is the use of Switch Statements 

//In this example we are looking for a new point guard for our basketabll team! 
//We want the point guard to be between 6 foot 3 and 6 foot 4. 
//We can program this desire out by using a switch statement. 


//we have someone who wants to join the team that is 6ft 3. 
let height = 6.3;
//We then have a bank of different responses to the player based on their height. 
switch (height) {
   
    case 6.1: 
    console.log("Maybe if you grow a bit!")
    break;
    case 6.2: 
    console.log("So close, yet so far!")
    break;
    case 6.3: 
    console.log("You can join the team!")
    break;
    case 6.4: 
    console.log("Hey, we would love you on the team!")
    break;
    case 6.5: 
    console.log("Sorry you're just too tall!")
    break;
//we create a default message for anyone not meeting any of our conditions. 
    default: console.log("Sorry we are not interested")
}

//in the above case, we would print "you can join the team!"
//through the use of control flow we ended up only running the third element of our code. 
//this is the data we then recieved through the use of control flow. 

//Q8. Explain type coercion, using examples from the JavaScript programming language

//through the use of type conversion we can convert data to a different data type. 
//for example we can convert a number to a string and vise versa.
//firstly, we create a number that is equal to 23;  
let nowANumber = 23;
//we then create a new variable 
//this variable converts the number 23 into the string "23" and saves its value
let notANumber = nowANumber.toString()
//we then use the typeof function to check what datatype our notANumber variable is
//this prints out string 
console.log(typeof notANumber);
console.log(notANumber);
//we also print out the value of notANumber which is "23". 
//Therefore, we have used type conversion to change the value of the number 23 to the string "23 "

//Q9. Explain data types, using examples from the JavaScript programming language

let thisIsAString = "Hello World"; 
console.log(typeof thisIsAString); //string

let thisIsANumber = 23; 
console.log(typeof thisIsANumber); //number

let thisIsABoolean = true; 
console.log(typeof thisIsABoolean); //boolean 

let thisIsNull = null; 
console.log(typeof thisIsNull); //this returns object, but this is the result of legacy, rather than the truth. 

let thisIsUndefined = undefined; 
console.log(typeof thisIsUndefined); //undefined 

let thisIsASymbol = Symbol(); 
console.log(typeof thisIsASymbol); //symbol 

let thisIsBigInt = BigInt(1000000000 ^ 1000000000);
console.log(typeof thisIsBigInt) // BigInt 

/*
//Q10. Explain how arrays can be manipulated in JavaScript, using examples from the JavaScript programming language

*/
//We create an array called the bestYearsOfMyLife
//The array contains three numbers 2000,2004,2008
let bestYearsOfMyLife = [
    2000,
    2004,
    2008
];
//We use the inbuild function .push to add the number 2011 to the end of our array. 
bestYearsOfMyLife.push(2011)
console.log(bestYearsOfMyLife);
//we print out the new array: 2000, 2004, 2008, 2011. 
//we can then use the pop method to remove the last entry. 
bestYearsOfMyLife.pop()
console.log(bestYearsOfMyLife)
//we then print the array and it is back to its orginal elements: 2000,2004,2008
//we can also change the first element of an array. 
bestYearsOfMyLife.shift()
console.log(bestYearsOfMyLife)
//the .shift method has removed the first year 2000 from our array.
//That's good because i instead want the first element to be 1990.
//This was the year of my birth and therefore i assume everyone in the world's favourite year. 
bestYearsOfMyLife.unshift(1990)
console.log(bestYearsOfMyLife)
//our array now holds the values 1990, 2004, 2008

//WE can also join multiple arrays together. 
//this is good because i have a to do list for Saturday and Sunday and want to make it just a list for the weekend. 
let toDoSaturday = [
  "wash car",
  "continue working on this workbook",
  "wash the dog"
]

let toDoSunday = [
  "finish the workbook",
  "go to the shops",
  "bake a cake"
]

let weekendToDoList = toDoSaturday.concat(toDoSunday);
console.log(weekendToDoList);
//we now have a new array called weekendToDoList that contains all the elements of our previous two arrays. 


//We can also manipulate our arrays directly, through accessing the index of our array for example.
let shoppingList = [
  "soap",
  "bananas",
  "oranges",
  "bread"
];

//i have a shopping list that contains soap, bananas, oranges and bread.
//however i just found a loaf of bread, and remembered i actually need some icecream!
//to change this i access the item with an index of 3 "bread" and change it to "ice cream"
shoppingList[3] = "ice cream"; 
console.log(shoppingList);
//Our array is now, soap, bananas, organges, ice cream. This is much better! 

//lastly, i will show how we can manipulate our arrays using loops. 

for(x in shoppingList) {
  console.log(shoppingList + " " + x)
};
//first iteration = soap,bananas,oranges,ice cream 0
//second iteraction = soap,bananas,oranges,ice cream 1
//third iteration = soap,bananas,oranges,ice cream 2
//fourth iteration = soap,bananas,oranges,ice cream 3

/*

Q11. Explain how objects can be manipulated in JavaScript, using examples from the JavaScript programming language

*/
//We can create objects in JavaScript using the following Syntax
//here we have created an object which contains ratings to a number of science fiction movies. 
let ScienceFictionMoviesRatings = {
    "stargate": 9,
    "startrek": 8,
    "starwars": 5,
    "firefly": 8, 
    "inception": 7
};

//WE can access elements within our object through either dot notion or bracket notation.
console.log(ScienceFictionMoviesRatings.firefly) //This prints out 8. 
console.log(ScienceFictionMoviesRatings["stargate"]);//this prints out 9. 

//we can alter the values of our objects using the following methods. 
ScienceFictionMoviesRatings.stargate = 4; 
console.log(ScienceFictionMoviesRatings.stargate) //stargate's rating is now 4.
ScienceFictionMoviesRatings["inception"] = 5;
console.log(ScienceFictionMoviesRatings["inception"]) //the rating for inception is now 5. 

//We can also add elements to our objects.
ScienceFictionMoviesRatings["Cloud Atlas"] = 7.5;
console.log(ScienceFictionMoviesRatings); //cloud atlas is added to the end of the object with a rating of 7.5 
ScienceFictionMoviesRatings.Mars = 8;
console.log(ScienceFictionMoviesRatings)// mars is added to the end of the object with a rating of 8
//WE can also update our properties 
ScienceFictionMoviesRatings.Mars++;  //the rating for Mars has gone from 8 to 9. 
ScienceFictionMoviesRatings["firefly"] -= 2; //the rating for firefly has gone from 8 to 6. 
console.log(ScienceFictionMoviesRatings)

//We can also use helper methods in order to alter our objects. 

//For example we can gain access to either the keys or the values of all the objects within our object.

console.log(Object.keys(ScienceFictionMoviesRatings)) //this logs, stargate, starwars, startrek, firefly, inception, Cloud Atlas, Mars
console.log(Object.values(ScienceFictionMoviesRatings))//this logs, 4, 8, 5, 6, 5, 7, 5, 9 

//We can also delete elements within our object. 

console.log("---------BREAK--------")
delete ScienceFictionMoviesRatings.inception; //THIS REMOVES INCEPTION FROM OUR OBJECT
delete ScienceFictionMoviesRatings["firefly"]; //THIS REMOVES FIREFLY FROM OUR OBJECT
console.log(ScienceFictionMoviesRatings)

/*


Q12. Explain how JSON can be manipulated in JavaScript, using examples from the JavaScript programming language

#####Demonstrates an ability to manipulate JSON
6.0 to >5.0 pts
HD
Demonstrates an extensive ability to manipulate JSON
5.0 to >4.0 pts
*/



//Q13. For the code snippet provided below, write comments for each line of code to explain its functionality. In your comments you must demonstrates your ability to recognise and identify functions, ranges and classes

/*

PRG1006-4.1 Recognise functions, ranges and classes & PRG1006-4.2 Identify functions, ranges and classes
12.0 to >10.0 pts
HD
Demonstrates an extensive ability to recognise functions, ranges and classes
10.0 to >8.0 pts
D
*/
//Q13 Code Snippet


/*
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it was made in ' + this.model;
  }
}

let makes = ["Ford", "Holden", "Toyota"]
let models = Array.from(new Array(40), (x,i) => i + 1980)

function randomIntFromInterval(min,max) { // min and max included
    return Math.floor(Math.random()*(max-min+1)+min);
}

for (model of models) {

  make = makes[randomIntFromInterval(0,makes.length-1)]
  model = models[randomIntFromInterval(0,makes.length-1)]
    
  mycar = new Model(make, model);
  console.log(mycar.show())
}
*/


