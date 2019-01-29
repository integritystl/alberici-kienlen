export const localStorageKeys = {
  cards_search: 'CardSearch',
  cards_category: 'CardCategory',
  cards_market: 'CardMarket',
  cards_location: 'CardLocation',
  cards_service: 'CardService',
  cards_page: 'CardsPage',
};

export function deleteLocalStorage() {
  Object.keys(localStorageKeys).forEach((key, index) => {
    const pageKey = generatePageKey(localStorageKeys[key]);
    if (localStorage.getItem(pageKey)) {
      localStorage.removeItem(pageKey);
    }
  });
}

export function setLocalStorageItem(key, value) {
  // allow for multiple pages with local storage entries
  const pageKey = generatePageKey(key);
  localStorage.setItem(pageKey, value);
}

export function getLocalStorageItem(key) {
  const pageKey = generatePageKey(key);
  return localStorage.getItem(pageKey);
}

function generatePageKey(key) {
  return `${key}_${wpObj.post_id}`;
}
