document.addEventListener("DOMContentLoaded", function() {
    const watchLaterContainer = document.querySelector('.watch-later');
    let watchLaterItems = JSON.parse(localStorage.getItem('watchlist')) || [];

    function renderItems() {
        watchLaterContainer.innerHTML = '';
        watchLaterItems.forEach(item => {

            // Creates each element of the saved Div contents from Local storage from one of the 3 levels.
            const div = document.createElement('div');
            const h3 = document.createElement('h3');
            h3.textContent = item.id;
            div.appendChild(h3);
            if (item.info) {
                const p = document.createElement('p');
                p.textContent = item.info;
                div.appendChild(p);
            }
            if (item.video) {
                div.innerHTML += item.video;
            }

            // Creating a Finished button
            const finishedButton = document.createElement('button');
            finishedButton.textContent = "Finished";
            finishedButton.addEventListener('click', () => remove(item.id));
            div.appendChild(finishedButton);

            // append!!!
            watchLaterContainer.appendChild(div);
        });
    }

    //Remove function 
    function remove(id) {
        watchLaterItems = watchLaterItems.filter(item => item.id !== id);
        localStorage.setItem('watchLater', JSON.stringify(watchLaterItems));
        renderItems();
    }

    renderItems();
});
