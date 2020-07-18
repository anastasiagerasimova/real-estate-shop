import SingleItem from './singleItemModel';
import * as view from './singleItemView'

export default async function(state){

    // Создаем новый объект SingleItem
    state.singleItem = new SingleItem(state.routeParams);

    // Получаем данные с сервера
    await state.singleItem.getItem();

    // Отрисовываем разметку для отдельного объекта
    view.render(state.singleItem.result, state.favorites.isFav(state.singleItem.id));

    /* Запуск прослушкки слбытий */
    // Прослушка клика на кнопку "забронировать". Открытие модального окна
    document.querySelector('.button-order').addEventListener('click', ()=>{
        view.showModal();
    })

    // Прослушка клика на крестик модального окна. Закрытие модального окна
    document.querySelector('.modal__close').addEventListener('click', ()=>{
        view.hideModal();
    })

    // Прослушка клика по overlay, вне модального окна. Закрытие модального окна
    document.querySelector('.modal-wrapper').addEventListener('click', (e)=>{
        if(e.target.closest('.modal')){
            return false;
        }else{
            view.hideModal();
        }
    })

    // Прослушка submit формы
    document.querySelector('.modal__form').addEventListener('submit', async function(e){
        e.preventDefault();

        // Собираем данные с формы 
        const formData = view.getInput();

        // Отправляем данные с заявкой на сервер 
        await state.singleItem.submitForm(formData);

        // Получаем ответ от сервера и обрабатываем его
        const response = state.singleItem.response;
        if(response.message === 'Bid Created'){
            alert('Ваша заявка успешна получена!');
            view.clearInput();
            view.hideModal();
        }else if(response.message === 'Bid Not Created'){
            response.errors.forEach(item => {
                alert(item);
            });
        }
    })

    // Прослушка клика по кнопке "Избранное". Добавление, удаление элемента из избраннного.
    document.querySelector('#addToFavoritesBtn').addEventListener('click', () => {
        state.favorites.toggleFav(state.singleItem.id);

        view.toggleFavoriteBtn(state.favorites.isFav(state.singleItem.id))
    })
}