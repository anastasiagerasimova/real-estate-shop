import homePage from './pages/homePage';
import singlePage from './pages/singleItemPage';
import favoritesPage from './pages/favoritesPage';
import bidsPage from './pages/bidsPage';
import errorPage from './pages/errorPage';
import EventEmitter from './utils/EventEmitter';
import Favorites from './favorites/favoritesModel';
import Preloader from './preloader/preloaderModel'

const state = {
    result: [],
    emitter: new EventEmitter(),
    favorites: new Favorites()
};

window.state = state

// Routes
const routes = [
    {path: '/', component: homePage},
    {path: 'item', component: singlePage},
    {path: 'favorites', component: favoritesPage},
    {path: 'bids', component: bidsPage}
]

function findComponentByPath(path, routes) {
    return routes.find(function(route){
        return route.path === path;
    })
}

//Router
function router(){
    // Разделение пути по / в массив с элемнтами
    const pathArray = location.hash.split('/');

    // Определение текущего пути
    let currentPath = pathArray[0] === '' ? '/' : pathArray[1];
    currentPath = currentPath === '' ? '/' : currentPath;

    // Извлечение и сохранение в save уникального параметра в маршруте
    state.routeParams = pathArray[2] ? pathArray[2] : '';
    
    // Нахождение компонента под введенный маршрут 
    const {component = errorPage} = findComponentByPath(currentPath, routes) || {};

    component(state);
}

window.addEventListener('load', router)
window.addEventListener('hashchange', router)
