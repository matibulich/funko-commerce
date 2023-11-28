$(window).on('load', function() {
    if(window.location.href.indexOf('login') > -1 ) {
        console.log('acá')
        $('.footer').addClass('fixed-footer')
    }
})