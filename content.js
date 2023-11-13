chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "applyStyles") {
      const styles = request.styles;
      document.body.style.backgroundColor = styles.backgroundColor;
      document.body.style.fontFamily = styles.fontFamily;
    }
  });
  