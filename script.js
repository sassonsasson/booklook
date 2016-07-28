    var source = $('#book-template').html();
    var template = Handlebars.compile(source);

    var readBook = function(data){
      $('.siteBooks').append('<div class="text-center"><h1>' +data.items[0].volumeInfo.title+'</h1>' +'<h3>'+'Published by: ' +data.items[0].volumeInfo.publisher+ '</h3>' +'<p> Number of pages: '+data.items[0].volumeInfo.pageCount+'<h4>'+data.items[0].volumeInfo.description +'</h4>'+'<img src='+'"'+data.items[0].volumeInfo.imageLinks.smallThumbnail+'"'+'>' +'</div>');

    }

    var fetch = function (isbn) {
  $.ajax({
    method: "GET",
    url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:'+isbn,
    dataType: "json",

    success: function(data) {
      // readBook(data)
      // console.log(data);
      console.log(data)

        var source   = $("#book-template").html();
        var template = Handlebars.compile(source);
        var book = { 
          title: data.items[0].volumeInfo.title,
          pagenum: data.items[0].volumeInfo.pageCount,
          publisher: data.items[0].volumeInfo.publisher,
          description: data.items[0].volumeInfo.description,
          img: data.items[0].volumeInfo.imageLinks.thumbnail
        }

         // $("#book-template").html(template(data));

         var newHTML = template(book)
         $('.siteBooks').append(newHTML);
      // console.log(data.items[0].volumeInfo.title);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  }); 
};

  $('.mainBtn').on('click', function (e) {
    e.preventDefault();

        var isbn = $('#bookisbn').val()
        fetch(isbn);
  });


     