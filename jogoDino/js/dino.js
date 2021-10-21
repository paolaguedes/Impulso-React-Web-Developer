const DINO = document.querySelector('.dino')
let isJumping = false
let position = 0

function handleKeyUp(event) {
    if(event.keyCode == 32){
        if(!isJumping){
            jump()
        }
    }
}

function jump() {

    let upInterval = setInterval(() => {
        if(position >= 150) {
            clearInterval(upInterval)
            //descendo
            let downInterval = setInterval(() => {
                if(position <= 0) {
                    clearInterval(downInterval)
                    isJumping = false
                } else {
                    position -= 20
                    DINO.style.bottom = position + 'px'
                }
            }, 20)
        } else {
            //subindo
            position += 20
            DINO.style.bottom = position + 'px'
        }
    }, 20)

}

document.addEventListener('keydown', handleKeyUp)

