
    const form = document.getElementById('recommendations-form');
    const recommendationsContainer = document.querySelector('.recommendations .card-cmp');

    // Listen for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent page reload

        // Get form data
        const formData = new FormData(form);
        const userName = formData.get('user-name');
        const message = formData.get('msg');
        const date = new Date().toLocaleDateString(); // Get current date
        const isConfirmed = confirm("Do you want to submit this recommendation?");
        if (!isConfirmed) {
            return; // Exit if user cancels
        }
        // Create a new recommendation card
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.innerHTML = `
            <p>${message}</p>
            <span>--${userName}</span>
        `;

        // Add the new card to the recommendations container
        recommendationsContainer.appendChild(newCard);

        // Clear the form fields
        form.reset();
    });
