//variables needed
var p1Button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var p1score= 0;
var p2score = 0;
var reset = document.getElementById("reset");
var gameover = false;
var winningscore= 5;
var numInput = document.querySelector("input");
var winningscoredisplay = document.querySelector("p span");

function reseting(){
  p1score = 0;
  p2score = 0;
  p1display.textContent = 0;
  p2display.textContent = 0;
  p1display.classList.remove("winner");
  p2display.classList.remove("winner");
  gameover = false;
}
//logic for adding to score 1 and stopping at 5
p1Button.addEventListener("click", function(){
 if(!gameover){
  p1score++;
  console.log(p1score, winningscore);
  if(p1score ===winningscore){
    p1display.classList.add("winner");
    gameover = true;

}
  p1display.textContent = p1score;
}
});
//logic for adding to score 2 and stopping at 5
p2button.addEventListener("click", function(){
 if(!gameover){
  p2score++;
  if(p2score ===winningscore){
    p2display.classList.add("winner");
    gameover = true;
}
  p2display.textContent = p2score;
}
});
//Logic for the reset button
reset.addEventListener("click", function(){
 reseting();
});

//Logic for numInput
numInput.addEventListener("change", function(){
  winningscoredisplay.textContent =  this.value;
  winningscore =Number(this.value);
  reseting();
});
