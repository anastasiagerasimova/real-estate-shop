import favoritesCards from './../favoritesCards/favoritesCardController'

export default function(state){    
    document.querySelector('#app').innerHTML = '';

    favoritesCards(state);
}