// Smooth scrolling and highlighted navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll progress indicator
window.addEventListener('scroll', () => {
    const scrollPercent = (document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
    document.getElementById('progress-bar').style.width = scrollPercent + '%';
});

// Modal for contact information
const modal = document.getElementById("contact-modal");
const contactButton = document.getElementById("contact-button");
const closeButton = document.getElementsByClassName("close")[0];

// Open modal
contactButton.onclick = () => modal.style.display = "block";

// Close modal
closeButton.onclick = () => modal.style.display = "none";

// Close modal when clicking outside of the modal content
window.onclick = event => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Prevent modal from closing when clicking on the email link
document.querySelectorAll('#contact-modal a').forEach(link => {
    link.onclick = event => {
        event.stopPropagation(); // Prevent the click event from bubbling up to the modal
    };
});

// Load event
window.addEventListener('load', () => {
    document.getElementById('hero').classList.add('loaded');
    document.body.classList.remove('loading');
});

// Active class for sections
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const navLink = document.querySelector(`nav a[href="#${entry.target.id}"]`);
        navLink.classList.toggle('active', entry.isIntersecting);
    });
}, { root: null, threshold: 0.1 });

document.querySelectorAll('section').forEach(section => observer.observe(section));



   document.addEventListener('click', function() {
            var audio = document.getElementById('background-music');
            if (audio.paused) {
                audio.play();
            }
        });
