

// exercise 1
var myCat = {
   name: "Scout",
   age: "4",
   isAlive: true,
   favoriteToy: "ball",
   nappingSpot: "crate"
};



// exercise 2

var myDreamLife = {};

var propertyKey = "job";
myDreamLife[propertyKey] = "Star Athlete/Ironman";

var anotherPropertyKey = "salary";
myDreamLife[anotherPropertyKey] = "2 dollar";

console.log(myDreamLife);
console.log(myDreamLife.propertyKey);
console.log(myDreamLife.job);
console.log("---------------------");

var nextProperty = "car";
myDreamLife[nextProperty] = "have it all";

console.log(myDreamLife);
console.log(myDreamLife.car);
console.log("-------------------");

myDreamLife.watches = "fifty AP tourbillons";
myDreamLife.dog = "Scout";
myDreamLife.wives = "twentytwo";

console.log(myDreamLife);



// exercise 3
var car = {
  make: "Toyota"
};

car.model = "Camry";

car.model = "Prius";

var prop = 'year';

// how can we set the car's year using the variable prop?
car.prop = 1992;
console.log(car.prop);
console.log(car[prop]);
console.log(car.nothinghere);
console.log("-----------------------");

var dreamCar = {
  make: "Tesla XX",
  year: "2020",
  color: "Matte White",
  Registered: "true"
};

  console.log(dreamCar);
  console.log("------------------------");


 //exercise 4
 //done in examples




// exercise 5
for (var key in myCat){
  console.log(myCat[key]);
}
console.log("------------------------");
for (var property in dreamCar){
  console.log(dreamCar[property]);
}
console.log("------------------------");
for (var obj2 in myDreamLife){
  console.log(myDreamLife[obj2]);
}
console.log("---------------------------");



//exercise 6
var politicians = {
    secretary_of_state: 'hillary clinton',
    potus: 'barack obama',
    flotus: 'michelle obama',
    vice_prez: 'joe biden',
    gov_of_california: 'jerry brown'
};
console.log("-------loop politicians-------");

var allPoliticians = "";
for (var job in politicians){
(allPoliticians += politicians[job]+" ");
}
console.log(allPoliticians);

console.log("-------loop politicians 2nd time---");
for (var job2 in politicians){
  console.log(politicians);
}



//exercise 7

var reverse_politician_lookup = {

}
