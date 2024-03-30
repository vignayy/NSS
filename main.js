document.addEventListener('DOMContentLoaded', function() {
    const eventsContainer = document.getElementById('events-container');
    const eventTemplate = document.getElementById('event-template');

    fetch('events.json')
        .then(response => response.json())
        .then(eventsData => {
            eventsData.forEach(event => {
                const eventClone = eventTemplate.content.cloneNode(true);
                const eventImage = eventClone.querySelector('.event-image img');
                const eventDate = eventClone.querySelector('.event-date span');
                const eventTitle = eventClone.querySelector('h2');
                const eventDescription = eventClone.querySelector('p');
                const learnMoreBtn = eventClone.querySelector('.learn-more-btn');

                eventImage.src = event.image;
                eventImage.alt = `Event photo for ${event.title}`;
                eventDate.textContent = event.date;
                eventTitle.textContent = event.title;
                eventDescription.textContent = event.description;
                learnMoreBtn.textContent = 'Learn More';
                learnMoreBtn.href = event.link; // Set the button's link

                eventsContainer.appendChild(eventClone);
            });
        })
        .catch(error => {
            console.error('Error fetching event data:', error);
        });
});
