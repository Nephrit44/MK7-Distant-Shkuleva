const navList = document.querySelector('.linkCollection');
const linkCollection = document.querySelector('.linksRow');
const getTemplateLinkCollection = document.querySelector('#linkRow');
const searchInput = document.querySelector('.searchInput');

document.addEventListener('DOMContentLoaded', function () {
  showLinkCollection();

  searchInput.addEventListener('input', function () {
    const cardCollection = document.querySelectorAll('.card');
    hideAllCard(cardCollection);
    if (searchInput.value == '') {
      showAllCard(cardCollection);
    } else {
      cardCollection.forEach(element => {
        if (element.getAttribute('data-groupid') == searchInput.value) {
          element.classList.remove('visible');
        }
      });
    }
  });
});

function showLinkCollection() {
  window.arrColletion.forEach((element) => {
    let newElement = getTemplateLinkCollection.content.cloneNode(true);
    let maxLink = element.maxGroupLink || '#';
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (!isMobile && maxLink.startsWith('https://max.ru')) {
      maxLink = maxLink.replace('https://max.ru', 'https://web.max.ru');
    }
    newElement.querySelector('.linkRow').textContent = maxLink;
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
