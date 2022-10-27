/* 
  USE THIS TO SETUP CUSTUM SHURTCUT
  chrome://extensions/shortcuts
*/

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

const getCurrentUrl = async () => {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
};
chrome.commands.onCommand.addListener((command) => {
  getCurrentTab().then((currentTab) => {
    const tabId = currentTab.id;

    if (command === 'Copy_selected_text_to_ES') {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['./script/getEsText.js'],
      });
    }
    if (command === 'Copy_selected_text_to_IT') {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['./script/getItText.js'],
      });
    }
    if (command === 'Copy_selected_text_to_JP') {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['./script/getJpText.js'],
      });
    }

    if (command === 'inject_text') {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['./script/injectText.js'],
      });
    }
  });
});
