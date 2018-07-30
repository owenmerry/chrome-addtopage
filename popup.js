



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




 



      $('.addwebshare').click(function() {

        $.ajax({
          url: "http://webshare.me/api/link/addmany",
          type: 'POST',
          data: { website: "https://blog.formsite.com/2014/10/08/success-page-tips-tricks/" },
          success: function(res) {
              console.log(res);
              alert(res);
          }
      });
  
      });

      $('.getwebshare').click(function() {

        $.ajax({
          url: "http://webshare.me/api/link/all",
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









  });





  