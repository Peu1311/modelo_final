window.document.querySelector('button').addEventListener('click',()=>{
    window.document.querySelector('main').innerHTML=''

    var opt={
        method:'GET',
        mode:'cors',
        cache:'default'
    }
    fetch('./objeto.json',opt)
    .then(data=>data.json())
    .then(dados=>{
        var img = window.document.createElement('img')
        window.document.querySelector('main').appendChild(img)
        window.document.querySelector('img').src=dados.pizza
    })
})