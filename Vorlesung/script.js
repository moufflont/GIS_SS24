/*let button = document.getElementById("add");
//auf button zugreifen
button.addEventListener("click", addElement);

function addElement(event){
    if(event.type==="click"||event.key==="Enter"){
        let textfeld = document.getElementById("text");
        let forumDIV = document.getElementById("forum");
        let p = document.createElement("p");
        p.textContent =textfeld.value;
        p.addEventListener("click",loadElement);
        forumDIV.append(p);
    }
}
//erst in array abspeichern?

function loadElement(event){
    let textfeld = document.getElementById("text");
    textfeld.value=event.currentTarget.textContent;
}*/

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// physics animation parameters
const dotAcceleration = -2000; // pixel per second^2
const bouncingLossFactor = 0.9; // speed loss factor when rebouncing at the bottom
const minBouncingSpeed = 25; // minimum speed stopping

// physics animation state
let dotX = window.innerWidth / 2;
let dotHeight = 0; // pixel above bottom
let dotSpeed = 0; // pixel per second
let animationTime = null; // current animation time

canvas.addEventListener('click', onClick);

function onClick(evt) {
  const canvasClientRect = canvas.getBoundingClientRect();
  const x = evt.clientX - canvasClientRect.x;
  const y = evt.clientY - canvasClientRect.y;

  // initialise animation
  dotX = x;
  dotHeight = canvas.height - y;
  dotSpeed = 0;

  // start animation
  animationTime = 0.001 * performance.now();
  requestAnimationFrame(onAnimationFrame);
}

function onAnimationFrame() {
  const now = 0.001 * performance.now();
  const deltaTime = now - animationTime;

  if (animateDot(deltaTime)) {
    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw dot
    let dotRadius = 10;
    ctx.beginPath();
    ctx.arc(dotX, canvas.height - dotHeight, dotRadius, 0, 2*Math.PI);
    ctx.fill();

    // advance animation time
    animationTime = now;

    // continue animation
    requestAnimationFrame(onAnimationFrame);
  }
}

function animateDot(deltaTime) {
  // update height from speed
  dotHeight += deltaTime * dotSpeed;

  // bounce at bottom
  if (dotHeight <= 0) {
    dotHeight = -dotHeight; // correct of negative y-positions
    dotSpeed *= -bouncingLossFactor; // invert speed and apply loss

    // stop animation when rebouncing too slowly
    if (dotSpeed < minBouncingSpeed) {
      return false;
    }
  }

  // update speed from acceleration
  dotSpeed += deltaTime * dotAcceleration;

  // continue animation
  return true;
}