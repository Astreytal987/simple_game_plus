export let x = 1400 // начальное положение холодильников
const textures = ["images\\red_fridge_fix.png", "images\\gray_fridge.png"] // все текстуры для холодильников
// "images\\white_fridge.png", 

// генерация случайных текстур для холодильников
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
// отрисовка препядствий
export const lineBlock = (boxContext) => {
    let [context, CANVAS_WIDTH, CANVAS_HEIGHT] = boxContext

    context.drawImage(oneBlock, x, randomLine, 60, 120)
    context.drawImage(twoBlock, x, randomLine2, 60, 120)
    
    x -= 15 // скорость движения холодильников
    if (x < -100) {
    // если холодильник ушел за пределы экрана, то генерируем новые текстуры и новые положения холодильников
    [oneBlock, twoBlock] = randomTexture(textures)

        randomLine = [14,160,320][Math.floor(Math.random() * 3)]
        randomLine2 = [14,160,320][Math.floor(Math.random() * 3)]
        x = 1400
    }
    // возращаем хитбоксы препядствий
    return [x, randomLine, randomLine2, 80, 150]
}


