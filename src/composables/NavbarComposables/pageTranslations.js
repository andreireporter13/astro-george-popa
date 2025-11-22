import { navItemsRO, navItemsEN } from './navItems.js';

// Recursive function to map all hrefs including nested items
function mapNavItems(roItems, enItems, roToEn = {}, enToRo = {}) {
  Object.keys(roItems).forEach(key => {
    const roItem = roItems[key];
    const enItem = enItems[key];

    if (!roItem || !enItem) return;

    // Map main item
    roToEn[roItem.href] = enItem.href;
    enToRo[enItem.href] = roItem.href;

    // If nested items exist, map them too
    if (roItem.items && enItem.items) {
      roItem.items.forEach((roSubItem, idx) => {
        const enSubItem = enItem.items[idx];
        roToEn[roSubItem.href] = enSubItem.href;
        enToRo[enSubItem.href] = roSubItem.href;
      });
    }
  });

  return { ro: roToEn, en: enToRo };
}

// Generate mapping
export const pageTranslations = mapNavItems(navItemsRO, navItemsEN);

// Helper to get translated URL
export function getTranslatedUrl(currentPath, targetLang) {
  const currentLang = currentPath.startsWith('/en') ? 'en' : 'ro';
  
  if (currentLang === targetLang) return currentPath;

  return pageTranslations[currentLang][currentPath] || `/${targetLang}`;
}
