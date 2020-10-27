console.log(document.getElementsByClassName('list__item'))
coverItemClose = (i) => {
    document.getElementsByClassName('cover-item')[i].style.display = 'none';
}
coverItemOpen = (i) => {
    document.getElementsByClassName('cover-item')[i].style.display = 'flex';
}