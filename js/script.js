const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector(".clouds")

const jump = () => {
    mario.classList.add('jump');
    
    setTimeout(() =>{
        mario.classList.remove('jump');
    }, 600);
}

 const loop = setInterval(()=>{
 
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;

    console.log(marioPosition)

    if (pipePosition <= 125 &&  pipePosition > 0 && marioPosition < 110) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    pipe.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    clouds.style.animation = 'none'
    clouds.style.left = `${cloudsPosition}px`;

    mario.src = "./images/game-over.png"
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'

    clearInterval(loop);

}

}, 10)

document.addEventListener('keydown', jump);