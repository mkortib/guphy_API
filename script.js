
//window.onload = function() {
//  var input = $('#textSearch').val();
//var xhr = $.get("http://api.giphy.com/v1/gifs/search?q='tree'&api_key=sQOB28Bg7P9iyw3ZvD148ZPvcJp0fNSt&limit=20");
//xhr.done(function(response) { 
//   console.log("success got data", response);
//   var ggiphy = response.data;
//   for (i in ggiphy) {
//   $('.inner').append("<img src='"+ggiphy[i].images.original.url+"'id='classf'/>");
//}
//}); 
//}
function getData() {
   var input = $('#textSearch').val();
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q='" + input +"'&api_key=sQOB28Bg7P9iyw3ZvD148ZPvcJp0fNSt&limit=20");
xhr.done(function(response) { 
   console.log("success got data", response);
   var ggiphy = response.data;
   for (i in ggiphy) {
   $('.inner').append("<img src='"+ggiphy[i].images.original.url+"'id='classf'/>");
}
});
input = '';
}


