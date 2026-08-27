// ============================================
// MAIN.JS - TOUT-EN-UN AVEC VOS DONNÉES
// ============================================

// ============================================
// 1. VOS DONNÉES (INTÉGRÉES DIRECTEMENT)
// ============================================
const siteData = {
    hero: {
        title: "YV LAROCH",
        subtitle: "3D / CGI / VFX / Filmmaking · Visual Development",
        tagline: "From ideas to digital worlds.",
        avatar: "images/avatar.jpg"
    },

    about: {
        bio: "3D/CGI artist with a long-term background in modeling, environments, architectural visualization, lighting, rendering and visual storytelling.\n\nMy work includes personal studies ranging from stylized characters and environments to architectural reconstruction, cinematic CGI and experimental VFX.\n\nI use 3D as a visual storytelling tool, combining modeling, composition, lighting and rendering to turn concepts and references into images and scenes.\n\nAvailable for freelance and remote projects involving 3D assets, environments, CGI visuals, architectural visualization, VFX and visual content creation.",

        journey: "My journey into 3D began as a self-directed exploration of digital art and computer-generated imagery. Over the years, I experimented with 3D modeling, environments, architecture, characters, materials, lighting, rendering and cinematic composition.\n\nMany of these projects were personal studies created with limited resources and hardware. Each project contributed to the development of my technical and visual skills.\n\nWorking primarily as an independent artist pushed me to learn how to solve creative and technical problems with the tools available to me. That resourcefulness remains an important part of my approach today.",

        approach: "I approach 3D as more than a technical discipline. The goal is to use 3D as a tool for creating images, environments and stories.\n\nDepending on the project, I can work from:\n• photographic references\n• architectural references\n• sketches\n• written concepts\n• visual moodboards\n• existing assets\n• AI-generated concepts\n• client references\n\nThe objective is to transform an idea into a visually understandable result.",

        tools: ["Blender", "GIMP", "Inkscape", "Krita", "Kdenlive", "CapCut", "Friction 2D", "Tahoma2D", "Tenacity"]
    },

    social: {
        youtube_studio: "https://www.youtube.com/@graphyndot6934",
        facebook_studio: "https://www.facebook.com/GraphyNdot/",
        youtube_perso: "https://www.youtube.com/@yvlaroch5724",
        facebook_perso: "https://web.facebook.com/Laroch.Yv",
        instagram: "https://www.instagram.com/yv_laroch/",
        linkedin: "https://www.linkedin.com/in/yves-randrianantenaina",
        artstation: "https://www.artstation.com/yv_laroch",
        tiktok: "https://www.tiktok.com/@yvlarochvfx"
    },

  videos: [
    // ===== VIDÉOS LOCALES =====
    {
        id: "local-rocket",
        title: "Rocket Raccoon — Turnaround 360°",
        description: "Modèle 3D tournant présentant le personnage sous tous les angles — Blender (2020)",
        category: "Character / Creature",
        level: "Finished",
        thumbnail: "",
        isLocal: true,
        localSrc: "videos/ROCKET RACCON form GoTG fan-art WIP Made in Blender -sept. 2019 (1080p).mp4"
    },
    {
        id: "local-snowy",
        title: "Snowy Mountain — Environment Study",
        description: "Rendu d'environnement enneigé avec atmosphère et composition cinématographique — Blender (2014)",
        category: "Environments",
        level: "WIP",
        thumbnail: "",
        isLocal: true,
        localSrc: "videos/animation mountain 09-09-2014.ogv"
    },
    {
        id: "local-earth-hd",
        title: "Earth — HD Render",
        description: "Rendu haute définition de la Terre avec matériaux et éclairage réalistes — Blender (2015)",
        category: "Cinematic CGI",
        level: "Finished",
        thumbnail: "",
        isLocal: true,
        localSrc: "videos/earth HD 02-03-2015.mp4"
    },
    {
        id: "local-earth-scanline",
        title: "Earth — HD + Scanline Effect",
        description: "Rendu HD de la Terre avec effet scanline pour un style rétro / cyberpunk — Blender (2015)",
        category: "VFX / Compositing",
        level: "Finished",
        thumbnail: "",
        isLocal: true,
        localSrc: "videos/earth with scan line 02-03-2015.mp4"
    },
    {
        id: "local-greenscreen",
        title: "Chroma Key Test — Greenscreen Compositing",
        description: "Test d'incrustation chroma key sous Blender — VFX / compositing (2016)",
        category: "VFX / Compositing",
        level: "WIP",
        thumbnail: "",
        isLocal: true,
        localSrc: "videos/greenscreen chroma key 0001-0079 12 ‎janvier ‎2015.avi"
    },
    {
        id: "local-netflix-title",
        title: "Netflix Style — 3D Title Animation",
        description: "Animation de titre 3D inspirée du style Netflix — Motion Graphics (2018)",
        category: "Motion Graphics",
        level: "Finished",
        thumbnail: "",
        isLocal: true,
        localSrc: "videos/Netflix LOGO INTRO in Blender & Hitfilm Express -Fevrier 2018 (1080p).mp4"
    },

    // ===== VIDÉOS YOUTUBE =====
    {
        id: "TA70DH0osuk",
        title: "The Flash — Aerial View Tutorial Trailer",
        description: "VFX / 3D / compositing / tutorial content (2017)",
        category: "VFX / Cinematic Experiments",
        level: "WIP",
        thumbnail: "https://img.youtube.com/vi/TA70DH0osuk/hqdefault.jpg"
    },
    {
        id: "bUXagWYxCyE",
        title: "Godzilla — Base Mesh Modelling Part 1",
        description: "Character / creature modeling study focusing on base mesh construction, proportions and organic form development (2020)",
        category: "Character / Creature",
        level: "WIP",
        thumbnail: "https://img.youtube.com/vi/bUXagWYxCyE/hqdefault.jpg"
    },
    {
        id: "uhQryh9sI0k",
        title: "Rocket Raccoon — Fan-art WIP",
        description: "Personal Blender study exploring character modeling, proportions, topology and sculptural forms (2019)",
        category: "Character / Creature",
        level: "WIP",
        thumbnail: "https://img.youtube.com/vi/uhQryh9sI0k/hqdefault.jpg"
    },
    {
        id: "xLWFjVZAr_w",
        title: "Merrier Signs Saison 1 — VFX Breakdown (Ep.2)",
        description: "Fanfilm / filmmaking / VFX / CGI — Breakdown des effets visuels de l'épisode 2",
        category: "Live Action / Filmmaking",
        level: "WIP",
        thumbnail: "https://img.youtube.com/vi/xLWFjVZAr_w/hqdefault.jpg"
    },
    {
        id: "baMgvKidXds",
        title: "HitFilm Motion Graphics Template Packs Demo #01",
        description: "Démonstration de packs de templates motion graphics pour HitFilm — directement commercialisable",
        category: "Motion Graphics",
        level: "Finished",
        thumbnail: "https://img.youtube.com/vi/baMgvKidXds/hqdefault.jpg"
    },
    {
        id: "lego-wip",
        title: "LEGO Coffin Guys Dance",
        description: "3D character animation study — WIP — Vidéo à venir",
        category: "Animation",
        level: "WIP",
        thumbnail: ""
    },
    {
        id: "daboka-wip",
        title: "Daboka",
        description: "Live action / martial arts / stunt / CGI-VFX — WIP — Vidéo à venir",
        category: "Live Action / Filmmaking",
        level: "WIP",
        thumbnail: ""
    }
],

    featured: [1, 2, 3, 4, 5, 6],

    projects: [
        {
            id: 1,
            title: "Manjakamiadana Palace",
            category: "Architectural CGI",
            description: "Photorealistic 3D reconstruction of the historic palace in Madagascar. The project explored architectural modeling, reference-based reconstruction, materials, lighting and photorealistic rendering.",
            image: "images/portfolio/manjakamiadana.jpg",
            year: "2019",
            software: ["Blender"],
            tags: ["architecture", "photorealistic", "reconstruction"]
        },
        {
            id: 2,
            title: "Ancient Desert Gate",
            category: "Environments",
            description: "A fantasy environment study exploring large-scale composition, environmental modeling, atmospheric lighting and cinematic mood.",
            image: "images/portfolio/desert-gate.png",
            year: "2016",
            software: ["Blender"],
            tags: ["fantasy", "environment", "cinematic"]
        },
        {
            id: 3,
            title: "Earth & Spaceship",
            category: "Cinematic CGI",
            description: "A conceptual science-fiction scene combining environment, hard-surface elements, lighting and cinematic composition.",
            image: "images/portfolio/earth-spaceship.png",
            year: "2015",
            software: ["Blender"],
            tags: ["sci-fi", "space", "cinematic"]
        },
        {
            id: 4,
            title: "Super Mario - Stylized Environment",
            category: "Character / Stylized",
            description: "A stylized 3D environment combining character modeling, stylized assets, environmental design, lighting and composition.",
            image: "images/portfolio/mario.png",
            year: "2017",
            software: ["Blender"],
            tags: ["stylized", "character", "game"]
        },
        {
            id: 5,
            title: "Floating Lighthouse",
            category: "Environments",
            description: "A surreal environment concept combining architecture, landscape, atmosphere and dramatic composition.",
            image: "images/portfolio/lighthouse.jpg",
            year: "2016",
            software: ["Blender"],
            tags: ["surreal", "environment", "cinematic"]
        },
        {
            id: 6,
            title: "Simpa Building",
            category: "Architectural CGI",
            description: "A personal reconstruction study exploring the interpretation of an existing building through 3D modeling, focusing on architectural proportions, facade reconstruction and visualization.",
            image: "images/portfolio/simpa.jpg",
            year: "2020",
            software: ["Blender"],
            tags: ["architecture", "reconstruction", "visualization"]
        },
        {
            id: 7,
            title: "Snowy Mountain",
            category: "Environments",
            description: "An early environment study focused on terrain, atmosphere, lighting and landscape composition.",
            image: "images/portfolio/snowy-mountain.jpg",
            year: "2014",
            software: ["Blender"],
            tags: ["environment", "landscape", "atmosphere"]
        },
        {
            id: 8,
            title: "Organic Creature",
            category: "Experimental / R&D",
            description: "An experimental creature modeling and texturing study exploring organic shapes, unusual forms and procedural-looking materials.",
            image: "images/portfolio/creature.jpg",
            year: "2020",
            software: ["Blender"],
            tags: ["organic", "creature", "experimental"]
        },
        {
            id: 9,
            title: "Tunnel - Dodge Challenger",
            category: "Cinematic CGI",
            description: "A cinematic environment study combining a tunnel environment, vehicle presentation, lighting and camera composition.",
            image: "images/portfolio/tunnel.jpg",
            year: "2015",
            software: ["Blender"],
            tags: ["vehicle", "cinematic", "environment"]
        },
        {
            id: 10,
            title: "Mario - Character Study",
            category: "Character / Stylized",
            description: "A personal character modeling and rendering study exploring proportions, materials, lighting and stylized presentation.",
            image: "images/portfolio/Mario full but wip2-2018.png",
            year: "2017",
            software: ["Blender"],
            tags: ["character", "stylized"]
        },
        {
            id: 11,
            title: "Epic Portal",
            category: "Environments",
            description: "A fantasy environment study focused on environment construction, rock formations, lighting and visual storytelling.",
            image: "images/portfolio/portal.jpg",
            year: "2016",
            software: ["Blender"],
            tags: ["fantasy", "environment", "cinematic"]
        },
        {
            id: 12,
            title: "Manjakamiadana - Clay Render",
            category: "Architectural CGI",
            description: "A complementary visualization study focusing more directly on architectural form, proportions and presentation.",
            image: "images/portfolio/manjakamiadana-clay.png",
            year: "2019",
            software: ["Blender"],
            tags: ["architecture", "clay", "visualization"]
        }
    ]
};

