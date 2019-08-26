//exercise number1 
var clickFooter = document.querySelector("footer");
var count = 0;

clickFooter.addEventListener("click", function(){
   console.log("click" + count);
   count ++ ; 
 });

 //exercise number2 

var navHeader = document.getElementById("navbarHeader");
var navbarToggle = document.querySelector(".navbar-toggler");

navbarToggle.addEventListener("click",function(){
  navHeader.classList.toggle("collapse");
});

//exercise number3

var changeRed = document.querySelectorAll(".card-text")[0];
var btnRed = document.querySelectorAll(".card .btn")[1];

btnRed.addEventListener("click",function(){
 changeRed.style.color = "red";
});

//exercise number4
var secondCard = document.querySelectorAll(".card-body")[1];
var secondCardText = secondCard.querySelector("p")
var btnGreen = secondCard.querySelectorAll(".btn")[1];


btnGreen.addEventListener("click",function(){
 if (secondCardText.style.color === "green"){
  secondCardText.style.color = "";
 }else {
  secondCardText.style.color = "green"
 }
});

//exercise number5
var navbar = document.querySelector(".navbar");
var link = document.querySelector("link")

navbar.addEventListener("dblclick",function(){
   if (link.hasAttribute("rel")){
      link.removeAttribute("rel");
  } else {
      link.setAttribute("rel", "stylesheet")
  }
});

//exercise number6
function reduceCard() {
  let cards = document.querySelectorAll(".card");

  for (let index in cards) {
      let cardImg = cards[index].querySelector(".card-img-top");
      let textCard = cards[index].querySelector(".card-body p");
      let viewBtn = cards[index].querySelector(".card .btn");
      viewBtn.addEventListener("mouseover", function () {

          if (viewBtn.classList.contains("mouse-over")) {
              textCard.style.display = "";
              cardImg.style.width = "";
              cardImg.style.margin = "";
          } else {
              textCard.style.display = "none";
              cardImg.style.width = "20%";
              cardImg.style.margin = "auto";
          }
          viewBtn.classList.toggle("mouse-over")
      });
  }
}







 

 


