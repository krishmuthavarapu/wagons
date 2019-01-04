function main(){
    alert("hi");
}


$(window).on('scroll', function() {
    if ($(window).scrollTop() >= 150) {
        $('#sticky-header').addClass('sticky-menu');
    } else {
        $('#sticky-header').removeClass('sticky-menu');
    }
});

// slicknav
// $('ul#navigation').slicknav({
//     prependTo: ".responsive-menu-wrap"
// });
