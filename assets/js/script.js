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

    // Helper to load deferred CSS links (data-href -> href)
    function loadDeferredStyles() {
        const links = document.querySelectorAll('link[rel="stylesheet"][data-href]');
        links.forEach(link => {
            if (!link.getAttribute('href')) {
                link.setAttribute('href', link.getAttribute('data-href'));
            }
        });
    }

    function loadDeferredMedias() {
        // Helper to load deferred IMG/VIDEO links (data-src -> src)
        const videos = document.querySelectorAll('video[data-src]');
        videos.forEach(video => {
            if (!video.getAttribute('src')) {
                video.setAttribute('src', video.getAttribute('data-src'));
            }
        });
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
            if (!img.getAttribute('src')) {
                img.setAttribute('src', img.getAttribute('data-src'));
            }
        });
        // also handle iframes
        const iframes = document.querySelectorAll('iframe[data-src]');
        iframes.forEach(iframe => {
            if (!iframe.getAttribute('src')) {
                iframe.setAttribute('src', iframe.getAttribute('data-src'));
            }
        });
        
        // Fallback for .webp images on 404
        const webpImages = document.querySelectorAll('img[src^="https://www.tekat.my.id/"][src$=".webp"]');
        webpImages.forEach(img => {
            img.addEventListener('error', function() {
                this.src = this.src.replace('.webp', '');
            });
        });
    }

    // Modal behavior: prevent background scroll while modal is open and restore afterwards
    var scrollRestore = null;

    function disablePageScroll() {
        scrollRestore = {
            top: window.scrollY || window.pageYOffset,
            overflow: document.documentElement.style.overflow || document.body.style.overflow || ''
        };
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
    }

    function restorePageScroll() {
        if (scrollRestore) {
            document.documentElement.style.overflow = scrollRestore.overflow;
            document.body.style.overflow = scrollRestore.overflow;
            window.scrollTo(0, scrollRestore.top || 0);
            scrollRestore = null;
        }
    }

    if (privacyBanner && privacyBannerClose) {
        var dismissed = document.cookie.includes('privacyBannerDismissed=true');

        if (!dismissed) {
            // Show modal and disable background scrolling
            privacyBanner.style.display = 'flex';
            disablePageScroll();

            // Focus the dismiss button for accessibility
            try { privacyBannerClose.focus(); } catch (e) { /* ignore */ }

            // Close handler
            privacyBannerClose.onclick = function() {
                privacyBanner.style.display = 'none';
                restorePageScroll();
                document.cookie = 'privacyBannerDismissed=true; path=/; max-age=31536000';
                loadDeferredStyles();
                loadDeferredMedias();
            };

            // Dismiss on Escape key
            function onEscape(e) {
                if (e.key === 'Escape') {
                    privacyBannerClose.onclick && privacyBannerClose.onclick();
                    document.removeEventListener('keydown', onEscape);
                }
            }
            document.addEventListener('keydown', onEscape);

            // Clicking backdrop closes too
            privacyBanner.addEventListener('click', function(e) {
                if (e.target === privacyBanner) {
                    privacyBannerClose.onclick && privacyBannerClose.onclick();
                }
            });
        } else {
            // Cookie present: hide modal and load assets immediately
            privacyBanner.style.display = 'none';
            restorePageScroll();
            loadDeferredStyles();
            loadDeferredMedias();
        }
    } else {
        // Missing elements: load deferred assets so site appears correctly
        loadDeferredStyles();
        loadDeferredMedias();
    }
});
