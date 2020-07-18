import * as view from './listingView';

export default async function(state){
    // Рендер контейнера для карточек
    view.renderCardContainer();

    // Рендер контейнера для списка
    view.renderPanelContainer();

    if(state.sorting.typeOfView === 'cards'){

        // Рендер карточек в пустой контенер
        state.result.forEach(item => {
            view.renderCard(item, state.favorites.isFav(item.id));
        });

    }else if(state.sorting.typeOfView === 'list'){
        // // Рендер панели сортировки 
        view.renderPanelFilter();

        // Рендер списка в пустой контенер
        state.result.forEach(item => {
            view.renderPanel(item, state.favorites.isFav(item.id));
        }); 
    }

    // Запускаем прослушку клика на иконке "Добаваить в избранное"
    addToFavsListener();

    state.emitter.subscribe('event:render-listing', ({typeOfView})=>{
        // Очищаем контайнер с карточками 
        view.clearCardContainer();
        // Очищаем контайнер со списком 
        view.clearPanelContainer();

        // Сортировка карточек/списка по выбранному параметру
        state.sorting.sortBy(state.sorting.sortByArr[0], state.sorting.sortByArr[1]);
        state.result = [...state.sorting.sortedResult]

        // Рендеринг на старанице карточек или списка в зависимости от выбранной иконки на панели сортировки
        if(typeOfView === 'cards'){

            // Рендер карточек в пустой контенер
            state.result.forEach(item => {
                view.renderCard(item, state.favorites.isFav(item.id));
            });

        }else if(typeOfView === 'list'){
            // // Рендер панели сортировки 
            view.renderPanelFilter();

            // Рендер списка в пустой контенер
            state.result.forEach(item => {
                view.renderPanel(item, state.favorites.isFav(item.id));
            }); 
        }

        // Запускаем прослушку клика на иконке "Добаваить в избранное"
        addToFavsListener();
    })

    // Функция для работы иконок "Добаваить в избранное"
    function addToFavsListener(){
        // Прослушка клика на иконках "Добаваить в избранное" / Карточки
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

        // Прослушка клика на иконках "Добаваить в избранное" / Список
        Array.from(document.getElementsByClassName('panel__favourite-btn')).forEach(item => {
            item.addEventListener('click', (e) => {
                // Отменяем переход на страницу элемента при клике на иконку "Добаваить в избранное"
                e.preventDefault();

                // Определяем id карточки, по которой произошел клик. 
                // Для какждой карточки рендерится data-id с индивидуальным значением
                const currentID = e.target.closest('.panel').dataset.id;

                // Добавлем/удалем элемент из localStorage
                state.favorites.toggleFav(currentID);

                // Добавлем/удалем класс у иконки "Добаваить в избранное"
                view.toggleFavoriteIcon(e.target.closest('.panel__favourite-btn'), state.favorites.isFav(currentID));
            })
        });
    }
}