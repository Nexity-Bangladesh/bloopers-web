document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const item = button.parentElement;
            item.classList.toggle('active');
        });
    });

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links-container');

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation(); 
        navLinks.classList.toggle('nav-bar-resp-open');
        console.log('Hamburger clicked');
    });

    
    document.addEventListener('click', (e) => {
    const isClickInsideNav = navLinks.contains(e.target);
    const isClickOnHamburger = hamburger.contains(e.target);

    if (!isClickInsideNav && !isClickOnHamburger) {
        navLinks.classList.remove('nav-bar-resp-open');
    }
    });