// 1. Guardamos el HTML del menú
const menuHTML = `
    <a href="#main-content" class="skip-link">Saltar al contenido principal</a>
    <nav class="navbar" aria-label="Principal">
        <div class="logo-container">
            <a href="/" style="display: flex; align-items: center;" aria-label="CFC - Ir al inicio">
                <img src="/logo.png" alt="CFC Logo" class="logo-img">
            </a>
        </div>
        
        <div class="menu-toggle" role="button" tabindex="0" aria-label="Abrir menú" aria-expanded="false">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </div>
        
        <ul class="nav-links">
            <li><a href="/">Inicio</a></li>
            <li><a href="/soy-nuevo.html">Soy Nuevo</a></li>
            <li><a href="/eventos.html">Eventos</a></li>
            <li><a href="/media.html">Media</a></li>
            <li><a href="/contacto.html">Contacto</a></li>
            
            <li class="btn-mobile-item">
                <a href="https://portal.cfccasanova.com/connect/portal/login" class="btn-cta">Portal CFC</a>
            </li>
        </ul>
    </nav>
`;

// 2. Guardamos el HTML del footer
const footerHTML = `
    <footer role="contentinfo" style="text-align: center; padding: 40px; border-top: 1px solid var(--borde-tarjeta); color: var(--texto-secundario); margin-top: 50px;">
        <p>© 2026 Centro Familiar Cristiano. Todos los derechos reservados.</p>
    </footer>
`;

// 3. Insertamos los componentes en los contenedores de la página
document.getElementById('menu-contenedor').innerHTML = menuHTML;
document.getElementById('footer-contenedor').innerHTML = footerHTML;

// 3b. Structured data Organization (JSON-LD)
const jsonLdOrg = document.createElement('script');
jsonLdOrg.type = 'application/ld+json';
jsonLdOrg.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Centro Familiar Cristiano Casanova",
    "alternateName": "CFC Casanova",
    "url": "https://cfccasanova.com",
    "logo": "https://cfccasanova.com/logo.png",
    "description": "Iglesia evangélica con más de 50 años de trayectoria y una comunidad de más de 2500 personas en Isidro Casanova.",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Juan Manuel de Rosas 7840",
        "addressLocality": "Isidro Casanova",
        "addressRegion": "Buenos Aires",
        "addressCountry": "AR"
    },
    "sameAs": [
        "https://instagram.com/cfc.casanova",
        "https://facebook.com/cfc.casanova",
        "https://youtube.com/@cfc.casanova"
    ]
});
document.head.appendChild(jsonLdOrg);

// 4. Activamos el botón del menú para celulares (click + teclado)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
    const isActive = navLinks.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isActive);
    menuToggle.setAttribute('aria-label', isActive ? 'Cerrar menú' : 'Abrir menú');
}

if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
    menuToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu();
        }
    });
}

// 5. Scroll reveal: anima elementos al entrar en viewport
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal-on-scroll').forEach(el => revealObserver.observe(el));
