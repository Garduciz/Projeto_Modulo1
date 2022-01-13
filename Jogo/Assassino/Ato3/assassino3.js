function escolha(){
    while(question != 1 || question != 2 || question != 3){
        var question = prompt(`Escolha :\n  1.Você não sente medo, talvez sua vitima nem saiba usar uma arma, então ir com tudo é a melhor opcão e depois queimar o corpo dela para destruir as evidências
        \n 2.Você decide assustar sua vitima antes de confrota-lá, talvez jogando algo no quarto que ela se esconde para faze-la descarregar a arma, e depois colocando fogo na casa para destruir as evidências
        \n 3.Você decide fugir, os policias podem ser um problema maior e talvez arriscar sua vida com uma vitima possivelmente armada pode não ser uma boa ideia `);
    
    if(question == 1){
        window.location.href="GameOverAto3/GameOverAto3.html";
        break;
    }else if(question == 2){
        window.location.href = "Ending/Ending.html";
        break;
    }else if(question == 3){
        window.location.href = "GameOverAto3/GameOverAto3Es2.html";
        break; 
    }else{
        alert("Digite 1, 2 ou 3");
    }
    }
}