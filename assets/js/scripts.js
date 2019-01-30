$(document).ready(function () {

    $(window).on('resize', function () {
        if ($(window).width() > 1023)
            $('#main-menu, #search_block').css('height', 'auto');
    });

    $('[data-toggle]').on('click', function () {
        var $toggle_obj = $($(this).attr('data-toggle'));

        if ($toggle_obj.attr('id') === 'main-menu')
            $toggle_obj.animate($toggle_obj.height() > 2 ? {height: 0} : {height: $toggle_obj.children().height()});
        else {
            $toggle_obj.animate($toggle_obj.height() > 2 ? {height: 0} : {height: $toggle_obj.children().height()});
        }
    });
});