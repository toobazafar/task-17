// creating a guestList Array 
var guestList = ['Sidra', 'Laiba', 'Hiba', 'Awais'];
//making varaible for those guest who cant come
var dontCome = guestList[0];
//printing the name of guest who cant come
console.log(dontCome, "Cant coming");
//add or remove values from guestList Array
guestList.splice(0, 1, "Fatima");
//message print or bigger table
console.log("Good news we have found a bigger table for dinner");
//Adding a new guest at starting index of Array..... index=0,1,2,3,4...etc
guestList.unshift("Ali");
//Adding a new guest at ending index of Array
guestList.push("Zain");
//Get a middle index of our guestList Array
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest to middle index of Array
guestList.splice(middleIndex, 0, "Anas");
//Print message of updated List
console.log("Updated List of our Guest");
// Sending a invitation message to our guests one by one with their guest
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", Would you like to dinner with me?")); });
//Infrom add only two guests can be invited for dinner....(ex#17 start...)
console.log("Unfortunetely, the new dinner table wont arrive on time, so I can invite the only two Guests to dinner wit me");
//using while loop to removed guests from the array until inly two names remain.
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, " I cant invite you to dinner"));
}
// sending a invitations to the two guests in the list
console.log("Invitation to the last two guests");
guestList.forEach(function (lasttwo) { return console.log("luckly ".concat(lasttwo, ", you are still invited to dinner")); });
//removing last two guests from the list
guestList.pop();
guestList.pop();
console.log("empty list:", guestList);
