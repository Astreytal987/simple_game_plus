const catHero = document.getElementById("catHero")
const cactus = document.getElementById("cactus")
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") {
      upLevel()
    }
    if (event.key === "ArrowDown") {
        downLevel()
      }
  });

function upLevel () {
    const catHeroBlock = catHero.parentNode
    const upCatBlock = catHeroBlock.previousElementSibling
    upCatBlock.prepend(catHero)
    console.log(upCatBlock)
}
function downLevel () {
    const catHeroBlock = catHero.parentNode
    const downCatBlock = catHeroBlock.nextElementSibling
    downCatBlock.prepend(catHero)
    console.log(downCatBlock)
}

