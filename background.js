chrome.runtime.onInstalled.addListener(function() {
    
  //set color
  chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log("The color is green.");
    });


    //show icon
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'webshare.me'},
          })
          ],
              actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
      });

  });