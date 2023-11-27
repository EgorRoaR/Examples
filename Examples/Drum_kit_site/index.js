for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});


function makeSound(key) {
  switch (key) {
    case "a":
      var hi_hat = new Audio('sounds/hi-hat.mp3');
      hi_hat.play();
      break;

    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "d":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "c":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    case "j":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "k":
      var ride = new Audio('sounds/ride.mp3');
      ride.play();
      break;

    case "l":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
