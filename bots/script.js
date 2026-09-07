const entities = {
    nynx: {
        name: "Nynx",
        title: "Artificial Intelligence System",
        character: "../bots/img/nynx/nynx_png.png",
        art: "../bots/img/nynx/nynx_art.png",
        logo: "../bots/img/nynx/nynx_logo.png",
        favicon: "../bots/img/nynx/nynx_logo.png",
        selectorPosition: "50% 12%",
        characterFrame: { height: "116%", x: "5%", y: "15%" },
        ribbonPrimary: "NYNX // MEMORY // ADAPT // LEARN //",
        ribbonSecondary: "DIGITAL ENTITY // CONTEXT // GUARDIAN //",
        overview: {
            summary: "An artificial intelligence project built around memory, learning, adaptation and long-term interaction. Nynx is designed to become more useful through context rather than simply waiting for commands.",
            details: [
                ["HEIGHT", "1.70 M", "gold"],
                ["FAVORITE COLOR", "CYAN", "cyan"],
                ["PERSONALITY", "CALM / CURIOUS", "magenta"],
                ["CORE", "MEMORY", "violet"]
            ],
            quote: "My Compass is Curiosity"
        },
        modules: [
            { name: "Memory Core", description: "Persistent memory and long-term context structure.", state: "CORE" },
            { name: "Context Analysis", description: "Reads conversational context before choosing a response path.", state: "ACTIVE" },
            { name: "User Profiles", description: "Stores relevant preferences and recurring interaction patterns.", state: "BUILD" },
            { name: "Learning Engine", description: "Framework for adaptation and future learning systems.", state: "ALPHA" }
        ],
        access: {
            status: "IN DEVELOPMENT",
            version: "0.1 ALPHA",
            type: "AI ENTITY",
            platform: "DISCORD",
            inviteUrl: "#",
            inviteLabel: "DISCORD ACCESS — COMING SOON",
            progressLabel: "ALPHA DEVELOPMENT"
        },
        theme: {
            primary: "#00d9ff",
            primaryDark: "#008bb5",
            primaryRgb: "0, 217, 255",
            secondary: "#ffd43b",
            secondaryRgb: "255, 212, 59",
            accent: "#e500ff",
            accentRgb: "229, 0, 255",
            tertiary: "#8d7aff",
            stageA: "#082a3b",
            stageB: "#0a1734",
            ribbonPrimaryBg: "#0c6674",
            ribbonSecondaryBg: "#52205d"
        }
    },

    sunshine: {
        name: "Sunshine",
        title: "Discord Bot System",
        character: "../bots/img/sun/sunshine_newEra-PNG.png",
        art: "../bots/img/sun/sunshine_art.png",
        logo: "../bots/img/sun/Sunshine_Logo.png",
        favicon: "../bots/img/sun/Sunshine_Logo.png",
        selectorPosition: "50% 9%",
        characterFrame: { height: "113%", x: "4%", y: "13%" },
        ribbonPrimary: "SUNSHINE // ARCANA // PLAY // SYSTEM //",
        ribbonSecondary: "MAGENTA SIGNAL // CARDS // DISCORD //",
        overview: {
            summary: "Sunshine is a Discord-focused bot identity with a theatrical, arcane visual language. Its profile is ready to receive the final personality and system details as the project evolves.",
            details: [
                ["HEIGHT", "1.83M", "gold"],
                ["FAVORITE COLOR", "MAGENTA", "magenta"],
                ["PERSONALITY", "Charismatic/playful", "cyan"],
                ["CORE", "DISCORD", "violet"]
            ],
            quote: "I'm Your Light House in This World of Tempest"
        },
        modules: [
            { name: "Module Registry", description: "Unique Sunshine commands have not been registered in this page yet.", state: "PENDING" },
            { name: "Discord Interface", description: "Main interaction layer for the Sunshine bot.", state: "ACTIVE" }
        ],
        access: {
            status: "IN DEVELOPMENT",
            version: "0.1 ALPHA",
            type: "DISCORD BOT",
            platform: "DISCORD",
            inviteUrl: "#",
            inviteLabel: "DISCORD ACCESS — COMING SOON",
            progressLabel: "SYSTEM DEVELOPMENT"
        },
        theme: {
            primary: "#ff42d3",
            primaryDark: "#a700c7",
            primaryRgb: "255, 66, 211",
            secondary: "#ffd45e",
            secondaryRgb: "255, 212, 94",
            accent: "#00d9ff",
            accentRgb: "0, 217, 255",
            tertiary: "#ff7cf1",
            stageA: "#3a1039",
            stageB: "#1a102b",
            ribbonPrimaryBg: "#6d2058",
            ribbonSecondaryBg: "#6b4a16"
        }
    },

    nox: {
        name: "Nox",
        title: "Discord Bot System",
        character: "../bots/img/nox/nox_newEra.png",
        art: "../bots/img/nox/nox_art.png",
        logo: "../bots/img/nox/nox_logo.png",
        favicon: "../bots/img/nox/nox_logo.png",
        selectorPosition: "50% 8%",
        characterFrame: { height: "114%", x: "4%", y: "12%" },
        ribbonPrimary: "NOX // MACHINE // FORGE // PURPOSE //",
        ribbonSecondary: "MECHANICAL CORE // CLOCKWORK // DISCORD //",
        overview: {
            summary: "Nox carries a mechanical and worn industrial identity. The interface is prepared for the final personality, lore and bot-specific information without requiring another HTML page.",
            details: [
                ["HEIGHT", "1.85M", "gold"],
                ["FAVORITE COLOR", "Light-Blue", "cyan"],
                ["PERSONALITY", "Quiet/Methodical", "magenta"],
                ["CORE", "CLOCKWORK", "violet"]
            ],
            quote: "A broken machine still has a purpose."
        },
        modules: [
            { name: "Module Registry", description: "Unique Nox commands have not been registered in this page yet.", state: "PENDING" },
            { name: "Discord Interface", description: "Main interaction layer for the Nox bot.", state: "ACTIVE" }
        ],
        access: {
            status: "IN DEVELOPMENT",
            version: "0.1 ALPHA",
            type: "DISCORD BOT",
            platform: "DISCORD",
            inviteUrl: "#",
            inviteLabel: "DISCORD ACCESS — COMING SOON",
            progressLabel: "SYSTEM DEVELOPMENT"
        },
        theme: {
            primary: "#28d7e8",
            primaryDark: "#0d6f7e",
            primaryRgb: "40, 215, 232",
            secondary: "#c58b35",
            secondaryRgb: "197, 139, 53",
            accent: "#8d7aff",
            accentRgb: "141, 122, 255",
            tertiary: "#d8b46b",
            stageA: "#17272a",
            stageB: "#10131d",
            ribbonPrimaryBg: "#204f55",
            ribbonSecondaryBg: "#5c451d"
        }
    }
};