// ============================================
// 2. FONCTIONS D'AFFICHAGE
// ============================================

// ----- Page d'accueil : Projets en vedette -----
function renderFeaturedProjects() {
    const container = document.getElementById('featuredGrid');
    if (!container) return;

    const featuredIds = siteData.featured || [];
    const featuredProjects = siteData.projects.filter(p => featuredIds.includes(p.id));

    container.innerHTML = featuredProjects.map(p => `
        <div class="featured-card" onclick="location.href='portfolio.html#project-${p.id}'">
            <img src="${p.image}" alt="${p.title}" />
            <div class="info">
                <span class="category">${p.category}</span>
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                <div class="tags">
                    ${p.tags.map(t => `<span>${t}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// ----- Page Portfolio : Tous les projets -----
function renderPortfolio(projects) {
    const container = document.getElementById('portfolioGrid');
    if (!container) return;

    container.innerHTML = projects.map(p => `
        <div class="portfolio-item" data-category="${p.category}" data-id="${p.id}">
            <img src="${p.image}" alt="${p.title}" />
            <div class="info">
                <span class="category">${p.category}</span>
                <h3>${p.title}</h3>
                <p>${p.description}</p>
            </div>
        </div>
    `).join('');
}

// ----- Page About : Biographie, Parcours, Approche, Outils -----
function renderAbout() {
    const bioEl = document.getElementById('aboutBio');
    const journeyEl = document.getElementById('aboutJourney');
    const approachEl = document.getElementById('aboutApproach');
    const toolsEl = document.getElementById('toolsContainer');
    const avatarImg = document.getElementById('heroAvatar');

    if (bioEl) bioEl.textContent = siteData.about.bio;
    if (journeyEl) journeyEl.textContent = siteData.about.journey;
    if (approachEl) approachEl.textContent = siteData.about.approach;
    
    if (toolsEl && siteData.about.tools) {
        toolsEl.innerHTML = siteData.about.tools.map(t => `<span>${t}</span>`).join('');
    }

    if (avatarImg && siteData.hero.avatar) {
        avatarImg.src = siteData.hero.avatar;
    }
}

// ----- Page Contact : Réseaux sociaux -----
function renderContact() {
    const socialLinks = document.querySelectorAll('.footer-social a, .social-links a');
    socialLinks.forEach(link => {
        const key = link.dataset.social;
        if (key && siteData.social[key]) {
            link.href = siteData.social[key];
        }
    });
}

// ----- Filtres du portfolio -----
function setupFilters(projects) {
    const filters = document.querySelectorAll('.filter-btn');
    filters.forEach(btn => {
        btn.addEventListener('click', function() {
            filters.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.dataset.filter;
            const filtered = filter === 'all' 
                ? projects 
                : projects.filter(p => p.category === filter);

            renderPortfolio(filtered);
        });
    });
}

// ============================================
// VIDÉOS — GRILLE (avec badge Local)
// ============================================

function renderVideos() {
    const container = document.getElementById('videoGrid');
    if (!container) {
        console.warn('⚠️ videoGrid non trouvé');
        return;
    }

    const videos = siteData.videos || [];

    container.innerHTML = videos.map(v => {
        // Si c'est une vidéo locale SANS thumbnail, on utilise un lecteur vidéo miniature
        const thumbnailHtml = v.isLocal && !v.thumbnail ? `
            <video muted playsinline class="video-thumbnail-player">
                <source src="${v.isLocal ? 'videos/' + encodeURIComponent(v.localSrc) : v.localSrc}" type="video/mp4" />
            </video>
        ` : `
            <img src="${v.thumbnail}" alt="${v.title}" />
        `;

        return `
            <div class="video-card" onclick="openVideo('${v.id}')">
                <div class="video-thumbnail">
                    ${thumbnailHtml}
                    <div class="play-button">
                        <i class="fas fa-play"></i>
                    </div>
                    ${v.isLocal ? '<span class="video-badge-local"><i class="fas fa-file-video"></i> Local</span>' : ''}
                    <span class="level-badge ${v.level === 'Finished' ? 'finished' : 'wip'}">
                        ${v.level}
                    </span>
                </div>
                <div class="video-info">
                    <span class="video-category">${v.category}</span>
                    <h3>${v.title}</h3>
                    <p>${v.description}</p>
                </div>
            </div>
        `;
    }).join('');

    // Auto-play des miniatures vidéo (lecture silencieuse au survol)
    document.querySelectorAll('.video-thumbnail-player').forEach(video => {
        video.addEventListener('mouseenter', function() {
            this.play();
        });
        video.addEventListener('mouseleave', function() {
            this.pause();
            this.currentTime = 0;
        });
    });

    console.log(`✅ Vidéos affichées (${videos.length} vidéos)`);
}

// ============================================
// OUVERTURE VIDÉO (YouTube + Local)
// ============================================

function openVideo(videoId) {
    // Chercher la vidéo dans les données
    const video = siteData.videos.find(v => v.id === videoId);
    if (!video) return;

    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoIframe');
    const videoElement = document.getElementById('localVideoPlayer');

    if (!modal) return;

    if (video.isLocal && video.localSrc) {
        // --- VIDÉO LOCALE (encoder pour gérer les espaces) ---
        if (iframe) iframe.style.display = 'none';
        if (videoElement) {
            videoElement.style.display = 'block';
            videoElement.src = 'videos/' + encodeURIComponent(video.localSrc);
            videoElement.controls = true;
            videoElement.autoplay = true;
            videoElement.muted = false;
        }
    } else {
        // --- VIDÉO YOUTUBE ---
        if (videoElement) videoElement.style.display = 'none';
        if (iframe) {
            iframe.style.display = 'block';
            iframe.src = `https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`;
        }
    }

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeVideo() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoIframe');
    const videoElement = document.getElementById('localVideoPlayer');

    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
    if (iframe) {
        iframe.src = '';
        iframe.style.display = 'none';
    }
    if (videoElement) {
        videoElement.pause();
        videoElement.src = '';
        videoElement.style.display = 'none';
    }
}

// ----- Menu Hamburger -----
function setupMenu() {
    const toggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (toggle && navLinks) {
        toggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('open');
        });
    }
}

