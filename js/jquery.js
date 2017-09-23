$(document).ready(function() {
    function scrollToSection (element) {
        var scrollAnchor = element.attr('data-scroll');
        console.log(scrollAnchor);
        var scrollPoint = $('div[data-anchor="' + scrollAnchor + '"]').offset().top;

        $('body,html').animate({
            scrollTop: scrollPoint
        }, 500);
    }

    $('.home-scroll').click(function () {
        scrollToSection($(this));
    });

    $('.about-scroll').click(function() {
        scrollToSection($(this));
    });

    $('.project-scroll').click(function() {
        scrollToSection($(this));
    });

    $('.contact-scroll').click(function() {
        scrollToSection($(this));
    })

    function animateProject() {
        var productImage = $('.project-pics');
        var project = $('#project');
        var locationOfProject = project.position().top;
        var scrollFromTop = $(window).scrollTop();

        
        if ((locationOfProject - $(window).height() / 2) <= scrollFromTop) {
             
            $('.project-pics').each(function(i) {
               
               setTimeout(function(){
                    productImage.eq(i).animate(
                        {
                            left: '0px',
                            opacity: 1
                        }, 1000
                        
                    );
                   
               }, 150 * (i+1));
            });
        }
    };


    $(window).scroll(function() {
        animateProject();
    });

});