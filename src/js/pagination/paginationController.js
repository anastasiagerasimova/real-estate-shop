import Pagination from './paginationModel';
import * as view from './paginationView';

export default async function(state){
    // Создаем новый объект Pagination в state для работы с пагинацией
    if(!state.pagination){
        state.pagination = new Pagination(1, 2);
    }

    // Рендерим контейнер для пагинации
    view.renderContainer();
    await state.pagination.getPaginationSize();

    // Создаем массив с элементами пагинации, которые будут отображены на странице
    state.pagination.creatRange();

    // Рендеринг пагинации на страницу из массива state.pagination.rangeWithDots
    renderPagination()

    changePageBtnListener()

    // Финкция для отслеживания клика по кнопам пагинации
    // Изменение вида пагинации после каждого клика по кнопкам
    function changePageBtnListener(){
        let pageButtons = document.querySelectorAll('.pagination__page');;

        Array.from(pageButtons).forEach( item =>{
            item.addEventListener('click', (e)=>{
                e.preventDefault();

                // Очищаем контейнер пагинации
                view.clearPaginationContainer();
    
                // Отслеживаем по какой кнопке пагинации произошел клик и записываем ее значение в state
                state.pagination.currentPageNum = +e.target.innerText;

                // Сохраняем значение нажатой кнопки в LocalSorage
                state.pagination.saveData();

                // Создаем массив с элементами пагинации, которые будут отображены на странице
                state.pagination.creatRange();

                // Рендеринг пагинации на страницу из массива state.pagination.rangeWithDots
                renderPagination();

                state.emitter.emit('event:render-bids', {pageNum: state.pagination.currentPageNum});

                // Финкция для отслеживания клика по кнопам пагинации
                // Изменение вида пагинации после каждого клика по кнопкам
                changePageBtnListener();
            })
        })
    }

    // Рендеринг пагинации на страницу из массива  state.pagination.rangeWithDots
    function renderPagination(){
        const paginationItems = state.pagination.rangeWithDots;
        const currentPageNum =  state.pagination.currentPageNum;
    
        for(let i=0; i<paginationItems.length; i++){
            if(paginationItems[i] == currentPageNum){
                view.renderPageBtn(paginationItems[i], true);
            }else if(paginationItems[i] == '...'){
                view.renderPageBtn(paginationItems[i], false, true);
            }else{
                view.renderPageBtn(paginationItems[i], false);
            }	
        }
    }
}
