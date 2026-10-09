/* Medición con consentimiento (Google Analytics 4, G-T9FFMQTWNX).
   Modo básico: no se carga nada de Google ni se escribe ninguna cookie
   hasta que la persona pulsa «Aceptar». La elección se guarda en localStorage. */
(() => {
  const ID = 'G-T9FFMQTWNX';
  const KEY = 'cg-consent';          // 'si' | 'no'
  const VERSION = '1';

  const leer = () => { try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch { return null; } };
  const guardar = v => { try { localStorage.setItem(KEY, JSON.stringify({ v, ver: VERSION, t: Date.now() })); } catch {} };

  let cargado = false;
  function cargarGA() {
    if (cargado) return; cargado = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', ID, { anonymize_ip: true });
    const s = document.createElement('script');
    s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
    document.head.appendChild(s);
  }

  /* Clics en botones: cada enlace con data-ev="nombre" manda un evento «clic_boton». */
  document.addEventListener('click', e => {
    const a = e.target.closest('a[data-ev]');
    if (!a || !cargado || typeof gtag !== 'function') return;
    gtag('event', 'clic_boton', { boton: a.dataset.ev, destino: a.href, transport_type: 'beacon' });
  });

  function aviso() {
    const d = document.createElement('div');
    d.className = 'cookies'; d.setAttribute('role', 'dialog'); d.setAttribute('aria-label', 'Aviso de cookies');
    d.innerHTML =
      '<p>Uso cookies de Google Analytics para saber qué contenido sirve. Solo si aceptas. ' +
      '<a href="https://cristianguidolin.com/privacidad">Más info</a></p>' +
      '<div class="cookies-b"><button type="button" data-c="no">Rechazar</button>' +
      '<button type="button" data-c="si" class="si">Aceptar</button></div>';
    d.addEventListener('click', e => {
      const b = e.target.closest('button[data-c]'); if (!b) return;
      guardar(b.dataset.c); if (b.dataset.c === 'si') cargarGA();
      d.classList.add('fuera'); setTimeout(() => d.remove(), 300);
    });
    document.body.appendChild(d);
    requestAnimationFrame(() => d.classList.add('dentro'));
  }

  /* Enlace «Cookies» del pie: vuelve a mostrar el aviso. */
  window.cgCookies = () => { try { localStorage.removeItem(KEY); } catch {} if (!document.querySelector('.cookies')) aviso(); };

  const c = leer();
  const iniciar = () => { if (c && c.ver === VERSION) { if (c.v === 'si') cargarGA(); } else aviso(); };
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', iniciar) : iniciar();
})();
