 window.addEventListener('load', function() {
    setTimeout(function() {
        const loader = document.getElementById('pageLoader');
        loader.style.opacity = '0';
        setTimeout(function() {
            loader.style.display = 'none';
        }, 500);
    }, 500);
});