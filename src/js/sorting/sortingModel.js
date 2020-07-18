export default class Sorting{
    constructor(result){
        this.sortedResult = [...result];
        this.readStorage();
    }

    saveData(){
        localStorage.setItem('sortByArr', JSON.stringify(this.sortByArr));
        localStorage.setItem('typeOfView', JSON.stringify(this.typeOfView))
    }

    readStorage(){
        const storageSortBy = JSON.parse(localStorage.getItem('sortByArr'));
        if(storageSortBy){
            this.sortByArr = storageSortBy;
        }else{
            this.sortByArr = ['price_total', 'ASC'];
        }

        const storageType = JSON.parse(localStorage.getItem('typeOfView'));
        if(storageType){
            this.typeOfView = storageType;
        }else{
            this.typeOfView = 'cards';
        }
    }


    sortBy(item, type){
        if(type == 'ASC'){
            this.sortedResult = this.sortedResult.sort(( a, b ) => a[item] - b[item]);
        }else if(type == 'DESC'){
            this.sortedResult = this.sortedResult.sort(( a, b ) => b[item] - a[item]);
        }
    }
}