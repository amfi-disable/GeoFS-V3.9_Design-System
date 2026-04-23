# 🎨 GeoFS-V3.9_Design-System

**GeoFS-V3.9_Design-System** is the architectural backbone for all UI components within the AwesomeOddEven ecosystem. It provides the standardized buttons, menus, and notification systems used to ensure all extensions feel like native features of the GeoFS flight simulator.

---

## 🚀 Purpose
This system is engineered to solve three core problems:
* **Visual Consistency:** Every menu, slider, and alert follows the same design language, matching the GeoFS cockpit aesthetic.
* **Development Velocity:** Developers can hook into pre-built UI classes instead of writing custom CSS for every individual script.
* **V3.9 Optimization:** Built specifically for the GeoFS v3.9 DOM structure to ensure zero performance lag during flight.

---

## 🛠 Integration

This system is intended to be loaded as a `@require` dependency in Tampermonkey.

### For Developers
Add the following to your userscript header to tap into the design system:

```javascript
// @require https://raw.githack.com/AwesomeOddEven-NightKeys-LunarBlink/GeoFS-V3.9_Design-System/main/standalone.user.js
