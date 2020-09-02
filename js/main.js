$(document).ready(function () {
    $('.hamburger').click(function () {
        // dodaje klasę tylko kiedy się otwiera
        // $('.main-menu').addClass('open');

        // dodaję klasę lub usuwa przy kliknięciu; 
        // połączenie z CSS (w tym wypadku manipulacja left w .main-nenu.open) daje efekt menu bocznego, który pojawia się i znika
        $('.main-menu').toggleClass('open');
    });

    // do znaczników a, ponieważ ..? (jeśli chcemy użyć inne odnośniki to nie zostaną zebrane w kolekcję)
    $('.main-menu-item a').click(function (e) {
        
        // powstrzymać przeładowanie
        e.preventDefault();

        // zmiana opacity; zaczyna się po zakończeniu poprzedniej funkcji
        $('body').fadeOut(2000, function(){
            // .attr zwraca albo zwraca wartość atrybutu;
            // wartość atrybutu klikniętego odnośnika
            window.location.href = $(e.target).attr('href');
        });
    });
});
