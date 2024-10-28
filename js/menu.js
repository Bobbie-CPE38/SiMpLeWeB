const navMenu = document.querySelector('.nav-menu');
navMenu.innerHTML = `
    <div class="menu-btn">
        <span></span>
        <span></span>
    </div>
    <div class="menu">
        <div class="menu-inner">
            <a href="./index.html">Top</a>
            <a href="./about.html">About</a>
            <a href="./activities.html">Activities</a>
        </div>
    </div>
`
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', ()=>{
    if(menu.classList.contains('isopen')){
        menu.classList.remove('isopen');
        menuBtn.classList.remove('isopen');
        menu.classList.add('isclose');
        setTimeout(()=>{
            menu.classList.remove('isclose');
        }, 400);
    }else{
        menu.classList.remove('isclose');
        menuBtn.classList.add('isopen');
        menu.classList.add('isopen');
    }
})