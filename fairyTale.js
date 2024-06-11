// 1. Create a variable named `place` and set the value to a string that says whatever place you want.
let place="Rome";
// 2. Create a variable named `creatureName` and set the value to a string that says whatever name you want to give the creature.
let creatureName="Jeffrey";
// 3. Create a variable named `color` and set the value to a string that says whatever color you want.
let color="silver";
// 4. Create a variable named `color2` and set the value to a string that says a different color you want.
let color2="gold";
// 5. Create a variable named `emotion` and set the value to a string that says whatever emotion you want.
let emotion="depressed";
// 6. Create a variable named `character` and set the value to a string that says whatever name for a character you want.
let character="Aurelius";
// 7. Create a variable named `number` and set the value to a number greater than 1.
let number=1.5;
// 8. Create a variable named `item` and set the value to a string that says whatever item/thing you want.
let item="bazooka";
// 9. Create a variable named `item2` and set the value to a string that says a different item/thing you want.
let item2="bon";
// 10. Create a variable named `verb` and set the value to a string that says whatever verb you want.
let verb="shout";
// 11. Create a variable named `adverb` and set the value to a string that says whatever adverb you want.
let adverb="decrepitly";
// 12. Create a variable named `number2` and set the value to a number greater than 1.
let number2= 9999;





// 14. Replace the null values with the appropriate variable you created above.
// - Afterwards, run your code and press the button to see your story ✨

document.querySelector("button").addEventListener("click", function() {
    document.querySelector(".place").innerHTML = Rome;
    document.querySelector(".creature-name").innerHTML = Jeffrey;
    document.querySelector(".color").innerHTML = silver;
    document.querySelector(".color-2").innerHTML = gold;
    document.querySelector(".emotion").innerHTML = depressed;
    document.querySelector(".character").innerHTML = Aurelius;
    document.querySelector(".creature-name-again").innerHTML = Jeffrey;
    document.querySelector(".number").innerHTML = 1.5;
    document.querySelector(".item").innerHTML = bazooka;
    document.querySelector(".character-again").innerHTML = Aurelius;
    document.querySelector(".item-2").innerHTML = bon;
    document.querySelector(".verb").innerHTML = shout;
    document.querySelector(".adverb").innerHTML = decrepitly;
    document.querySelector(".number-2").innerHTML = 9999;
    document.querySelector(".story-container").style = "display:block";
});
