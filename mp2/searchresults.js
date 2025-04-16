// Sample room database with detailed information
const roomDatabase = [
    // ICHALKARANJI PROPERTIES
    {
        id: 1,
        type: 'fullHouse',
        bhkType: '1bhk',
        location: 'Ichalkaranji',
        title: 'Modern 1 BHK Near D.Y. Patil College',
        description: 'Newly renovated 1 BHK apartment with modern amenities, perfect for small families or working professionals.',
        basicInfo: {
            propertyType: 'Apartment',
            floorNumber: '2nd Floor',
            furnishingStatus: 'Semi-Furnished',
            availableFrom: '2024-04-01',
            preferredTenants: 'Family/Working Professionals'
        },
        roomDetails: {
            size: 550,
            bedrooms: 1,
            bathrooms: 1,
            balconies: 1,
            facing: 'East',
            flooringType: 'Vitrified Tiles'
        },
        pricing: {
            monthlyRent: 8000,
            securityDeposit: 24000,
            maintenanceCharges: 500,
            negotiable: true,
            includedCharges: ['Water Charges'],
            excludedCharges: ['Electricity', 'Gas']
        },
        amenities: {
            furnishing: ['Modular Kitchen', 'Wardrobes', 'Fans', 'Lights'],
            appliances: ['Water Purifier', 'Exhaust Fan'],
            security: ['CCTV', 'Security Guard', 'Intercom']
        },
        images: ['img/Available Rooms/1bhk-1.jpg'],
        owner: {
            name: 'Mr. Patil',
            contact: '+91 9876543210',
            email: 'patil@email.com',
            verified: true
        }
    },
    {
        id: 2,
        type: 'fullHouse',
        bhkType: '2bhk',
        location: 'Ichalkaranji',
        title: 'Spacious 2 BHK in Shahu Nagar',
        description: 'Beautiful 2 BHK with garden view and modern amenities in prime location.',
        basicInfo: {
            propertyType: 'Apartment',
            floorNumber: '3rd Floor',
            furnishingStatus: 'Fully Furnished',
            availableFrom: 'Immediate',
            preferredTenants: 'Family'
        },
        roomDetails: {
            size: 850,
            bedrooms: 2,
            bathrooms: 2,
            balconies: 1,
            facing: 'South',
            flooringType: 'Marble'
        },
        pricing: {
            monthlyRent: 12000,
            securityDeposit: 36000,
            maintenanceCharges: 800,
            negotiable: true,
            includedCharges: ['Water Charges', 'Parking'],
            excludedCharges: ['Electricity']
        },
        amenities: {
            furnishing: ['Modular Kitchen', 'Wardrobes', 'Sofa', 'Dining Table'],
            appliances: ['AC', 'Geyser', 'Water Purifier'],
            security: ['CCTV', 'Security Guard', 'Gated Community']
        },
        images: ['img/Available Rooms/2bhk-1.jpg'],
        owner: {
            name: 'Mrs. Desai',
            contact: '+91 9876543211',
            email: 'desai@email.com',
            verified: true
        }
    },
    {
        id: 3,
        type: 'pgHostel',
        bhkType: 'single',
        location: 'Ichalkaranji',
        title: 'Boys PG near Engineering College',
        description: 'Well-maintained single room PG with all facilities and home-cooked meals.',
        basicInfo: {
            propertyType: 'PG/Hostel',
            floorNumber: '1st Floor',
            furnishingStatus: 'Fully Furnished',
            availableFrom: 'Immediate',
            preferredTenants: 'Students'
        },
        roomDetails: {
            size: 150,
            occupancy: 'Single',
            bathroom: 'Attached',
            studyTable: true,
            storage: 'Personal Wardrobe'
        },
        pricing: {
            monthlyRent: 5500,
            securityDeposit: 11000,
            foodCharges: 2500,
            includedCharges: ['Electricity', 'Water', 'WiFi', 'Housekeeping']
        },
        amenities: {
            furnishing: ['Bed', 'Study Table', 'Chair', 'Wardrobe'],
            facilities: ['WiFi', 'Laundry', 'TV Room'],
            meals: '3 Times Daily'
        },
        images: ['img/Available Rooms/pg-1.jpg'],
        owner: {
            name: 'Mr. Shah',
            contact: '+91 9876543212',
            email: 'shah@email.com',
            verified: true
        }
    },
    // 1 BHK Full House Options
    {
        id: 4,
        type: 'fullHouse',
        bhkType: '1bhk',
        location: 'Kolhapur',
        title: 'Spacious 1 BHK in Rajarampuri',
        description: 'Well-maintained 1 BHK with excellent ventilation and premium amenities.',
        basicInfo: {
            propertyType: 'Apartment',
            floorNumber: '3rd Floor',
            furnishingStatus: 'Fully Furnished',
            availableFrom: 'Immediate',
            preferredTenants: 'Family'
        },
        roomDetails: {
            size: 550,
            bedrooms: 1,
            bathrooms: 1,
            balconies: 1,
            facing: 'West',
            flooringType: 'Marble'
        },
        pricing: {
            monthlyRent: 10000,
            securityDeposit: 30000,
            maintenanceCharges: 500,
            negotiable: true,
            includedCharges: ['Water Charges'],
            excludedCharges: ['Electricity', 'Gas']
        },
        amenities: {
            furnishing: ['Modular Kitchen', 'Wardrobes', 'Fans', 'Lights'],
            appliances: ['Water Purifier', 'Exhaust Fan'],
            security: ['CCTV', 'Security Guard', 'Intercom']
        },
        images: ['img/Available Rooms/1bhk-2.jpg'],
        owner: {
            name: 'Mr. Desai',
            contact: '+91 9876543211',
            email: 'desai@email.com',
            verified: true
        }
    },
    {
        id: 5,
        type: 'fullHouse',
        bhkType: '2bhk',
        location: 'Kolhapur',
        title: 'Spacious 2 BHK in Rajarampuri',
        description: 'Well-maintained 2 BHK with excellent ventilation and premium amenities.',
        basicInfo: {
            propertyType: 'Apartment',
            floorNumber: '3rd Floor',
            furnishingStatus: 'Fully Furnished',
            availableFrom: 'Immediate',
            preferredTenants: 'Family'
        },
        roomDetails: {
            size: 850,
            bedrooms: 2,
            bathrooms: 2,
            balconies: 2,
            facing: 'West',
            flooringType: 'Marble'
        },
        pricing: {
            monthlyRent: 15000,
            securityDeposit: 45000,
            maintenanceCharges: 1000,
            negotiable: true,
            includedCharges: ['Water Charges', 'Parking'],
            excludedCharges: ['Electricity']
        },
        amenities: {
            furnishing: ['Modular Kitchen', 'Wardrobes', 'Sofa', 'Dining Table'],
            appliances: ['AC', 'Geyser', 'Water Purifier'],
            security: ['CCTV', 'Security Guard', 'Gated Community']
        },
        images: ['img/Available Rooms/2bhk-2.jpg'],
        owner: {
            name: 'Mrs. Desai',
            contact: '+91 9876543211',
            email: 'desai@email.com',
            verified: true
        }
    },
    // PG/Hostel Options
    {
        id: 6,
        type: 'pgHostel',
        bhkType: 'single',
        location: 'Kolhapur',
        title: 'Premium Single Room PG near College',
        description: 'Comfortable single occupancy room with attached bathroom and all meals included.',
        basicInfo: {
            propertyType: 'PG/Hostel',
            floorNumber: '1st Floor',
            furnishingStatus: 'Fully Furnished',
            availableFrom: 'Immediate',
            preferredTenants: 'Students/Working Professionals'
        },
        roomDetails: {
            size: 150,
            occupancy: 'Single',
            bathroom: 'Attached',
            studyTable: true,
            storage: 'Personal Wardrobe'
        },
        pricing: {
            monthlyRent: 6000,
            securityDeposit: 12000,
            foodCharges: 3000,
            includedCharges: ['Electricity', 'Water', 'WiFi', 'Housekeeping']
        },
        amenities: {
            furnishing: ['Bed', 'Study Table', 'Chair', 'Wardrobe'],
            facilities: ['WiFi', 'Laundry', 'TV Room', 'Kitchen'],
            meals: '3 Times Daily'
        },
        images: ['img/Available Rooms/pg-3.jpg'],
        owner: {
            name: 'Mr. Shah',
            contact: '+91 9876543212',
            email: 'shah@email.com',
            verified: true
        }
    },
    {
        id: 7,
        type: 'pgHostel',
        bhkType: 'double',
        location: 'Kolhapur',
        title: 'Comfortable Double Sharing Room',
        description: 'Well-furnished double sharing room with modern amenities and hygienic food.',
        basicInfo: {
            propertyType: 'PG/Hostel',
            floorNumber: '2nd Floor',
            furnishingStatus: 'Fully Furnished',
            availableFrom: '2024-03-15',
            preferredTenants: 'Students'
        },
        roomDetails: {
            size: 200,
            occupancy: 'Double Sharing',
            bathroom: 'Attached',
            studyTable: true,
            storage: 'Individual Wardrobes'
        },
        pricing: {
            monthlyRent: 4500,
            securityDeposit: 9000,
            foodCharges: 2500,
            includedCharges: ['All Utilities', 'Meals', 'WiFi']
        },
        amenities: {
            furnishing: ['Beds', 'Study Tables', 'Chairs', 'Wardrobes'],
            facilities: ['WiFi', 'Laundry', 'Common Room'],
            meals: '3 Times Daily'
        },
        images: ['img/Available Rooms/pg-4.jpg'],
        owner: {
            name: 'Mrs. Joshi',
            contact: '+91 9876543213',
            email: 'joshi@email.com',
            verified: true
        }
    },
    // Flatmate Options
    {
        id: 8,
        type: 'flatmates',
        bhkType: 'male',
        location: 'Kolhapur',
        title: 'Male Flatmate Required for 3BHK',
        description: 'Looking for a male flatmate in a well-maintained 3BHK apartment. Private room available.',
        basicInfo: {
            propertyType: 'Shared Apartment',
            floorNumber: '4th Floor',
            furnishingStatus: 'Fully Furnished',
            availableFrom: 'Immediate',
            preferredTenants: 'Working Male'
        },
        roomDetails: {
            size: 300,
            totalRooms: 3,
            sharedBathroom: false,
            balcony: true,
            storage: 'Personal Wardrobe'
        },
        pricing: {
            monthlyRent: 5000,
            securityDeposit: 10000,
            billsSharing: 'Equal Split',
            includedCharges: ['Maintenance'],
            excludedCharges: ['Electricity', 'Water', 'Internet']
        },
        amenities: {
            furnishing: ['Bed', 'Wardrobe', 'Common TV'],
            facilities: ['WiFi', 'Washing Machine', 'Fridge'],
            rules: 'No overnight guests'
        },
        images: ['img/Available Rooms/flatmate-3.jpg'],
        owner: {
            name: 'Mr. Kumar',
            contact: '+91 9876543214',
            email: 'kumar@email.com',
            verified: true
        }
    },
    {
        id: 9,
        type: 'flatmates',
        bhkType: 'female',
        location: 'Kolhapur',
        title: 'Female Flatmate for 2BHK',
        description: 'Seeking female flatmate for a furnished 2BHK. Safe locality with good connectivity.',
        basicInfo: {
            propertyType: 'Shared Apartment',
            floorNumber: '5th Floor',
            furnishingStatus: 'Semi-Furnished',
            availableFrom: '2024-04-01',
            preferredTenants: 'Working Female'
        },
        roomDetails: {
            size: 250,
            totalRooms: 2,
            sharedBathroom: true,
            balcony: true,
            storage: 'Built-in Wardrobe'
        },
        pricing: {
            monthlyRent: 4500,
            securityDeposit: 9000,
            billsSharing: 'Equal Split',
            includedCharges: ['Maintenance'],
            excludedCharges: ['Utilities']
        },
        amenities: {
            furnishing: ['Bed', 'Wardrobe', 'Kitchen Appliances'],
            facilities: ['WiFi', 'Security'],
            rules: 'No late night entry'
        },
        images: ['img/Available Rooms/flatmate-4.jpg'],
        owner: {
            name: 'Ms. Sharma',
            contact: '+91 9876543215',
            email: 'sharma@email.com',
            verified: true
        }
    },
    // Add these entries to your existing roomDatabase array

    // ICHALKARANJI PROPERTIES (continued)
    {
        id: 4,
        type: 'pgHostel',
        bhkType: 'double',
        location: 'Ichalkaranji',
        title: 'Girls PG with AC Rooms',
        description: 'Safe and secure PG accommodation for girls with AC rooms and quality food.',
        basicInfo: {
            propertyType: 'PG/Hostel',
            floorNumber: '2nd Floor',
            furnishingStatus: 'Fully Furnished',
            availableFrom: 'Immediate',
            preferredTenants: 'Female Students/Working Women'
        },
        roomDetails: {
            size: 200,
            occupancy: 'Double Sharing',
            bathroom: 'Attached',
            studyTable: true,
            storage: 'Individual Wardrobes',
            AC: true
        },
        pricing: {
            monthlyRent: 7000,
            securityDeposit: 14000,
            foodCharges: 3000,
            includedCharges: ['AC', 'Electricity', 'Water', 'WiFi']
        },
        amenities: {
            furnishing: ['Beds', 'Study Tables', 'Chairs', 'Wardrobes'],
            facilities: ['AC', 'WiFi', 'Laundry', 'TV Room'],
            meals: '3 Times Daily'
        },
        images: ['img/Available Rooms/pg-2.jpg'],
        owner: {
            name: 'Mrs. Patil',
            contact: '+91 9876543213',
            email: 'patil.pg@email.com',
            verified: true
        }
    },
    {
        id: 5,
        type: 'fullHouse',
        bhkType: '3bhk',
        location: 'Ichalkaranji',
        title: 'Luxury 3 BHK with Garden View',
        description: 'Premium 3 BHK apartment with modern amenities and spacious rooms.',
        basicInfo: {
            propertyType: 'Apartment',
            floorNumber: '4th Floor',
            furnishingStatus: 'Fully Furnished',
            availableFrom: '2024-03-15',
            preferredTenants: 'Family'
        },
        roomDetails: {
            size: 1200,
            bedrooms: 3,
            bathrooms: 2,
            balconies: 2,
            facing: 'Garden View',
            flooringType: 'Italian Marble'
        },
        pricing: {
            monthlyRent: 18000,
            securityDeposit: 54000,
            maintenanceCharges: 1200,
            negotiable: true,
            includedCharges: ['Water Charges', 'Parking', 'Club House'],
            excludedCharges: ['Electricity']
        },
        amenities: {
            furnishing: ['Modular Kitchen', 'Wardrobes', 'Sofa Set', 'Dining Table'],
            appliances: ['AC', 'Geyser', 'Water Purifier', 'Washing Machine'],
            security: ['CCTV', '24x7 Security', 'Intercom']
        },
        images: ['img/Available Rooms/3bhk-1.jpg'],
        owner: {
            name: 'Mr. Sharma',
            contact: '+91 9876543214',
            email: 'sharma@email.com',
            verified: true
        }
    },

    // KOLHAPUR PROPERTIES
    {
        id: 6,
        type: 'fullHouse',
        bhkType: '2bhk',
        location: 'Kolhapur',
        title: 'Modern 2 BHK in Rajarampuri',
        description: 'Newly constructed 2 BHK with premium amenities and city view.',
        basicInfo: {
            propertyType: 'Apartment',
            floorNumber: '5th Floor',
            furnishingStatus: 'Semi-Furnished',
            availableFrom: 'Immediate',
            preferredTenants: 'Family/Working Professionals'
        },
        roomDetails: {
            size: 900,
            bedrooms: 2,
            bathrooms: 2,
            balconies: 1,
            facing: 'City View',
            flooringType: 'Vitrified Tiles'
        },
        pricing: {
            monthlyRent: 15000,
            securityDeposit: 45000,
            maintenanceCharges: 1000,
            negotiable: true,
            includedCharges: ['Water Charges'],
            excludedCharges: ['Electricity', 'Gas']
        },
        amenities: {
            furnishing: ['Modular Kitchen', 'Wardrobes'],
            appliances: ['Geyser', 'Water Purifier'],
            security: ['CCTV', 'Security Guard']
        },
        images: ['img/Available Rooms/2bhk-2.jpg'],
        owner: {
            name: 'Mr. Kulkarni',
            contact: '+91 9876543215',
            email: 'kulkarni@email.com',
            verified: true
        }
    },
    {
        id: 7,
        type: 'pgHostel',
        bhkType: 'triple',
        location: 'Kolhapur',
        title: 'Budget Friendly PG near Railway Station',
        description: 'Comfortable triple sharing PG with basic amenities and good connectivity.',
        basicInfo: {
            propertyType: 'PG/Hostel',
            floorNumber: '1st Floor',
            furnishingStatus: 'Furnished',
            availableFrom: 'Immediate',
            preferredTenants: 'Students/Working Professionals'
        },
        roomDetails: {
            size: 250,
            occupancy: 'Triple Sharing',
            bathroom: 'Shared',
            studyTable: true,
            storage: 'Individual Lockers'
        },
        pricing: {
            monthlyRent: 4000,
            securityDeposit: 8000,
            foodCharges: 2000,
            includedCharges: ['Electricity', 'Water', 'WiFi']
        },
        amenities: {
            furnishing: ['Beds', 'Study Tables', 'Chairs'],
            facilities: ['WiFi', 'Common TV', 'Water Purifier'],
            meals: '3 Times Daily'
        },
        images: ['img/Available Rooms/pg-3.jpg'],
        owner: {
            name: 'Mrs. Joshi',
            contact: '+91 9876543216',
            email: 'joshi@email.com',
            verified: true
        }
    },

    // SANGLI PROPERTIES
    {
        id: 8,
        type: 'flatmates',
        bhkType: 'male',
        location: 'Sangli',
        title: 'Male Flatmate for 3BHK in Vishrambag',
        description: 'Looking for male flatmate in a well-maintained 3BHK apartment.',
        basicInfo: {
            propertyType: 'Shared Apartment',
            floorNumber: '3rd Floor',
            furnishingStatus: 'Fully Furnished',
            availableFrom: 'Immediate',
            preferredTenants: 'Working Male'
        },
        roomDetails: {
            size: 300,
            totalRooms: 3,
            sharedBathroom: false,
            balcony: true,
            storage: 'Personal Wardrobe'
        },
        pricing: {
            monthlyRent: 6000,
            securityDeposit: 12000,
            billsSharing: 'Equal Split',
            includedCharges: ['Maintenance'],
            excludedCharges: ['Electricity', 'Water', 'Internet']
        },
        amenities: {
            furnishing: ['Bed', 'Wardrobe', 'Common TV'],
            facilities: ['WiFi', 'Washing Machine', 'Fridge'],
            rules: 'No overnight guests'
        },
        images: ['img/Available Rooms/flatmate-1.jpg'],
        owner: {
            name: 'Mr. Deshmukh',
            contact: '+91 9876543217',
            email: 'deshmukh@email.com',
            verified: true
        }
    }
    // Add more entries as needed...
];

