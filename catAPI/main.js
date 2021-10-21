// url da api
const BASE_URL = 'https://thatcopy.pw/catapi/rest/'
const btn = document.getElementById("btn")

// define que é uma funcao assincrona
const getCats = async () => {

    try {
        const data = await fetch (BASE_URL)
        const json = await data.json() // transformando string em json
    
        return json.webpurl // img comprimida
    } catch(e) {
        console.log(e.message)
    }
}

const loadImg = async() => {
    const img = document.getElementById("img")
    img.src = await getCats() // colocando no src da img a url q recebermos da api
}

btn.addEventListener('click', loadImg) // botao para trocar as imagens

loadImg()

// outra forma sem usar try/catch
//     const getCats = async () => {
//         const data = await fetch (BASE_URL)
//         .then((response) => response.json())
//         .catch((e) => console.log(e))
//     return data.webpurl