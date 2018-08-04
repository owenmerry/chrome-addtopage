



  $(function() {




    $('#getbookmarks').click(function() {
      

      //get tree view
      var getbookmarks = chrome.bookmarks.getTree(
        function(getbookmarks){
         // console.log(getbookmarks);
        }
      );
      
      var gettingRecent = chrome.bookmarks.getRecent(99999999,
        function onFulfilled(bookmarks) {
          $('.showbookmarks').html("");
          for (bookmark of bookmarks) {
            //console.log(bookmark.url);
            $('.showbookmarks').append("<div>"+ bookmark.url +"</div>");
          }
        }
      );


    });




 




      $('.getwebshare').click(function() {

        $.ajax({
          url: "http://local.webshare.me/api/link/all",
          type: 'GET',
          success: function (bookmarks) {
            $('.showbookmarks').html("");
            for (bookmark of bookmarks.links) {
              //console.log(bookmark.url);
              $('.showbookmarks').append("<div>"+ bookmark.url +"</div>");
            }
          }
      });
  
      });







      $('.loginwebshare').click(function() {

        $.ajax({
          url: "http://local.webshare.me/api/user/loggedin",
          type: 'GET',
          success: function (user) {
            alert('loggedin:'+ user.loggedin);
          }
      });
  
      });






//-------------------- webshare functions ----------------------


$('.addwebshare').click(function() {


  $('.addwebshare').html('Adding...');

  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;

  $.ajax({
    url: "http://local.webshare.me/api/link/addmany",
    type: 'POST',
    data: { website: url },
    success: function(res) {
      $('.addwebshare').html('Page Added');
    },
    error: function(){
      $('.importwebshare').html('Page Adding Failed');
    }
    });
  });

});




$('.importwebshare').click(function() {


  //get bookmarks
  var bookmarksData = "";
  var seperator ="";

  $('.showbookmarks').html("");
  $('.importwebshare').html('Importing...');

  var gettingRecent = chrome.bookmarks.getRecent(99999999,
    function onFulfilled(bookmarks) {
      
      //build website string
      for (bookmark of bookmarks) {
        bookmarksData = bookmarksData + seperator + bookmark.url;
        seperator = ",";
      }

      //save links
      $.ajax({
        url: "http://local.webshare.me/api/link/addmany",
        type: 'POST',
        data: { website: bookmarksData },
        success: function(res) {
            console.log(res);
            //alert("done");
            $('.importwebshare').html('Imported');
        },
        error: function(){
          $('.importwebshare').html('Import Failed');
        }
        });

    }
  );




});












  });





  