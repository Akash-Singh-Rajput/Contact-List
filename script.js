document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const contactsList = document.getElementById("contacts");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");

        const name = nameInput.value;
        const email = emailInput.value;

        if (name.trim() === "" || email.trim() === "") {
            alert("Both name and email are required.");
            return;
        }

        addContact(name, email);

        nameInput.value = "";
        emailInput.value = "";
    });

    function addContact(name, email) {
        const contactItem = document.createElement("li");
        contactItem.innerHTML = `
            <span>${name}</span>
            <span>${email}</span>
            <button class="delete">Delete</button>
        `;

        const deleteButton = contactItem.querySelector(".delete");
        deleteButton.addEventListener("click", function () {
            contactsList.removeChild(contactItem);
        });

        contactsList.appendChild(contactItem);
    }
});
