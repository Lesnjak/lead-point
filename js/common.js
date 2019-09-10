$(document).ready(function(){
    $('.sixth__slider').owlCarousel({
        items:1,
        nav:true,
        margin:30,
        stagePadding:15,
        smartSpeed:450
    });
    $('#popup-form').on('click',function () {
        $('.popup-menu__wrapper').hide()
    })
    $('#popup-form1').on('click',function () {
        $('#popup-form3').hide()
    })
    $('#popup-form2').on('click',function () {
        $('#popup-form4').hide()
    })
    $('.navbar__menu').on('click',function () {
        $('.popup-menu__wrapper').show()
    })
    $('.tenth__button, .info-box__red-button').on('click',function () {
        $('#popup-form4').show()
    })

    $('.twelvth__icon').on('click',function () {
        $('#popup-form3').show()
    })
    $(".popup-menu__link").click(function(e) {
        e.preventDefault();
        var offset = 20; //Offset of 20px
        $('.popup-menu__wrapper').hide()
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top + offset
        }, 1000);

    });
    $(".info-box__arrow-button").click(function(e) {
        console.log("---",555);
        
        e.preventDefault();
        var offset = 20; //Offset of 20px
        $('html, body').animate({
            scrollTop: $($(this).attr('data-href')).offset().top + offset
        }, 1000);

    });
    $('form').on('submit',function (e) {
     var value = $(this).find('input[name="title"]').attr('value');
     
     e.preventDefault();
        $.ajax({
            type: 'post',
            url: 'mail.php',
            data: $(this).serialize(),
            success: function (response) {
                if (value == "Заявка с сайт"){
                   location.href='/thank-you.html'
                }
                else {
                    location.href='/thank-you1.html'
                }
                console.log('done')



            }
        });

    })
});
