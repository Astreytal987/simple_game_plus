
export const drawFon = (boxContext) => {
    let [context, CANVAS_WIDTH, CANVAS_HEIGHT] = boxContext
    
    context.beginPath()
    context.moveTo(0 , CANVAS_HEIGHT / 3)
    context.lineTo(CANVAS_WIDTH, CANVAS_HEIGHT / 3)
    context.moveTo(0 , CANVAS_HEIGHT / 3 * 2)
    context.lineTo(CANVAS_WIDTH, CANVAS_HEIGHT / 3 * 2)
    context.lineWidth = 30
    context.strokeStyle = "rgb(8,17,48)"
    context.fillStyle = "#679FD2";
    context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    context.stroke()
}