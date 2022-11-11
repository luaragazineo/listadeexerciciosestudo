
function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas. `

    if (hora > 0 && hora < 12 ){
        img.scr = 'img/img-manhã.jpg'
        document.body.style.background = 'rgb(70, 142, 236)'
    }else if (hora < 18){
        img.src = 'img/img-tarde.jpg'
        document.body.style.background= 'rgba(192, 104, 36, 0.871)'
    }else {
        img.src = 'img/img-noite.jpg'
        document.body.style.background= 'rgba(10, 10, 65, 0.871)'
    }
}