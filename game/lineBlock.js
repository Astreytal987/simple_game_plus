export let x = 1400
const textures = ["images\\red_fridge_fix.png", "images\\gray_fridge.png"]
// "images\\white_fridge.png", 

const randomTexture = (textures) => {
    const oneBlock = new Image()
    const twoBlock = new Image()
    
    oneBlock.src = textures[Math.floor(Math.random() * 2)]
    twoBlock.src = textures[Math.floor(Math.random() * 2)]
    return [oneBlock,twoBlock]
}

let [oneBlock, twoBlock] = randomTexture(textures)

let randomLine
let randomLine2
export const lineBlock = (boxContext) => {
    let [context, CANVAS_WIDTH, CANVAS_HEIGHT] = boxContext

    context.drawImage(oneBlock, x, randomLine, 60, 120)
    context.drawImage(twoBlock, x, randomLine2, 60, 120)
    
    x -= 15
    if (x < -100) {
    [oneBlock, twoBlock] = randomTexture(textures)

        randomLine = [14,160,320][Math.floor(Math.random() * 3)]
        randomLine2 = [14,160,320][Math.floor(Math.random() * 3)]
        x = 1400
    }

    return [x, randomLine, randomLine2, 80, 150]
}


