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

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for Contact link
    const contactLink = document.querySelector('a[href="#about-us"]');
    contactLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      const aboutUsSection = document.querySelector('.about-us-container');
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const aboutUsOffsetTop = aboutUsSection.offsetTop - navbarHeight;
      window.scrollTo({
        top: aboutUsOffsetTop,
        behavior: 'smooth' // Smooth scroll to the About Us section
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Show/hide scroll-to-top button based on user scroll
    window.addEventListener('scroll', function() {
      const scrollToTopBtn = document.getElementById('scrollToTopBtn');
      if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    });
  
    // Smooth scroll to top when the button is clicked
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll to top
      });
    });
  });
  