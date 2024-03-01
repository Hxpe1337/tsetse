$(document).ready(function() {
    // Generowanie gwiazd
    for (let i = 0; i < 100; i++) {
        let star = $('<div class="star"></div>');
        star.css({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 5}s`
        });
        $('#stars').append(star);
    }

    // Logika formularza logowania
    $('#login-form').submit(function(e) {
        e.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();

        if(username === "Admin" && password === "1234") {
            window.location.href = 'dialog.html'; // Przekierowanie na stronę dialog.html
        } else {
            alert('Nieprawidłowa nazwa użytkownika lub hasło!');
        }
    });
});
$( function() {
    $( "#accordion" ).accordion({
      collapsible: true,
      heightStyle: "content",
      active: false
    });
});
