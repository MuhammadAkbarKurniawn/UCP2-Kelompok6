document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Create an alert with form values
        alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    });
});

//modal
function openModal(productId, imageUrl, title, description) {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modal-image').src = imageUrl;
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
