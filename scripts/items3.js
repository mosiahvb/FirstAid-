document.addEventListener("DOMContentLoaded", function() {
    fetch('/data/level-3.json')
        .then(response => response.json())
        .then(jsonData => {
            const container = document.querySelector('.level-3');

            jsonData.content.forEach(item => {
                // Create a new div
                const div = document.createElement('div');

                // Create and append the h3 element
                const h3 = document.createElement('h3');
                h3.textContent = item.id;
                div.appendChild(h3);

                // Create and append the p element if info is provided
                if (item.info) {
                    const p = document.createElement('p');
                    p.textContent = item.info;
                    div.appendChild(p);
                }

                // Add the video if the video HTML is provided
                if (item.video) {
                    div.innerHTML += item.video;
                }

                // Append the div to the container
                container.appendChild(div);
            });
        })
        .catch(error => console.error('Error loading JSON data:', error));
});
