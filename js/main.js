const navLinkCollection = document.querySelectorAll('.nav-link');
const getTemplateCard = document.querySelector('#cardTemplate');
const getlist = document.querySelector('.card-list');

document.addEventListener('DOMContentLoaded', function () {
  window.arrColletion.forEach((element) => {
    let newElement = getTemplateCard.content.cloneNode(true);
    newElement.querySelector('.card').setAttribute('data-groupid', element.dataGroup);
    newElement.querySelector('.card-title').textContent = element.groupName;
    newElement.querySelector('.card-img-top').src = "./image/" + element.groupIMG;
    let maxLink = element.maxGroupLink || '#';
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (!isMobile && maxLink.startsWith('https://max.ru')) {
      maxLink = maxLink.replace('https://max.ru', 'https://web.max.ru');
    }
    newElement.querySelector('.link__groupMAX').href = maxLink;
    getlist.append(newElement);
  });
});

navLinkCollection.forEach(element => {
  element.addEventListener('click', function () {
    switch (this.getAttribute('data-navBtn')) {
      case 'main': {
        navList.classList.add('visible');
        getlist.classList.remove('visible');
      }
        break;
      case 'navList': {
        navList.classList.remove('visible');
        getlist.classList.add('visible');
      }
        break;
    }
  })
});
