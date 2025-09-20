const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
/*

Write a loop under each comment in the file.*/
// Under the first, write a while loop that prints out each item of ingredients.
let counter = 0
while (counter < ingredients.length) {
    console.log(ingredients[counter]);
    counter++
}
// Under the second, write a for loop that does the same thing.
for (let i = 0; i < ingredients.length; i++) {
    console.log(ingredients[i]);
}
// And under the third, write any loop, while or for that prints out each item of ingredients but backwards (that is, the first should be "bananas" and the last "eggs").
for (let i = ingredients.length - 1; i >= 0; i--) {
    console.log(ingredients[i]);
}