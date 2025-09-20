/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/
function emotions(emotion, laugh) {
    return "I am " + emotion + ", " + laugh(5)
}
const message = emotions("happy", function laugh(number) {
    let message = ""
    for (let x = 0; x < number; x++) {
        message += "ha"
    }
    message += "!"
    return message
})
console.log(message);