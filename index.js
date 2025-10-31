const decBtn=document.getElementById("dec");
const resetBtn=document.getElementById("reset");
const incBtn=document.getElementById("inc");
const myLabel=document.getElementById("myLabel");

let count=0;
 decBtn.onclick=function(){
    count--;
    myLabel.textContent=count;
 }
 resetBtn.onclick=function(){
    count=0;
     myLabel.textContent=count;

 }
incBtn.onclick=function(){count++;
     myLabel.textContent=count;
}