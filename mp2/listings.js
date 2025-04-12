document.addEventListener("DOMContentLoaded", async () => {
    const listingContainer = document.getElementById("listing-container");
    const listingForm = document.getElementById("listingForm");

    // Fetch existing listings
    async function fetchListings() {
        try {
            const response = await fetch("http://localhost:5500/api/listings");
            const listings = await response.json();

            listingContainer.innerHTML = ""; // Clear previous listings

            if (listings.length === 0) {
                listingContainer.innerHTML = "<p>No listings available.</p>";
                return;
            }

            listings.forEach(listing => {
                const listingDiv = document.createElement("div");
                listingDiv.classList.add("listing");
                listingDiv.innerHTML = `
                    <h2>${listing.title}</h2>
                    <p><strong>Type:</strong> ${listing.property_type} | ${listing.bhk_type}</p>
                    <p><strong>Rent:</strong> ₹${listing.rent_price} | <strong>Deposit:</strong> ₹${listing.deposit_amount}</p>
                    <p><strong>Furnishing:</strong> ${listing.furnishing}</p>
                    <p><strong>Preferred Tenant:</strong> ${listing.preferred_tenant}</p>
                    <p><strong>Max Tenants:</strong> ${listing.max_tenants}</p>
                    <p><strong>Bathrooms:</strong> ${listing.bathroom_count}</p>
                    <p><strong>Amenities:</strong> ${listing.amenities}</p>
                    <p><strong>Parking:</strong> ${listing.parking_availability}</p>
                    <p><strong>Available From:</strong> ${listing.available_from}</p>
                    <p><strong>Address:</strong> ${listing.address.street}, ${listing.address.city}, ${listing.address.state} - ${listing.address.pincode}</p>
                    <p><strong>Landmark:</strong> ${listing.address.landmark}</p>
                    <p><strong>Contact:</strong> 📞 ${listing.contact_info.phone} | ✉️ ${listing.contact_info.email}</p>
                    <div class="image-container">
                     ${listing.property_images ? `<img src="${listing.property_images}" alt="Property Image" width="200">` : ""}
                    </div>
                `;

                listingContainer.appendChild(listingDiv);
            });
        } catch (error) {
            console.error("Error fetching listings:", error);
            listingContainer.innerHTML = "<p>Error loading listings. Please try again.</p>";
        }
    }

    await fetchListings(); // Load listings on page load

    // Handle form submission
    listingForm.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent page refresh

        const formData = new FormData(listingForm); // Use FormData to handle file uploads


        try {
            const response = await fetch("http://localhost:5500/api/listings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            alert(data.message);
            listingForm.reset(); // Clear form
            fetchListings(); // Reload listings
        } catch (error) {
            console.error("Error adding listing:", error);
            alert("Error adding listing. Please try again.");
        }
    });
});


