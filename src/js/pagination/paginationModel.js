export default class Pagination{
    constructor(currentPageNum, delta){
        this.currentPageNum = currentPageNum;
        this.delta = delta;
        this.range = [];
        this.rangeWithDots = [];
        this.readStorage();
    }

    saveData(){
        localStorage.setItem('pageNum', JSON.stringify(this.currentPageNum))
    }

    readStorage(){
        const storage = JSON.parse(localStorage.getItem('pageNum'));
        if(storage){
            this.currentPageNum = storage;
        }
        // else{
        //     this.currentPageNum = 1;
        // }
    }

    async getPaginationSize(){
        try{
            const queryString = 'http://jsproject.webcademy.ru/bids';
            const response = await fetch(queryString);
            const data = await response.json();
            const dataLen = await data.length;
            this.paginationSize = Math.ceil(dataLen/10);
        }catch(error){
            alert(error)
        }
    }

    creatRange(){
        let left = this.currentPageNum - this.delta,
        right = this.currentPageNum + this.delta + 1,
        l = null;

        this.range = [];
        this.rangeWithDots = [];

        for(let i=1; i<=this.paginationSize; i++){
            if(i == 1 || i == this.paginationSize || i >= left && i < right){
                this.range.push(i);
            }
        }

        for(let i of this.range){
            if(l){
                if(i-l === 2){
                    this.rangeWithDots.push(l+1);
                }else if(i-l !== 1){
                    this.rangeWithDots.push('...');
                }
            }
            this.rangeWithDots.push(i);
            l = i;
        }
    }
}