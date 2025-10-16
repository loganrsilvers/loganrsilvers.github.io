const allContainers = document.querySelectorAll('.image-grid .img-container');
let expandedImg = null;

allContainers.forEach(container => {
  const img = container.querySelector('img');
  img.addEventListener('click', function() {
    if (expandedImg && expandedImg !== container) {
      expandedImg.classList.remove('expanded-img');
    }
    if (container.classList.contains('expanded-img')) {
      container.classList.remove('expanded-img');
      expandedImg = null;
    } else {
      container.classList.add('expanded-img');
      expandedImg = container;
    }
  });
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
