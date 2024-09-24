console.log("im from utilities")

document.getElementsByClassName("donate-btn").addEventListener("click",function(event){
 
    const inputValue=document.getElementById("donate-btn").value;
    const inputNumber=parseFloat(inputValue);
    console.log(inputNumber);



})