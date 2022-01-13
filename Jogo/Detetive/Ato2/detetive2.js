function investigar(){
    while(question != 1 || question != 2 || question != 3){
        var question = prompt(`Escolha :\n  1.Você procura no corpo da vitima alguma coisa que o assassino possa ter deixado
        \n 2.Você olha ao redor da vitima procurando por alguma evidência, algo que possa ter sido deixado para trás
        \n 3.Você busca por pegadas ou rastros, provavelmente o assassino ainda está na floresta já que a van dele está parada no mesmo local`);
    
    if(question == 1){
        window.location.href="GameOverAto2/GameOverAto2.html";
        break;
    }else if(question == 2){
        window.location.href = "GameOverAto2/GameOverAto2Es2.html";
        break;
    }else if(question == 3){
        window.location.href = "../Ato3/detetive3.html";
        break; 
    }else{
        alert("Digite 1, 2 ou 3");
    }
    }
}