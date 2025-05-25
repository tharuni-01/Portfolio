// Navigation active state and progress tracker
const navLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('section');
const progressDots = document.querySelectorAll('.progress-dot');

// Helper function to set active nav and progress dot
function setActiveElements() {
    let current = '';

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 300) {
            current = section.getAttribute('id');
        }
    });

    // Update navigation
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });

    // Update progress dots
    progressDots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index < sections.length && sections[index].getAttribute('id') === current) {
            dot.classList.add('active');
        }
    });
}

// Set active elements on scroll
window.addEventListener('scroll', setActiveElements);

// Set active elements on load
window.addEventListener('load', setActiveElements);

// Progress dots click event
progressDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        if (index < sections.length) {
            window.scrollTo({
                top: sections[index].offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});
window.addEventListener('load', function () {
    if (window.particlesJS) {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "window",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
});
document.querySelector('.video-btn').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.video-overlay').style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

document.querySelector('.close-video').addEventListener('click', function () {
    document.querySelector('.video-overlay').style.display = 'none';
    document.querySelector('.video-container video').pause();
    document.body.style.overflow = 'auto';
});

document.querySelector('.video-overlay').addEventListener('click', function (e) {
    if (e.target === this) {
        document.querySelector('.close-video').click();
    }
});