const page = {
    showcase: document.querySelector(".entity-showcase"),
    characterArea: document.querySelector(".entity-character-area"),
    character: document.querySelector("#entity-character-image"),
    artLogo: document.querySelector("#entity-logo-image"),
    favicon: document.querySelector("#dynamic-favicon"),
    headerLogo: document.querySelector("#entity-header-logo"),
    name: document.querySelector("#entity-name"),
    title: document.querySelector("#entity-title"),
    content: document.querySelector("#entity-content"),
    selectorButtons: [...document.querySelectorAll(".entity-selector-button")],
    navButtons: [...document.querySelectorAll(".nav-button")],
    navigation: document.querySelector(".entity-navigation"),
    ribbonPrimary: document.querySelector("[data-ribbon='primary']"),
    ribbonPrimaryClone: document.querySelector("[data-ribbon-clone='primary']"),
    ribbonSecondary: document.querySelector("[data-ribbon='secondary']"),
    ribbonSecondaryClone: document.querySelector("[data-ribbon-clone='secondary']"),
    artModal: document.querySelector("#art-modal"),
    artModalImage: document.querySelector("#art-modal-image"),
    artModalName: document.querySelector("#art-modal-name"),
    artOpenButton: document.querySelector("#art-open-button"),
    artCloseButton: document.querySelector("#art-close-button")
};

