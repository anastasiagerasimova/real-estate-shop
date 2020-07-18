import FavoritesCards from './favoritesCardsModel';
import * as view from './favoritesCardsView';

export default async function(state){
    // Получаем список id элементов, которые находяться в избранном
    const favsList = state.favorites.favs;

    // Получение данных с сервера
    // Получаем список элементов по id, которые находяться в избранном
    state.favoritesCards = new FavoritesCards(favsList);
    await state.favoritesCards.getFavs();

    console.log("state.favoritesCards.cards", state.favoritesCards.cards)
    // Рендерим карточки 
    view.renderPage(state.favoritesCards.cards);


    // Запускаем прослушку клика на иконке "Добаваить в избранное"
    addToFavsListener();

    // Функция для работы иконок "Добаваить в избранное"
    function addToFavsListener(){
        // Прослушка клика на иконках "Добаваить в избранное"
        Array.from(document.getElementsByClassName('card__like')).forEach(item => {
            item.addEventListener('click', (e) => {
                // Отменяем переход на страницу элемента при клике на иконку "Добаваить в избранное"
                e.preventDefault();

                // Определяем id карточки, по которой произошел клик. 
                // Для какждой карточки рендерится data-id с индивидуальным значением
                const currentID = e.target.closest('.card').dataset.id;

                // Добавлем/удалем элемент из localStorage
                state.favorites.toggleFav(currentID);

                // Добавлем/удалем класс у иконки "Добаваить в избранное"
                view.toggleFavoriteIcon(e.target.closest('.card__like'), state.favorites.isFav(currentID));
            })
        });
    }
}