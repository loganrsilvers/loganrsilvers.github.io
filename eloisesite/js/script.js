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
    document.getElementById("tab").style.display = "none";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("tab").style.display = "block";
}


function filterPortfolio(category) {
  const items = document.querySelectorAll('.img-container');

  items.forEach(item => {
    // Always show items when 'all' is selected
    if (category === 'all') {
      item.style.display = 'block';
    } else {
      // Check if item’s data-category includes the selected category
      const dataCategory = item.getAttribute('data-category').split(' ');
      if (dataCategory.includes(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    }
  });

  // Optionally highlight the active dropdown link
  const links = document.querySelectorAll('.dropdown-content a');
  links.forEach(link => link.classList.remove('active'));
  const activeLink = [...links].find(link => link.getAttribute('onclick').includes(category));
  if (activeLink) activeLink.classList.add('active');
}