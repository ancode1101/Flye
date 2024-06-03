$(document).ready(function() {
    // Show popup form on 'Contact Us' button click
    $('#contact-us-button').click(function() {
        $('#contact-popup').fadeIn();
        openPopup();
    });

    // Hide popup form on 'Close' button click
    $('#close-popup').click(function() {
        $('#contact-popup').fadeOut();
        closePopup();
    });

    // Handle form submission
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        $.post("https://getform.io/f/YOUR-UNIQUE-ENDPOINT", $(this).serialize())
            .done(function() {
                alert('Form submitted successfully');
                $('#contact-popup').fadeOut();
                closePopup();
            })
            .fail(function() {
                alert('Error submitting form');
            });
    });

    // Change project image on list item click
    $('.project-list li').click(function() {
        var newImage = $(this).data('image');
        $('#project-image').attr('src', newImage);
    });

    // Function to open the popup
    function openPopup() {
        document.getElementById('background-overlay').style.display = 'block';
        document.getElementById('contact-popup').style.display = 'block';
    }

    // Function to close the popup
    function closePopup() {
        document.getElementById('background-overlay').style.display = 'none';
        document.getElementById('contact-popup').style.display = 'none';
    }

    // Example usage
    document.addEventListener('DOMContentLoaded', function() {
        // Replace this with the actual trigger for your popup
        document.getElementById('open-popup-btn').addEventListener('click', openPopup);
    });

    // Hover synchronization for images and dots
    document.addEventListener('DOMContentLoaded', function() {
        const imageContainers = document.querySelectorAll('.image-container');
        const dots = document.querySelectorAll('.dot');

        imageContainers.forEach(container => {
            container.addEventListener('mouseover', function() {
                const index = container.getAttribute('data-index');
                dots.forEach(dot => dot.classList.remove('active'));
                dots[index].classList.add('active');
            });

            container.addEventListener('mouseout', function() {
                dots.forEach(dot => dot.classList.remove('active'));
            });
        });
    });
});
