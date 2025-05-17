function enviarWhats(event){
    event.preventDefault()
const nome = document.getElementById('nome').value;
const mensagem = document.getElementById('mensagem').value;
const telefone = '5561991141445'

const texto = `Ola! Me chamo ${nome}, ${mensagem}`
const msgFormatada = encodeURIComponent(texto)

const url = `https://whatsa.me/${telefone}/?t=${msgFormatada}`

console.log(url)

window.open(url, '_blank')
}

