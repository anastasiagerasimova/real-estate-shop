import bids from './../bids/bidsController';
import pagination from './../pagination/paginationController'

export default function(state){
    //Очищаем контейнер app
    document.querySelector('#app').innerHTML = '';

    // Запускаем компонент bids
    bids(state);

    // Запускаем компонент pagination
    pagination(state);
}