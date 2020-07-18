import Sorting from './sortingModel';
import * as view from './sortingView';

export default async function(state){
    if(!state.sorting){
        state.sorting = new Sorting(state.result);
    }

    // Рендеринг панели сортировки
    view.render();

    // Устанавливаем начальное значение select-а
    view.setSortSelectionValue(state.sorting.sortByArr.join(':'))

    // Сортируем данные по выбранному значению option select-а
    state.sorting.sortBy(state.sorting.sortByArr[0], state.sorting.sortByArr[1]);

    // Отслеживаем именения в select-е sort-cards-by
    const sortSelector = document.querySelector('.view-options__sort');

    sortSelector.addEventListener('change', (e)=>{
        // Записываем выбранное в данный момент значение option select-а в state
        state.sorting.sortByArr =  e.target.value.split(':');

        // Сохранняем выбранное значение в LocalStorage
        state.sorting.saveData();

        // Сортируем данные по выбранному значению option select-а
        state.sorting.sortBy(state.sorting.sortByArr[0], state.sorting.sortByArr[1]);

        state.emitter.emit('event:render-listing', {typeOfView: state.sorting.typeOfView});
    });

    const viewOptions = document.querySelectorAll('.view-options__radio');

    viewOptions.forEach(element => {
        if(element.value ===  state.sorting.typeOfView){
            element.checked = true;
        }

        // Отслеживаем именения в input-ах type="radio"
        element.addEventListener('change', function(e){
            const typeOfView = e.target.value;
            
            // Записываем выбранное в данный момент значение input type="radio"
            state.sorting.typeOfView  = e.target.value;

            // Сохранняем выбранное значение в LocalStorage
            state.sorting.saveData();

            viewOptions.forEach(element => {
                element.checked = false;
            })
            
            e.target.checked = true;

            state.emitter.emit('event:render-listing', {typeOfView});
        })
    });

}