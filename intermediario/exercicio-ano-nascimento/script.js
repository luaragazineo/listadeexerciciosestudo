let botao = document.getElementById('btn')
function verificar() {
    let data = new Date ()
    let ano = data.getFullYear()
    let anonasc = document.getElementById('txtano')
    let res = document.getElementById('res')

    if( (anonasc.value.length) == 0 || Number(anonasc.value) > ano ){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        let sexo = document.getElementsByName('txtsexo')
        let idade = ano - Number(anonasc.value)
        let img = document.createElement('img')

        if (sexo[0].checked){
            //HOMEM
            res.innerHTML = `Detectamos homem com ${idade} anos. `
            if(idade >= 0 && idade < 11 ){
                //criança
                img.setAttribute('src', 'img/homemcrianca.jpg')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'img/homemjovem.jpg')
            }else if (idade < 61){
                //adulto
                img.setAttribute('src', 'img/homemadulto.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'img/homemidoso.jpg')
            }
        }else {
            //MULHER
            res.innerHTML = `Detectamos mulher com ${idade} anos. `
            if(idade >= 0 && idade < 11 ){
                //criança
                img.setAttribute('src', 'img/mulhercrianca.jpg')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'img/mulherjovem.jpg')
            }else if (idade < 61){
                //adulto
                img.setAttribute('src', 'img/mulheradulta.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'img/mulheridosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}
botao.addEventListener('click', verificar)