const basePath = '/flowplus'; // For local file opening. Change to '/flowplus' if deploying to a subfolder.

// --- DOM Elements ---
const bodyElement = document.body;
const mainContainer = document.getElementById('mainContainer');
const homeSection = document.getElementById('homeSection');
const categoriesPage = document.getElementById('categoriesPage');
const profilePage = document.getElementById('profilePage');
const categoryPillsContainer = document.getElementById('categoryPillsContainer');
const homeHeroBackground = document.getElementById('homeHeroBackground');
const homeHeroContent = document.getElementById('homeHeroContent');
const topChannelsRow = document.getElementById("topChannelsRow");
const categoryGroups = document.getElementById("categoryGroups");

const playerContainer = document.getElementById('playerContainer');
const playerBoxFullPage = document.getElementById('playerBoxFullPage');
const playerMinimizeBtn = document.getElementById('playerMinimizeBtn');
const shakaPlayerWrapperFullPage = document.getElementById('shakaPlayerWrapperFullPage');
const shakaVideoElement = document.getElementById('shaka-player');

const playerTitleFullPage = document.getElementById('playerTitleFullPage');
const playerCategoryFullPage = document.getElementById('playerCategoryFullPage');
const playerLiveIconFullPage = document.getElementById('playerLiveIconFullPage');

const suggestedChannelsListFullPage = document.getElementById('suggestedChannelsListFullPage');

// Minimized Bar Elements
const playerMinimizedBar = document.getElementById('playerMinimizedBar');
const minimizedBarLogo = document.getElementById('minimizedBarLogo');
const minimizedBarTitle = document.getElementById('minimizedBarTitle');
const minimizedBarCategory = document.getElementById('minimizedBarCategory');
const minimizedBarCloseBtn = document.getElementById('minimizedBarCloseBtn');

const searchModal = document.getElementById("searchModal");
const searchInput = document.getElementById("searchInput");
const searchResultsModal = document.getElementById("searchResultsModal");
const searchLoadingIndicator = searchResultsModal.querySelector('.loading-text');
const searchModalCloseBtn = document.getElementById('searchModalCloseBtn');

const logoLink = document.querySelector('a.logo');
const mobileSearchBtn = document.getElementById("searchBtn");
const desktopSearchBtn = document.getElementById("desktopNavSearch");
const desktopNavItems = document.querySelectorAll('.desktop-vertical-nav .desktop-vertical-nav-item[data-target-page]');
const footerItems = document.querySelectorAll('.footer-item[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');
const topbarElement = document.querySelector('.topbar');

// --- PLAYER STATE VARIABLES ---
let shakaPlayer = null;
let isPlayerActive = false;
let isPlayerFullPageVisible = false;
let isPlayerMinimizedBarVisible = false;
let currentPlayingChannelData = null;
let shakaControlsObserver = null;

// --- UTILITY FUNCTIONS ---
function slugify(text) { if (!text) return ''; return text.toString().toLowerCase().replace(/\s+/g, '-').replace(/[+&]/g, 'and').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, ''); }
function getChannelBySlug(slug) { if (typeof streams === 'undefined' || !Array.isArray(streams)) return null; return streams.find(s => slugify(s.name) === slug); }

// --- DARK/LIGHT MODE ---
function applyTheme(theme) { if (theme === 'dark') bodyElement.classList.add('dark-mode'); else bodyElement.classList.remove('dark-mode'); }
function initializeTheme() { applyTheme('dark'); }

