function investigar(){
    while(question != 1 || question != 2 || question != 3){
        var question = prompt(`Escolha :\n  1.Você decide agir silenciosamente, para pegar o assassino de surpresa
        \n 2.Voce decide ir com tudo, pega sua arma e assim que ver ele atirar
        \n 3.Você decide tentar dialogar com o assassino, caso a vitima esteja viva sua opção seria negociar com ele, se ela estiver morta você pode abrir fogo contra ele`);
    
    if(question == 1){
        window.location.href="Ending/Ending.html";
        break;
    }else if(question == 2){
        window.location.href = "GameOverAto3/GameOverAto3.html";
        break;
    }else if(question == 3){
        window.location.href = "GameOverAto3/GameOverAto3Es2.html";
        break; 
    }else{
        alert("Digite 1, 2 ou 3");
    }
    }
}