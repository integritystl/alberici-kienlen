export const sessionStorageKeys = {
  cards_search: 'CardSearch',
  cards_category: 'CardCategory',
  cards_market: 'CardMarket',
  cards_location: 'CardLocation',
  cards_service: 'CardService',
  cards_page: 'CardsPage',
};

export function deleteSessionStorage() {
  Object.keys(sessionStorageKeys).forEach((key, index) => {
    const pageKey = generatePageKey(sessionStorageKeys[key]);
    if (sessionStorage.getItem(pageKey)) {
      sessionStorage.removeItem(pageKey);
    }
  });
}

export function setSessionStorageItem(key, value) {
  // allow for multiple pages with local storage entries
  const pageKey = generatePageKey(key);
  sessionStorage.setItem(pageKey, value);
}

export function getSessionStorageItem(key) {
  const pageKey = generatePageKey(key);
  return sessionStorage.getItem(pageKey);
}

function generatePageKey(key) {
  return `${key}_${wpObj.post_id}`;
}