// ----- Navbar scroll effect -----
function setupNavbar() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }
}

// ============================================
// 3. INITIALISATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Site chargé - Données intégrées');

    // Page d'accueil
    if (document.getElementById('featuredGrid')) {
        renderFeaturedProjects();
        console.log('✅ Projets en vedette affichés');
    }

    // Page portfolio
    if (document.getElementById('portfolioGrid')) {
        renderPortfolio(siteData.projects);
        setupFilters(siteData.projects);
        console.log('✅ Portfolio affiché');
    }

    // Page vidéos
    if (document.getElementById('videoGrid')) {
        renderVideos();
        console.log('✅ Vidéos affichées');
    }

    // Page About
    if (document.getElementById('aboutBio')) {
        renderAbout();
        console.log('✅ Page About affichée');
    }

    // Page Contact
    if (document.querySelector('.social-links') || document.querySelector('.footer-social')) {
        renderContact();
        console.log('✅ Liens sociaux mis à jour');
    }

    // Menu + Navbar
    setupMenu();
    setupNavbar();

    // Fermer la modal avec Echap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeVideo();
    });

    console.log('✅ Site initialisé avec succès');
});

// ============================================
// PROTECTION DES EMAILS (Anti-Scraping)
// ============================================
function protectEmails() {
    document.querySelectorAll('[data-email]').forEach(el => {
        const encoded = el.dataset.email;
        const decoded = atob(encoded);
        el.textContent = decoded;
        if (el.tagName === 'A') {
            el.href = `mailto:${decoded}`;
        }
    });
}

