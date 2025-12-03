// ============================================
// НАСТРОЙКИ - здесь вы можете изменить пути к изображениям
// ============================================

// Путь к фоновому изображению (оставьте пустым, если не нужен фон)
const BACKGROUND_IMAGE = 'images/Back.png';

// Путь к логотипу (оставьте пустым, если не нужен логотип)
const LOGO_IMAGE = 'Logo.png';

// Пути к изображениям для каждого прямоугольника
const PANEL_IMAGES = [
    'images/LL.png',      // Левый левый
    'images/LR.png',      // Левый правый
    'images/Center.png',  // Центральный (210x730)
    'images/RL.png',      // Правый левый
    'images/RR.png'       // Правый правый
];

// ============================================
// КОД - не нужно редактировать ниже
// ============================================

// Установка фона
function setBackground(imagePath) {
    const backgroundLayer = document.querySelector('.background-layer');
    if (imagePath && imagePath.trim() !== '') {
        backgroundLayer.style.backgroundImage = `url(${imagePath})`;
    } else {
        backgroundLayer.style.backgroundImage = 'none';
    }
}

// Установка логотипа
function setLogo(imagePath) {
    const logo = document.getElementById('logo');
    if (imagePath && imagePath.trim() !== '') {
        logo.src = imagePath;
        logo.style.display = 'block';
    } else {
        logo.style.display = 'none';
    }
}

// Установка изображений для прямоугольников
function setPanelImages(imagePaths) {
    const pieces = document.querySelectorAll('.piece');
    pieces.forEach((piece, index) => {
        if (imagePaths[index] && imagePaths[index].trim() !== '') {
            // Используем data-img атрибут или напрямую устанавливаем
            const imgPath = piece.getAttribute('data-img') || imagePaths[index];
            piece.style.backgroundImage = `url(${imgPath})`;
        }
    });
}

// Обработчики кликов для переходов на страницы
function setupClickHandlers() {
    const pieces = document.querySelectorAll('.piece');
    
    pieces.forEach(piece => {
        piece.addEventListener('click', function() {
            const link = this.getAttribute('data-link');
            if (!link) return;

            if (link === 'cabinet') {
                if (typeof redirectToCabinetFlow === 'function') {
                    redirectToCabinetFlow();
                } else {
                    window.location.href = 'account-choice.html';
                }
            } else {
                window.location.href = `${link}.html`;
            }
        });
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Устанавливаем фон
    setBackground(BACKGROUND_IMAGE);
    
    // Устанавливаем логотип
    setLogo(LOGO_IMAGE);
    
    // Устанавливаем изображения для панелей
    setPanelImages(PANEL_IMAGES);
    
    // Также устанавливаем изображения из data-img атрибутов (если они есть)
    document.querySelectorAll('.piece').forEach(piece => {
        const imgPath = piece.getAttribute('data-img');
        if (imgPath && imgPath.trim() !== '') {
            piece.style.backgroundImage = `url(${imgPath})`;
        }
    });
    
    // Настраиваем обработчики кликов
    setupClickHandlers();
});

// Экспорт функций для использования в консоли (опционально)
window.setBackground = setBackground;
window.setLogo = setLogo;
window.setPanelImages = setPanelImages;
