const BG = document.querySelector('.bg')
let score = 0

let placar = document.getElementById('score')


function createCactus(){
    let CACTUS = document.createElement('div')
    let cactusPosition = 1000
    let randowTime = Math.random() * 6000

    CACTUS.classList.add('cactus')
    CACTUS.style.left = 1000 + 'px'
    BG.appendChild(CACTUS)

    let leftInterval = setInterval(() => {

        if(cactusPosition < -60) {
            clearInterval(leftInterval)
            BG.removeChild(CACTUS)
            score++
            placar.innerHTML = score
        }else if(cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            clearInterval(leftInterval)
            document.body.innerHTML = `<div class="game-over-div">
            <h1 class="game-over">Game over</h1>
            <a class="btn-game-over" href="./index.html">Tentar novamente</a>
            <p>Sua pontuação foi: ${score} </p>
            </div>`
        }else {
            cactusPosition -= 10
            CACTUS.style.left = cactusPosition + 'px'
        }


    }, 20)
// recursividade
    setTimeout(createCactus, randowTime)
}

createCactus()
