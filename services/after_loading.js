document.addEventListener('DOMContentLoaded', function() {
    // Максимальное время показа лоадера (8 секунд как резерв)
    const maxLoaderTime = 8000;
    const loader = document.getElementById('pageLoader');
    
    // Функция для скрытия лоадера
    function hideLoader() {
        document.body.classList.add('loaded');
        loader.style.opacity = '0';
        setTimeout(function() {
            loader.style.display = 'none';
        }, 500);
    }
    
    // Основной обработчик загрузки страницы
    window.addEventListener('load', hideLoader);
    
    // Резервный таймер на случай, если событие load не сработает
    const backupTimer = setTimeout(hideLoader, maxLoaderTime);
    
    // Отмена резервного таймера, если страница загрузилась
    window.addEventListener('load', function() {
        clearTimeout(backupTimer);
    });
});