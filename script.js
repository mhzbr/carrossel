// essa função que seta o intervalo em que as imagens vão passar, tudo é medido em ms, por isso 3000 la embaixo

//o getElementById é pra identificar o slide, que estão com o id "slide"

//o if da função é usado pra quando o contador chegar na ultima imagem voltar até o inicio e reiniciar o looping

let contador = 1;

    setInterval( function(){
        document.getElementById('slide' + contador).checked = true;
            contador++;

            if (contador > 5 ) {
                    contador = 1;
            }
        }, 3000 );