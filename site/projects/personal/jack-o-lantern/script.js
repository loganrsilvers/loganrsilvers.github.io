function changeEyes1(){
    var eyes = document.querySelectorAll('.eyes');
    var currentIndex = Array.from(eyes).findIndex(function(eye) {
        return eye.classList.contains('visible');
    });
    eyes[currentIndex].classList.remove('visible');
    currentIndex = (currentIndex - 1 + eyes.length) % eyes.length;
    eyes[currentIndex].classList.add('visible');
}

function changeEyes2(){
    var eyes = document.querySelectorAll('.eyes');
    var currentIndex = Array.from(eyes).findIndex(function(eye) {
        return eye.classList.contains('visible');
    });
    eyes[currentIndex].classList.remove('visible');
    currentIndex = (currentIndex + 1) % eyes.length;
    eyes[currentIndex].classList.add('visible');
}