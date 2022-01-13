function escolha(){
    while(question != 1 || question != 2 || question != 3){
        var question = prompt(`Escolha :\n  1.Arco e Flecha
        \n 2.Espingarda de Cano Duplo
        \n 3.Facão`);
    
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