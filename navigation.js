(function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var navigation = document.getElementById('primary-navigation');

  if (!header || !toggle || !navigation) return;

  var isItalian = document.documentElement.lang === 'it';
  var openLabel = isItalian ? 'Apri menu di navigazione' : 'Open navigation menu';
  var closeLabel = isItalian ? 'Chiudi menu di navigazione' : 'Close navigation menu';

  function setMenuState(isOpen) {
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? closeLabel : openLabel);
    navigation.classList.toggle('is-open', isOpen);
  }

  header.classList.add('nav-enabled');
  setMenuState(false);

  toggle.addEventListener('click', function () {
    setMenuState(toggle.getAttribute('aria-expanded') !== 'true');
  });

  navigation.addEventListener('click', function (event) {
    if (event.target.closest('a')) setMenuState(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenuState(false);
      toggle.focus();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 640) setMenuState(false);
  });
})();
