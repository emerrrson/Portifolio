function toggleMode() {
    const html = document.documentElement
    // if(html.classList.contains('light')) {
    //    html.classList.remove('light')
    // } else {
    //  html.classList.add('light')
    // }

    //pegar a tag img

    const img = document.querySelector("#profile img")


    // subtituir a imagem
    if(html.classList.toggle('light')) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src','./assets/emerson2.png')
    } else {
        img.setAttribute('src', "./assets/emerson.png")
    }

    

    //substituir a imagem
    // se tiver sem light mode, manter a imagem normal
}