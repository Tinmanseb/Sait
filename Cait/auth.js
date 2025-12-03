// Общие функции для работы с регистрацией и авторизацией

// Проверка, зарегистрирован ли пользователь
function isUserRegistered() {
    return localStorage.getItem('userRegistered') === 'true';
}

// Проверка, авторизован ли пользователь
function isUserLoggedIn() {
    return localStorage.getItem('userLoggedIn') === 'true';
}

// Получение данных пользователя
function getUserData() {
    return {
        fullName: localStorage.getItem('userFullName') || '',
        phone: localStorage.getItem('userPhone') || '',
        email: localStorage.getItem('userEmail') || '',
        registrationDate: localStorage.getItem('registrationDate') || ''
    };
}

// Общая точка входа для перехода к личному кабинету
function redirectToCabinetFlow() {
    if (isUserLoggedIn()) {
        window.location.href = 'cabinet.html';
    } else {
        window.location.href = 'account-choice.html';
    }
}

// Инициализация ссылок на профиль на странице
function initProfileLinks() {
    const profileLinks = document.querySelectorAll('a[href="cabinet.html"], a[href*="cabinet"]');
    
    profileLinks.forEach(link => {
        link.removeEventListener('click', handleProfileLinkClick);
        link.addEventListener('click', handleProfileLinkClick);
    });
}

// Обработчик клика по ссылке на кабинет
function handleProfileLinkClick(e) {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.includes('cabinet')) {
        e.preventDefault();
        redirectToCabinetFlow();
    }
}

