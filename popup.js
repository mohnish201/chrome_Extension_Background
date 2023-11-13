document.addEventListener("DOMContentLoaded", function() {
    const applyStylesButton = document.getElementById("applyStyles");
  
    applyStylesButton.addEventListener("click", function() {
      const backgroundColor = document.getElementById("backgroundColor").value;
      const fontFamily = document.getElementById("fontFamily").value;
  
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {
          action: "applyStyles",
          styles: {
            backgroundColor,
            fontFamily
          }
        });
      });
    });
  });
  