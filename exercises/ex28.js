/*
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/
let facebookProfile = {
    name: "Carlos Loria",
    numberOfFriends: 300,
    messagesPosted: ["Vacation mode activated", "Happy silk song release day", "I really want to go to lost lands"],
    postMessage: function postMessage(message) {
        this.messagesPosted.push(message)
        return this.messagesPosted
    },
    deleteMessage: function deleteMessage(index) {
        this.messagesPosted.splice(index, 1)
        return this.messagesPosted
    },
    addFriend: function addFriend() {
        this.numberOfFriends++
        return this.numberOfFriends
    },
    removeFriend: function removeFriend() {
        this.numberOfFriends--
        return this.numberOfFriends
    }
}
console.log(facebookProfile.postMessage("Test"));
console.log(facebookProfile.deleteMessage(1));
console.log(facebookProfile.addFriend());
console.log(facebookProfile.removeFriend());