// --- ROUTING ---
function updateUrlAndTitle(newRelativePath, pageTitle, historyStateData) { const fullPath = basePath + (newRelativePath.startsWith('/') ? newRelativePath : '/' + newRelativePath); const currentFullPath = window.location.pathname + window.location.search + window.location.hash; if (currentFullPath !== fullPath) { history.pushState(historyStateData, pageTitle, fullPath); } else { if (document.title !== pageTitle) document.title = pageTitle; history.replaceState(historyStateData, pageTitle, fullPath); } if (document.title !== pageTitle) document.title = pageTitle; }
async function handleRouteChange() { if (isPlayerActive) await closePlayerCompletely(null, true); closeSearchModal(); let relativePath = window.location.pathname; if (basePath && relativePath.startsWith(basePath)) { relativePath = relativePath.substring(basePath.length); } if (!relativePath.startsWith('/')) relativePath = '/' + relativePath; if (relativePath === '/') relativePath = '/home'; const segments = relativePath.split('/').filter(Boolean); const primaryRoute = segments[0]; let targetPageId = 'homeSection'; if (primaryRoute === 'home') { targetPageId = 'homeSection'; const channelSlug = segments[2]; if ((segments[1] === 'top-channels' || segments[1] === 'featured') && channelSlug) { const channel = getChannelBySlug(channelSlug); if (channel) { _updateActiveUITab(targetPageId); setTimeout(() => openFullPagePlayer(channel), 50); } else console.warn("Channel not found for route:", relativePath); } else { _updateActiveUITab(targetPageId); } } else if (primaryRoute === 'live-tv') { targetPageId = 'categoriesPage'; _updateActiveUITab(targetPageId); const categorySlug = segments[1]; const channelSlug = segments[2]; if (typeof streams !== 'undefined' && !categoryPillsContainer.querySelector('.category-pill')) { renderCategoryPills(); renderCategories(); } document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active')); let activeCategoryName = "ALL"; if (categorySlug) { const pillToActivate = Array.from(categoryPillsContainer.querySelectorAll('.category-pill')).find(p => slugify(p.dataset.category) === categorySlug); if (pillToActivate) { pillToActivate.classList.add('active'); activeCategoryName = pillToActivate.dataset.category; } else { const allPill = categoryPillsContainer.querySelector('.category-pill[data-category="ALL"]'); if (allPill) allPill.classList.add('active'); } } else { const allPill = categoryPillsContainer.querySelector('.category-pill[data-category="ALL"]'); if (allPill) allPill.classList.add('active'); } renderCategories(activeCategoryName === "ALL" ? null : activeCategoryName); if (channelSlug) { const channel = getChannelBySlug(channelSlug); if (channel) setTimeout(() => openFullPagePlayer(channel), 50); else console.warn("Channel not found for /live-tv route:", channelSlug); } } else if (primaryRoute === 'profile') { targetPageId = 'profilePage'; _updateActiveUITab(targetPageId); } else { console.warn("Unknown route, defaulting to home:", relativePath); targetPageId = 'homeSection'; _updateActiveUITab(targetPageId); const homePath = basePath ? basePath + '/home' : '/home'; if (window.location.pathname !== homePath && window.location.pathname !== (basePath || '/')) { history.replaceState({ page: 'homeSection' }, 'Home | flow+', homePath); document.title = 'Home | flow+'; } } _displayCorrectPageContent(targetPageId); }
function _displayCorrectPageContent(targetPageId) { tabPanels.forEach(panel => { panel.hidden = (panel.id !== targetPageId); panel.classList.toggle('active', panel.id === targetPageId); }); updateTopbarAndHeroVisibility(); const isHomePage = (targetPageId === 'homeSection'); if (isHomePage) { if (slidesData.length > 0 && (!currentActiveBgSlide || (homeHeroContent && !homeHeroContent.classList.contains('visible-content')))) { goToSlide(featureIndex); } startFeatureSliderInterval(); } else { if (featureSliderInterval) clearInterval(featureSliderInterval); if (homeHeroContent) homeHeroContent.classList.remove('active', 'visible-content'); } if (targetPageId === 'categoriesPage' && typeof streams !== 'undefined' && !categoryPillsContainer.querySelector('.category-pill')) { renderCategoryPills(); renderCategories(); } window.scrollTo({ top: 0, behavior: 'smooth' }); }
function _updateActiveUITab(targetPageId) { footerItems.forEach(item => { item.classList.toggle('selected', item.getAttribute('aria-controls') === targetPageId); item.setAttribute('aria-selected', (item.getAttribute('aria-controls') === targetPageId).toString()); }); desktopNavItems.forEach(item => { item.classList.toggle('active', item.dataset.targetPage === targetPageId); }); }
function switchTabAndUrl(targetPageId) { _updateActiveUITab(targetPageId); _displayCorrectPageContent(targetPageId); let newRelativePath = ''; let pageTitle = 'flow+'; let historyState = { page: targetPageId }; if (targetPageId === 'homeSection') { newRelativePath = '/home'; pageTitle = 'Home | flow+'; } else if (targetPageId === 'categoriesPage') { const activePill = categoryPillsContainer.querySelector('.category-pill.active'); if (activePill && activePill.dataset.category !== 'ALL') { const catSlug = slugify(activePill.dataset.category); newRelativePath = `/live-tv/${catSlug}`; pageTitle = `${activePill.dataset.category} | Live TV | flow+`; historyState.category = catSlug; } else { newRelativePath = '/live-tv'; pageTitle = 'Live TV | flow+'; } } else if (targetPageId === 'profilePage') { newRelativePath = '/profile'; pageTitle = 'Profile | flow+'; } updateUrlAndTitle(newRelativePath, pageTitle, historyState); }

// --- Topbar & Hero Scroll/Visibility ---
function updateTopbarAndHeroVisibility() { if (!topbarElement || !homeSection) return; const isHomePageCurrentlyActive = homeSection.classList.contains('active'); const atPageTop = window.scrollY < 20; if (isHomePageCurrentlyActive && atPageTop) { bodyElement.classList.add('home-at-top'); topbarElement.classList.remove('scrolled'); } else { bodyElement.classList.remove('home-at-top'); topbarElement.classList.add('scrolled'); } }

// --- Feature Slider Logic ---
let featureIndex = 0; let featureSliderInterval = null; let slidesData = []; let currentActiveBgSlide = null;
async function initializeFeatures() { if (!homeHeroBackground || !homeHeroContent) { console.error("Hero elements not found!"); return; } homeHeroBackground.innerHTML = '<p class="loading-text" style="color: #aaa; text-align:center; padding-top: 40%;">Loading features...</p>'; if (typeof streams === 'undefined' || !Array.isArray(streams)) { console.error("Streams array is not defined or not an array."); if(homeHeroBackground) homeHeroBackground.innerHTML = '<p class="loading-text" style="color: red; text-align:center; padding-top: 40%;">Error: Stream data missing.</p>'; homeHeroContent.innerHTML = ''; return; } const manualStreamFeatures = [ { type: 'stream', bg: "https://m.media-amazon.com/images/M/MV5BNGM0NGM5ZTgtOWU4MC00NGEyLTliZDktMmI4NzNlYWZlODc3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", logo: '<img src="https://static.wikia.nocookie.net/abscbn/images/7/74/Kapamilya_Channel_3D_Logo.png" alt="Kapamilya Channel Logo"/>', title: "FPJ's Batang Quiapo", desc: "CATCH-UP TV", streamName: "Kapamilya Channel" }, { type: 'stream', bg: "https://m.media-amazon.com/images/M/MV5BNDI0YTIyNjgtMGIzNS00ZTY4LWEwZjAtZTk2ZWJkZWJhZWY2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", logo: '<img src="https://static.wikia.nocookie.net/tv5network/images/9/95/TV5_HD_2024.svg" alt="TV5 Logo"/>', title: "Ang Mutya Ng Section E", desc: "CATCH-UP TV", streamName: "TV5 HD" }, { type: 'stream', bg: "https://beam-images.warnermediacdn.com/2025-03/Max_BrandQuilt_2025_Q1_Global_1920x1080.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com&w=1920", logo: '<img src="https://static.wikia.nocookie.net/hbo-max/images/1/1e/HBO-WhiteLogo.png" alt="HBO Logo"/>', title: "Watch Now", desc: "", streamName: "HBO" } ].map(f => ({ ...f, stream: streams.find(s => s.name === f.streamName) })).filter(f => f.stream); slidesData = manualStreamFeatures.slice(0, 6); if (slidesData.length > 0) { renderFeatureSliderBackgrounds(); goToSlide(0); } else { if(homeHeroBackground) homeHeroBackground.innerHTML = '<p class="loading-text" style="color: #aaa; text-align:center; padding-top: 40%;">No features to display.</p>'; if(homeHeroContent) homeHeroContent.innerHTML = ''; console.warn("No features to display.");} startFeatureSliderInterval(); }
function renderFeatureSliderBackgrounds() { if (!homeHeroBackground || !slidesData || slidesData.length === 0) return; homeHeroBackground.innerHTML = ''; slidesData.forEach((feature, index) => { const bgSlide = document.createElement('div'); bgSlide.className = 'feature-slide-background-item'; bgSlide.style.backgroundImage = `url('${feature.bg || ''}')`; bgSlide.dataset.index = index; homeHeroBackground.appendChild(bgSlide); }); const gradientOverlay = document.createElement('div'); gradientOverlay.className = 'home-hero-gradient-overlay'; homeHeroBackground.appendChild(gradientOverlay); }
function updateFeatureSliderContent(feature) { if (!homeHeroContent || !feature) { if(homeHeroContent) homeHeroContent.innerHTML = ''; return; } homeHeroContent.innerHTML = ` <div class="feature-content-details"> <div class="feature-logo">${feature.logo || ''}</div> <div class="feature-title">${feature.title || ''}</div> <div class="feature-desc">${feature.desc || ''}</div> </div> <div class="feature-dots-container"> ${slidesData.map((f, i) => `<span class="feature-dot ${i === featureIndex ? 'active' : ''}" data-index="${i}" onclick="goToSlide(${i})"></span>`).join('')} </div> `; const contentDetails = homeHeroContent.querySelector('.feature-content-details'); if (contentDetails && feature.type === 'stream' && feature.stream) { contentDetails.style.cursor = 'pointer'; contentDetails.onclick = () => navigateToPlayChannel(feature.stream, 'home-feature-slider'); } }
function goToSlide(index) { if (!slidesData || !slidesData.length || index < 0 || index >= slidesData.length) return; if (!homeHeroBackground || !homeHeroContent) return; const backgroundSlides = homeHeroBackground.querySelectorAll('.feature-slide-background-item'); if (currentActiveBgSlide) currentActiveBgSlide.classList.remove('active'); currentActiveBgSlide = Array.from(backgroundSlides).find(s => parseInt(s.dataset.index) === index); if (currentActiveBgSlide) currentActiveBgSlide.classList.add('active'); homeHeroContent.classList.remove('active', 'visible-content'); requestAnimationFrame(() => { featureIndex = index; updateFeatureSliderContent(slidesData[featureIndex]); requestAnimationFrame(() => { if (homeHeroContent) { homeHeroContent.classList.add('active', 'visible-content');} }); }); startFeatureSliderInterval(); }
function startFeatureSliderInterval() { if (featureSliderInterval) clearInterval(featureSliderInterval); if (!slidesData || slidesData.length <= 1) return; featureSliderInterval = setInterval(() => { let nextIndex = (featureIndex + 1) % slidesData.length; goToSlide(nextIndex); }, 7000); }

// --- CONTENT RENDERING ---
function createChannelCard(stream, index, viewContext, categorySlugContext = null) { const card = document.createElement("div"); card.className = "channel-card"; card.style.setProperty('--logo-url', `url('${stream.logo}')`); card.innerHTML = `<img src="${stream.logo}" alt="${stream.name}" loading="lazy"/><span class="material-symbols-outlined channel-live-icon">sensors</span>`; card.onclick = () => navigateToPlayChannel(stream, viewContext, categorySlugContext); return card; }
function renderTopChannels() { if (!topChannelsRow) return; topChannelsRow.innerHTML = '<p class="loading-text">Loading channels...</p>'; if (typeof streams !== 'undefined' && Array.isArray(streams) && streams.length > 0) { topChannelsRow.innerHTML = ""; streams.slice(0, 12).forEach((stream, index) => topChannelsRow.appendChild(createChannelCard(stream, index, 'home-top-channels'))); } else { topChannelsRow.innerHTML = '<p class="loading-text">No channels available.</p>'; } }
const categoryOrder = ["ALL", "GENERAL", "NEWS", "MOVIES", "ENTERTAINMENT", "SPORTS", "KIDS", "LIFESTYLE + FOOD", "EDUCATIONAL", "NATURE + ANIMAL", "MUSIC", "RELIGION", "OVERSEAS", "ACTION + CRIME"];
const categoryIcons = { "ALL": "apps", "GENERAL": "tv_gen", "NEWS": "feed", "MOVIES": "movie", "ENTERTAINMENT": "theater_comedy", "SPORTS": "sports_soccer", "KIDS": "child_care", "LIFESTYLE + FOOD": "restaurant", "EDUCATIONAL": "school", "NATURE + ANIMAL": "pets", "MUSIC": "music_note", "RELIGION": "church", "OVERSEAS": "public", "ACTION + CRIME": "bolt", "UNCATEGORIZED": "category" };
function getIconForCategory(categoryName) { return categoryIcons[categoryName.toUpperCase().replace(/ /g, '_')] || categoryIcons["UNCATEGORIZED"]; }
function renderCategoryPills() { if (!categoryPillsContainer) return; categoryPillsContainer.innerHTML = ''; if (typeof streams === 'undefined' || !Array.isArray(streams)) { return; } const uniqueCategories = ["ALL", ...new Set(streams.map(s => s.category || "UNCATEGORIZED"))]; const sortedUniqueCategories = uniqueCategories.sort((a, b) => { const indexA = categoryOrder.indexOf(a.toUpperCase()); const indexB = categoryOrder.indexOf(b.toUpperCase()); if (a === "ALL") return -1; if (b === "ALL") return 1; if (indexA !== -1 && indexB !== -1) return indexA - indexB; if (indexA !== -1) return -1; if (indexB !== -1) return 1; return a.localeCompare(b); }); sortedUniqueCategories.forEach(catName => { const pill = document.createElement('button'); pill.className = 'category-pill'; pill.dataset.category = catName; pill.innerHTML = `<span class="material-symbols-outlined">${getIconForCategory(catName)}</span> ${catName}`; pill.onclick = () => { document.querySelectorAll('.category-pill.active').forEach(p => p.classList.remove('active')); pill.classList.add('active'); renderCategories(catName === "ALL" ? null : catName); const catSlug = slugify(catName); const newPath = (catName === "ALL") ? '/live-tv' : `/live-tv/${catSlug}`; const pageTitle = (catName === "ALL") ? 'Live TV | flow+' : `${catName} | Live TV | flow+`; updateUrlAndTitle(newPath, pageTitle, { page: 'categoriesPage', category: catSlug }); }; categoryPillsContainer.appendChild(pill); }); }
function renderCategories(filterCategory = null) { if (!categoryGroups) return; categoryGroups.innerHTML = '<p class="loading-text">Loading categories...</p>'; if (typeof streams === 'undefined' || !Array.isArray(streams) || streams.length === 0) { categoryGroups.innerHTML = '<p class="loading-text">No channel data available.</p>'; return; } const streamsToRender = filterCategory ? streams.filter(s => (s.category || "UNCATEGORIZED") === filterCategory) : streams; const streamsByCategory = streamsToRender.reduce((acc, stream) => { const category = stream.category || "UNCATEGORIZED"; if (!acc[category]) acc[category] = []; acc[category].push(stream); return acc; }, {}); categoryGroups.innerHTML = ""; const displayCategories = Object.keys(streamsByCategory).sort((a, b) => { const indexA = categoryOrder.indexOf(a.toUpperCase()); const indexB = categoryOrder.indexOf(b.toUpperCase()); if (indexA !== -1 && indexB !== -1) return indexA - indexB; if (indexA !== -1) return -1; if (indexB !== -1) return 1; return a.localeCompare(b); }); if (displayCategories.length === 0) { categoryGroups.innerHTML = `<p class="loading-text">No channels ${filterCategory ? `for "${filterCategory}"` : ''} found.</p>`; return; } displayCategories.forEach(cat => { const categoryStreams = streamsByCategory[cat]; if (!categoryStreams || categoryStreams.length === 0) return; const groupDiv = document.createElement('div'); groupDiv.className = 'category-group'; const titleDiv = document.createElement('div'); titleDiv.className = 'category-title'; titleDiv.innerHTML = `<span class="material-symbols-outlined">${getIconForCategory(cat)}</span> ${cat.toUpperCase().replace(/_/g, ' ')}`; groupDiv.appendChild(titleDiv); const channelsDiv = document.createElement('div'); channelsDiv.className = 'category-channels'; categoryStreams.forEach((stream) => channelsDiv.appendChild(createChannelCard(stream, streams.indexOf(stream), 'live-tv', slugify(cat)))); groupDiv.appendChild(channelsDiv); categoryGroups.appendChild(groupDiv); }); }

// --- PLAYER LOGIC ---
function syncShakaHTML5FullscreenOverlay() { if (!playerContainer.classList.contains('html5-fullscreen-active')) { playerContainer.classList.remove('shaka-controls-active'); return; } const shakaControls = shakaPlayerWrapperFullPage.querySelector('.shaka-controls-container'); playerContainer.classList.toggle('shaka-controls-active', shakaControls && !shakaControls.classList.contains('shaka-controls-hidden')); }
function setupShakaControlsObserver() { if (shakaControlsObserver) shakaControlsObserver.disconnect(); const shakaUIContainer = shakaPlayerWrapperFullPage.querySelector('.shaka-video-container'); if (!shakaUIContainer) { console.warn("Shaka UI container for observer not found in .shaka-player-wrapper-fullpage"); return; } shakaControlsObserver = new MutationObserver(syncShakaHTML5FullscreenOverlay); shakaControlsObserver.observe(shakaUIContainer, { attributes: true, attributeFilter: ['class'], subtree: true }); setTimeout(syncShakaHTML5FullscreenOverlay, 100); }

async function initializeShakaPlayerInstance(channel) {
    const manifestUri = channel.manifestUri;
    if (!manifestUri || manifestUri === "#") {
        alert(`Stream URL for ${channel.name} is not available.`);
        await closePlayerCompletely();
        return false;
    }

    const drmConfig = channel.clearKey && Object.keys(channel.clearKey).length > 0 ? { drm: { clearKeys: channel.clearKey } } : {};

    // Configuration specifically for live streaming
    const liveStreamingConfig = {
        streaming: {
            rebufferingGoal: 4,      // Seconds of buffer to achieve before playing after a rebuffer
            bufferingGoal: 10,       // Seconds of buffer to accumulate before starting playback or resuming
            bufferBehind: 30,        // Max seconds of buffer to keep behind the playhead (helps with DVR if manifest supports)
            jumpLargeGaps: true,     // Allows the player to jump over large gaps in the media timeline
            stallEnabled: true,      // Enable stall detection
            stallThreshold: 1,       // Seconds before a stall is detected
            stallSkip: 0.1,          // Seconds to skip when stalled to try to recover
        },
        manifest: {
            dash: {
                // autoCorrectDrift: true, // Consider enabling if facing clock drift issues with specific live MPDs
            }
        },
    };

    if (typeof shaka === 'undefined' || !shaka.Player.isBrowserSupported()) {
        alert('Shaka Player is not supported on this browser.');
        await closePlayerCompletely();
        return false;
    }

    if (shakaPlayer) {
        try {
            await shakaPlayer.destroy();
        } catch (e) {
            console.error('Error destroying previous player:', e);
        }
        shakaPlayer = null;
    }

    shakaPlayer = new shaka.Player(shakaVideoElement);

    // Merge live streaming config with DRM config carefully
    let finalConfig = { ...liveStreamingConfig };
    if (drmConfig.drm) {
        finalConfig.drm = { ...(finalConfig.drm || {}), ...drmConfig.drm };
    }
    // Deep merge for streaming and manifest objects if they exist
    if (liveStreamingConfig.streaming) {
        finalConfig.streaming = { ...liveStreamingConfig.streaming, ...(drmConfig.streaming || {}) };
    }
    if (liveStreamingConfig.manifest) {
        finalConfig.manifest = { ...liveStreamingConfig.manifest, ...(drmConfig.manifest || {}) };
         if (liveStreamingConfig.manifest.dash && (drmConfig.manifest?.dash || {})) { // Check if dash exists in both
            finalConfig.manifest.dash = { ...liveStreamingConfig.manifest.dash, ...drmConfig.manifest.dash };
        } else if (drmConfig.manifest?.dash) { // If only in drmConfig
            finalConfig.manifest.dash = { ...drmConfig.manifest.dash };
        }
    }

    shakaPlayer.configure(finalConfig);

    shakaPlayer.addEventListener('error', async (event) => {
        console.error('Shaka Player Error:', event.detail);
        alert(`Error loading stream: ${event.detail.message || event.detail.code}`);
        await closePlayerCompletely();
    });

    try {
        await shakaPlayer.load(manifestUri);
        console.log(`Stream loaded: ${channel.name}. Is Live: ${shakaPlayer.isLive()}`); // Diagnostic log
        setupShakaControlsObserver();
        await shakaVideoElement.play().catch(err => console.warn("Autoplay prevented:", err));
        return true;
    } catch (error) {
        if (!(error.code && shaka.util && error.code === shaka.util.Error.Code.LOAD_INTERRUPTED)) {
             alert(`Failed to load stream for ${channel.name}.`);
             console.error('Shaka Load Error:', error);
        }
        await closePlayerCompletely();
        return false;
    }
}

function navigateToPlayChannel(channel, viewContext, categorySlugContext = null) { const channelSlug = slugify(channel.name); let newRelativePath = ''; let pageTitle = `${channel.name} | Playing | flow+`; let historyStateData = { page: 'player', channelSlug: channelSlug, channelName: channel.name }; if (viewContext === 'home-top-channels') { newRelativePath = `/home/top-channels/${channelSlug}`; } else if (viewContext === 'live-tv' && categorySlugContext) { newRelativePath = `/live-tv/${categorySlugContext}/${channelSlug}`; } else if (viewContext === 'home-feature-slider') { newRelativePath = `/home/featured/${channelSlug}`; } else { const catSlug = channel.category ? slugify(channel.category) : 'general'; newRelativePath = `/live-tv/${catSlug}/${channelSlug}`; } updateUrlAndTitle(newRelativePath, pageTitle, historyStateData); openFullPagePlayer(channel); }
async function openFullPagePlayer(channelData) { if (!playerContainer || !channelData) return; currentPlayingChannelData = channelData; playerTitleFullPage.textContent = channelData.name || 'Live Stream'; playerCategoryFullPage.textContent = channelData.category || 'Channel'; playerLiveIconFullPage.style.display = 'inline-flex'; renderSuggestedChannelsFullPage(channelData); const playerInitialized = await initializeShakaPlayerInstance(channelData); if (playerInitialized) { isPlayerActive = true; isPlayerFullPageVisible = true; isPlayerMinimizedBarVisible = false; playerContainer.classList.add('active', 'full-page-active'); playerContainer.classList.remove('minimized-bar-active', 'html5-fullscreen-active', 'shaka-controls-active'); bodyElement.classList.add('player-fullpage-active-no-scroll'); bodyElement.classList.remove('player-minimized-bar-active'); } else { await closePlayerCompletely(null, true); } }
async function minimizeToBarPlayer() { if (!isPlayerFullPageVisible || !currentPlayingChannelData) return; if (document.fullscreenElement || document.webkitFullscreenElement) { try { if (document.exitFullscreen) await document.exitFullscreen(); else if (document.webkitExitFullscreen) document.webkitExitFullscreen(); } catch (err) { console.warn("Exit fullscreen error on minimize:", err); } } isPlayerFullPageVisible = false; isPlayerMinimizedBarVisible = true; minimizedBarLogo.src = currentPlayingChannelData.logo || ''; minimizedBarTitle.textContent = currentPlayingChannelData.name || 'Channel'; minimizedBarCategory.textContent = currentPlayingChannelData.category || 'Category'; playerContainer.classList.remove('full-page-active'); playerContainer.classList.add('minimized-bar-active'); bodyElement.classList.remove('player-fullpage-active-no-scroll'); bodyElement.classList.add('player-minimized-bar-active'); if (shakaVideoElement.paused) shakaVideoElement.play().catch(e => console.warn("Play on minimize to bar failed:", e)); }
async function expandFromBarPlayer() { if (!isPlayerMinimizedBarVisible || !currentPlayingChannelData) return; isPlayerMinimizedBarVisible = false; isPlayerFullPageVisible = true; playerContainer.classList.remove('minimized-bar-active'); playerContainer.classList.add('full-page-active'); bodyElement.classList.remove('player-minimized-bar-active'); bodyElement.classList.add('player-fullpage-active-no-scroll'); if (shakaVideoElement.paused) shakaVideoElement.play().catch(e => console.warn("Play on expand from bar failed:", e)); }
async function closePlayerCompletely(event = null, calledInternally = false) { if (event) event.stopPropagation(); if (!isPlayerActive && !calledInternally) return; const wasActive = isPlayerActive; isPlayerActive = false; isPlayerFullPageVisible = false; isPlayerMinimizedBarVisible = false; if (document.fullscreenElement || document.webkitFullscreenElement) try { if (document.exitFullscreen) await document.exitFullscreen(); else if (document.webkitExitFullscreen) document.webkitExitFullscreen(); } catch (err) { console.warn("Exit fullscreen error on close:", err); } playerContainer.classList.remove('active', 'full-page-active', 'minimized-bar-active', 'html5-fullscreen-active', 'shaka-controls-active'); bodyElement.classList.remove('player-fullpage-active-no-scroll', 'player-minimized-bar-active'); const posterUrl = "https://raw.githubusercontent.com/Flow-Streaming-Co-Ltd/flowplus/refs/heads/host/flow_plus_blackbg.png"; if (shakaPlayer) { try { shakaVideoElement.pause(); shakaVideoElement.src = ''; shakaVideoElement.removeAttribute('src'); shakaVideoElement.load(); shakaVideoElement.poster = posterUrl; if (shakaControlsObserver) shakaControlsObserver.disconnect(); await shakaPlayer.unload(); await shakaPlayer.destroy(); } catch (e) { console.error('Error closing/destroying player:', e); } finally { shakaPlayer = null; } } else { shakaVideoElement.pause(); shakaVideoElement.src = ''; shakaVideoElement.removeAttribute('src'); shakaVideoElement.load(); shakaVideoElement.poster = posterUrl; } playerTitleFullPage.textContent = ''; playerCategoryFullPage.textContent = ''; playerLiveIconFullPage.style.display = 'none'; minimizedBarLogo.src = ''; minimizedBarTitle.textContent = ''; minimizedBarCategory.textContent = ''; suggestedChannelsListFullPage.innerHTML = '<p class="loading-text">Loading suggestions...</p>'; currentPlayingChannelData = null; if (!calledInternally && wasActive) { const currentPath = window.location.pathname.substring(basePath.length); const segments = currentPath.split('/').filter(Boolean); let parentPath = '/home'; if (segments.length > 0) { const routeContext = segments[0]; if ((routeContext === 'home' || routeContext === 'featured') && segments.length > 1) parentPath = '/home'; else if (routeContext === 'live-tv' && segments.length > 1) parentPath = segments.length > 2 ? `/${segments[0]}/${segments[1]}` : `/${segments[0]}`; } const currentRelativePath = currentPath || '/'; const targetRelativePath = parentPath.startsWith('/') ? parentPath : '/' + parentPath; if (currentRelativePath !== targetRelativePath && currentRelativePath + '/' !== targetRelativePath && currentRelativePath !== targetRelativePath + '/') { history.pushState({}, '', basePath + parentPath); handleRouteChange(); } else { handleRouteChange(); } } }
function renderSuggestedChannelsFullPage(currentChannel) { if (!suggestedChannelsListFullPage || typeof streams === 'undefined' || !Array.isArray(streams) || !currentChannel) { if (suggestedChannelsListFullPage) suggestedChannelsListFullPage.innerHTML = '<p class="loading-text">No suggestions available.</p>'; return; } suggestedChannelsListFullPage.innerHTML = ''; let suggestions = streams.filter(stream => stream.category === currentChannel.category && stream.name !== currentChannel.name).slice(0, 8); if (suggestions.length < 4) { const fallbackSuggestions = streams.filter(s => s.name !== currentChannel.name).sort(() => 0.5 - Math.random()).slice(0, 4 - suggestions.length); suggestions.push(...fallbackSuggestions.filter(fs => !suggestions.find(s => s.name === fs.name))); } if (suggestions.length === 0) { suggestedChannelsListFullPage.innerHTML = '<p class="loading-text">No other channels to suggest.</p>'; return; } suggestions.forEach(stream => { const card = createChannelCard(stream, streams.indexOf(stream), 'suggested-channel'); suggestedChannelsListFullPage.appendChild(card); }); }

// --- SEARCH ---
let searchDebounceTimer; const DEBOUNCE_DELAY = 400;
function openSearchModal() { if (!searchModal || !searchInput || !searchResultsModal) return; searchModal.classList.add("active"); searchInput.value = ""; searchResultsModal.innerHTML = ""; searchLoadingIndicator.style.display = 'none'; setTimeout(() => searchInput.focus(), 150); searchModal.addEventListener('keydown', trapFocusInSearch); }
function closeSearchModal() { if (!searchModal) return; searchModal.classList.remove("active"); searchResultsModal.innerHTML = ""; searchModal.removeEventListener('keydown', trapFocusInSearch); }
function trapFocusInSearch(event) { if (event.key === 'Escape') { closeSearchModal(); return; } if (event.key !== 'Tab') return; const focusableElements = Array.from(searchModal.querySelectorAll('input, button, [onclick], .search-result-card')); if (!focusableElements.length) return; const firstElement = focusableElements[0]; const lastElement = focusableElements[focusableElements.length - 1]; if (event.shiftKey) { if (document.activeElement === firstElement) { lastElement.focus(); event.preventDefault(); } } else { if (document.activeElement === lastElement) { firstElement.focus(); event.preventDefault(); } } }
function handleSearchInput() { clearTimeout(searchDebounceTimer); const query = searchInput.value.trim().toLowerCase(); if (!query) { searchResultsModal.innerHTML = ""; searchLoadingIndicator.style.display = 'none'; return; } searchResultsModal.innerHTML = ""; searchLoadingIndicator.style.display = 'block'; searchDebounceTimer = setTimeout(async () => { if (typeof streams === 'undefined' || !Array.isArray(streams)) { console.error("Streams array not defined for search."); searchResultsModal.innerHTML = `<p class="loading-text">Error: Channel data unavailable.</p>`; searchLoadingIndicator.style.display = 'none'; return; } let streamResults = streams.filter(s => s.name && s.name.toLowerCase().includes(query)).map(s => ({ ...s, resultType: "Channel" })).slice(0, 15); searchLoadingIndicator.style.display = 'none'; if (streamResults.length === 0) { searchResultsModal.innerHTML = `<p class="loading-text">No channels found for "${searchInput.value}".</p>`; return; } searchResultsModal.innerHTML = ""; streamResults.forEach(r => { const cardDiv = document.createElement('div'); cardDiv.className = 'search-result-card'; cardDiv.tabIndex = 0; const streamData = streams.find(s => s.name === r.name && s.logo === r.logo); if (streamData) { cardDiv.onclick = () => { navigateToPlayChannel(streamData, 'search-result'); closeSearchModal(); }; cardDiv.onkeydown = (e) => { if (e.key === 'Enter') cardDiv.onclick(); }; } cardDiv.innerHTML = `<img src="${r.logo || ''}" alt="${r.name}"/><div class="search-result-info"><div class="search-result-title">${r.name}</div><div class="search-result-type">${r.resultType}</div></div>`; searchResultsModal.appendChild(cardDiv); }); }, DEBOUNCE_DELAY); }

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    if (typeof shaka !== 'undefined') { shaka.polyfill.installAll(); if (!shaka.Player.isBrowserSupported()) console.warn('Browser not supported by Shaka Player.'); } else console.error("Shaka Player library not found!");
    initializeTheme();
    if (sessionStorage.redirect) { const intendedPath = sessionStorage.redirect; delete sessionStorage.redirect; if (window.location.pathname !== intendedPath) history.replaceState(null, '', intendedPath); }

    if (logoLink) logoLink.onclick = (e) => { e.preventDefault(); updateUrlAndTitle('/home', 'Home | flow+', { page: 'homeSection' }); handleRouteChange(); return false; };
    if(mobileSearchBtn) mobileSearchBtn.onclick = openSearchModal;
    if(desktopSearchBtn) desktopSearchBtn.onclick = openSearchModal;
    if(searchInput) searchInput.oninput = handleSearchInput;
    if(searchModalCloseBtn) searchModalCloseBtn.onclick = closeSearchModal;

    desktopNavItems.forEach(item => { if (item) item.onclick = function() { switchTabAndUrl(this.dataset.targetPage); }; });

    if (playerMinimizeBtn) playerMinimizeBtn.onclick = minimizeToBarPlayer;
    if (playerMinimizedBar) playerMinimizedBar.onclick = (event) => {
        if (event.target !== minimizedBarCloseBtn && !minimizedBarCloseBtn.contains(event.target)) {
            expandFromBarPlayer();
        }
    };
    if (minimizedBarCloseBtn) minimizedBarCloseBtn.onclick = (event) => closePlayerCompletely(event);

    document.addEventListener('fullscreenchange', () => { const isHTML5Fs = !!document.fullscreenElement; playerContainer.classList.toggle('html5-fullscreen-active', isHTML5Fs); if (isHTML5Fs) syncShakaHTML5FullscreenOverlay(); else playerContainer.classList.remove('shaka-controls-active'); });
    document.addEventListener('webkitfullscreenchange', () => { const isHTML5Fs = !!document.webkitFullscreenElement; playerContainer.classList.toggle('html5-fullscreen-active', isHTML5Fs); if (isHTML5Fs) syncShakaHTML5FullscreenOverlay(); else playerContainer.classList.remove('shaka-controls-active'); });

    if (typeof streams !== 'undefined' && Array.isArray(streams)) {
        initializeFeatures();
        renderTopChannels();
    } else {
        console.error("`streams` is not defined or not an array. Content will not be loaded. Make sure streams.js is present and correct.");
        if(homeHeroContent) homeHeroContent.innerHTML = '<p class="loading-text" style="color:red;">Error: Stream data missing.</p>';
        if(topChannelsRow) topChannelsRow.innerHTML = '<p class="loading-text" style="color:red;">Error: Stream data missing.</p>';
        if(categoryPillsContainer) categoryPillsContainer.innerHTML = '<p class="loading-text" style="color:red;">Error: Stream data missing.</p>';
        if(categoryGroups) categoryGroups.innerHTML = '<p class="loading-text" style="color:red;">Error: Stream data missing.</p>';
    }

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('scroll', updateTopbarAndHeroVisibility);
    handleRouteChange();

    window.switchTabAndUrl = switchTabAndUrl; window.goToSlide = goToSlide; window.closeSearchModal = closeSearchModal;
    window.expandPlayer = expandFromBarPlayer; window.minimizePlayer = minimizeToBarPlayer; window.closePlayerCompletely = closePlayerCompletely;

    bodyElement.classList.toggle('desktop-view', window.innerWidth >= 1024);
    window.addEventListener('resize', () => { bodyElement.classList.toggle('desktop-view', window.innerWidth >= 1024); });

    console.log("Flow+ Initialized. Version 3.0");
});
