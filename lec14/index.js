var marks=prompt("please enter the marks:");
marks=parseInt(marks);

if(marks>=80 && marks<=100){
    document.write("you have got A+")
}else if(marks>=70 && marks<=79){
    document.write("you have got A")
}
else if(marks>=60 && marks<=69){
    document.write("you have got A-")
}
else if(marks>=50 && marks<=59){
    document.write("you have got B")
}
else if(marks>=40 && marks<=49){
    document.write("you have got C")
}
else if(marks>=33 && marks<=39){
    document.write("you have got D")
}
else if(marks>0 && marks<33){
    document.write("you have got F")
}

else{
    document.write("invalid input");
}