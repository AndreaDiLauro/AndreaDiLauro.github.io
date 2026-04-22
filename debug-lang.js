// Debug script to test language functionality
console.log('=== LANGUAGE DEBUG SCRIPT ===');

// Check if translations are loaded
console.log('1. Translations object exists:', typeof window.translations !== 'undefined');
if (window.translations) {
    console.log('   - Italian keys:', Object.keys(window.translations.it || {}).length);
    console.log('   - English keys:', Object.keys(window.translations.en || {}).length);
} else {
    console.error('   - Translations object not found!');
}

// Check for translatable elements
const translatableElements = document.querySelectorAll('[data-translate]');
console.log('2. Translatable elements found:', translatableElements.length);

// Check language buttons
const langButtons = document.querySelectorAll('.lang-btn');
console.log('3. Language buttons found:', langButtons.length);

// Test translation function
function testTranslation(lang) {
    console.log(`\n--- Testing ${lang.toUpperCase()} translation ---`);
    
    if (!window.translations || !window.translations[lang]) {
        console.error(`No translations found for ${lang}`);
        return;
    }
    
    let translated = 0;
    let failed = 0;
    
    translatableElements.forEach(element => {
        const key = element.dataset.translate;
        if (window.translations[lang][key]) {
            console.log(`✓ ${key}: "${window.translations[lang][key]}"`);
            translated++;
        } else {
            console.error(`✗ Missing key: ${key}`);
            failed++;
        }
    });
    
    console.log(`Translation summary: ${translated} success, ${failed} failed`);
}

// Run tests
if (window.translations) {
    testTranslation('it');
    testTranslation('en');
} else {
    console.error('Cannot run tests - translations not loaded');
}

console.log('\n=== DEBUG COMPLETE ===');
