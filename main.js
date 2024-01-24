"use strict"


var buttons = document.querySelectorAll(".icon");
var content = document.querySelectorAll(".sub");

for (let i = 0; i < buttons.length; i++) 
{
  buttons[i].addEventListener("click", function () {
  

    console.log(i);
    if (buttons[i].innerText === "+") 
    {
      buttons[i].innerText = "-";
    
      for (let j = 0; j < content.length; j++) 
      {
        if (j === i) 
        {
          content[j].classList.remove("dis_none");
        } 
        else 
        {
          content[j].classList.add("dis_none");
          buttons[j].innerText = "+"; 
        }
      }
    } 
    else 
    {
      buttons[i].innerText = "+";
      content[i].classList.add("dis_none");
    }
  });
}

//-----------------------------------------------------------

// let content = document.querySelectorAll(".sub");
// let btn1 = document.querySelector("#icon1");
//     btn1.addEventListener("click", function() {
//         if(btn1.innerText=="+")
//         {
//             btn1.innerText="-"
//             content[0].classList.toggle("dis_none")
//             content[1].classList.add("dis_none");
//             content[2].classList.add("dis_none");
//         }
//         else
//         {
//             btn1.innerText="+"
//             content[0].classList.toggle("dis_none")
//         }
      
//     })

// let btn2 = document.querySelector("#icon2");
//     btn2.addEventListener("click", function(){
//         if(btn2.innerText=="+")
//         {
//             btn2.innerText="-"
//             content[1].classList.toggle("dis_none");
//             content[0].classList.add("dis_none");
//             content[2].classList.add("dis_none");
//         }
//         else if(btn2.innerText=="-")
//         {
//             btn2.innerText="+"
//             content[1].classList.toggle("dis_none");
//         }
        
//     })

// let btn3 = document.querySelector("#icon3");
//     btn3.addEventListener("click", function(){
//         if(btn3.innerText=="+")
//         {
//             btn3.innerText="-"
//             content[2].classList.toggle("dis_none");
//             content[0].classList.add("dis_none");
//             content[1].classList.add("dis_none");
//         }
//         else
//         {
//             btn3.innerText="+"
//             content[2].classList.toggle("dis_none");
//         }
       
//     })






