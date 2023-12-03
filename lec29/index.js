


var score=[10,20,30,40,50];

function highestScore(score){
    var max=score[0];
    for(var x=0;x<5;x++){
if(max<score[x]){
    max=score[x]
}
    }
    return max;
}
var maximum=highestScore(score);
document.write("maximum score is: "+maximum);