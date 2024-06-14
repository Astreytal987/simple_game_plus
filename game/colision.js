export const colision = (boxsHitBoxs, catHitBox) => {
    const [boxsX, BoxY, BoxY2, widthBoxs, heightBoxs] = boxsHitBoxs
    const [catX, catY, catWidth, catHeight] = catHitBox

    if  (
        catX < boxsX + 60 + widthBoxs &&
        catX + catWidth > boxsX + 60 &&
        catY < BoxY + heightBoxs &&
        catY + catHeight > BoxY ||
        
        catX < boxsX + 60 + widthBoxs &&
        catX + catWidth > boxsX + 60 &&
        catY < BoxY2 + heightBoxs &&
        catY + catHeight > BoxY2

        ) {
            return true;
        }
}
