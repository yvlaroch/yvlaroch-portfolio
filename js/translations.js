// ============================================
// TRADUCTIONS - Portfolio Personnel
// ============================================

const translations = {
    fr: {
        // Navigation
        nav_home: "Accueil",
        nav_portfolio: "Portfolio",
        nav_about: "À propos",
        nav_contact: "Contact",

        // Hero
        hero_title: "YV LAROCH",
        hero_subtitle: "3D / CGI / VFX · Narration Visuelle",
        hero_tagline: "Design your own universe.",
        hero_cta_portfolio: "Voir le portfolio",
        hero_cta_contact: "Contact",

        // Featured
        featured_title: "Projets <span class='highlight'>Vedette</span>",

        // Portfolio
        portfolio_title: "Portfolio 3D / <span class='highlight'>CGI</span>",
        portfolio_desc: "Une sélection de mes travaux 3D — environnements, architecture, CGI cinématographique et études expérimentales.",
        
        // --- FILTRES (13 catégories) ---
        filter_all: "Tous",
        filter_3d: "3D / CGI",
        filter_environments: "Environnements",
        filter_architectural: "Architectural CGI",
        filter_product: "Product / Prop",
        filter_character: "Personnages / Créatures",
        filter_scene: "Scène & Développement Visuel",
        filter_animation: "Animation",
        filter_motion: "Motion Graphics",
        filter_vfx: "VFX / Compositing",
        filter_liveaction: "Live Action / Cinéma",
        filter_music: "Clip Vidéo / Cinématique",
        filter_journey: "Archive - Parcours 3D",

        // About
        about_title: "À propos <span class='highlight'>de moi</span>",
        about_journey_title: "Mon Parcours 3D",
        about_approach_title: "Mon Approche Créative",
        about_tools_title: "Outils",

        // Contact
        contact_title: "Entrons en <span class='highlight'>contact</span>",
        contact_info: "Disponible pour des projets freelance, des collaborations et du conseil.",
        contact_email: "larochcorp@gmail.com",
        contact_form_name: "Votre nom",
        contact_form_email: "Votre email",
        contact_form_message: "Votre message",
        contact_form_send: "Envoyer",

        // Footer
        footer_tagline: "3D · CGI · VFX · Narration Visuelle",
        footer_rights: "Tous droits réservés."
    },

    en: {
        // Navigation
        nav_home: "Home",
        nav_portfolio: "Portfolio",
        nav_about: "About",
        nav_contact: "Contact",

        // Hero
        hero_title: "YV LAROCH",
        hero_subtitle: "3D / CGI / VFX · Visual Storytelling",
        hero_tagline: "Design your own universe.",
        hero_cta_portfolio: "View Portfolio",
        hero_cta_contact: "Contact",

        // Featured
        featured_title: "Featured <span class='highlight'>Projects</span>",

        // Portfolio
        portfolio_title: "3D / <span class='highlight'>CGI</span> Portfolio",
        portfolio_desc: "Selected works from my 3D journey — environments, architecture, cinematic CGI, and experimental studies.",
        
        // --- FILTERS (13 categories) ---
        filter_all: "All",
        filter_3d: "3D / CGI",
        filter_environments: "Environments",
        filter_architectural: "Architectural CGI",
        filter_product: "Product / Prop",
        filter_character: "Character / Creature",
        filter_scene: "Scene & Visual Development",
        filter_animation: "Animation",
        filter_motion: "Motion Graphics",
        filter_vfx: "VFX / Compositing",
        filter_liveaction: "Live Action / Filmmaking",
        filter_music: "Music Video / Cinematic",
        filter_journey: "3D Journey Archive",

        // About
        about_title: "About <span class='highlight'>Me</span>",
        about_journey_title: "My 3D Journey",
        about_approach_title: "Creative Approach",
        about_tools_title: "Tools",

        // Contact
        contact_title: "Let's <span class='highlight'>Connect</span>",
        contact_info: "Available for freelance projects, collaborations, and consulting.",
        contact_email: "larochcorp@gmail.com",
        contact_form_name: "Your Name",
        contact_form_email: "Your Email",
        contact_form_message: "Your Message",
        contact_form_send: "Send Message",

        // Footer
        footer_tagline: "3D · CGI · VFX · Visual Storytelling",
        footer_rights: "All rights reserved."
    },

    mg: {
        // Navigation
        nav_home: "Fandraisana",
        nav_portfolio: "Portfolio",
        nav_about: "Momba ahy",
        nav_contact: "Fifandraisana",

        // Hero
        hero_title: "YV LAROCH",
        hero_subtitle: "3D / CGI / VFX · Fitantarana Hita Maso",
        hero_tagline: "Drafito ny tontolo anao manokana.",
        hero_cta_portfolio: "Hijery ny portfolio",
        hero_cta_contact: "Mifandraisa",

        // Featured
        featured_title: "Tetikasa <span class='highlight'>Nasongadina</span>",

        // Portfolio
        portfolio_title: "Portfolio 3D / <span class='highlight'>CGI</span>",
        portfolio_desc: "Safidin'ny asako 3D — tontolo iainana, maritrano, CGI sarimihetsika, ary fanandramana.",
        
        // --- FILTERS (13 categories) ---
        filter_all: "Rehetra",
        filter_3d: "3D / CGI",
        filter_environments: "Tontolo iainana",
        filter_architectural: "Maritrano CGI",
        filter_product: "Vokatra / Prop",
        filter_character: "Olona / Zavamanana",
        filter_scene: "Sehatra & Fampandrosoana",
        filter_animation: "Sary mihetsika",
        filter_motion: "Motion Graphics",
        filter_vfx: "VFX / Compositing",
        filter_liveaction: "Sarimihetsika / Filmmaking",
        filter_music: "Hora / Cinématique",
        filter_journey: "Dia 3D - Tahiry",

        // About
        about_title: "Momba <span class='highlight'>ahy</span>",
        about_journey_title: "Ny Dia 3D",
        about_approach_title: "Fomba Famoronana",
        about_tools_title: "Fitaovana",

        // Contact
        contact_title: "Raha te <span class='highlight'>hifandray</span>",
        contact_info: "Misokatra ho an'ny tetikasa freelance, fiaraha-miasa ary fanoroana.",
        contact_email: "larochcorp@gmail.com",
        contact_form_name: "Ny anaranao",
        contact_form_email: "Ny mailakao",
        contact_form_message: "Ny hafatrao",
        contact_form_send: "Alefaso ny hafatra",

        // Footer
        footer_tagline: "3D · CGI · VFX · Fitantarana an-tseho",
        footer_rights: "Alalana voatokana."
    }
};

// ============================================
// LOGIQUE DE TRADUCTION
// ============================================

let currentLang = localStorage.getItem('preferred_lang') || 'en';

function applyTranslations(lang) {
    const data = translations[lang];
    if (!data) return;

    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (data[key] !== undefined) {
            if (el.innerHTML.includes('<') || el.innerHTML.includes('</')) {
                el.innerHTML = data[key];
            } else {
                el.textContent = data[key];
            }
        }
    });

    document.documentElement.lang = lang;
    localStorage.setItem('preferred_lang', lang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

function switchLanguage(lang) {
    if (translations[lang]) {
        applyTranslations(lang);
    }
}

// Initialisation au chargement du DOM
document.addEventListener('DOMContentLoaded', function() {
    applyTranslations(currentLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            switchLanguage(this.dataset.lang);
        });
    });
});

// Rendre les fonctions disponibles globalement pour le débogage
window.applyTranslations = applyTranslations;
window.switchLanguage = switchLanguage;