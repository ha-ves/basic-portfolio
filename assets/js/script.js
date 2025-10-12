document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav')) {
            menuToggle.classList.remove('active');
            mobileNav.classList.remove('active');
        }
    });

    // Privacy banner logic
    var privacyBanner = document.getElementById('privacy-banner');
    var privacyBannerClose = document.getElementById('privacy-banner-close');
    if (privacyBanner && privacyBannerClose) {
        if (!document.cookie.includes('privacyBannerDismissed=true')) {
            privacyBanner.style.display = 'block';
        }
        privacyBannerClose.onclick = function() {
            privacyBanner.style.display = 'none';
            document.cookie = "privacyBannerDismissed=true; path=/; max-age=31536000"; // 1 year
        };
    }
});
