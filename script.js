//try #1
/*function wordReverse() {

    var word = document.getElementById("word").value;
    var result = word.split("").reverse().join("");

    document.getElementByClassName("print")[0].innerHTML = result;

    //console.log("result");

}*/

//try #2
/*let word=document.getElementById('word');

wordReverse.onclick=function() {
    let result = word.split("").reverse().join("");

    //return result;

    alert(result);
}*/

//try #3

function wordReverse() {

    var userInput = document.getElementById('word').value; //This take the input from the user and save it in to the variable
    var result = userInput.split("").reverse().join(""); // then this variable take tha 1st variable and splt, reverse and join the word

    alert(result);
}