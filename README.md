# User-data-dashboard
A web application that fetches and displays user data from the JSONPlaceholder API using JavaScript's Fetch API.

**📋 Project Overview**

This project demonstrates how to use the Fetch API to retrieve data from a public REST API and display it in a clean, responsive user interface. The application shows user information including names, email addresses, and physical addresses.

**✨ Features**

Data Fetching: Retrieves user data from JSONPlaceholder API

Responsive Design: Works on desktop and mobile devices

Error Handling: Graceful handling of network errors

Real-time Status: Loading and error status messages

Reload Functionality: Refresh data with a single click

Modern UI: Clean card-based layout with hover effects

**🛠️ Technologies Used**

HTML5 - Page structure

CSS3 - Styling and responsive design

JavaScript (ES6+) - Fetch API and DOM manipulation

JSONPlaceholder API - Free fake API for testing

# Create project folder
mkdir user-data-display
cd user-data-display
Save all three files in the same directory:

index.html

styles.css

script.js

Open the application:

Double-click index.html to open in your browser

Or use VS Code Live Server extension

Use the application:

Data loads automatically on page load

Click "Fetch User Data" to manually fetch

Click "Reload Data" to refresh the information

**🎯 How It Works**

Data Flow:
Request: Application sends GET request to https://jsonplaceholder.typicode.com/users

Response: API returns JSON array of user objects

Processing: JavaScript parses JSON and extracts relevant data

Display: User cards are dynamically created and displayed

Key Functions:
fetchUserData() - Handles API requests and error handling

displayUsers() - Creates and displays user cards

showStatus() - Shows loading/error/success messages

🧪 Testing
Normal Operation:
Open application with internet connection

Verify user cards display with name, email, and address

Test reload functionality

Error Testing:
Disable internet and click "Fetch User Data"

Verify error message appears

Re-enable internet and verify data loads successfully
