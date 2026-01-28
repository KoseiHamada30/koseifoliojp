// Internationalization (i18n) for Portfolio
const translations = {
    ja: {
        // Navigation
        'contact': '連絡する',
        
        // Index page
        'intro-text': 'は、デザインを通じてユーザー中心の体験を創造し、日常の<b>「めんどくさい」</b>の解消を目指してる。',
        'reverie-subtitle': '睡眠はたった30分で変えられる',
        'reverie-category': '(UXハッカソンプロジェクト)',
        'nextscore-subtitle': '予想はもっと、ワクワクできる',
        'nextscore-category': '(株式会社なんでもドラフト)',
        'resume': 'レジュメを見る',
        
        // Info page
        'info-hero': 'こんにちは, <b>濵田紘誠</b>です。 <br>ユーザーが抱える悩みをどのように解決していくかを考えるUX分野に魅力を感じ、より多くの人を笑顔にできるよう日々勉強しています！',
        
        // Project pages - common
        'challenge': '課題',
        'discovery': '課題発見',
        'research': 'ユーザーリサーチと分析',
        'what-is-app': 'What is this app?',
        'visual-design': 'ビジュアルデザイン',
        'ux-experience': 'UX体験',
        'future': '今後の展望',
        'review': 'レビュー',
    },
    en: {
        // Navigation
        'contact': 'Contact',
        
        // Index page
        'intro-text': 'creates user-centered experiences through design, aiming to eliminate daily <b>"hassles"</b>.',
        'reverie-subtitle': 'Sleep can be changed in just 30 minutes',
        'reverie-category': '(UX Hackathon Project)',
        'nextscore-subtitle': 'Predictions can be more exciting',
        'nextscore-category': '(Nandemo Draft Inc.)',
        'resume': 'View Resume',
        
        // Info page
        'info-hero': 'Hello, I\'m <b>Kosei Hamada</b>. <br>I\'m fascinated by the UX field, which considers how to solve users\' problems, and I study daily to bring smiles to more people!',
        
        // Project pages - common
        'challenge': 'Challenge',
        'discovery': 'Problem Discovery',
        'research': 'User Research & Analysis',
        'what-is-app': 'What is this app?',
        'visual-design': 'Visual Design',
        'ux-experience': 'UX Experience',
        'future': 'Future Outlook',
        'review': 'Review',
    }
};

// Get current language from localStorage or default to Japanese
let currentLang = localStorage.getItem('portfolio-lang') || 'ja';

// Function to set language
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    updatePageContent();
    updateLangToggle();
}

// Function to update page content
function updatePageContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            if (element.tagName === 'A' || element.tagName === 'BUTTON') {
                element.textContent = translations[currentLang][key];
            } else {
                element.innerHTML = translations[currentLang][key];
            }
        }
    });
}

// Function to update language toggle button
function updateLangToggle() {
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        const langText = langToggle.querySelector('.lang-text');
        if (langText) {
            // Show current language: "日本語" when Japanese, "EN" when English
            langText.textContent = currentLang === 'ja' ? '日本語' : 'EN';
        }
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    updatePageContent();
    updateLangToggle();
    
    // Add click event to language toggle button
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'ja' ? 'en' : 'ja';
            setLanguage(newLang);
        });
    }
});
