// DOM elements
const fetchBtn = document.getElementById('fetchBtn');
const reloadBtn = document.getElementById('reloadBtn');
const statusMessage = document.getElementById('statusMessage');
const usersContainer = document.getElementById('usersContainer');

// API endpoint
const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Function to display status message
function showStatus(message, type) {
    statusMessage.textContent = message;
    statusMessage.className = 'status ' + type;
}

// Function to fetch user data
async function fetchUserData() {
    showStatus('Fetching user data...', 'loading');
    
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const users = await response.json();
        displayUsers(users);
        showStatus(`Successfully fetched ${users.length} users`, 'success');
        
    } catch (error) {
        console.error('Error fetching data:', error);
        showStatus(`Failed to fetch data: ${error.message}`, 'error');
        usersContainer.innerHTML = '<p class="error-message">Unable to load user data. Please check your internet connection and try again.</p>';
    }
}

// Function to display users in the UI
function displayUsers(users) {
    usersContainer.innerHTML = '';
    
    if (users.length === 0) {
        usersContainer.innerHTML = '<p>No users found.</p>';
        return;
    }
    
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        
        // Format address
        const address = `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;
        
        userCard.innerHTML = `
            <h2 class="user-name">${user.name}</h2>
            <p class="user-email">${user.email}</p>
            <div class="user-address">
                <p class="address-title">Address:</p>
                <p>${address}</p>
            </div>
        `;
        
        usersContainer.appendChild(userCard);
    });
}

// Event listeners
fetchBtn.addEventListener('click', fetchUserData);
reloadBtn.addEventListener('click', fetchUserData);

// Fetch data when page loads
window.addEventListener('DOMContentLoaded', fetchUserData);