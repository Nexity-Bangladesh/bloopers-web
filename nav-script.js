document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const section_hero = document.getElementById('hero-section');
    const section_about = document.getElementById('about-section');
    const section_services = document.getElementById('services-section');
    const section_faq = document.getElementById('faq-section');
    const section_result = document.getElementById('results-section');
    const section_creates = document.getElementById('create-section')
    const logonav = document.getElementById('nav-logo');

    const sections = [
        { el: section_hero, class: 'light-nav', name: 'Hero' },
        { el: section_about, class: 'dark-nav', name: 'About' },
        { el: section_result, class: 'light-nav', name: 'Results' },
        { el: section_services, class: 'dark-nav', name: 'Services' },
        { el: section_faq, class: 'light-nav', name: 'FAQ' },
        { el: section_creates, class: 'light-nav', name: 'Results' },
    ];

    function updateNavbarTheme() {
        const navRect = navbar.getBoundingClientRect();
        const navBottom = navRect.bottom;

        for (const section of sections) {
            if (!section.el) continue;
            const rect = section.el.getBoundingClientRect();
            if (navBottom >= rect.top && navBottom <= rect.bottom) {
                navbar.classList.remove('light-nav', 'dark-nav');
                navbar.classList.add(section.class);
                if(section.class === 'dark-nav') {
                    logonav.src = 'logo-dr.png';
                } else {
                    logonav.src = 'logo-lt.png';
                }
            }
        }
    }

    window.addEventListener('scroll', () => {
        requestAnimationFrame(updateNavbarTheme);
    });

    updateNavbarTheme();
});