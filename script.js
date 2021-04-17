var count = 0;
$('#tog').hide();
$('#after').click(function () {
    $('button').after('<p>This text is added after every button in the whole webpage. Reload to hide !</p>');
    count++;
});
$('#append').click(function () {
    $('button').after('<p id="append">This text is appended after every button in the whole webpage. Reload to hide !</p>');
    count++;
});
$('#remove').click(function () {
    if (count == 0) {
        alert("Please click on any one of the after method or apppend method buttons to check this one.");
    }
    else {
        $('p').remove();
    }
});
$('#addClass').click(function () {
    $('button').addClass('dbutton');
});
$('#toggle').click(function () {
    $('#tog').toggle();
});
$("#animate").click(function () {
    $(this).animate({ height: "72px", width: "90px" });
});
$("#methodC").click(function () {
    $('#tog').show().css('fontSize', '32px').css('color', 'black');
});