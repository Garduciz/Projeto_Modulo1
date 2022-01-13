function escolha(){
    while(question != 1 || question != 2 || question != 3){
        var question = prompt(`Escolha :\n  1.Você vai atrás da vitima que entrou na floresta 
        \n 2.Você tenta fugir indo ate sua van
        \n 3.Você fingi que é uma vitima para Enganar os policiais`);
    
    if(question == 1){
        window.location.href="../Ato2/Assassino2.html";
        break;
    }else if(question == 2){
        window.location.href = "../GameOverAto1/GameOverAto1Es2.html";
        break;
    }else if(question == 3){
        window.location.href = "../GameOverAto1/GameOver2Ato1Es3.html";
        break; 
    }else{
        alert("Digite 1, 2 ou 3");
    }
    }
}