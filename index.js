var numOfDrums = document.querySelectorAll("button").length;

for (let x = 0; x < numOfDrums; x++) {
  document.querySelectorAll("button")[x].addEventListener("click", function () {
    btnAnimation(this.innerHTML);
    var audio = new Audio(`./sounds/${this.innerHTML}.mp3`);
    audio.play();
  });
}
document.addEventListener("keypress", function (event) {
  btnAnimation(event.key);
  var audio = new Audio(`./sounds/${event.key}.mp3`);
  audio.play();
});

function btnAnimation(currentkey) {
  var activebtn = document.querySelector("." + currentkey);
  activebtn.classList.add("pressed");
  setTimeout(() => {
    activebtn.classList.remove("pressed");
  }, 100);
}
