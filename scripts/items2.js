document.addEventListener("DOMContentLoaded", function() {
    fetch('../data/level-2.json')
        .then(response => response.json())
        .then(jsonData => {
            const container = document.querySelector('.level-2');

            jsonData.content.forEach(item => {
                // Creates div
                const div = document.createElement('div');

                // Creates h3
                const h3 = document.createElement('h3');
                h3.textContent = item.id;
                div.appendChild(h3);

                // Creates p
                if (item.info) {
                    const p = document.createElement('p');
                    p.textContent = item.info;
                    div.appendChild(p);
                }

                // Adds video link
                if (item.video) {
                    div.innerHTML += item.video;
                }

                 // Create watch list button
                 const watchLaterButton = document.createElement('button');
                 watchLaterButton.textContent = "Add to Watch List";
                 watchLaterButton.addEventListener('click', () => addToWatchList(item));
                 div.appendChild(watchLaterButton);
 
                 // append
                 container.appendChild(div);
             });
        })
        .catch(error => console.error('Error loading JSON data:', error));
});

function addToWatchList(item) {
    let watchLaterItems = JSON.parse(localStorage.getItem('watchlist')) || [];
    if (!watchLaterItems.some(i => i.id === item.id)) {
        watchLaterItems.push(item);
        localStorage.setItem('watchlist', JSON.stringify(watchLaterItems));
        alert('Added to watch list');
    } else {
        alert('Already in watch list');
    }
}