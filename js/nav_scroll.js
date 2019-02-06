$(function() {
  
  $(document).on("scroll", scroll);
  
  menu = $('nav a');
  
  menu.filter(':first').addClass('aktif'); //ilk linke aktif class'ı ata
  
  menu.on('click', function() {
    $(document).off("scroll");
    var id = $(this).attr('href'),
        target = this.hash;
    menu.removeClass('aktif'); //linklerde ki aktif class'larını sil
    $(this).addClass('aktif'); //tıklanan linke aktif class'ı ata
    $('html, body').animate({ scrollTop: $(id).offset().top }, {
      duration: 500, //süresi
      complete: function() { //bu animasyon tamamlandığında
        $('.icerik').css('background', 'transparent'); //tüm içerik divinin rengini transparan yap
        $(id).css('background','#fff7e5'); //tıklanan link ile eşleşen divin arkaplan rengini değiştir
        $(document).on("scroll", scroll);
      }
    });
    return false;
  });
  
});

function scroll(event){
    var scrollPos = $(document).scrollTop();
    menu.each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            menu.removeClass("aktif");
            currLink.addClass("aktif");
        }
        else{
            currLink.removeClass("aktif");
        }
    });
}
