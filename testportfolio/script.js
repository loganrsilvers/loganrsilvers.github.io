// Simple Navigation Script
function navigateTo(page) {
    window.location.href = page;
}

// Fun Bubble Effect (Optional)
document.addEventListener('DOMContentLoaded', () => {
    createBubbles();
});

function createBubbles() {
    const body = document.body;
    for (let i = 0; i < 20; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDuration = `${2 + Math.random() * 3}s`;
        body.appendChild(bubble);
    }
}

// Form Submission Alert
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Your message has been sent! I will get back to you soon.');
});


// JavaScript for Event Card Interactivity
const eventCards = document.querySelectorAll('.event-card');

eventCards.forEach(card => {
    card.addEventListener('click', () => {
        // Expand the clicked card
        card.classList.add('expanded');
    });

    card.addEventListener('mouseleave', () => {
        // Collapse the card when mouse leaves
        card.classList.remove('expanded');
    });
});



// JavaScript to handle the expandable iframe
const expandHeader = document.getElementById('expand-header');
const iframeContainer = document.getElementById('iframe-container');

expandHeader.addEventListener('click', () => {
    // Toggle the expanded class
    iframeContainer.classList.toggle('expanded');

    // Optionally change header text
    if (iframeContainer.classList.contains('expanded')) {
        expandHeader.textContent = '🔒 Click Here to Hide My Web Development Projects';
    } else {
        expandHeader.textContent = '🔍 Click Here to See My Web Development Projects';
    }
});


//services 

document.addEventListener('DOMContentLoaded', function() {
    const serviceLinks = document.querySelectorAll('.service-link');
    const serviceCategories = document.querySelectorAll('.service-category');

    function switchService(targetId) {
        serviceCategories.forEach(category => {
            category.style.display = 'none';
        });

        serviceLinks.forEach(link => {
            link.classList.remove('active');
        });

        const targetCategory = document.getElementById(targetId);
        if (targetCategory) {
            targetCategory.style.display = 'block';
        }

        const targetLink = document.querySelector(`.service-link[href="#${targetId}"]`);
        if (targetLink) {
            targetLink.classList.add('active');
        }
    }

    serviceLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            switchService(targetId);
        });
    });

    // Set initial active service
    const initialService = serviceCategories[0]?.id;
    if (initialService) {
        switchService(initialService);
    }
});