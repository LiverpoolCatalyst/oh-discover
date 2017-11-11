var source;
var newSource;

$('.headshot').on('mouseenter', function() {
    source = $(this).attr('src');
    newSource = source.slice(0, -4) + '_tint.jpg';
    console.log(newSource);
    $(this).attr('src', newSource);
});

$('.headshot').on('mouseleave', function() {
    console.log(source);
    $(this).attr('src', source);
});
