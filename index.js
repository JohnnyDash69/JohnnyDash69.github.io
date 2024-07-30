$(document).ready(function() {
    const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
    const comments = JSON.parse(localStorage.getItem('comments')) || {};

    function updateSavedItems() {
        localStorage.setItem('savedItems', JSON.stringify(savedItems));
        alert(`You have ${savedItems.length} items saved for later.`);
    }

    function updateComments() {
        localStorage.setItem('comments', JSON.stringify(comments));
    }

    $('.save-for-later').click(function() {
        const item = $(this).siblings('p').text();
        savedItems.push(item);
        updateSavedItems();
    });

    $('.like').click(function() {
        $(this).text('Liked').css('color', 'red');
    });

    $('.submit-comment').click(function() {
        const item = $(this).siblings('p').text();
        const comment = $(this).siblings('.comment-input').val();
        if (!comments[item]) {
            comments[item] = [];
        }
        comments[item].push(comment);
        $(this).siblings('.comments').append(`<p>${comment}</p>`);
        $(this).siblings('.comment-input').val('');
        updateComments();
    });

    $('#saved-list').html(savedItems.map(item => `<p>${item}</p>`).join(''));

    // Hiding/showing functionality
    $('textarea.comment-input').hide();
    $('.comment-input').focus(function() {
        $(this).show('slow');
    });

    // Drop-down menu
    $('nav ul').hide();
    $('header').hover(
        function() {
            $('nav ul').slideDown();
        }, 
        function() {
            $('nav ul').slideUp();
        }
    );

    // Animation effects
    $('img').hover(
        function() {
            $(this).animate({ width: '+=10px' }, 'slow');
        },
        function() {
            $(this).animate({ width: '-=10px' }, 'slow');
        }
    );

    // Chained effects
    $('.hero').css('background', 'blue').slideUp(2000).slideDown(2000);
});
