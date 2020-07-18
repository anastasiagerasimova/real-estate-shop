import Filter from './filterModel'
import * as view from './filterView'

export default async function(state){
    // Создаём новый объект filter в state
    if(!state.filter){
        state.filter = new Filter();
    }

    // Делаем запрос на сервер
    await state.filter.getParams();

    // Отрисовка фильтра
    view.render(state.filter.params);

    // Делаем запрос на сервер
    await state.filter.getResult()
    state.result = state.filter.result;

    // Обновдяем счетчик на кнопке
    view.changeButtonText(state.filter.result.length)

    // Прослушка измениний формы
    const form = document.getElementById('filter-form');

    form.addEventListener('change', async function(e){
        e.preventDefault();
        state.filter.query = view.getInput();
        await state.filter.getResult();
        state.result = state.filter.result;
        view.changeButtonText(state.filter.result.length);
    })

    //Прослушка сброса формы
    form.addEventListener('reset', async function(e){
        state.filter.query = '';
        await state.filter.getResult();
        state.result = state.filter.result;
        view.changeButtonText(state.filter.result.length);
    })

    //Прослушка отправки формы
    form.addEventListener('submit', function(e){
        e.preventDefault();
        state.result = state.filter.result;
        state.sorting.sortedResult = [...state.result];
        state.emitter.emit('event:render-listing', {typeOfView: state.sorting.typeOfView});
    })
}