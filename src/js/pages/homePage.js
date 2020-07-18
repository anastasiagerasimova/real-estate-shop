import filter from './../filter/filterController';
import sorting from './../sorting/sortingController';
import listing from './../listing/listingController';

export default async function(state){
    // Очищаем контеейнер приложения
    document.querySelector('#app').innerHTML = '';

    // Запусккаем компонент filter
    await filter(state);

    // Запусккаем компонент sorting
    sorting(state);

    // Запусккаем компонент listing
    listing(state);
}