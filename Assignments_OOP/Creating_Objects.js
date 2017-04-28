// console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Linked List Example  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
// /* ********** Our Node Class **********
// Generates a node for a singly linked list
// parameters:
//   val: a numerical value
// private variables/functions:
//   none:
// public properties/methods:
//   val: val;
//   next: // another Node or null
//   passThis: a function that passes a console log of this and self.
// ************** END **********   */
// var Node = function(val){
//   this.val = val;
//   this.next = null;
// }
// Node.prototype.passThis = function(custom_return){
//   console.log(this, "this");
//   console.log(this.self, "self");
//   console.log(custom_return, "My Return");
//   return custom_return;
// }
// // ****************** END OF NODE ******************
// /* ************* Singly Linked List Class (SingleList) *****************
// Creates a simple singly linked list class with not too many methods yet!
// parameters: none
// private: none
// public properties:
//   head: first node in the List
// public methods:
//   add: adds a new node based on a value passed in. returns this
//   dequeue: removes the head, and gives it to a callback, if a callback is passed. returns this
//   remove_tail: removes the tail, and gives it to a callback as an argument, only if a callback is passed. returns this.
// ************** END **********   */
// var SingleList= function(){
//   this.head = null;
// }
// SingleList.prototype.add = function (val) {
//   if (!this.head){
//     this.head = new Node(val);
//     return this;
//   }
//   var current = this.head;
//   while(current.next){
//     current = current.next;
//   }
//   current.next = new Node(val);
//   return this;
// };
// SingleList.prototype.dequeue = function (callback) {
//   var eliminatedNode = this.head;
//   this.head = this.head.next;
//   eliminatedNode.next = null;
//   if (typeof(callback)=='function'){
//     callback(eliminatedNode);
//   }
//   //console.log(this.head); optional
//   return this;
// };
// // Write a remove tail! :)
// // ************************ END OF LIST ************************
// sList = new SingleList();
// sList.add(1).add(2).add(3).add(4).head.next.passThis(sList).dequeue(
//   function callback(myNode){
//     console.log(myNode.val, "CHAINING INSANITY!");
//   })
//   .dequeue(
//     function anotherCallback(myNode){
//       console.log("******************************");
//       console.log('Seriously, Stop!', myNode);
//     });

// console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$  Creating Objects 1 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")

// Now modify your code to use Prototype and the recommended way of OOP we showed in the previous chapter.
//
// You may have to change some private variables/methods to attributes to make all of the functionality work.
//
// Then make the following additions:
//
// Have each vehicle generate a random VIN number (study Math.random & Math.floor). Don’t worry about potential duplicates for now.

//
// function VehicleConstructor(name, wheels, passengers, speed) {
//
// // Private
//   var self = this
//   var distance_travelled = 0
//   var updateDistanceTravelled = function(){
//     distance_travelled = distance_travelled + self.speed
//     console.log(distance_travelled)
//   }
//
// // Public
//   this.name = name;
//   this.wheels = wheels;
//   this.passengers = passengers;
//   this.speed = speed;
//   this.move = function(){
//     console.log("moving")
//     updateDistanceTravelled()
//     this.makeNoise()
//   }
//   this.makeNoise = function() {
//     console.log("Making Noise!!!")
//   }
//   this.checkMiles = function(){
//     console.log(distance_travelled)
//   }
// }
//
//
// var Bike = new VehicleConstructor("Bike", 2, 1, 100);
// Bike.makeNoise = function(){
//   console.log ("Ring Ring!!!")
// }
// // console.log(Bike);
// Bike.makeNoise();
// Bike.move();
// Bike.checkMiles();
//
// var Sedan = new VehicleConstructor("Sedan", 4, 5);
// Sedan.makeNoise = function(){
//   console.log ("Honk Honk!!!")
// }
// console.log(Sedan);
// Sedan.makeNoise()
//
// var Bus = new VehicleConstructor("Bus", 4, 1);
// Bus.pickUpPassengers = function(passengers){
// Bus.passengers = Bus.passengers + passengers
// }
//
// console.log(Bus.passengers)
// Bus.pickUpPassengers(20)
// console.log(Bus.passengers)
// console.log(Bus);

console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$  DEBUG TESTING  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
function Cat( cat_name ) {
  var name = cat_name;
  this.getName = function() {
    return name;
  };
}
//adding a method to the cat prototype
Cat.prototype.sayHi = function(){
  console.log('meow');
};
//adding properties to the cat prototype
Cat.prototype.numLegs = 4;
var muffin = new Cat('muffin');
var biscuit = new Cat('biscuit');
console.log(muffin, biscuit);

//we access prototype properties the same way as we would access 'own' properties
muffin.sayHi();
biscuit.sayHi();
console.log(muffin.numLegs);
