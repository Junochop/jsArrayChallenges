//Challenge 1
var challengeOneInput = "bba abb"

//Split the words from challengeOneInput
var splitInput = challengeOneInput.split(" ");

//Split the charters into an array
var split1 = splitInput[0].split("");
var split2 = splitInput[1].split("");

//Declare var alpahbet to utilize index positioning: indexOf()+1
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var total1 = 0;
var total2 = 0;

//Create a "for loop" and then sum up the total points from each character
for(var i = 0; i < split1.length; i++){
    total1 += alphabet.indexOf(split1[i]) + 1;
}

for (var j = 0; j < split2.length; j++) {
    total2 += alphabet.indexOf(split2[j]) + 1;
}

//Compare and display the high score and the high score word; When the scores are tied, display the first word
if (total1 >= total2){
     document.getElementById("challenge-1").innerHTML = "<h2>" + splitInput[0] + "</h2>"+ "the high score is " + total1; 

} else {
    document.getElementById("challenge-1").innerHTML = "<h2>" + splitInput[1] + "</h2>"+ "the high score is " + total2; 
}


