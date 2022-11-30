/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

let positiveNumbers = [1, 2, 3, 4, 5];
console.log(positiveNumbers);

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

let myInfos = {
    name: "Eleni",
    surname: "Kellermann",
    email: "eleni.kellermann@hotmail.de",
    age: 29,
}

console.log(myInfos);

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to represent wheter you have or not a driving license.
*/

myInfos.hasDriversLicence = true;
console.log(myInfos);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete myInfos.age;
console.log(myInfos);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

let anotherPersonsInfos = {
    name: "Max",
    surname: "Mustermann",
    email: "max.mustermann@mustermail.de",
}

myInfos.email === anotherPersonsInfos.email ? (console.log(`This email-address: ${anotherPersonsInfos.email} already exists. Please choose another one`)) : (console.log(`This email-address: ${anotherPersonsInfos.email} doesn't exist yet.`));


/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart = 99;
let shippingCosts = 10;
let totalCost;


if (totalShoppingCart < 50) {
    totalCost = totalShoppingCart + shippingCosts;
    console.log(`You're total amount is ${totalShoppingCart}Euros and the shipping costs are 10Euros. The total amount due is ${totalCost}Euros`);
} else {
    totalCost = totalShoppingCart;
    console.log(`Your shipping is free and the total amount due is ${totalCost}Euros`);
}

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let totalCostsOnSale;
let totalShoppingCartOnSale = totalShoppingCart * 0.8;

if (totalShoppingCartOnSale < 50) {
    totalCostsOnSale = totalShoppingCartOnSale + shippingCosts;
    console.log(`Your total amount is ${totalShoppingCart}Euros and with the discount ${totalShoppingCartOnSale}Euros. The shipping costs are 10Euros. The total amount due is ${totalCostsOnSale}Euros`);
} else {
    totalCostsOnSale = totalShoppingCartOnSale;
    console.log(`Your total amount is ${totalShoppingCart}Euros and with the discount ${totalShoppingCartOnSale}Euros. Your shipping is free and the total amount due is ${totalCostsOnSale}Euros`);
}

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

let car = {
    brand: "BMW",
    model: "X5",
    licencePlate: "KA SP 1992",
}

let car2 = {};
car2 = Object.assign(car2, car);
car2.licencePlate = "KA RS 0612";

let car3 = {};
car3 = Object.assign(car3, car);
car3.licencePlate = "KA PS 1525";

let car4 = {};
car4 = Object.assign(car4, car);
car4.licencePlate = "KA DS 3011";

let car5 = {};
car5 = Object.assign(car5, car);
car5.licencePlate = "HD TV 1234";

let car6 = {};
car6 = Object.assign(car6, car);
car6.licencePlate = "HD RM 9876";

console.log("The car is ", car);
console.log("The car2 is", car2);
console.log("The car3 is", car3);
console.log("The car4 is", car4);
console.log("The car5 is", car5);
console.log("The car6 is", car6);

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

let carsForRent = [car, car2, car3, car4, car5, car6];
console.log(carsForRent);

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

carsForRent.pop();
console.log(carsForRent);

carsForRent.shift();
console.log(carsForRent);

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.log(`The var type of car is: ${typeof car}`);
console.log(`The var type of car licence plate is: ${typeof car.licencePlate}`) 
console.log(`The var type of car brand is: ${typeof car.brand}`)

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

let carsForSale = [];
let car7 = {brand: 'BMW', model: 'X3'};
let car8 = {brand: 'BMW', model: 'X1'};
let car9 = {brand: 'BMW', model: 'X6'};
carsForSale.push(car7, car8, car9);

console.log(carsForSale);

let totalCars = carsForRent.length + carsForSale.length;
console.log(`There are ${totalCars} cars totally.`);

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

for (let i = 0; i < carsForSale.length; i++) {
    console.log(carsForSale[i]);
}
