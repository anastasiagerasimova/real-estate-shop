import filter from './../filter/filterController';
import sorting from './../sorting/sortingController';
import listing from './../listing/listingController';
import Preloader from './../preloader/preloaderModel';

export default async function(state){
    // function sleep(ms){
    //     return new Promise(resolve =>{
    //         setTimeout(resolve, ms);
    //     });
    // }

    const preloader = new Preloader();
    // Очищаем контеейнер приложения
    document.querySelector('#app').innerHTML = '';

    preloader.render()

    // Запусккаем компонент filter
    await filter(state);

    // Запусккаем компонент sorting
    await sorting(state);

    // Запусккаем компонент listing
    await listing(state);

    preloader.hidePreloader()
}