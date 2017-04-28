"use strict"

class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(this.name + ' roars.');
  }
}

new Cat('robert').speak()
new Lion('robert').speak()


console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$  Build Some Functions Exercise  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
// Basic: Make a function that can be used anywhere in your file and that when invoked will console.log('I am running!'); Give it the name runningLogger.

var runningLogger = () => {console.log('I am running')}
runningLogger()


// Basic: Make a function that is callable, has one parameter and multiplies the value of the parameter by 10 before returning the result. Give it the name multiplyByTen. Invoke it, passing it the argument 5.
class Multiply {
constructor(param){
  console.log(param * 10)}
}
new Multiply(5)

// Basic: Write two functions (stringReturnOne and stringReturnTwo) that each return a different hard-coded string
function stringReturnOne(){
console.log('Hard-coded string 1')
}
function stringReturnTwo(){
console.log('Hard-coded string 2')
}
stringReturnOne()
stringReturnTwo()

// Medium: Write a function named caller that has one parameter. If the argument provided to caller is a function (typeof may be useful), invoke the argument. Nothing is returned.

function caller(param){
  if (typeof(param) == "function"){
    param();
  }
  else {
    console.log('Not a function')
  }
}
caller(stringReturnOne)
caller('test')

// Medium: Write a function named myDoubleConsoleLog that has two parameters. if the arguments passed to the function are functions, console.log the value that each function returns when invoked.

function myDoubleConsoleLog(param1, param2){
  if (typeof(param1) == 'function'){
    param1();
  }
  if (typeof(param2) == 'function'){
    param2();
  }
}
myDoubleConsoleLog(stringReturnOne,stringReturnTwo)


// Hard: Write a function named caller2 that has one parameter. Have it console.log the string 'starting', wait 2 seconds, and then invokes the argument if the argument is a function. (setTimeout may be useful for this one.) The function should then console.log ‘ending?’ and return “interesting”. Invoke this function by passing it myDoubleConsoleLog.


function caller2(param1){
  console.log('starting');
  var x = setTimeout(function(){
  if(typeof(param1) == 'string'){
    param1(stringReturnOne,stringReturnTwo);
  }
},2000);
  console.log ('ending?');
  console.log( "interesting");
}

caller2(myDoubleConsoleLog);
