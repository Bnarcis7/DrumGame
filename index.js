var w_audio = new Audio("sounds/tom-1.mp3")
var a_audio = new Audio("sounds/tom-2.mp3")
var s_audio = new Audio("sounds/tom-3.mp3")
var d_audio = new Audio("sounds/tom-4.mp3")
var j_audio = new Audio("sounds/snare.mp3")
var k_audio = new Audio("sounds/crash.mp3")
var l_audio = new Audio("sounds/kick-bass.mp3")

for (var i = 0; i <= document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        makeSound(this.innerText);
        buttonAnimation(this.innerText);
    })

    document.addEventListener("keydown", function (event) {
        makeSound(event.key);
        buttonAnimation(event.key);

    })
}

function makeSound(key) {
    switch (key) {
        case "w": w_audio.play(); break;
        case "a": a_audio.play(); break;
        case "s": s_audio.play(); break;
        case "d": d_audio.play(); break;
        case "j": j_audio.play(); break;
        case "k": k_audio.play(); break;
        case "l": l_audio.play(); break;
        default: console.log(key);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}
