const navList = document.querySelector('.linkCollection'); //Форма с сылками для администрации
const linkCollection = document.querySelector('.linksRow'); //Место для ссылок администрации
const getTemplateLinkCollection = document.querySelector('#linkRow'); //Шаблон для ссылок администрации
const searchInput = document.querySelector('.searchInput'); //Текстовое поле для поиска

showLinkCollection(); //Выводим список в выпадающем меню

//Поиск группы по запросу пользователя
searchInput.addEventListener('input', function () {
    const cardCollection = document.querySelectorAll('.card') //Все карточки групп
    hideAllCard(cardCollection);
    if (searchInput.value == '') {
        showAllCard(cardCollection);
    } else {
        cardCollection.forEach(element => {
            if(element.getAttribute('data-groupname').includes(searchInput.value)){
                element.classList.remove('visible');
            }
        });
    }
});

//Вывод списка прямых ссылок
function showLinkCollection() {
    arrColletion.forEach((element) => {
        let newElement = getTemplateLinkCollection.content.cloneNode(true); //Создаю клон шаблона строки с сылками
        newElement.querySelector('.linkRow').textContent = element.maxGroupLinkPC;
        linkCollection.append(newElement);
    });
}

function hideAllCard(cardCollection) {
    cardCollection.forEach(element => {
        element.classList.add('visible');
    });
}

function showAllCard(cardCollection) {
    cardCollection.forEach(element => {
        element.classList.remove('visible');
    });
}


