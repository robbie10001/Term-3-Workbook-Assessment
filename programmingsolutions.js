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

//string 
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



