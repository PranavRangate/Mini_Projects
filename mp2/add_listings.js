document.addEventListener("DOMContentLoaded", () => {
    const listingForm = document.getElementById("listingForm");

    listingForm.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(listingForm);

        try {
            const response = await fetch("http://localhost:5500/api/listings", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (response.ok) {
                alert("Listing added successfully!");
                listingForm.reset();
            } else {
                alert("Error: " + result.message);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to add listing. Please try again.");
        }
    });
});