let activeEntity = "nynx";
let activeTab = "overview";
let switchToken = 0;

function cloneBrandingLines() {
    document.querySelectorAll(".branding-line").forEach(line => {
        if (line.children.length > 1) return;
        const original = line.querySelector("span");
        if (!original) return;
        const clone = original.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        line.appendChild(clone);
    });
}

function preloadImage(src) {
    return new Promise(resolve => {
        const image = new Image();
        image.onload = resolve;
        image.onerror = resolve;
        image.src = src;
    });
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function buildRibbonLoop(text, repeats = 4) {
    const clean = String(text || "").trim();
    return Array.from({ length: repeats }, () => clean).join(" ");
}

function setTheme(theme) {
    const style = document.body.style;
    style.setProperty("--entity-primary", theme.primary);
    style.setProperty("--entity-primary-dark", theme.primaryDark);
    style.setProperty("--entity-primary-rgb", theme.primaryRgb);
    style.setProperty("--entity-secondary", theme.secondary);
    style.setProperty("--entity-secondary-rgb", theme.secondaryRgb);
    style.setProperty("--entity-accent", theme.accent);
    style.setProperty("--entity-accent-rgb", theme.accentRgb);
    style.setProperty("--entity-tertiary", theme.tertiary);
    style.setProperty("--entity-stage-a", theme.stageA);
    style.setProperty("--entity-stage-b", theme.stageB);
    style.setProperty("--entity-ribbon-primary", theme.ribbonPrimaryBg || theme.primaryDark);
    style.setProperty("--entity-ribbon-secondary", theme.ribbonSecondaryBg || theme.accent);
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function renderOverview(entity) {
    const detailRows = entity.overview.details.map(([label, value, color], index) => `
        <div class="overview-stat stat-${escapeHtml(color)}">
            <span class="stat-index">0${index + 1}</span>
            <span class="stat-label">${escapeHtml(label)}</span>
            <strong>${escapeHtml(value)}</strong>
        </div>
    `).join("");

    return `
        <article class="tab-panel active tab-overview">
            <div class="panel-section-heading">
                <span class="panel-section-index">01</span>
                <span class="panel-section-line"></span>
                <span class="panel-section-label">ENTITY OVERVIEW</span>
            </div>

            <div class="overview-summary">
                <span class="overview-kicker">PROFILE / IDENTITY</span>
                <p>${escapeHtml(entity.overview.summary)}</p>
            </div>

            <div class="overview-stats">
                ${detailRows}
            </div>

            <div class="quote-box">
                <span class="quote-symbol">“</span>
                <p>${escapeHtml(entity.overview.quote)}</p>
            </div>
        </article>
    `;
}

function renderModules(entity) {
    const cards = entity.modules.map((module, index) => `
        <div class="module-card">
            <div class="module-number">${String(index + 1).padStart(2, "0")}</div>
            <div class="module-copy">
                <strong>${escapeHtml(module.name)}</strong>
                <span>${escapeHtml(module.description)}</span>
            </div>
            <span class="module-state">${escapeHtml(module.state)}</span>
        </div>
    `).join("");

    return `
        <article class="tab-panel active tab-modules">
            <div class="panel-section-heading">
                <span class="panel-section-index">02</span>
                <span class="panel-section-line"></span>
                <span class="panel-section-label">MODULE DIRECTORY</span>
            </div>

            <div class="tab-intro">
                <span class="overview-kicker">FUNCTIONS / SYSTEMS</span>
                <h2>Modules</h2>
                <p>Functions and systems currently associated with ${escapeHtml(entity.name)}.</p>
            </div>

            <div class="module-list">${cards}</div>
        </article>
    `;
}

function renderAccess(entity) {
    const access = entity.access;
    const disabled = !access.inviteUrl || access.inviteUrl === "#";

    return `
        <article class="tab-panel active tab-access">
            <div class="panel-section-heading">
                <span class="panel-section-index">03</span>
                <span class="panel-section-line"></span>
                <span class="panel-section-label">SYSTEM ACCESS</span>
            </div>

            <div class="access-hero">
                <div>
                    <span class="overview-kicker">CURRENT STATE</span>
                    <h2>${escapeHtml(access.status)}</h2>
                </div>
                <span class="status-live"><i></i>${escapeHtml(access.version)}</span>
            </div>

            <div class="access-track">
                <div class="access-track-top">
                    <span>${escapeHtml(access.progressLabel)}</span>
                    <strong>ACTIVE BUILD</strong>
                </div>
                <div class="progress-bar"><span></span></div>
            </div>

            <div class="access-grid">
                <div class="access-stat"><span>STATUS</span><strong>${escapeHtml(access.status)}</strong></div>
                <div class="access-stat"><span>VERSION</span><strong>${escapeHtml(access.version)}</strong></div>
                <div class="access-stat"><span>TYPE</span><strong>${escapeHtml(access.type)}</strong></div>
                <div class="access-stat"><span>PLATFORM</span><strong>${escapeHtml(access.platform)}</strong></div>
            </div>

            <a class="invite-button ${disabled ? "is-disabled" : ""}" href="${escapeHtml(access.inviteUrl)}" ${disabled ? 'aria-disabled="true" tabindex="-1"' : 'target="_blank" rel="noopener noreferrer"'}>
                <span>+</span>
                ${escapeHtml(access.inviteLabel)}
            </a>
        </article>
    `;
}

function renderTab() {
    const entity = entities[activeEntity];
    page.content.classList.remove("content-enter");

    if (activeTab === "modules") page.content.innerHTML = renderModules(entity);
    else if (activeTab === "access") page.content.innerHTML = renderAccess(entity);
    else page.content.innerHTML = renderOverview(entity);

    requestAnimationFrame(() => page.content.classList.add("content-enter"));

    page.navigation.dataset.activeTab = activeTab;

    page.navButtons.forEach(button => {
        const selected = button.dataset.tab === activeTab;
        button.classList.toggle("active", selected);
        button.setAttribute("aria-current", selected ? "page" : "false");
    });
}

function applyEntity(entityId) {
    const entity = entities[entityId];
    if (!entity) return;

    activeEntity = entityId;
    document.body.dataset.activeEntity = entityId;
    document.title = `${entity.name} | BotPage`;
    setTheme(entity.theme);
    page.favicon.href = entity.favicon;

    const frame = entity.characterFrame || { height: "116%", x: "5%", y: "15%" };
    document.body.style.setProperty("--character-height", frame.height);
    document.body.style.setProperty("--character-x", frame.x);
    document.body.style.setProperty("--character-y", frame.y);

    page.character.src = entity.character;
    page.character.alt = entity.name;
    page.artLogo.src = entity.logo;
    page.artLogo.alt = `${entity.name} Logo`;
    page.headerLogo.src = entity.logo;
    page.headerLogo.alt = `${entity.name} Logo`;
    page.name.textContent = entity.name;
    page.title.textContent = entity.title;
    page.artModalImage.src = entity.art || entity.character;
    page.artModalImage.alt = `${entity.name} character artwork`;
    page.artModalName.textContent = entity.name.toUpperCase();

    const primaryRibbonLoop = buildRibbonLoop(entity.ribbonPrimary, 5);
    const secondaryRibbonLoop = buildRibbonLoop(entity.ribbonSecondary, 5);

    page.ribbonPrimary.textContent = primaryRibbonLoop;
    page.ribbonPrimaryClone.textContent = primaryRibbonLoop;
    page.ribbonSecondary.textContent = secondaryRibbonLoop;
    page.ribbonSecondaryClone.textContent = secondaryRibbonLoop;

    page.selectorButtons.forEach(button => {
        const selected = button.dataset.entity === entityId;
        button.classList.toggle("active", selected);
        button.setAttribute("aria-pressed", String(selected));

        const img = button.querySelector("img");
        if (img) img.style.objectPosition = entities[button.dataset.entity].selectorPosition;
    });

    renderTab();
}

async function switchEntity(entityId, { animate = true, updateHistory = true } = {}) {
    const entity = entities[entityId];
    if (!entity || entityId === activeEntity) return;

    const token = ++switchToken;
    await Promise.all([
        preloadImage(entity.character),
        preloadImage(entity.logo),
        preloadImage(entity.art || entity.character)
    ]);
    if (token !== switchToken) return;

    if (animate) {
        page.showcase.classList.add("is-switching");
        await wait(260);
    }

    if (token !== switchToken) return;
    applyEntity(entityId);

    if (updateHistory) history.pushState({ entity: entityId }, "", `#${entityId}`);

    requestAnimationFrame(() => requestAnimationFrame(() => page.showcase.classList.remove("is-switching")));
}

function entityFromUrl() {
    const id = window.location.hash.replace("#", "").toLowerCase();
    return entities[id] ? id : "nynx";
}

function openArt() {
    page.artModal.classList.add("open");
    page.artModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
}

function closeArt() {
    page.artModal.classList.remove("open");
    page.artModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

page.selectorButtons.forEach(button => {
    button.addEventListener("click", () => switchEntity(button.dataset.entity));
});

page.navButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (activeTab === button.dataset.tab) return;
        activeTab = button.dataset.tab;
        renderTab();
    });
});

