// alert("test");

var backgroundcolorOptions = ["red", "pink", "blue", "yellow"];

document.querySelector("button").addEventListener("click", function changeBackgroundcolor(){
  // alert("I got clicked");
  // function changeBackgroun(){
  var rabdomNum = Math.random()*4;
  // console.log("this is" + rabdomNum);
  var randomColor = Math.floor(rabdomNum);
  // console.log(randomColor);

  var backgroundColor = backgroundcolorOptions[randomColor];
  // console.log(backgroundColor);
  // document.querySelector(".mainSection").style.background= "red";
  document.querySelector(".mainSection").style.background= backgroundColor;
  document.querySelector("p").innerText= backgroundColor;
});

document.querySelector(".first").addEventListener("click", function resetBackground(){
  document.querySelector(".mainSection").style.background="gray";
});

// FreeCodeCamp: get the rundomNumber through a function 
