window.document.querySelector('button').addEventListener('click',()=>{
    var opt={
        method:'GET',
        mode:'cors',
        cache:'default'
    }
    fetch('./objeto.json',opt)
    .then(data=>console.log(data))
})