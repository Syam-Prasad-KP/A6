let malayalamScore=Number(prompt("Enter the mark of Malayalam : "));
let englishScore=Number(prompt("Enter the mark of English : "));
let mathsScore=Number(prompt("Enter the mark of Maths : "));
let basicscienceScore=Number(prompt("Enter the mark of Basic science : "));
let socialscienceScore=Number(prompt("Enter the mark of Social science : "));

let totalScore=malayalamScore+englishScore+mathsScore+basicscienceScore+socialscienceScore;
let averageScore=totalScore/5;
let grade;

if(averageScore>=90){
    grade="A+";
}
else if(averageScore>=80){
    grade="A";
}
else if(averageScore>=70){
    grade="B";
}
else if(averageScore>=60){
    grade="C";
}
else if(averageScore>=50){
    grade="D"
}
else{
    grade="F";
}
alert("Total score : "+totalScore+"\nAverage score : "+averageScore+"\nGrade : "+grade);
