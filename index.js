var sound = true;
var count = document.querySelectorAll(".drum").length;

//Mute Sound
document.querySelector(".mute").addEventListener("click", function () {
    if (sound) {
        sound = false;
        document.getElementById("volume-icon").classList.remove("fa-volume-up");
        document.getElementById("volume-icon").classList.add("fa-volume-mute");
    } else {
        sound = true;
        document.getElementById("volume-icon").classList.remove("fa-volume-mute");
        document.getElementById("volume-icon").classList.add("fa-volume-up");
    }
});

//Detecting Button Press
for (var i = 0; i < count; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

//Detecting Key Press
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {

    let display = document.querySelector(".display");

    switch (key) {
        case 'a': let heater1 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3");
            display.innerHTML = "Heater 1";
            if (sound === true) {
                heater1.play();
            }
            break;

        case 's': let heater2 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3");
            display.innerHTML = "Heater 2";
            if (sound === true) {
                heater2.play();
            }
            break;

        case 'd': let heater3 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3");
            display.innerHTML = "Heater 3";
            if (sound === true) {
                heater3.play();
            }
            break;

        case 'f': let heater4 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3");
            display.innerHTML = "Heater 4";
            if (sound === true) {
                heater4.play();
            }
            break;

        case 'g': let clap = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3");
            display.innerHTML = "Clap 4";
            if (sound === true) {
                clap.play();
            }
            break;

        case 'h': let openHH = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3");
            display.innerHTML = "Open-HH";
            if (sound === true) {
                openHH.play();
            }
            break;

        case 'j': let kickNHat = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3");
            display.innerHTML = "Kick-n'-Hat";
            if (sound === true) {
                kickNHat.play();
            }
            break;

        case 'k': let kick = new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3");
            display.innerHTML = "Kick";
            if (sound === true) {
                kick.play();
            }
            break;

        case 'l': let closedHH = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3");
            display.innerHTML = "Closed-HH";
            if (sound === true) {
                closedHH.play();
            }
            break;

        default: console.log("Oops!, This button doesn't work.");
    }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}