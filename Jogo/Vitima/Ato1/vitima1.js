function escolha(){
    while(question != 1 || question != 2 || question != 3){
        var question = prompt(`Escolha :\n  1.Você tenta se desamarrar de alguma maneira, e tentar quebrar o vidro da van para fugir.
        \n 2.Você procura algo dentro da van que possa te ajudar a sair dela, alguma chave, faca, qualquer coisa
        \n 3.Você tentar fugir com a van fazendo uma ligação direta`);
    
    if(question == 1){
        window.location.href="GameOverAto1/GameOverAto1.html";
        break;
    }else if(question == 2){
        window.location.href = "../Ato2/vitima2.html";
        break;
    }else if(question == 3){
        window.location.href = "GameOverAto1/GameOverAto1Es2.html";
        break; 
    }else{
        alert("Digite 1, 2 ou 3");
    }
    }
}