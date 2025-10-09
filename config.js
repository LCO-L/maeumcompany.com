// MAEUM Website Configuration
// .env 파일의 값들을 여기에 직접 입력하세요 (브라우저에서는 .env 파일을 직접 읽을 수 없음)

const CONFIG = {
    // Formspree Configuration
    FORMSPREE_FORM_ID: 'xblzaeyn',
    FORMSPREE_URL: 'https://formspree.io/f/xblzaeyn',

    // Discord Configuration
    DISCORD_INVITE_CODE: 'YOUR_INVITE_CODE', // 실제 Discord 초대 코드로 변경하세요
    DISCORD_INVITE_URL: 'https://discord.gg/YOUR_INVITE_CODE', // 실제 링크로 변경하세요

    // Email Configuration
    CONTACT_EMAIL: 'hello@maeum.io',
    PRESS_EMAIL: 'press@maeum.io',
    INVESTOR_EMAIL: 'invest@maeum.io',

    // Social Media Links
    LINKEDIN_URL: 'https://linkedin.com/company/maeum',
    TWITTER_URL: 'https://twitter.com/maeum_ai',
    GITHUB_URL: 'https://github.com/maeum-ai',

    // Website Settings
    SITE_URL: 'https://maeum.io',
    SITE_NAME: 'MAEUM',
    TAGLINE_EN: 'AI for Everyone',
    TAGLINE_KR: '모두를 위한 AI',

    // Business Registration (Korean)
    BUSINESS_NAME_KR: '마음모아',

    // Feature Flags
    ENABLE_NEWSLETTER: true,
    ENABLE_DISCORD: true,
    ENABLE_DEMO_REQUEST: true,

    // Analytics (Optional)
    GOOGLE_ANALYTICS_ID: '', // GA 추적 ID 입력 (예: G-XXXXXXXXXX)
    MIXPANEL_TOKEN: ''
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}