
$(document).ready(function () {
    $('button').click(function () {
        const name = $('#nameid').val();
        alert("Entering "+ name +" as your name");
        $('.imgchange').attr('src', `https://avatars.dicebear.com/api/micah/${name}.svg`);
        const b = $('.imgchange');
        console.log(b);

    });
});

