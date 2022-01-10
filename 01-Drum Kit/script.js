let numberOfDrumBtn = document.querySelectorAll(".drum");
let drumBtn1 = document.querySelectorAll(".drum")[0];

drumBtn1.onclick = ()=>{
  new Audio("sounds/tom-1.mp3").play();
}

for (var i = 0; i < numberOfDrumBtn.length; i++) {
  numberOfDrumBtn[i].addEventListener("click", function () {
    let buttonValue = this.value;
    new Audio("sounds/"+buttonValue+".mp3").play();
  });
}

document.addEventListener("keypress", function (event) {
  entryKey = event.key;
  new Audio("sounds/tom-"+entryKey+".mp3").play();

  let activeButton = document.querySelector("." + entryKey);

  activeButton.classList.add("pressed");
  setTimeout(()=>{activeButton.classList.remove("pressed");}, 100);


});

/*
for (var i = 0; i < numberOfDrumBtn.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  console.log(key)
  switch (key) {
    case "w":
      new Audio("sounds/tom-w.mp3").play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-a.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-s.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-d.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/tom-j.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/tom-k.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/tom-l.mp3");
      kick.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

//var audio = new Audio('sounds/tom-w.mp3');
//audio.play();*/



window.addEventListener('keydown', function (e) {
  console.log(e);
});