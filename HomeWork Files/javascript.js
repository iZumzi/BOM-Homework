$(document).ready(function () {
    $('.container').on('click', '.btn', alertAction);

    function alertAction() {
        alert('Sorry for my Pop-Up...');
        alert('But you should better look at the URL...');
        history.pushState('tema', 'homework', 'BOM-Homework.html');
        alert('Thank You!');
    }
    
});

function pageInfos() {
    var msg = `<h3 class="b-width"> Browser window </h3> <p>Width: ${window.innerWidth} </p>`;

    msg += `<p> Height: ${window.innerHeight} </p>`;

    msg += `<h3> History </h3> <p>items: ${window.history.length} </p>`;

    msg += `<h3>Screen</h3> <p>Width: ${window.screen.width} </p>`;

    msg += `<p>Height: ${window.screen.height} </p>`;

    document.write(msg);
};

pageInfos();

///////////////////////////////////////////////////////////////////////////////

$(window).resize(function () {
    $(".div-width")
        .appendTo('.js-div')
        .html($(window).width());
}).resize();


$('.div-width').each(function () {
    $(this).before($('<h3>').text("Width(px): "));
});

//////////////////////////////////////////////////////////////////////////////

$(window).resize(function () {
    $(".div-height")
        .appendTo('.js-div-second')
        .html($(window).height());
}).resize();

$('.div-height').each(function () {
    $(this).before($('<h3>').text("Height(px): "));
});

////////////////////////////////
