// Nav Bar

const toggleBtn = document.querySelector('.menu');
const toggleBtnIcon = toggleBtn.querySelector('i');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open');
  toggleBtnIcon.classList.toggle('fa-bars', !isOpen);
  toggleBtnIcon.classList.toggle('fa-xmark', isOpen);
};

var countDownDate=new Date("Oct 21, 2024 00:00:00").getTime();
var x=setInterval(function(){
  var now=new Date().getTime();
  var distance=countDownDate-now;
  var days=Math.floor(distance/(1000*60*60*24));
  var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
  var minutes=Math.floor((distance%(1000*60*60))/(1000*60));
  var seconds=Math.floor((distance%(1000*60))/(1000));
  document.getElementById("days").innerHTML=days;
  document.getElementById("hours").innerHTML=hours;
  document.getElementById("minutes").innerHTML=minutes;
  document.getElementById("seconds").innerHTML=seconds;

},1000);
// Nav Bar Ends
const balloonContainer = document.getElementById("balloon-container");

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = random(5) + 5;
  return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite
  `;
}

function createBalloons(num) {
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
  }
}

function removeBalloons() {
  balloonContainer.style.opacity = 0;
  setTimeout(() => {
    balloonContainer.remove()
  }, 500)
}

window.addEventListener("load", () => {
  createBalloons(30)
});

window.addEventListener("click", () => {
  removeBalloons();
});
