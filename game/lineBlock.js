export let x = 1400
const textures = ["images\\white_fridge.png", "images\\red_fridge_fix.png", "images\\gray_fridge.png"]

const randomTexture = (textures) => {
    const oneBlock = new Image()
    const twoBlock = new Image()
    
    oneBlock.src = textures[Math.floor(Math.random() * 3)]
    twoBlock.src = textures[Math.floor(Math.random() * 3)]
    return [oneBlock,twoBlock]
}

let [oneBlock, twoBlock] = randomTexture(textures)

let randomLine
let randomLine2
export const lineBlock = (boxContext) => {
    let [context, CANVAS_WIDTH, CANVAS_HEIGHT] = boxContext

    context.drawImage(oneBlock, x, randomLine, 80, 150)
    context.drawImage(twoBlock, x, randomLine2, 80, 150)
    
    x -= 20
    if (x < -100) {
    [oneBlock, twoBlock] = randomTexture(textures)

        randomLine = [55,270,500][Math.floor(Math.random() * 3)]
        randomLine2 = [55,270,500][Math.floor(Math.random() * 3)]
        x = 1400
    }

    return [x, randomLine, randomLine2, 80, 150]
}


