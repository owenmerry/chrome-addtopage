let changeColor01 = document.getElementById('changeColor01');
let changeColor02 = document.getElementById('changeColor02');
let changeColor03 = document.getElementById('changeColor03');
let changeColor04 = document.getElementById('changeColor04');

  chrome.storage.sync.get('color', function(data) {

    changeColor01.style.backgroundColor = data.color;
    changeColor01.setAttribute('value', data.color);

    changeColor02.style.backgroundColor = data.color;
    changeColor02.setAttribute('value', data.color);

    changeColor03.style.backgroundColor = data.color;
    changeColor03.setAttribute('value', data.color);

    changeColor04.style.backgroundColor = data.color;
    changeColor04.setAttribute('value', data.color);

  });


  changeColor01.onclick = function(element) {
    let color = 'red';
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };


  changeColor02.onclick = function(element) {
    let color = 'green';
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };


  changeColor03.onclick = function(element) {
    let color = 'blue';
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };


  changeColor04.onclick = function(element) {
    let color = 'yellow';
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };



  changeColor04.onclick = function(element) {

        
        
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.executeScript(
              tabs[0].id,
              {code: 'document.body.style.backgroundColor = "purple";alert("changed");'});
        });


  };

  $(function() {
    $('#getbookmarks').click(function() {
      

      //get tree view
      var getbookmarks = chrome.bookmarks.getTree(
        function(getbookmarks){
         // console.log(getbookmarks);
        }
      );


      function onFulfilled(bookmarks) {
        for (bookmark of bookmarks) {
          console.log(bookmark.url);
        }
      }
      
      function onRejected(error) {
        console.log(`An error: ${error}`);
      }
      
      var gettingRecent = chrome.bookmarks.getRecent(99999999,
        function(gettingRecent){
           console.log(gettingRecent);
         }
      );
      //gettingRecent.then(onFulfilled, onRejected);
      


    });
  });





