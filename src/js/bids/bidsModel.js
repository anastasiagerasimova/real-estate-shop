export default class Bids{
    constructor(){

    }

    async getBits(){
        try{
            const queryString = 'http://jsproject.webcademy.ru/bids';
            const response = await fetch(queryString);
            const data = await response.json();
            this.bids = await data;
        }catch(error){
            alert(error)
        }
    }
}