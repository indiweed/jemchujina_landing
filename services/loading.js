document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('pageLoader');
    const maxLoaderTime = 3000; // Уменьшил время резервного таймера
    
    function hideLoader() {
        document.body.classList.add('loaded');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
    
    // Основной обработчик
    if (document.readyState === 'complete') {
        hideLoader();
    } else {
        window.addEventListener('load', hideLoader);
        setTimeout(hideLoader, maxLoaderTime); // Резервный таймер
    }
});