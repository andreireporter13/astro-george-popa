import { navItemsRO, navItemsEN } from './navItems.js';

// Automatically generate mapping from navItems
function generatePageTranslations() {
  const roToEn = {};
  const enToRo = {};

  // Map home pages
  roToEn[navItemsRO.home.href] = navItemsEN.home.href;
  enToRo[navItemsEN.home.href] = navItemsRO.home.href;

  // Map all nav items
  navItemsRO.items.forEach((roItem, index) => {
    const enItem = navItemsEN.items[index];
    roToEn[roItem.href] = enItem.href;
    enToRo[enItem.href] = roItem.href;
  });

  return { ro: roToEn, en: enToRo };
}

export const pageTranslations = generatePageTranslations();

// Helper function to get translated URL
export function getTranslatedUrl(currentPath, targetLang) {
  const currentLang = currentPath.startsWith('/en') ? 'en' : 'ro';
  
  if (currentLang === targetLang) {
    return currentPath;
  }
  
  // Return translated URL or fallback to homepage
  return pageTranslations[currentLang][currentPath] || `/${targetLang}`;
}