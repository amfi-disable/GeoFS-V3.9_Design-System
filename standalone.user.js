// ==UserScript==
// @name         GeoFS Design System
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  The core glassmorphic design system and UI tokens for GeoFS addons.
// @author       AwesomeOddEven-NightKeys-LunarBlink
// @match        https://www.geo-fs.com/geofs.php*
// @match        https://*.geo-fs.com/geofs.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const cssUrl = 'https://raw.githack.com/AwesomeOddEven-NightKeys-LunarBlink/GeoFS-Design-System/main/src/design.css';

    function injectCSS() {
        if (document.getElementById('geofs-addon-design-system')) return;
        const link = document.createElement('link');
        link.id = 'geofs-addon-design-system';
        link.rel = 'stylesheet';
        link.href = cssUrl;
        document.head.appendChild(link);
        console.log('GeoFS [Addon-Pack]: [Design System] Styled by AwesomeOddEven.');
    }

    injectCSS();
})();
