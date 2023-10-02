console.log("hello world");

var clickbtn= document.getElementById("exampleFormControlInput5");
clickbtn.addEventListener("click",storeDetails);

function storeDetails(e)
{
    e.preventDefault();
    localStorage.setItem("fname",document.getElementById("exampleFormControlInput1").value);
    localStorage.setItem("lname",document.getElementById("exampleFormControlInput2").value);
    localStorage.setItem("email",document.getElementById("exampleFormControlInput4").value);
    localStorage.setItem("dob",document.getElementById("exampleFormControlInput3").value); 
}
