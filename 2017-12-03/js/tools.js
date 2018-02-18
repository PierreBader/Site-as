$(window).load(function() {

    $('#nav').slicknav({
        label: '',
        closeOnClick: true
    });
	
    smoothScrollForInternalLinks();

});

function smoothScrollForInternalLinks() {
    $('a[href^="#"]').click(function() {
        if ($(this).attr('href') === "#") {
            return false;
        }
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });
}