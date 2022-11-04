//initialising a variable name data
var data = 0;
  
//printing default value of data that is 0 in h2 tag
document.getElementById("counting").innerText = data;

//creation of increment function
function increment() {
    data = data + 1;
    document.getElementById("counting").innerText = data;
}
//creation of decrement function
function decrement() {
    data = data - 1;
    if(data<0){
      data=0;
      document.getElementById("counting").innerText = data;
      }
    document.getElementById("counting").innerText = data;
}

var data2 = 0;
  
//printing default value of data that is 0 in h2 tag
document.getElementById("counting2").innerText = data2;

//creation of increment function
function increment2() {
    data2 = data2 + 1;
    document.getElementById("counting2").innerText = data2;
}
//creation of decrement function
function decrement2() {
    data2 = data2 - 1;
    if(data2<0){
      data2=0;
      document.getElementById("counting2").innerText = data2;
      }
    document.getElementById("counting2").innerText = data2;
}

var data3 = 0;
  
//printing default value of data that is 0 in h2 tag
document.getElementById("counting3").innerText = data3;

//creation of increment function
function increment3() {
    data3 = data3 + 1;
    document.getElementById("counting3").innerText = data3;
}
//creation of decrement function
function decrement3() {
    data3 = data3 - 1;
    if(data3<0){
      data3=0;
      document.getElementById("counting3").innerText = data3;
      }
    document.getElementById("counting3").innerText = data3;
}

//my wrong attempt section 
/*const navorder = document.querySelector('.navorder');

document.querySelector('.order_food').onclick = () =>{
    navorder.classList.toggle('active');
    searchForm.classList.remove('order_food');
    cartItem.classList.remove('order_food');
}*/

/*$(document).ready(function(){
    $('li').click(function() {
    $("li.active").removeClass("active");
    $(this).addClass('active');

}});*/
 

//$('#order').click(function){
   // $('order_food').addorder("order_food");
//};

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
/*function myFunction() {
    var x = document.getElementById("order");
    if (x.className === "order_food") {
      x.className += " responsive";
    } else {
      x.className = "order_food";
    }
  }*/
  /*const plus = document.querySelector("plus_btn1");
    minus = document.querySelector("minus_btn1");
    num = document.querySelector("num1");

   let a=1;
   plus.addEventListener("click",()=>{
    a++;
    a = (a<10) ? "0"+a :a;
    //num.innerText = a;
    console.log(a);
    });

    minus.addEventListener("click",()=>{
  if(a > 0){
    a--;
    a=(a <10) ? "0"+a :a;
  }
    });*/
/*let currentNumber = 0;
let isIncreasing = true;
const showNumberP = document.querySelector("num1");
const updateButton = document.querySelector("plus_btn1");

showNumberP.textContent = currentNumber;
updateButton.onclick = () => {
  if (isIncreasing) {
    currentNumber++;
    if (currentNumber == 10) isIncreasing = false;
  } else {
    currentNumber--;
    if (currentNumber == 0) isIncreasing = true;
  }
  showNumberP.textContent = currentNumber;
}*/




