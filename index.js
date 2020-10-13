var count = document.querySelectorAll(".drum").length;

for (var i = 0; i < count; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        switch(this.innerHTML) {
            case 'w': let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

            case 'a': let tom2 = new Audio("sound/tom-2.mp3");
            tom2.play();
            break;

            case 's': let tom3 = new Audio("sound/tom-3.mp3");
            tom3.play();
            break;

            case 'd': let tom4 = new Audio("sound/tom-4.mp3");
            tom4.play();
            break;

            case 'j': let crash = new Audio("sound/crash.mp3");
            crash.play();
            break;

            case 'k': let kick = new Audio("sound/kick-bass.mp3");
            kick.play();
            break;

            case 'l': let snare = new Audio("sound/snare.mp3");
            snare.play();
            break;
        }
    });
}



// var sound = new Audio("sounds/tom-1.mp3");
//         sound.play();