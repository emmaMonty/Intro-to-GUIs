const dot = document.getElementById('dot');
const dot1 = document.querySelector('.dot1');
const dot2 = document.querySelector('.dot2');
dot.addEventListener('click', () =>{
    dot.classList.add('active');
    dot1.classList.add('active');
    dot2.classList.add('active');
});