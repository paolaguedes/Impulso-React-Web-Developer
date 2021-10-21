const url = 'https://thatcopy.pw/catapi/rest/'
const btn = document.querySelector('#btn')
const img = document.querySelector('#img')

const pegaImg = async ()=> {
    const dadoUrl = await fetch(url)
        .then((response) => response.json())
        .catch((e) => console.log(e))

    return dadoUrl.webpurl
}

const recarregaImg = async ()=> {
    img.src = await pegaImg()
}

btn.addEventListener('click', recarregaImg)

recarregaImg()


// refiz o exercicio como forma de estudar oq foi feito