page.content.addEventListener("click", event => {
    const disabledInvite = event.target.closest(".invite-button.is-disabled");
    if (disabledInvite) event.preventDefault();
});

page.artOpenButton.addEventListener("click", openArt);
page.artCloseButton.addEventListener("click", closeArt);
page.artModal.addEventListener("click", event => {
    if (event.target === page.artModal) closeArt();
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && page.artModal.classList.contains("open")) closeArt();
});

window.addEventListener("popstate", () => {
    switchEntity(entityFromUrl(), { animate: true, updateHistory: false });
});

cloneBrandingLines();
const initialEntity = entityFromUrl();
applyEntity(initialEntity);
history.replaceState({ entity: initialEntity }, "", `#${initialEntity}`);


//cursor

const dot = document.querySelector(".cursor-dot")
const ring = document.querySelector(".cursor-ring")

let mouseX = 0
let mouseY = 0

document.addEventListener("mousemove", e => {
    mouseX = e.clientX
    mouseY = e.clientY

    dot.style.left = mouseX + "px"
    dot.style.top = mouseY + "px"
})

let ringX = 0
let ringY = 0

function animateCursor(){
    ringX += (mouseX - ringX) * 0.15
    ringY += (mouseY - ringY) * 0.15

    ring.style.left = ringX + "px"
    ring.style.top = ringY + "px"

    requestAnimationFrame(animateCursor)
}