// ============================================
// ANTI-BOT / ANTI-SCRAIPER
// ============================================

// Bloquer les outils de développement
function blockDevTools() {
    if (window.navigator.webdriver === true) {
        document.body.innerHTML = '<h1>Accès refusé</h1><p>Votre session a été détectée comme automatisée.</p>';
        return;
    }
    if (window.navigator.userAgent.includes('Headless')) {
        document.body.innerHTML = '<h1>Accès refusé</h1>';
        return;
    }
}

// Bloquer le clic droit
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

// Bloquer les raccourcis clavier
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I')) {
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && e.shiftKey && (e.key === 'j' || e.key === 'J')) {
        e.preventDefault();
        return false;
    }
});

// Bloquer le drag & drop
document.addEventListener('dragstart', function(e) {
    e.preventDefault();
    return false;
});

// Bloquer la sélection de texte
document.addEventListener('selectstart', function(e) {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        return false;
    }
});

// Bloquer les bots
function blockBots() {
    const botPatterns = [
        'bot', 'crawler', 'spider', 'scraper', 'ai', 
        'GPTBot', 'ChatGPT', 'ClaudeBot', 'CCBot',
        'Google-Extended', 'Amazonbot', 'anthropic-ai',
        'Bytespider', 'ImagesiftBot', 'Omgilibot',
        'Diffbot', 'SemrushBot', 'AhrefsBot', 'MJ12bot',
        'DotBot', 'PetalBot', 'Baiduspider', 'YandexBot'
    ];
    
    const userAgent = navigator.userAgent.toLowerCase();
    for (let pattern of botPatterns) {
        if (userAgent.includes(pattern.toLowerCase())) {
            document.body.innerHTML = `
                <div style="display:flex;justify-content:center;align-items:center;height:100vh;background:#0a0a0f;color:#fff;flex-direction:column;text-align:center;padding:2rem;">
                    <h1 style="font-size:2rem;margin-bottom:1rem;">⛔ Accès refusé</h1>
                    <p style="color:#888;">Les bots et crawlers ne sont pas autorisés sur ce site.</p>
                </div>
            `;
            return true;
        }
    }
    return false;
}

// Exécuter au chargement
document.addEventListener('DOMContentLoaded', function() {
    if (blockBots()) return;
    blockDevTools();
    protectEmails();
});