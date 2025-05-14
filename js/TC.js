function toggleTheme() {
    const themeLink = document.getElementById('theme-style');
    const currentTheme = themeLink.getAttribute('href');

    // Проверяем текущую тему и переключаем на противоположную
    if (currentTheme.includes('White_theme.css')) {
        themeLink.setAttribute('href', getThemePath('Black_theme.css'));  // Путь к Black_theme.css
        localStorage.setItem('theme', 'black');
    } else {
        themeLink.setAttribute('href', getThemePath('White_theme.css'));  // Путь к White_theme.css
        localStorage.setItem('theme', 'white');
    }
}

// Функция для получения правильного пути к CSS в зависимости от текущего местоположения страницы
function getThemePath(themeFile) {
    const path = window.location.pathname;
    // Если файл находится в подкаталоге (например, /pages/topic1.html), то добавляем "../"
    if (path.includes('pages')) {
        return `../css/${themeFile}`;
    } else {
        return `css/${themeFile}`;
    }
}

// Загружаем тему из localStorage при открытии страницы
window.onload = function () {
    const savedTheme = localStorage.getItem('theme') || 'white'; // Загружаем сохранённую тему
    const themeFile = savedTheme === 'black' ? 'Black_theme.css' : 'White_theme.css';

    // Устанавливаем тему при загрузке страницы
    const themeLink = document.getElementById('theme-style');
    if (themeLink) {
        themeLink.setAttribute('href', getThemePath(themeFile));  // Путь к css файлам
    } else {
        console.error("Ошибка: элемент с id 'theme-style' не найден");
    }
};
