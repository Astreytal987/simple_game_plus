let actualCatPositionIndex = 0 // 0 - up, 1 - medium, 2 - down

// размеры и фотографии кота
const playerImage = new Image();
playerImage.src = "../images/CatList.png";
const spriteWidth = 137;
const spriteHeight = 100;

// фреймы для анимации кота
let frameX = 0;
let gameFrame = 0;

export const catRun = (boxContext, speedGame) => {
    let [context, CANVAS_WIDTH, CANVAS_HEIGHT] = boxContext
    let staggerFrames = 5 - speedGame; // можно не использовать 5

    // координаты кота
    const positionsCat = [
    {"x": 10, "y": (CANVAS_HEIGHT / 3) - 110},
    {"x": 10, "y": (CANVAS_HEIGHT / 3 * 2) - 110},
    {"x": 10, "y": CANVAS_HEIGHT - 95}
    ]

    // текущая позиция кота
    let lvl = positionsCat[actualCatPositionIndex]

    // отрисовка кота
    context.drawImage(playerImage, frameX * spriteWidth, 0, spriteWidth, spriteHeight, lvl.x, lvl.y, spriteWidth, spriteHeight);
        // повторная прокрутка кота
        if (gameFrame % staggerFrames == 0) {
            if (frameX < 6) frameX++;
            else frameX = 0;
        }
        // увеличение фрейма
        gameFrame += 1;
        return [lvl.x, lvl.y, spriteWidth, spriteHeight]
}

// управление котом клавиатурой
window.addEventListener("keydown", (e) => {
    e.preventDefault();
     
    switch(e.key){
        case "ArrowUp":
            if(actualCatPositionIndex != 0) {
                actualCatPositionIndex -= 1;
            }
            break;
        case "ArrowDown":
            if(actualCatPositionIndex != 2) {
                actualCatPositionIndex += 1;
            }
            break;
    }
});

// управление котом кнопками на экране
const buttons = document.querySelectorAll('.game-wrap button');
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(button.classList.contains('game-button2-second') || button.classList.contains('game-button2-fourth')) {
            if(actualCatPositionIndex != 0) {
                actualCatPositionIndex -= 1;
            }
        }

        if(button.classList.contains('game-button2-third') || button.classList.contains('game-button2-first')) {
            if(actualCatPositionIndex != 2) {
                actualCatPositionIndex += 1;
            }
        }
    });
    
})