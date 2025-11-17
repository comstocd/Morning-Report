let current = 0;
const slides = document.querySelectorAll('.slide');
const total = slides.length;

document.getElementById('total').textContent = total;

function showSlide(n) {
    slides[current].classList.remove('active');
    current = (n + total) % total;
    slides[current].classList.add('active');
    
    document.getElementById('current').textContent = current + 1;
    document.getElementById('prev').disabled = (current === 0);
    document.getElementById('next').disabled = (current === total - 1);
    
    window.scrollTo(0, 0);
}

function changeSlide(dir) {
    showSlide(current + dir);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') changeSlide(-1);
    if (e.key === 'ArrowRight') changeSlide(1);
});

let startX = 0;
document.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

document.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) changeSlide(1);
    if (endX - startX > 50) changeSlide(-1);
});

showSlide(0);