// First ensure rooms are displayed
document.addEventListener('DOMContentLoaded', () => {
    // Get search parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    const location = urlParams.get('location');
    const propertyType = urlParams.get('propertyType');
    const bhkType = urlParams.get('bhkType');
    
    // Update the showing results text
    document.getElementById('searchResults').innerHTML = `
        <div class="available-rooms">
            <h1>Available Rooms</h1>
            <p class="showing-results">Showing results for: ${location ? location.charAt(0).toUpperCase() + location.slice(1) : 'All Locations'}</p>
        </div>
    `;

    // Filter rooms based on search criteria
    let filteredRooms = roomDatabase;

    // Filter by location if specified
    if (location) {
        filteredRooms = filteredRooms.filter(room => 
            room.location.toLowerCase() === location.toLowerCase()
        );
    }

    // Filter by property type if specified
    if (propertyType) {
        filteredRooms = filteredRooms.filter(room => room.type === propertyType);
        
        // Additional BHK filter only for full house
        if (propertyType === 'fullHouse' && bhkType) {
            filteredRooms = filteredRooms.filter(room => 
                room.bhkType === bhkType
            );
        }
    }

    // Display the filtered rooms or no results message
    if (filteredRooms.length > 0) {
        displayRooms(filteredRooms);
    } else {
        document.getElementById('roomsGrid').innerHTML = `
            <div class="no-results" style="text-align: center; padding: 50px;">
                <h2>No rooms found matching your criteria</h2>
                <p>Try adjusting your search filters or selecting a different city</p>
                <p>Available cities: Ichalkaranji, Kolhapur, Sangli</p>
            </div>
        `;
    }

    // Initialize animations
    initializeAnimations();
});

