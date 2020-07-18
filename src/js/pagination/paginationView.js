export function renderContainer(){
    const markup = `<div class="container p-0">
                        <ul class="pagination">
                        </ul>
                    </div>`;

    document.querySelector('#app').insertAdjacentHTML('beforeend', markup)
}

export function renderPageBtn(i, current, dots){
    const markup = `<li class="pagination__page ${current ? 'pagination__page--active' : ''} ${dots ? 'pagination__page--disabled' : ''}">
                        <a href="#" class="pagination__link">${i}</a>
                    </li>`

    document.querySelector('.pagination').insertAdjacentHTML('beforeend', markup);
}

export function clearPaginationContainer(){
    document.querySelector('.pagination').innerHTML = '';
}