$(document).ready(function () {
    actions();

});


function actions() {
    // $('#logo_img').on('click', menu_animate);
    $('[name = "VacancyFilter"]').map(function () {
        $(this).on('change', chenge_url);
    })
}

function chenge_url() {
    let url = new URL(document.location.href);
    url.searchParams.set("filter", 'true');
    history.pushState(null, null, url.search);

    if ($(this).prop('checked')) {
        let url = new URL(document.location.href);
        url.searchParams.set(this.value, 'true');
        history.pushState(null, null, url.search);

    } else {
        let url = new URL(document.location.href);
        url.searchParams.delete(this.value);
        rt = url.search;
        history.replaceState(null, null, rt);
    }
    filter();
}

function filter() {
    let index = 0;
    $('[name = "job"]').map(function () {
        $(this).hide();
        let elem = this;
        let tags = $(this).attr('tags');
        tags = tags.split(',');
        let url = new URL(document.location.href);
        let url_tags = url.search;
        url_tags = url_tags.replace(/=true/g, "");
        url_tags = url_tags.split('&');
        url_tags.forEach(function (item, i, arr) {
            if (tags.includes(item)) {
                index += 1;
                $(elem).show(1300);
            }});});

    let url = new URL(document.location.href);
    let url_tags = url.search;
    url_tags = url_tags.replace(/=true/g, "");
    url_tags = url_tags.split('&');
    if (url_tags.length <= 1) {
        $('[name = "job"]').map(function () {
            $(this).show(1300);});
        index = 1;}

    if (index > 0) {
        $("#box-item-message").hide();
    } else {
        $("#box-item-message").show();
    }
}

// function menu_animate() {
//     console.log("1");
//     if ($("#site_menu" ).is(':visible')) {
//     $( "#site_menu" ).hide(1000);
// }
// else{
//       $( "#site_menu" ).show(1000);
//     }
//     // .animate({width: "0"}, 1000);
//
// }
//