animateCursor()

const clickable = document.querySelectorAll(
    "a, button, .clickable"
)

clickable.forEach(item => {
    item.addEventListener("mouseenter", () => {
        dot.style.opacity = "0"

        ring.classList.add('hover')
    })

    item.addEventListener("mouseleave", () =>{
        dot.style.opacity = "1"

        ring.classList.remove('hover')
    })
})

console.log(dot)
console.log(ring)

/* =========================================
   BRANDING ONLY EASTER EGG
========================================= */

const backgroundArrowCode = [
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight"
];

const backgroundWord = "background";

let arrowInput = [];
let wordInput = "";

function toggleBrandingOnly() {
    document.body.classList.toggle("branding-only");

    arrowInput = [];
    wordInput = "";
}

document.addEventListener("keydown", event => {

    /* ↑ ↓ ← → */

    if (event.key.startsWith("Arrow")) {
        arrowInput.push(event.key);

        if (arrowInput.length > backgroundArrowCode.length) {
            arrowInput.shift();
        }

        const arrowMatch = backgroundArrowCode.every(
            (key, index) => arrowInput[index] === key
        );

        if (arrowMatch) {
            toggleBrandingOnly();
            return;
        }
    }


    /* BACKGROUND */

    if (event.key.length === 1 && /[a-z]/i.test(event.key)) {
        wordInput += event.key.toLowerCase();

        if (wordInput.length > backgroundWord.length) {
            wordInput = wordInput.slice(-backgroundWord.length);
        }

        if (wordInput === backgroundWord) {
            toggleBrandingOnly();
        }
    }

});