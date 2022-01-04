(function carregar(){
    var msg = document.querySelector("#msg")
    var img = document.querySelector("#imagem")
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`
    if (hora >= 0 && hora < 12) {
        // manha
        img.src = 'manha.png'

    }else if (hora >= 12 && hora < 18) {
        // tarde
        img.src = 'tarde.png'
        document.body.style.background = '#FF9472'
    }else{
        // noite
        img.src = 'noite.png'
        document.body.style.background =  '#161A20'
    }

    return carregar
})()

carregar()

