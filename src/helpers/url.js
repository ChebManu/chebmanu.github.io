/**
 * Opens a new tab with the given url
 * @param {string} url
 */
export function openTab(url) {
  const win = window.open(url, '_blank');
  win.focus();
}