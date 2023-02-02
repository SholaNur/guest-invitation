var guestList = ["Aku", "John", "Sheyma", "Beyza", "Askar", "Azim"];

var guestName = prompt("What is your name?");
alert(guestName);
if (guestList.includes(guestName)) {
    prompt("Welcome! Happy to see you!:)")
} else {
    prompt("Sorry, next time!");
}
