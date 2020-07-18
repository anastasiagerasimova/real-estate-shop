import singleItem from './../singleItem/singleItemController'

export default function(state){
    // Очищаем контеейнер приложения
    document.querySelector('#app').innerHTML = '';

    // Запускаем компонент singleItem
    singleItem(state);
}