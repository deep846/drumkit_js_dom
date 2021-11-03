// alert("Hello drum stick");

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        handleclick(this.innerHTML);

    });
}

document.addEventListener("keydown", function (event) {
    // console.log(event.key);
    handleclick(event.key);
} 
);

function handleclick(a) {

    switch (a) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            buttonAnimation("w");
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            buttonAnimation("a");
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            buttonAnimation("s");
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            buttonAnimation("d");
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            buttonAnimation("j");
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            buttonAnimation("k");
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            buttonAnimation("l");
            break;
        default:
            console.log("error");
            break;
    }


    // if (a.innerHTML == "w") {
    //     var audio = new Audio("sounds/tom-1.mp3");
    //     audio.play();
    //     a.style.color = "white";
    // }
    // else if (a.innerHTML == "a") {
    //     var audio = new Audio("sounds/tom-2.mp3");
    //     audio.play();
    //     a.style.color = "white";
    // }
    // else if (a.innerHTML == "s") {
    //     var audio = new Audio("sounds/tom-3.mp3");
    //     audio.play();
    //     a.style.color = "white";
    // }
    // else if (a.innerHTML == "d") {
    //     var audio = new Audio("sounds/tom-4.mp3");
    //     audio.play();
    //     a.style.color = "white";
    // }
    // else if (a.innerHTML == "j") {
    //     var audio = new Audio("sounds/snare.mp3");
    //     audio.play();
    //     a.style.color = "white";
    // } else if (a.innerHTML == "k") {
    //     var audio = new Audio("sounds/crash.mp3");
    //     audio.play();
    //     a.style.color = "white";
    // }
    // else if (a.innerHTML == "l") {
    //     var audio = new Audio("sounds/kick-bass.mp3");
    //     audio.play();
    //     a.style.color = "white";
    // }


    // alert("I got clicked");
}


function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () { 
        activeButton.classList.remove("pressed");
    }, 100);

}