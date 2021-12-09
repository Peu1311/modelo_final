if(innerWidth <= 600){
    window.document.querySelector('.default').classList.add('phone');
}
else if(innerWidth <= 992){
    window.document.querySelector('.default').classList.add('note');
}
else{
    window.document.querySelector('.default').classList.add('desktop');
}