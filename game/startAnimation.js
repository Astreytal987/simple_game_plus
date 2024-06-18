// начальные параметры для работы canvas
const canvas = document.querySelector("canvas");
const context = canvas.getContext('2d');

canvas.width = 650;
let CANVAS_WIDTH = canvas.width;
canvas.height = 435;
let CANVAS_HEIGHT = canvas.height;

import { drawFon } from './drawFon.js';
import { catRun } from './catRun.js';
import { lineBlock } from './lineBlock.js';
import { colision } from './colision.js';

const speedGame = 1; // от - 4 до 4

// параметры для сервера
let sekonds = 0;
let countFish = 0;

// картинка для завершения игры
const endGame = new Image();
endGame.src = "images\\endGame.png";

let isGameRunning = true;
// бесконечный цикл с анимацией игры
const startAnimation = () => { // зона без setTimeOut
    let boxContext = [context, CANVAS_WIDTH, CANVAS_HEIGHT];
    const animate = () => {
        // очистка канваса
        context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        // отрисовка игрового поля
        drawFon(boxContext);

        const catHitBox = catRun(boxContext, speedGame); // отрисовка кота и создание хитбокса кота
        const boxsHitBoxs = lineBlock(boxContext); // генерация препядствий и создание хитбоксов препядствий
        if (colision(boxsHitBoxs, catHitBox)) { // проверка на столкновение кота и препядствий
            context.drawImage(endGame, 0, 0, 650, 450); // отрисовка картинки окончания игры
            isGameRunning = false;
            return;
        }

        requestAnimationFrame(animate);
    };
    animate();
};
    startAnimation();

// перезапуск игры и её ускорение
const timeButt = document.querySelector(".game-button1-third");
timeButt.addEventListener("click", () => {
    // Запускаем игру заново
    isGameRunning = true;
    startAnimation();
});
