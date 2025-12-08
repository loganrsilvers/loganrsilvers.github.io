const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let index = 0;                    // index of first visible item
const visible = 3;                // show 3 at a time
const maxIndex = items.length - visible;

function update() {
const itemWidth = items[0].getBoundingClientRect().width;
track.style.transform = `translateX(-${index * itemWidth}px)`;
}

nextBtn.addEventListener('click', () => {
if (index < maxIndex) {
    index++;
    update();
}
});

prevBtn.addEventListener('click', () => {
if (index > 0) {
    index--;
    update();
}
});

// ensure correct position on load/resize
window.addEventListener('load', update);
window.addEventListener('resize', update);