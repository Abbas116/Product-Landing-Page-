
        // Mobile menu toggle
        function toggleMenu() {
            const menuToggle = document.querySelector('.menu-toggle');
            const mobileMenu = document.getElementById('mobileMenu');
            menuToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
        }

        // Color selection
        function selectColor(element) {
            document.querySelectorAll('.color-option').forEach(el => {
                el.classList.remove('active');
            });
            element.classList.add('active');
        }

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 1s ease-out forwards';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.feature-card, .gallery-item').forEach(el => {
            observer.observe(el);
        });

        // Parallax effect for hero (only on desktop)
        if (window.innerWidth > 768) {
            document.addEventListener('mousemove', (e) => {
                const heroImage = document.querySelector('.hero-image');
                const x = (e.clientX / window.innerWidth - 0.5) * 20;
                const y = (e.clientY / window.innerHeight - 0.5) * 20;
                heroImage.style.transform = `translateY(-20px) translateX(${x}px) translateY(${y}px) rotate(2deg)`;
            });
        }

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Close mobile menu on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                const mobileMenu = document.getElementById('mobileMenu');
                const menuToggle = document.querySelector('.menu-toggle');
                mobileMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    