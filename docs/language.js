// Unified Language System for MAEUM
// Supports multiple languages and persists across pages

const MAEUM_LANG = {
    // Available languages - Full support for global reach
    languages: [
        // Currently Active
        { code: 'en', label: 'EN', name: 'English', active: true, flag: '🌎' },
        { code: 'kr', label: 'KR', name: '한국어', active: true, flag: '🇰🇷' },

        // Asia-Pacific (Ready for deployment)
        { code: 'jp', label: 'JP', name: '日本語', active: false, flag: '🇯🇵' },
        { code: 'cn', label: 'CN', name: '中文(简体)', active: false, flag: '🇨🇳' },
        { code: 'tw', label: 'TW', name: '中文(繁體)', active: false, flag: '🇹🇼' },
        { code: 'vn', label: 'VN', name: 'Tiếng Việt', active: false, flag: '🇻🇳' },
        { code: 'th', label: 'TH', name: 'ไทย', active: false, flag: '🇹🇭' },
        { code: 'id', label: 'ID', name: 'Bahasa Indonesia', active: false, flag: '🇮🇩' },
        { code: 'my', label: 'MY', name: 'Bahasa Melayu', active: false, flag: '🇲🇾' },
        { code: 'ph', label: 'PH', name: 'Filipino', active: false, flag: '🇵🇭' },
        { code: 'in', label: 'IN', name: 'हिन्दी', active: false, flag: '🇮🇳' },

        // Europe
        { code: 'es', label: 'ES', name: 'Español', active: false, flag: '🇪🇸' },
        { code: 'fr', label: 'FR', name: 'Français', active: false, flag: '🇫🇷' },
        { code: 'de', label: 'DE', name: 'Deutsch', active: false, flag: '🇩🇪' },
        { code: 'it', label: 'IT', name: 'Italiano', active: false, flag: '🇮🇹' },
        { code: 'pt', label: 'PT', name: 'Português', active: false, flag: '🇵🇹' },
        { code: 'ru', label: 'RU', name: 'Русский', active: false, flag: '🇷🇺' },
        { code: 'nl', label: 'NL', name: 'Nederlands', active: false, flag: '🇳🇱' },
        { code: 'pl', label: 'PL', name: 'Polski', active: false, flag: '🇵🇱' },

        // Middle East & Africa
        { code: 'ar', label: 'AR', name: 'العربية', active: false, flag: '🇸🇦', rtl: true },
        { code: 'he', label: 'HE', name: 'עברית', active: false, flag: '🇮🇱', rtl: true },
        { code: 'tr', label: 'TR', name: 'Türkçe', active: false, flag: '🇹🇷' },

        // Americas
        { code: 'mx', label: 'MX', name: 'Español (México)', active: false, flag: '🇲🇽' },
        { code: 'br', label: 'BR', name: 'Português (Brasil)', active: false, flag: '🇧🇷' },
    ],

    // Unified paths - same URL for all languages (language switching handled via data attributes)
    paths: {
        studioroom: 'studioroom/',
        government: 'government/',
        enterprise: 'enterprise/',
        about: 'about/',
        press: 'press/',
        investors: 'investors/',
        contact: 'contact/'
    },

    // Get path prefix based on current location
    getPathPrefix() {
        const path = window.location.pathname;
        const depth = (path.match(/\//g) || []).length - 1;

        if (depth === 0 || path === '/' || path === '/index.html') {
            return '';
        } else if (depth === 1) {
            return '../';
        } else {
            return '../'.repeat(depth);
        }
    },

    // Get current language from localStorage or browser
    getCurrentLanguage() {
        // Check localStorage first
        const savedLang = localStorage.getItem('maeum-language');
        if (savedLang && this.languages.find(l => l.code === savedLang)) {
            return savedLang;
        }

        // Check browser language
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('ko')) {
            return 'kr';
        }

        // Default to English
        return 'en';
    },

    // Set language and save to localStorage
    setLanguage(lang) {
        localStorage.setItem('maeum-language', lang);
        this.applyLanguage(lang);
    },

    // Apply language to current page
    applyLanguage(lang) {
        const prefix = this.getPathPrefix();

        // Update HTML lang attribute
        document.documentElement.lang = lang === 'kr' ? 'ko' : 'en';

        // Update body class for font changes
        document.body.classList.remove('en', 'kr', 'jp', 'cn');
        document.body.classList.add(lang);

        // Update all elements with data attributes
        document.querySelectorAll(`[data-${lang}]`).forEach(elem => {
            const text = elem.getAttribute(`data-${lang}`);
            if (text) {
                if (elem.tagName === 'INPUT' || elem.tagName === 'BUTTON') {
                    elem.value = text;
                    if (elem.tagName === 'BUTTON') {
                        elem.textContent = text;
                    }
                } else {
                    // Always use innerHTML to support HTML tags like <br>
                    elem.innerHTML = text;
                }
            }
        });

        // Update navigation links with proper prefix (unified paths for all languages)
        const navLinks = {
            '.nav-studioroom': this.paths.studioroom,
            '.nav-government': this.paths.government,
            '.nav-enterprise': this.paths.enterprise,
            '.nav-about': this.paths.about,
            '.nav-press': this.paths.press,
            '.nav-investors': this.paths.investors,
            '.nav-contact': this.paths.contact
        };

        Object.entries(navLinks).forEach(([selector, path]) => {
            document.querySelectorAll(selector).forEach(link => {
                if (link.tagName === 'A') {
                    link.href = prefix + path;
                }
            });
        });

        // Update language toggle buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            const btnLang = btn.getAttribute('data-lang');
            btn.classList.toggle('active', btnLang === lang);
        });

        // Update page title if data attributes exist
        const titleElement = document.querySelector('title[data-' + lang + ']');
        if (titleElement) {
            document.title = titleElement.getAttribute(`data-${lang}`);
        }
    },

    // Initialize language system
    init() {
        // Create language toggle if it doesn't exist
        if (!document.querySelector('.lang-toggle')) {
            this.createLanguageToggle();
        }

        // Apply current language
        const currentLang = this.getCurrentLanguage();
        this.applyLanguage(currentLang);

        // Add event listeners to language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.getAttribute('data-lang');
                this.setLanguage(lang);
            });
        });
    },

    // Create language dropdown UI (always use dropdown for consistency)
    createLanguageToggle() {
        // Check if toggle already exists
        if (document.querySelector('.lang-toggle')) return;

        const toggle = document.createElement('div');
        toggle.className = 'lang-toggle';

        // Always use dropdown for clean, consistent UI
        const activeLanguages = this.languages.filter(lang => lang.active);
        const currentLang = this.getCurrentLanguage();
        const currentLangObj = this.languages.find(l => l.code === currentLang) || this.languages[0];

        const dropdownBtn = document.createElement('button');
        dropdownBtn.className = 'lang-dropdown-btn';
        dropdownBtn.innerHTML = `
            <span class="lang-flag">${currentLangObj.flag}</span>
            <span class="lang-label">${currentLangObj.label}</span>
            <span class="dropdown-arrow">▼</span>
        `;

        const dropdown = document.createElement('div');
        dropdown.className = 'lang-dropdown-menu';
        dropdown.style.display = 'none';

        activeLanguages.forEach(lang => {
            const option = document.createElement('div');
            option.className = `lang-option ${lang.code === currentLang ? 'active' : ''}`;
            option.setAttribute('data-lang', lang.code);
            option.innerHTML = `
                <span class="lang-flag">${lang.flag}</span>
                <span class="lang-name">${lang.name}</span>
            `;
            dropdown.appendChild(option);
        });

        // Toggle dropdown
        dropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = dropdown.style.display === 'block';
            dropdown.style.display = isOpen ? 'none' : 'block';
            dropdownBtn.classList.toggle('open', !isOpen);
        });

        // Select language
        dropdown.addEventListener('click', (e) => {
            e.stopPropagation();
            const option = e.target.closest('.lang-option');
            if (option) {
                const lang = option.getAttribute('data-lang');
                this.setLanguage(lang);

                // Update button display
                const selectedLangObj = this.languages.find(l => l.code === lang);
                if (selectedLangObj) {
                    dropdownBtn.innerHTML = `
                        <span class="lang-flag">${selectedLangObj.flag}</span>
                        <span class="lang-label">${selectedLangObj.label}</span>
                        <span class="dropdown-arrow">▼</span>
                    `;
                }

                // Update active state
                document.querySelectorAll('.lang-option').forEach(opt => {
                    opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
                });

                dropdown.style.display = 'none';
                dropdownBtn.classList.remove('open');
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            dropdown.style.display = 'none';
            dropdownBtn.classList.remove('open');
        });

        toggle.appendChild(dropdownBtn);
        toggle.appendChild(dropdown);

        document.body.appendChild(toggle);

        // Add CSS for dropdown if needed
        this.addDropdownStyles();
    },

    // Add CSS styles for language dropdown
    addDropdownStyles() {
        if (document.getElementById('maeum-lang-styles')) return;

        const style = document.createElement('style');
        style.id = 'maeum-lang-styles';
        style.textContent = `
            .lang-dropdown-btn {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 8px 16px;
                background: white;
                border: 2px solid #e5e5e5;
                border-radius: 8px;
                cursor: pointer;
                font-size: 14px;
                transition: all 0.3s;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            }

            .lang-dropdown-btn:hover {
                background: #f5f5f5;
                border-color: #0066FF;
                box-shadow: 0 4px 12px rgba(0,102,255,0.2);
            }

            .lang-dropdown-menu {
                position: absolute;
                top: calc(100% + 8px);
                right: 0;
                background: white;
                border: 2px solid #e5e5e5;
                border-radius: 8px;
                box-shadow: 0 8px 30px rgba(0,0,0,0.15);
                max-height: 400px;
                overflow-y: auto;
                z-index: 999999;
                min-width: 200px;
            }

            .lang-option {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 12px 16px;
                cursor: pointer;
                transition: all 0.2s;
            }

            .lang-option:hover {
                background: #f5f5f5;
            }

            .lang-option.active {
                background: #E3F2FF;
                color: #0066FF;
            }

            .lang-flag {
                font-size: 18px;
            }

            .dropdown-arrow {
                font-size: 10px;
                transition: transform 0.3s;
            }

            .lang-dropdown-btn.open .dropdown-arrow {
                transform: rotate(180deg);
            }
        `;
        document.head.appendChild(style);
    }
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => MAEUM_LANG.init());
} else {
    MAEUM_LANG.init();
}
