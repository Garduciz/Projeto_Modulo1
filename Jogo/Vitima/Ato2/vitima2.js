function escolha(){
    while(question != 1 || question != 2 || question != 3){
        var question = prompt(`Escolha :\n  1.Sigo a estrada indo somente reto em uma direção
        \n 2.Volto para dentro da van e tento me fingir desmaiada para quando o sequestrador voltar, atacar ele
        \n 3.Corro para dentro da Floresta pode ser um otimo lugar para se esconder`);
    
    if(question == 1){
        window.location.href="GameOverAto2/GameOverAto2.html";
        break;
    }else if(question == 2){
        window.location.href = "GameOverAto2/GameOverAto2Es2.html";
        break;
    }else if(question == 3){
        window.location.href = "../Ato3/vitima3.html";
        break; 
    }else{
        alert("Digite 1, 2 ou 3");
    }
    }
}