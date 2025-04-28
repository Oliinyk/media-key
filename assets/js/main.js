/**
 * flatAccordions
 * pageLoad
 */

 (function($) {

    "use strict";

    // PreLoad
    let Preloader = function() {        
        $(window).on("load", function () {
            $(".loader").fadeOut();
            $("#loading-overlay").delay(500).fadeOut('slow',function(){
                $(this).remove();
            }); 
        });
    };

    // Mobile menu
    $(document).on('click', '.mobile-button', function() {
        $(this).toggleClass('active');
        $('.header-wrap').slideToggle();
    })

    // Scroll Top
    let scrollToTop = function() {
        $(window).scroll(function() {
            if ( $(this).scrollTop() > 300 ) {
                $('#scroll-top').addClass('show');
            } else {
                $('#scroll-top').removeClass('show');
            }
        });

        $('#scroll-top').on('click', function() {
            $('html, body').animate({ scrollTop: 0 } , 'easeInOutExpo');
        return false;
        });
    }

    // validation

    var ajaxContactForm = function() {
        $('#contactform').each(function() {
            $(this).validate({
                submitHandler: function(form) {
                    var $form = $(form),
                        str = $form.serialize(),
                        loading = $('<div />', { 'class': 'loading' });

                    $.ajax({
                        type: "POST",
                        url: $form.attr('action'),
                        data: str,
                        beforeSend: function() {
                            $form.find('.form-submit').append(loading);
                        },
                        success: function(msg) {
                            var result, cls;
                            if (msg === 'Success') {
                                result = 'Message Sent Successfully To Email Administrator. ( You can change the email management a very easy way to get the message of customers in the user manual )';
                                cls = 'msg-success';
                            } else {
                                result = 'Error sending email.';
                                cls = 'msg-error';
                            }

                            $form.prepend(
                                $('<div />', {
                                    'class': 'flat-alert ' + cls,
                                    'text': result
                                }).append(
                                    $('<a class="close" href="#"><i class="fa fa-close"></i></a>')
                                )
                            );

                            $form.find(':input').not('.submit').val('');
                        },
                        complete: function(xhr, status, error_thrown) {
                            $form.find('.loading').remove();
                        }
                    });
                }
            });
        }); // each contactform
    };

    var ajaxCommentForm = function() {
        $('#commentform').each(function() {
            $(this).validate({
                submitHandler: function(form) {
                    var $form = $(form),
                        str = $form.serialize(),
                        loading = $('<div />', { 'class': 'loading' });

                    $.ajax({
                        type: "POST",
                        url: $form.attr('action'),
                        data: str,
                        beforeSend: function() {
                            $form.find('.comment-form').append(loading);
                        },
                        success: function(msg) {
                            var result, cls;
                            if (msg === 'Success') {
                                result = 'Message Sent Successfully To Email Administrator. ( You can change the email management a very easy way to get the message of customers in the user manual )';
                                cls = 'msg-success';
                            } else {
                                result = 'Error sending email.';
                                cls = 'msg-error';
                            }

                            $form.prepend(
                                $('<div />', {
                                    'class': 'flat-alert ' + cls,
                                    'text': result
                                }).append(
                                    $('<a class="close" href="#"><i class="fa fa-close"></i></a>')
                                )
                            );

                            $form.find(':input').not('.submit').val('');
                        },
                        complete: function(xhr, status, error_thrown) {
                            $form.find('.loading').remove();
                        }
                    });
                }
            });
        }); // each commentform
    };

    // wowAnimation
    let wowAnimation = function () {
        new WOW().init();   
    }

    // Dom Ready
    $(function() {
        Preloader();
        scrollToTop();
        wowAnimation();
        ajaxContactForm();
        ajaxCommentForm();
    });





    // slider
    // const swiper = new Swiper('.swiper', {
    //     loop: true,
    //     pagination: {
    //       el: '.swiper-pagination',
    //     },
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     }
    // });

    document.addEventListener('DOMContentLoaded', function() {
        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 2,
            spaceBetween: 0,
            centeredSlides: true,
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 400,
                modifier: 1,
                slideShadows: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            loop: true,
        });
  
        // Імітація кліку на кнопку відтворення
        const playButtons = document.querySelectorAll('.play-button');
        playButtons.forEach(button => {
          button.addEventListener('click', function() {
            alert('Відтворення відео');
            // Тут можна додати логіку для відтворення відео
          });
        });
    });

})(jQuery);