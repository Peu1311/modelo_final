//innerWidth retorna o tamanho da tela para saber qual css utilizar, faz isso adicionando uma classe específica de acordo com o tamanho da tela

if(innerWidth <= 600){
    let x = window.document.querySelectorAll('.default');
    for(i = 0; i < x.length; i++){
        x[i].classList.add('phone');
    }
}
else if(innerWidth <= 992){
    let x = window.document.querySelectorAll('.default');
    for(i = 0; i < x.length; i++){
        x[i].classList.add('note');
    }
}
else{
    let x = window.document.querySelectorAll('.default');
    for(i = 0; i < x.length; i++){
        x[i].classList.add('desktop');
    }
}