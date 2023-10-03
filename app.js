var clickbtn= document.getElementById("exampleFormControlInput5");
clickbtn.addEventListener("click",storeDetails);
function  storeDetails()
{ 
var myobj=   
{ 
    "fname":document.getElementById("exampleFormControlInput1").value,
   "lname":document.getElementById("exampleFormControlInput2").value,
   "email":document.getElementById("exampleFormControlInput4").value,
    "dob":document.getElementById("exampleFormControlInput3").value
}
localStorage.setItem("myDetails",JSON.stringify(myobj));
}
