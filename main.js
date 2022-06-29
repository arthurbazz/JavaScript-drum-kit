// function playsound
const playSound = (event) => {
    
    const audio = document.querySelector(`audio[data-key='${event.keyCode}']`);// data-key attribute selector
    const key = document.querySelector(`.key[data-key='${event.keyCode}']`);
    if(!audio) return; //stop the function from running

    audio.currentTime = 0; //rewind to the start
    audio.play(); // playing audio
    key.classList.add('playing');
    
    function removeTransition(event) {
        if(event.propertyName !== 'transform') return; //skip if its not a transform
        console.log(this);
        this.classList.remove('playing');
    }

    // removing the class using a transition end event
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    
}

window.addEventListener('keydown', playSound);