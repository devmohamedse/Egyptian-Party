$('document').ready(function(){
    $('.inner').hide();
    $('.inner').first().show();



    var endDate = new Date("2024-10-31T23:59:59").getTime();
  
    setInterval(function() {
      var dateTimeNow = new Date().getTime();
      var remainingTime = endDate - dateTimeNow;
  
      var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  
      $(".days").html(days + " d");
      $(".hours").html(hours + " h");
      $(".minutes").html(minutes + " m");
      $(".seconds").html(seconds + " s");
    }, 1000);


    var messageTextarea = $('#message');
    var charCountElement = $('.chars');
    charCountElement.text(messageTextarea.attr('maxlength'));
    messageTextarea.on('input', function() {
        var remainingChars = messageTextarea.attr('maxlength') - messageTextarea.val().length;
        charCountElement.text(remainingChars);
    });
  
});


$('.open').click(function(){
    let navWidth = $('.side-bar').innerWidth();
    let navLeft = $('.side-bar').offset().left;
    if(navLeft == 0){
        $('.side-bar').animate({left: -navWidth},1000);
        $('.open').animate({ marginLeft: 0 }, 1000);
    } else {
        $('.side-bar').animate({left: 0},1000);
        $('.open').animate({ marginLeft: navWidth }, 1000);
    }
});



$('.close-btn').click(function(){
    let navWidth = $('.side-bar').innerWidth();
    $('.side-bar').animate({left: -navWidth},1000);
    $('.open').animate({ marginLeft: 0 }, 1000);
});


$('.singer-header').click(function(){
    $(this).next().slideToggle();
    $('.singer-header').not(this).next().slideUp();
});


