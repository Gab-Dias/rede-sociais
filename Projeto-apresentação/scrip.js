function mudarModo() {
    const cor = document.documentElement

    cor.classList.toggle('claro')
    //toggle vai testar se está no na versão clara ou não. Se tiver na versão clara, ele desativa, se tiver na versão não clara, ele ativa. false ou true

    let imagem = document.getElementById("foto1") 

    //substituir a imagem

    //se tiver no modo claro, vai subistuir o src da tag img. 
    if (cor.classList.contains("claro")) {
        
        //setAtribute = vai mudar o atribudo selecionado
        imagem.setAttribute("src", "imagens/foto-claro.jpg") 

        //se tiver no modo escuro, vai colocar a src da outro imagem
    } else {
        imagem.setAttribute("src", "imagens/1.jpg")
    }
    
    }

    