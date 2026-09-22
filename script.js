var cursor = svg.createSVGPoint()
// 1. Change target selector from arrow to bullet
var bullet = document.querySelector(".bullets");

let target = { x: 900, y: 249.5 }; //center of target
let pivot = { x: 100, y: 250}; //gun rotation/barrel point

//initial positioning or initial ain orientation
aim({ clientX: 320, clientY: 300 });

//2. Chaange event from starting a drag ("moudedown") to immediate firing ("click")
window.addEventListener("click", fire);

function fire(e) {
    //3. Add simulation of gun recoil 
    let recoilAngle = (Math.random() * Math.PI * 0.01)- 0.005;

    //4.Show the bullet instantly or triger bullet flash
    TweenMax.to("bullet-flash", 0.05, {
        opacity: 1,
        yoyo: true,
        repeat: 1,
    
    })

    //5. Trigger the bullet movement sequence
    bulletFly(recoilAngle);

}
// Keep tracking mouse movement to rotate the gun toward the cursor
window.addEventListener("mousemove", aim);