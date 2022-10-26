const handleEvent = (content) => {
    switch(content){
        case "w":
                const tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
        case "a":
                const tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
         case "s":
                const tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;                 
        case "d":
                const tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
        case "j":
                const kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
        case "k":
                const snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
        case "l":
                const crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
    }
    
    
}

const buttonAnimation = (content) => {
  const activeButton =  document.querySelector(`.${content}`);
  activeButton.classList.add("pressed");
  setTimeout(()=>{
    activeButton.classList.remove("pressed");
  }, 100)
}

document.addEventListener("keydown",function(event){
    //console.log(event);
    buttonAnimation(event.key);
    handleEvent(event.key);
} );

const buttons = document.querySelectorAll("button");

for(let button of buttons){
    button.addEventListener("click", function(){
        //this.style.color = "white";
        const content = this.textContent;
        buttonAnimation(content);
        handleEvent(content);
    });
}