export function render(){
    const markup = `<div class="view-options-wrapper">
                        <div class="container">
                            <!-- view-options -->
                            <div class="view-options">
                                <div class="view-options__sort">
                                    <label
                                        for="sort-cards-by"
                                        class="view-options__label"
                                        >Сортировать</label
                                    >
                                    <select
                                        id="sort-cards-by"
                                        name="sortby"
                                        id=""
                                        class="view-options__select"
                                    >
                                        <option value="price_total:ASC">по цене ↑</option>
                                        <option value="price_total:DESC">по цене ↓</option>
                                        <option value="square:ASC">по площади ↑</option>
                                        <option value="square:DESC">по площади ↓</option>
                                    </select>
                                </div>
                                <div class="view-options__type">
                                    <!-- Cards -->
                                    <input
                                        type="radio"
                                        class="view-options__radio"
                                        name="displayType"
                                        id="displayCards"
                                        value="cards"
                                        
                                    />
                                    <label
                                        for="displayCards"
                                        class="view-options__type-item"
                                    >
                                        <i class="fas fa-th-large"></i>
                                    </label>
                                    <!-- List -->
                                    <input
                                        type="radio"
                                        class="view-options__radio"
                                        name="displayType"
                                        id="displayList"
                                        value="list"
                                    />
                                    <label
                                        for="displayList"
                                        class="view-options__type-item"
                                    >
                                        <i class="fas fa-bars"></i>
                                    </label>
                                </div>
                            </div>
                            <!-- // view-options -->
                        </div>
                    </div>`

    document.querySelector('#app').insertAdjacentHTML('beforeend', markup);
}

export function getSortSelectionValue(){
    return document.querySelector('#sort-cards-by').value.split(':');
}

export function setSortSelectionValue(value){
    document.querySelector('#sort-cards-by').value = value;
}
