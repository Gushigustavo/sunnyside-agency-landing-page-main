const btnMobile = document.getElementById("btn__mobile")


function toggleMenu(){
    const nav = document.getElementById('menunav')
    nav.classList.toggle('active')
}

function test(){
    const spanbtn = document.getElementById('btn__mobile')
    spanbtn.classList.toggle('active')
}

btnMobile.addEventListener('click' ,toggleMenu)
btnMobile.addEventListener('click', test)

