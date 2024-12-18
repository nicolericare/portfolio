// locations data for each photo on the gallery
const photoLocations = [
    { image: "nature1.JPG", location: "Pocaterra Cirque in Fall" },
    { image: "nature2.jpg", location: "Pocaterra Cirque in Summer" },
    { image: "nature3.JPG", location: "Galatea Lake" },
    { image: "nature4.JPEG", location: "Rockbound Lake" },
    { image: "nature5.jpg", location: "Ptarmigan Cirque Interpretive" },
    { image: "nature6.jpg", location: "Northern Lights in Calgary" },
    { image: "nature7.jpg", location: "Smutwood Peak" },
    { image: "nature8.jpg", location: "Northern Lights in Crossfield, AB" },
    { image: "nature9.jpg", location: "Kananaskis Country" },
    { image: "nature10.jpg", location: "Silver Falls State Park, OR" },
    { image: "nature11.jpg", location: "Little Arethusa Route" },
    { image: "nature12.jpg", location: "Green Monster Icefall" },
];

// populate overtext
document.querySelectorAll(".photo-item").forEach((item, index) => {
    const overlayText = item.querySelector(".photo-overlay p");
    if (photoLocations[index]) {
        overlayText.textContent = `Location: ${photoLocations[index].location}`;
    }
});

document.querySelectorAll(".timeline-container").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.querySelector(".content").style.backgroundColor = "#007acc";
    item.querySelector(".content").style.color = "#fff";
    item.style.transform = "scale(1.1)";
  });

  item.addEventListener("mouseleave", () => {
    item.querySelector(".content").style.backgroundColor = "#f9f9f9";
    item.querySelector(".content").style.color = "#000";
    item.style.transform = "scale(1)";
  });
});

document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('mouseover', () => {
      const code = box.getAttribute('data-code');
      const popup = document.createElement('div');
      popup.classList.add('popup');
      popup.textContent = code;
      document.body.appendChild(popup);
  });

  box.addEventListener('mouseout', () => {
      const popup = document.querySelector('.popup');
      if (popup) {
          popup.remove();
      }
  });
});

// SKILLS icons on resume page 

    document.querySelectorAll('.skill i').forEach(icon => {
        icon.addEventListener('mouseover', () => {
            const title = icon.getAttribute('title');
            icon.setAttribute('data-original-title', title);
            icon.setAttribute('title', '');
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = title;
            document.body.appendChild(tooltip);

            const rect = icon.getBoundingClientRect();
            tooltip.style.left = `${rect.left + window.scrollX}px`;
            tooltip.style.top = `${rect.top + window.scrollY - 30}px`;

            icon.addEventListener('mouseout', () => {
                document.body.removeChild(tooltip);
                icon.setAttribute('title', icon.getAttribute('data-original-title'));
            }, { once: true });
        });
    });

    // cheat sheet
    document.addEventListener('DOMContentLoaded', () => {
        const cards = document.querySelectorAll('.card');
        const popup = document.getElementById('code-popup');
        const popupCode = document.getElementById('popup-code');
        const closePopup = document.getElementById('close-popup');
    
        // popup code for cards when clicked
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const codeSnippet = card.dataset.code; 
                popupCode.textContent = codeSnippet; 
                popup.style.display = 'flex'; 
            });
        });
    
        // closing popup
        closePopup.addEventListener('click', () => {
            popup.style.display = 'none'; //
        });
    
        // close the popup when clicking outside the popup content
        popup.addEventListener('click', (event) => {
            if (event.target === popup) {
                popup.style.display = 'none'; 
            }
        });
    });

    // send me a message box
    document.getElementById('message-form').addEventListener('submit', function (event) {
        event.preventDefault(); 
        const message = document.getElementById('message-box').value.trim();
    
        if (message) {
            const mailtoLink = `mailto:nicolericare9@yahoo.ca?subject=Message from Website&body=${encodeURIComponent(message)}`;
            window.location.href = mailtoLink; 
            alert('Your message has been sent!');
            document.getElementById('message-box').value = ''; 
        } else {
            alert('Please enter a message before sending.');
        }
    });
    