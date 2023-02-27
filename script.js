window.document.querySelector('button').addEventListener('click',()=>{
    window.document.querySelector('main').innerHTML=''
    var img = window.document.createElement('img')
    window.document.querySelector('main').appendChild(img)
    window.document.querySelector('img').src='./calabresa_desktop.jpg'
})