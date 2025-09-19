/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/
const laugh = function (number) {
    let message = ""
    for (let x = 0; x < number; x++) {
        message += "ha"
    }
    message += "!"
    console.log(message)
}
laugh(3)