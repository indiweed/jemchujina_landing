window.addEventListener('load', function() {
    setTimeout(function() {
        const loader = document.getElementById('pageLoader');
        loader.style.opacity = '0';
        document.body.classList.add('page-loaded');
        setTimeout(function() {
            loader.style.display = 'none';
        }, 500);
    }, 500);
});