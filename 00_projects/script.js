let bodyTheme = document.getElementById('theme')
let themeButton1 = document.getElementById('buttonOne')
let themeButton2 = document.getElementById('buttonTwo')
let displayText = document.getElementById('displayText')

themeButton1.addEventListener('click',function(){
    bodyTheme.style.backgroundColor = 'antiquewhite'
    bodyTheme.style.transition = '0.3s'
    displayText.innerText = 'Hey.. I am Day ☀️'
    displayText.style.color = 'black'
},false)

themeButton2.addEventListener('click',function(){
    bodyTheme.style.backgroundColor = 'black'
    bodyTheme.style.transition = '0.3s'
    displayText.innerText = 'Hello.. I am Night 🌙'
    displayText.style.color = 'antiquewhite'
},false)