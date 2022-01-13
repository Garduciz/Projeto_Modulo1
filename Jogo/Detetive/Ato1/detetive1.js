function escolha(){
    while(question != 1 || question != 2 || question != 3){
        var question = prompt(`Escolha :\n  1.Você vai investigar a Van para descobrir algo 
        \n 2.Você vai investigar essas pegadas na floresta
        \n 3.Você vai investigar esses barulhos estranhos`);
    
    if(question == 1){
        window.location.href="../Ato2/detetive2.html";
        break;
    }else if(question == 2){
        window.location.href = "GameOverAto1/GameOverAto1.html";
        break;
    }else if(question == 3){
        window.location.href = "GameOverAto1/GameOverAto1Es2.html";
        break; 
    }else{
        alert("Digite 1, 2 ou 3");
    }
    }
}