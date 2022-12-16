const ListaDeTeclas = document.querySelectorAll('input[type=button] ');
const campoDeExibicao = document.querySelector('input[type=tel] ');
for( let c = 0; c < ListaDeTeclas.length; c++){
    const teclas = ListaDeTeclas[c]
    teclas.onclick = function () {
        campoDeExibicao.value = campoDeExibicao.value + teclas.value
    }

    teclas.onkeydown = function (evento) {
        if(evento.code == 'Space' || evento.code =='Enter'){
            teclas.classList.add('ativa');
            console.log('é a teclca')
        } else{
            console.log('Não é as respectvias teclas')
        }
        
    }
    teclas.onkeyup = function () {
        teclas.classList.remove('ativa'); 
    }
}