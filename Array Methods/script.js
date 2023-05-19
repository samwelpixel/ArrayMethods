var animals = ["tiger", "bear"]; //Declares a variable animals and assigns an array containing two elements.
var fruits = ["cantaloup", "orange"]; //Declares a variable fruits and assigns an array containig two elements.
var dishes = ["plates", "bowls", "cups"]; //Declares a variable dishes and assigns an array containig three elements.

var fruitsAndAnimals = fruits.concat(animals); //fruits.concat merges two arrays fruit and animals and creates a new array called fruitsAndAnimals which will have all elements from fruits and all elements from animals.
document.write(fruitsAndAnimals + "<br>"); //Document.write is used to display contents on the web, it will write the contents of fruits and animals followed by a line break.

var whereIsTheTiger = animals.indexOf("tiger"); //The indexOf() method is used to find the index of a particular element in an array. Here, it searches for the element "tiger" within the animals array and returns its index. The index is then assigned to the variable whereIsTheTiger.
document.write(
  "The tiger has an index number of: " + whereIsTheTiger + "<lbr>"
);
