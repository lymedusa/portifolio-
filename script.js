window.addEventListener('scroll', function() {
            const scrollY = window.scrollY;
            const headerProfile = document.getElementById('headerProfile');
            const mainProfile = document.querySelector('.profile-image-container');
            
            if (scrollY > 420) {
                headerProfile.classList.add('visible');
                mainProfile.classList.add('faded');
            } else {
                headerProfile.classList.remove('visible');
                mainProfile.classList.remove('faded');
            }
        });