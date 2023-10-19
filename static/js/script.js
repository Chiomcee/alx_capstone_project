// toggle navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navbarItems = navbar.querySelectorAll('a');

menuIcon.onclick = () => {
    if (menuIcon.classList.contains('bx-x')) {
        menuIcon.classList.remove('bx-x');
        menuIcon.classList.add('bx-menu');
    } else {
        menuIcon.classList.remove('bx-menu');
        menuIcon.classList.add('bx-x');
    }
    navbar.classList.toggle('active');
};

document.addEventListener('mouseup', function(e) {
    if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
        menuIcon.classList.remove('bx-x');
        menuIcon.classList.add('bx-menu');
        navbar.classList.remove('active');
    }
});

navbarItems.forEach(item => {
    item.onclick = () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
        menuIcon.classList.add('bx-menu');
    };
});


// scroll section active class switch
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >=offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // stick navbar
    let header = document.querySelector('header');
    
    header.classList.toggle('sticky', window.scrollY > 100);
};

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');