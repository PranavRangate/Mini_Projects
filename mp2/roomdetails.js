// Add this sample data at the top of your file
const sampleImages = [
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3',  // Living Room
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3',  // Bedroom
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3',  // Kitchen
    'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3',     // Bathroom
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3'   // House Front
];

// When the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Get the room data from localStorage
    const roomData = localStorage.getItem('currentRoom');
    
    if (!roomData) {
        console.error('No room data found');
        window.location.href = 'searchresults.html';
        return;
    }

    try {
        const room = JSON.parse(roomData);
        displayRoomDetails(room);
    } catch (error) {
        console.error('Error parsing room data:', error);
        window.location.href = 'searchresults.html';
    }
});

// Function to display room details
function displayRoomDetails(room) {
    const container = document.getElementById('roomDetails');
    
    container.innerHTML = `
        <div class="room-details-container">
            <div class="image-gallery">
                <img src="${room.images[0]}" alt="${room.title}" class="main-image">
            </div>
            
            <div class="details-content">
                <div class="header-section">
                    <div class="title-location">
                        <h1>${room.title}</h1>
                        <p class="location"><i class="fas fa-map-marker-alt"></i> ${room.location}</p>
                    </div>
                </div>
                
                <div class="quick-info">
                    <div class="info-item">
                        <i class="fas fa-home"></i>
                        <span>${room.basicInfo.propertyType}</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-bed"></i>
                        <span>${room.roomDetails.bedrooms} Bedrooms</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-bath"></i>
                        <span>${room.roomDetails.bathrooms} Bathrooms</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-couch"></i>
                        <span>${room.basicInfo.furnishingStatus}</span>
                    </div>
                </div>

                <div class="detail-section">
                    <h2>Description</h2>
                    <p>${room.description}</p>
                </div>

                <div class="detail-section">
                    <h2>Property Details</h2>
                    <div class="details-grid">
                        <div class="detail-item">
                            <span class="label">Available From</span>
                            <span class="value">${room.basicInfo.availableFrom}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Floor</span>
                            <span class="value">${room.basicInfo.floorNumber}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Preferred Tenants</span>
                            <span class="value">${room.basicInfo.preferredTenants}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Size</span>
                            <span class="value">${room.roomDetails.size} sq ft</span>
                        </div>
                    </div>
                </div>

                <div class="detail-section">
                    <h2>Pricing</h2>
                    <div class="details-grid">
                        <div class="detail-item">
                            <span class="label">Monthly Rent</span>
                            <span class="value">₹${room.pricing.monthlyRent}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Security Deposit</span>
                            <span class="value">₹${room.pricing.securityDeposit}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Food Charges</span>
                            <span class="value">${room.pricing.foodCharges}</span>
                        </div>
                    </div>
                </div>

                <div class="detail-section">
                    <h2>Amenities</h2>
                    <div class="amenities-grid">
                        ${Object.entries(room.amenities).map(([category, items]) => `
                            <div class="amenity-category">
                                <h3>${category}</h3>
                                <ul>
                                    ${items.map(item => `
                                        <li><i class="fas fa-check"></i> ${item}</li>
                                    `).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="detail-section">
                    <h2>Contact Owner</h2>
                    <div class="owner-details">
                        <p><i class="fas fa-user"></i> ${room.owner.name}</p>
                        <p><i class="fas fa-phone"></i> ${room.owner.contact}</p>
                        <p><i class="fas fa-envelope"></i> ${room.owner.email}</p>
                        <div class="contact-buttons">
                            <button onclick="contactOwner('${room.owner.contact}')" class="contact-btn">
                                <i class="fas fa-phone"></i> Call Owner
                            </button>
                            <button onclick="contactWhatsapp('${room.owner.contact}')" class="whatsapp-btn">
                                <i class="fab fa-whatsapp"></i> WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function contactOwner(contact) {
    window.location.href = `tel:${contact}`;
}

function contactWhatsapp(contact) {
    const whatsappNumber = contact.replace(/\D/g, '');
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
}

// Add this at the top of your roomdetails.js file
function goBackToSearch() {
    // Get the stored search parameters
    const searchParams = localStorage.getItem('searchParams');
    
    if (searchParams) {
        // If we have search parameters, include them in the URL
        window.location.href = `searchresults.html?${searchParams}`;
    } else {
        // Default fallback
        window.location.href = 'searchresults.html';
    }
}

// Then update the HTML for the back button
document.querySelector('.back-btn').onclick = function(e) {
    e.preventDefault();
    goBackToSearch();
};

// Make sure roomDatabase is available in this file
const roomDatabase = [
    {
        id: '1',
        title: 'Modern 2BHK Apartment',
        location: 'Koramangala, Bangalore',
        images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3'],
        pricing: {
            monthlyRent: 25000,
            securityDeposit: 50000,
            foodCharges: 'Not Included'
        },
        basicInfo: {
            propertyType: 'Apartment',
            floorNumber: '3rd Floor',
            furnishingStatus: 'Fully Furnished',
            availableFrom: 'Immediate',
            preferredTenants: 'Family/Bachelors'
        },
        roomDetails: {
            bedrooms: 2,
            bathrooms: 2,
            size: '1200'
        },
        amenities: {
            'Basic': ['Water Supply', 'Electricity Backup', 'Lift'],
            'Security': ['CCTV', '24/7 Security'],
            'Others': ['Parking', 'Park', 'Gym']
        },
        owner: {
            name: 'John Doe',
            contact: '+91 9876543210',
            email: 'john@example.com'
        },
        description: 'A beautiful modern apartment with all amenities'
    },
    // ... other room data ...
]; 