// Separate GSAP animations initialization 

function initializeAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Animate available rooms header
    gsap.from('.available-rooms', {
        y: -30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // Animate filter sidebar
    gsap.from('.filter-sidebar', {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });

    // Animate room cards
    gsap.from('.room-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: {
            amount: 0.6,
            ease: 'power2.out'
        }
    });

    // Add hover animations for room cards
    const roomCards = document.querySelectorAll('.room-card');
    roomCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                scale: 1.02,
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                boxShadow: '0 1px 6px rgba(0,0,0,0.05)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

// Keep your original display functions unchanged
function displayRooms(rooms) {
    const grid = document.getElementById('roomsGrid');
    grid.innerHTML = '';

    // Group rooms by type
    const fullHouseRooms = rooms.filter(room => room.type === 'fullHouse');
    const pgHostelRooms = rooms.filter(room => room.type === 'pgHostel');
    const flatmateRooms = rooms.filter(room => room.type === 'flatmates');

    // Display sections if they have rooms
    if (fullHouseRooms.length > 0) {
        grid.appendChild(createSection('Full House Options', fullHouseRooms));
    }
    if (pgHostelRooms.length > 0) {
        grid.appendChild(createSection('PG/Hostel Options', pgHostelRooms));
    }
    if (flatmateRooms.length > 0) {
        grid.appendChild(createSection('Flatmate Options', flatmateRooms));
    }

    // Show no results message if no rooms found
    if (rooms.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <h2>No rooms found matching your criteria</h2>
                <p>Try adjusting your search filters</p>
            </div>
        `;
    }
}

// Keep your original createSection function unchanged
function createSection(title, rooms) {
    const section = document.createElement('div');
    section.className = 'room-section';
    
    section.innerHTML = `
        <h2 class="section-title"><i class="fas fa-building"></i> ${title}</h2>
        <div class="rooms-list">
            ${rooms.map(room => `
                <div class="room-card">
                    <div class="room-image">
                        <img src="${room.images[0]}" alt="${room.title}">
                        <div class="image-overlay">
                            <span class="property-type">
                                <i class="fas fa-home"></i> ${room.basicInfo.propertyType}
                            </span>
                            <span class="available-from">
                                <i class="fas fa-calendar-check"></i> ${room.basicInfo.availableFrom}
                            </span>
                        </div>
                    </div>
                    <div class="room-info">
                        <div class="title-section">
                            <h3>${room.title}</h3>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <span>${room.rating || '4.5'}</span>
                            </div>
                        </div>

                        <div class="location-info">
                            <p class="location">
                                <i class="fas fa-map-marker-alt"></i> ${room.location}
                            </p>
                            <p class="distance">
                                <i class="fas fa-route"></i> ${room.distance || '2.5 km from city center'}
                            </p>
                        </div>

                        <div class="pricing-section">
                            <div class="main-price">
                                <span class="rent">₹${room.pricing.monthlyRent}</span>
                                <span class="period">/month</span>
                            </div>
                            <div class="price-details">
                                <span class="deposit">
                                    <i class="fas fa-wallet"></i> Deposit: ₹${room.pricing.securityDeposit}
                                </span>
                                <span class="maintenance">
                                    <i class="fas fa-tools"></i> Maintenance: ${room.pricing.maintenance || 'Included'}
                                </span>
                            </div>
                        </div>

                        <div class="room-features">
                            <span><i class="fas fa-bed"></i> ${room.roomDetails.bedrooms} Beds</span>
                            <span><i class="fas fa-bath"></i> ${room.roomDetails.bathrooms} Baths</span>
                            <span><i class="fas fa-vector-square"></i> ${room.roomDetails.size} sq.ft</span>
                            <span><i class="fas fa-couch"></i> ${room.basicInfo.furnishingStatus}</span>
                        </div>

                        <div class="amenities-preview">
                            <span><i class="fas fa-wifi"></i> WiFi</span>
                            <span><i class="fas fa-parking"></i> Parking</span>
                            <span><i class="fas fa-dumbbell"></i> Gym</span>
                            <span><i class="fas fa-swimming-pool"></i> Pool</span>
                            <span class="more-amenities">+${Object.keys(room.amenities).length} more</span>
                        </div>

                        <div class="owner-preview">
                            <div class="owner-info">
                                <i class="fas fa-user-circle"></i>
                                <div class="owner-details">
                                    <span class="owner-name">${room.owner.name}</span>
                                    <span class="owner-type">${room.owner.type || 'Property Owner'}</span>
                                </div>
                            </div>
                            <div class="verification-badge">
                                <i class="fas fa-check-circle"></i> Verified
                            </div>
                        </div>

                        <div class="button-group">
                            <button onclick="viewRoomDetails(${room.id})" class="view-details">
                                <i class="fas fa-info-circle"></i> View Details
                            </button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    return section;
}

function viewRoomDetails(roomId) {
    // Convert roomId to number since it comes as string from the onclick event
    const numericId = parseInt(roomId);
    const room = roomDatabase.find(r => r.id === numericId);
    
    if (room) {
        // Store the entire room object in localStorage
        localStorage.setItem('currentRoom', JSON.stringify(room));
        // Add a small delay to ensure storage is complete
        setTimeout(() => {
            window.location.href = 'roomdetails.html';
        }, 100);
    } else {
        console.error('Room not found:', roomId);
    }
}

function contactOwner(contact) {
    window.location.href = `tel:${contact}`;
}

function contactWhatsapp(contact) {
    // Remove any non-numeric characters from the contact number
    const whatsappNumber = contact.replace(/\D/g, '');
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
}

// Add this function for geocoding addresses to coordinates
async function getCoordinates(address) {
    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=YOUR_GOOGLE_MAPS_API_KEY`
        );
        const data = await response.json();
        if (data.results && data.results[0]) {
            return data.results[0].geometry.location;
        }
        return null;
    } catch (error) {
        console.error('Geocoding error:', error);
        return null;
    }
}

// Add this function to initialize the map
function initializeMap(coordinates, address) {
    if (!coordinates) {
        console.error('No coordinates available for the location');
        return;
    }

    const mapOptions = {
        zoom: 15,
        center: coordinates,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        styles: [
            {
                featureType: "poi",
                elementType: "labels",
                stylers: [{ visibility: "off" }]
            }
        ]
    };

    const map = new google.maps.Map(document.getElementById('propertyMap'), mapOptions);

    // Add marker for the property
    new google.maps.Marker({
        position: coordinates,
        map: map,
        title: address,
        animation: google.maps.Animation.DROP
    });

    // Add circle to show approximate area
    new google.maps.Circle({
        strokeColor: '#3498db',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#3498db',
        fillOpacity: 0.1,
        map: map,
        center: coordinates,
        radius: 300 // 300 meters radius
    });
}

// Close modal when clicking the close button or outside the modal
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('roomModal');
    const closeBtn = document.querySelector('.close');

    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

// Add more functions as needed...
//bak to top button 
// Back to Top Button Functionality
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Back to Top Button end

// Function to apply filters
function applyFilters() {
    let filteredRooms = [...roomDatabase];
    let hasActiveFilters = false;

    // Get the selected rent range
    const selectedRentRange = document.querySelector('input[name="rent-range"]:checked')?.value;
    
    // Apply rent range filter
    if (selectedRentRange) {
        hasActiveFilters = true;
        filteredRooms = filteredRooms.filter(room => {
            const rent = room.pricing?.monthlyRent || 0;
            const rangeValue = parseInt(selectedRentRange);
            
            if (rangeValue === 5000) {
                return rent <= 5000;
            } else if (rangeValue === 10000) {
                return rent > 5000 && rent <= 10000;
            } else if (rangeValue === 15000) {
                return rent > 10000 && rent <= 15000;
            } else if (rangeValue === 20000) {
                return rent > 15000 && rent <= 20000;
            } else if (rangeValue === 25000) {
                return rent > 20000 && rent <= 25000;
            } else if (rangeValue === 50000) {
                return rent > 25000 && rent <= 50000;
            } else if (rangeValue === 100000) {
                return rent > 50000;
            }
            return true;
        });
    }

    // Get all filter values
    const visitNext2Days = document.querySelector('input[value="next2days"]')?.checked;
    const ownerHosting = document.querySelector('input[value="ownerHosting"]')?.checked;
    const availability = document.querySelector('input[name="availability"]:checked')?.value;
    const tenantTypes = Array.from(document.querySelectorAll('input[name="tenant"]:checked')).map(input => input.value);
    const propertyTypes = Array.from(document.querySelectorAll('input[value="apartment"], input[value="independent"], input[value="gated"]')).filter(input => input.checked).map(input => input.value);
    const furnishing = document.querySelector('input[name="furnishing"]:checked')?.value;
    const parking = Array.from(document.querySelectorAll('input[value="2wheeler"], input[value="4wheeler"]')).filter(input => input.checked).map(input => input.value);
    const leaseOnly = document.querySelector('input[value="lease"]')?.checked;

    // Apply availability filter
    if (availability) {
        hasActiveFilters = true;
        filteredRooms = filteredRooms.filter(room => {
            const availableFrom = room.basicInfo?.availableFrom;
            if (!availableFrom) return false;

            if (availability === 'immediate') {
                return availableFrom.toLowerCase() === 'immediate';
            } else if (availability === '15days') {
                return availableFrom.toLowerCase().includes('15') || availableFrom.toLowerCase().includes('immediate');
            } else if (availability === '30days') {
                return availableFrom.toLowerCase().includes('30') || availableFrom.toLowerCase().includes('immediate');
            } else if (availability === 'after30') {
                return !availableFrom.toLowerCase().includes('immediate') && 
                       !availableFrom.toLowerCase().includes('15') && 
                       !availableFrom.toLowerCase().includes('30');
            }
            return true;
        });
    }

    // Apply tenant type filter
    if (tenantTypes.length > 0) {
        hasActiveFilters = true;
        filteredRooms = filteredRooms.filter(room => {
            const preferredTenants = room.basicInfo?.preferredTenants || '';
            return tenantTypes.some(type => 
                preferredTenants.toLowerCase().includes(type.toLowerCase())
            );
        });
    }

    // Apply property type filter
    if (propertyTypes.length > 0) {
        hasActiveFilters = true;
        filteredRooms = filteredRooms.filter(room => {
            const propertyType = room.basicInfo?.propertyType || '';
            return propertyTypes.some(type => 
                propertyType.toLowerCase().includes(type.toLowerCase())
            );
        });
    }

    // Apply furnishing filter
    if (furnishing) {
        hasActiveFilters = true;
        filteredRooms = filteredRooms.filter(room => {
            const furnishingStatus = room.basicInfo?.furnishingStatus || '';
            return furnishingStatus.toLowerCase() === furnishing.toLowerCase();
        });
    }

    // Apply parking filter
    if (parking.length > 0) {
        hasActiveFilters = true;
        filteredRooms = filteredRooms.filter(room => {
            const amenities = room.amenities || {};
            return parking.every(type => {
                if (type === '2wheeler') return amenities.parking?.includes('Two Wheeler');
                if (type === '4wheeler') return amenities.parking?.includes('Four Wheeler');
                return false;
            });
        });
    }

    // Apply lease only filter
    if (leaseOnly) {
        hasActiveFilters = true;
        filteredRooms = filteredRooms.filter(room => 
            room.leaseType === 'lease' || room.basicInfo?.leaseType === 'lease'
        );
    }

    // Display filtered results
    displayRooms(hasActiveFilters ? filteredRooms : roomDatabase);
    
    // Reinitialize animations after filtering
    initializeAnimations();
}

// Initialize filters when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add apply button functionality
    const applyBtn = document.querySelector('.apply-btn');
    applyBtn.addEventListener('click', applyFilters);

    // Reset button functionality
    const resetBtn = document.querySelector('.reset-btn');
    resetBtn.addEventListener('click', () => {
        // Reset all inputs including rent range radio buttons
        document.querySelectorAll('.filter-sidebar input[type="checkbox"], .filter-sidebar input[type="radio"]').forEach(input => {
            input.checked = false;
        });
        
        // Show all rooms
        displayRooms(roomDatabase);
    });

    // Add input event listener to rent range
    const rentRange = document.querySelector('.rent-range');
    rentRange.addEventListener('input', (e) => {
        const value = e.target.value;
        e.target.nextElementSibling.textContent = `₹ ${value} to ₹ 5 Lacs`;
    });

    // Display all rooms initially
    displayRooms(roomDatabase);
});
