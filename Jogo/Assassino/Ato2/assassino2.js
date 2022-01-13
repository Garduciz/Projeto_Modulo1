function escolha(){
    while(question != 1 || question != 2 || question != 3){
        var question = prompt(`Escolha :\n  1.Você não tem medo, então decide entrar com tudo com suas facas em
        \n em mãos para mata-lá rapidamente.
        \n 2.Você fica com medo e decide não mata-la, melhor priorizar sua vida e fugir
        \n 3.Você decide entrar atraves de outro local, silenciosamente, para mata-la`);
    
    if(question == 1){
        window.location.href="../GameOverAto2/GameOverAto2.html";
        break;
    }else if(question == 2){
        window.location.href = "../GameOverAto2/GameOverAto2Es2.html";
        break;
    }else if(question == 3){
        window.location.href = "../Ato3/assassino3.html";
        break; 
    }else{
        alert("Digite 1, 2 ou 3");
    }
    }
}