function animation (){
    const topeira = SelecionarDiv()
    

    const topeirasFrames = ["img/toupeira6.svg", "img/toupeira5.svg", "img/toupeira4.svg", "img/toupeira3.svg", "img/toupeira2.svg", "img/toupeira1.svg", "img/toupeira6.svg"]
    

    var count = 0

        var aleatorio = setInterval(function(){

            topeira.querySelector('img').src = topeirasFrames[count]
            count++
           
            if(count === 7){
                clearInterval(aleatorio)
                setTimeout(function() {
                    animation()
                  }, 3000)
                
            } 

}, 500)

}

function SelecionarDiv(){
    let numberRandom = Math.floor(Math.random() * 7 + 1) 

    let quadrado = document.querySelector('.content').children[numberRandom]

    quadrado.querySelector('.topera')
    return quadrado

}

animation()





 




