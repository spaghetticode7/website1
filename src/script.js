const languageButton = document.querySelector('.language-button');
const translatableElements = document.querySelectorAll('[data-en][data-de]');
const languageSpans = document.querySelectorAll('.lang-en, .lang-de');

function setLanguage(language) {
    const isGerman = language === 'de';

    translatableElements.forEach((element) => {
        element.textContent = element.dataset[isGerman ? 'de' : 'en'];
    });

    languageSpans.forEach((element) => {
        element.hidden = isGerman ? !element.classList.contains('lang-de') : !element.classList.contains('lang-en');
    });

    document.documentElement.lang = language;
    document.title = isGerman ? 'Maria Livadina | Opernsängerin' : 'Maria Livadina | Opera Singer';
    languageButton.textContent = isGerman ? 'DE' : 'E';
    languageButton.setAttribute('aria-label', isGerman ? 'Switch to English' : 'Switch to German');
    languageButton.dataset.language = isGerman ? 'en' : 'de';
}

languageButton.addEventListener('click', () => {
    setLanguage(languageButton.dataset.language || 'de');
});

setLanguage('en');