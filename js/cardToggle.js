const cardBtn = document.querySelector('.card-btn');
const listBtn = document.querySelector('.list-btn');
const cards = document.querySelectorAll('.card');
const mobileList = document.querySelector('.mobile');

cardBtn.addEventListener('click', ()=>{
    if(!cardBtn.classList.contains('isactive')){
        cardBtn.classList.add('isactive');
        listBtn.classList.remove('isactive');
        cards.forEach((card)=>{
            card.style.display = 'flex';
        })
        mobileList.style.display = 'none';
    }
})
listBtn.addEventListener('click', ()=>{
    if(!listBtn.classList.contains('isactive')){
        listBtn.classList.add('isactive');
        cardBtn.classList.remove('isactive');
        cards.forEach((card)=>{
            card.style.display = 'none';
        })
        mobileList.style.display = 'flex';
    }
})