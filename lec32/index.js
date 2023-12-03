
var numberOfWin=0;
var numberOfLost=0;
for(var i=1;i<=5;i++){
    var guessnumber=parseInt(prompt("enter a number 0-5"));
    var randomNumber=Math.floor(Math.random()*5)+1;
    
    if(guessnumber==randomNumber){
        console.log("you have won")
        numberOfWin++;
    }else{
        console.log("you have lost.Random number was"+randomNumber);
        numberOfLost++;
    }
}
document.write("number of won "+numberOfWin+"<br />");
document.write("number of lost "+numberOfLost);