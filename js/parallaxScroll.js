const parallax1 = document.querySelector('.parallax1');
const parallax2 = document.querySelector('.parallax2');

window.addEventListener('scroll', ()=>{
    const multiplier = 0.3;
    parallax1.style.left = `-${window.scrollY*multiplier}px`;
    parallax2.style.left = `${window.scrollY*multiplier}px`;
    console.log(window.scrollY);
})