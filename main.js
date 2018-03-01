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


//Challenge 2: Option 1

var challengeTwoInputA = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var challengeTwoInputB = [12, 13, 14];
var string1 = challengeTwoInputA.toString();

function changeNum(xxx){
    xxx = xxx.replace(/3/g, "a").replace(/7/g,"b");
    xxx = xxx.replace(/a/g, 7).replace(/b/g, 3);
    return xxx;
}

document.getElementById("challenge-2").innerHTML = "<h3>" + changeNum(string1)+ "</h3>";

//Challenge 2: Option 2
// var string2 = string1.replace(/3/g, "a").replace(/7/g,"b");
// var string3 = string2.replace(/a/g, 7).replace(/b/g, 3);
// console.log(string3);


//Challenge 3
var challengeThreeInputA = [0, 0, 0, 0, 0, 0, 0, 0.55, 0, 0];
var answer3 = "";

for (var a = 0; a < challengeThreeInputA.length; a++){
    if(challengeThreeInputA[0] !== challengeThreeInputA[a]){
     answer3 = challengeThreeInputA[a];
    }
}

document.getElementById("challenge-3").innerHTML = "<h3>" + answer3 + "</h3>";

//Challenge 4
var challengeFourInputA = [3, 8, 1, 2, 4, 12];
var answer4 = [];
for (var b = 0; b < challengeFourInputA.length; b++) {

    answer4.push(challengeFourInputA[b] * 2);
}

document.getElementById("challenge-4").innerHTML = "<h3>" + answer4 + "</h3>";