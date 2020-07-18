export default class FavoritesCards {
    constructor(favsList){
        this.favsList = favsList;
        this.cards = [];
    }

    async getFavs(){
        try{
            const ids = this.favsList.toString();
            if(ids !== ''){
                const queryString = `http://jsproject.webcademy.ru/items?ids=${ids}`;
                const result = await fetch(queryString);
                const data = await result.json();
                this.cards = await data;
            }
        }catch(error){
            alert(error)
        }
    }
}