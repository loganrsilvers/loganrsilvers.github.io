$(document).ready(function() {
    $('#changeStylesButton').click(function() {
        // Toggle dark mode
        $('body').toggleClass('dark-mode');
        $('article').toggleClass('dark-mode');
        $('nav').toggleClass('dark-mode');
        $('header').toggleClass('dark-mode');
        $('footer').toggleClass('dark-mode');
        $('img').toggleClass('dark-mode');
        $('button').toggleClass('dark-mode');
        $('article p').toggleClass('dark-mode');

        // Change text content for the text element
        $('#textToChange1').text('i lied, he is the WORST bug');
        $('#textToChange2').text('he is the LAZIEST BUG ON THE PLANET');
        $('#textToChange3').text('he cannot play a SINGULAR INSTRUMENT because he has BUG HANDS');
        $('#textToChange4').text('this bug has BIG GIANT BUG EYES and bad antennea');
        $('#textToChange5').text('shamus has ZERO FASHION // he is a BUG');
        $('#textToChange6').text('i can squash him in my SLEEP');
        $('#textToChange7').text('made by logan a BUG HATER');


        // Swap images
        var currentImageSrc = $('#imageToChange').attr('src');
        var newImageSrc = currentImageSrc.includes('img/one.png') ? 'img/three.png' : 'img/one.png';
        $('#imageToChange').attr('src', newImageSrc);
    });

});