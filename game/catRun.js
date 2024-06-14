let actualCatPositionIndex = 0

const playerImage = new Image();
playerImage.src = "../images/CatList.png";
const spriteWidth = 137;
const spriteHeight = 100;
let frameX = 0;
let gameFrame = 0;

export const catRun = (boxContext, speedGame) => {
    let [context, CANVAS_WIDTH, CANVAS_HEIGHT] = boxContext
    let staggerFrames = 5 - speedGame; // можно вообще не использовать 5

    const positionsCat = [
    {"x": 10, "y": (CANVAS_HEIGHT / 3) - 110},
    {"x": 10, "y": (CANVAS_HEIGHT / 3 * 2) - 110},
    {"x": 10, "y": CANVAS_HEIGHT - 95}
    ]
    let lvl = positionsCat[actualCatPositionIndex]

    context.drawImage(playerImage, frameX * spriteWidth, 0, spriteWidth, spriteHeight, lvl.x, lvl.y, spriteWidth, spriteHeight);
        if (gameFrame % staggerFrames == 0) {
            if (frameX < 6) frameX++;
            else frameX = 0;
        }
        gameFrame += 1;
        return [lvl.x, lvl.y, spriteWidth, spriteHeight]
}

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