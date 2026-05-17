/* lang.js — bilingual EN / AR switcher
   =======================================
   Uses data-en and data-ar attributes on elements.
   Stores preference in localStorage.
   Flips html[dir] for full RTL layout support.
*/

(function () {
  const STORAGE_KEY = 'uae-bank-lang';

  function setLang(lang) {
    const isAr = lang === 'ar';
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr');

    // Update all translatable elements
    document.querySelectorAll('[data-en][data-ar]').forEach(function (el) {
      const text = isAr ? el.getAttribute('data-ar') : el.getAttribute('data-en');
      if (text !== null) el.innerHTML = text;
    });

    // Update toggle button states
    const btnEn = document.getElementById('btn-en');
    const btnAr = document.getElementById('btn-ar');
    if (btnEn && btnAr) {
      btnEn.classList.toggle('active', !isAr);
      btnAr.classList.toggle('active', isAr);
      btnEn.setAttribute('aria-pressed', String(!isAr));
      btnAr.setAttribute('aria-pressed', String(isAr));
    }

    // Persist
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  // Expose globally for onclick handlers
  window.setLang = setLang;

  // On load: restore saved preference, default to 'en'
  var saved;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  setLang(saved === 'ar' ? 'ar' : 'en');
})();
