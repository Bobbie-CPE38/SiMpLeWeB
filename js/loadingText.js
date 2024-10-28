const loadingText = document.querySelector('.loading-text');

const text = `
    Hey there! I'm Methipat Mansap, a passionate first-year student studying Computer Engineering at King Mongkut's University of Technology Thonburi.
    I have a love for applying mathematics in computer programming and stuffs. 
    Right now, I'm working on a Portfolio website for the CPE101 course, which is the website you're reading right now! 
    You can learn more about me down below!
`
text.split('').forEach(letter => {
    loadingText.innerHTML += `<span>${letter}</span>`;
});

const textChildren = Array.from(loadingText.children);
window.addEventListener('scroll', () => {
    // Make sure that update only occurs once per frame
    requestAnimationFrame(() => {
        // Make it easier to read,
        // normally text will appear exactly at the center of the screen
        // now we move it down a bit
        const extraSpace = 160;
        const percentage = ((window.scrollY + window.innerHeight/2) - (loadingText.offsetTop + loadingText.offsetHeight/2) + extraSpace) / 100;
        const length = textChildren.length;
        textChildren.forEach((letter, index) => {
            if(percentage>index/length){
                letter.style.opacity = 1;
            }else{
                letter.style.opacity = .1;
            }
        });
    });
});