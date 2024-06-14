
const canvas = document.querySelector("canvas");
const context = canvas.getContext('2d');

canvas.width = 1400;
let CANVAS_WIDTH = canvas.width;
canvas.height = 650;
let CANVAS_HEIGHT = canvas.height;

import { drawFon } from './drawFon.js';
import { catRun } from './catRun.js';
import { lineBlock } from './lineBlock.js';
import { colision } from './colision.js';
import { x } from './lineBlock.js';


const speedGame = 1; // от - 4 до 4

let sekonds = 0;
let countFish = 0;

const endGame = new Image();
endGame.src = "images\\endGame.png";

let isGameRunning = true;
console.log(isGameRunning);
const startAnimation = () => { // зона без setTimeOut
    let boxContext = [context, CANVAS_WIDTH, CANVAS_HEIGHT];
    const animate = () => {
        context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        drawFon(boxContext);

        const catHitBox = catRun(boxContext, speedGame); 
        const boxsHitBoxs = lineBlock(boxContext);
        if (colision(boxsHitBoxs, catHitBox)) {
            context.drawImage(endGame, 0, 0, 1400, 650);
            isGameRunning = false;
            console.log(boxsHitBoxs)
            x = 1500
            console.log(isGameRunning);
            return;
        }

        requestAnimationFrame(animate);
    };
    animate();
};
    startAnimation();

const catHead = document.querySelector(".head");
catHead.addEventListener("click", () => {
    // Запускаем игру заново
    isGameRunning = true;
    startAnimation();
});
