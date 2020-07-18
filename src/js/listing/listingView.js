export function renderCardContainer(){
    const markup = `<div class="cards-wrapper">
                        <div class="container p-0">
                            <div id="listingContainer" class="row">
                            </div>
                        </div>
                    </div>`;

    document.querySelector('#app').insertAdjacentHTML('beforeend', markup)
}

export function renderPanelContainer(){
    const markup = `<div class="panels-wrapper">
                        <div class="container p-0" id="panelContainer">
                        </div>
                    </div>`;

    document.querySelector('#app').insertAdjacentHTML('beforeend', markup)
}

export function renderCard(object, isFaved){
    const listingContainer = document.querySelector('#listingContainer');

    const markup = `<article class="col-md-4">
                        <!-- card -->
                        <a href="#/item/${object.id}" class="card" data-id=${object.id}>
                            <div class="card__header">
                                <div class="card__title">
                                    ЖК ${object.complex_name}
                                </div>
                                <div class="card__like ${isFaved ? 'card__like--active' : ''}">
                                    <i class="fas fa-heart"></i>
                                </div>
                            </div>
                            <div class="card__img">
                                <img src=${object.image} alt="План квартиры" />
                            </div>
                            <div class="card__desc">
                                <div class="card__price">
                                    <div class="card__price-total">
                                        ${object.price_total} ₽
                                    </div>
                                    <div class="card__price-per-meter">
                                        ${object.price_sq_m} ₽/м2
                                    </div>
                                </div>

                                <!-- card__params params -->
                                <div class="card__params params">
                                    <div class="params__item">
                                        <div class="params__definition">
                                            Комнат
                                        </div>
                                        <div class="params__value">${object.rooms}</div>
                                    </div>
                                    <div class="params__item">
                                        <div class="params__definition">
                                            Площадь
                                        </div>
                                        <div class="params__value">${object.square}</div>
                                    </div>
                                </div>
                                <!-- //card__params params -->
                            </div>
                            <div class="card__footer">
                                <div class="card__art">${object.scu}</div>
                                <div class="card__floor">Этаж ${object.floor} из ${object.floors_total}</div>
                            </div>
                        </a>
                        <!-- // card -->
                    </article>`;

    listingContainer.insertAdjacentHTML('beforeend', markup);
}

export function renderPanelFilter(){
    const panelContainer = document.querySelector('#panelContainer');

    const markup = `<div class="panels-filter">
                        <div
                            class="panels-filter__element"
                            style="width: 120px;"
                        >
                            <div class="panels-filter__name no-filter">
                                Артикул
                            </div>
                        </div>
                        <div
                            class="panels-filter__element"
                            style="width: 160px;"
                        >
                            <div class="panels-filter__name">ЖК</div>
                        </div>
                        <div
                            class="panels-filter__element"
                            style="width: 70px;"
                        >
                            <div class="panels-filter__name no-filter">
                                Корпус
                            </div>
                        </div>
                        <div
                            class="panels-filter__element"
                            style="width: 70px;"
                        >
                            <div class="panels-filter__name no-filter">
                                Этаж
                            </div>
                        </div>
                        <div
                            class="panels-filter__element"
                            style="width: 70px;"
                        >
                            <div class="panels-filter__name">Комнат</div>
                        </div>
                        <div
                            class="panels-filter__element"
                            style="width: 80px;"
                        >
                            <div class="panels-filter__name">Площадь</div>
                        </div>
                        <div
                            class="panels-filter__element"
                            style="width: 100px;"
                        >
                            <div class="panels-filter__name">м2</div>
                        </div>
                        <div
                            class="panels-filter__element"
                            style="width: 100px;"
                        >
                            <div class="panels-filter__name">Стоимость</div>
                        </div>

                        <div
                            class="panels-filter__element"
                            style="width: 100px;"
                        >
                            <div class="panels-filter__name no-filter">
                                Избранное
                            </div>
                        </div>
                    </div>`

    panelContainer.insertAdjacentHTML('afterbegin', markup);     
}

export function renderPanel(object, isFaved){
    const panelContainer = document.querySelector('#panelContainer');

    const markup = `<!-- panel -->
                    <a href="#/item/${object.id}" class="panel" data-id=${object.id}>
                        <div class="panel__artikul">${object.scu}</div>
                        <div class="panel__name">
                            <div>${object.complex_name}</div>
                        </div>
                        <div class="panel__block">${object.building}</div>
                        <div class="panel__floor">${object.floor}</div>
                        <div class="panel__rooms">${object.rooms}</div>
                        <div class="panel__sq">${object.square} м2</div>
                        <div class="panel__price-per-m">${object.price_sq_m} ₽</div>
                        <div class="panel__price">${object.price_total} ₽</div>
                        <div class="panel__favourite">
                            <button class="panel__favourite-btn ${isFaved ? 'panel__favourite-btn--active' : ''}">
                                <i class="fas fa-heart"></i>
                            </button>
                        </div>
                    </a>
                    <!-- // panel -->`

    panelContainer.insertAdjacentHTML('beforeend', markup);
}

export function clearCardContainer(){
    const listingContainer = document.querySelector('#listingContainer');
    listingContainer.innerHTML = '';
}

export function clearPanelContainer(){
    const panelContainer = document.querySelector('#panelContainer');
    panelContainer.innerHTML = '';
}

export function toggleFavoriteIcon(elementIcon, isFaved){
    if(isFaved){
        elementIcon.classList.add('card__like--active');
        elementIcon.classList.add('panel__favourite-btn--active');
    }else{
        elementIcon.classList.remove('card__like--active');
        elementIcon.classList.remove('panel__favourite-btn--active');
    }
}