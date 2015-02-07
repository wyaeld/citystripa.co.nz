
$(document).ready(function(){
    $('.carousel').carousel({
        interval: 3000
    })
 
    // Handle thank you
  var url = window.location.href;
  if(url.indexOf('?thank-you') != -1) {
    $('#thankyou').removeClass('hidden');
  }
        
});


