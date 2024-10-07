document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('userType').value;

    if (validateLogin(username, password, userType)) {
        // Proceed to dashboard based on user type
        if (userType === 'admin') {
            window.location.href = "admin_dashboard.html";
        } else if (userType === 'user') 
        {
            window.location.href = "user_dashboard.html";
        }
    } else {
        document.getElementById('errorMessage').innerText = "Invalid username or password.";
    }
});

function validateLogin(username, password, userType) {
    // Simple validation logic for demo
    const validUsers = {
        admin: { username: 'admin', password: 'admin123' },
        user: { username: 'user', password: 'user123' }
    };

    return validUsers[userType] && validUsers[userType].username === username && validUsers[userType].password === password;
}

document.addEventListener('DOMContentLoaded', function () {
    const userType = getUserType();  // You can set this based on the logged-in user, for now, hardcoded

    const navItems = document.getElementById('navItems');

    // Reports and Transaction modules for both admin and user
    const reportsItem = createNavItem('Reports', 'reports.html');
    const transactionItem = createNavItem('Transaction', 'transaction.html');
    
    navItems.appendChild(reportsItem);
    navItems.appendChild(transactionItem);

    // Maintenance module for admin only
    if (userType === 'admin') {
        const maintenanceItem = createNavItem('Maintenance', 'maintenance.html');
        navItems.appendChild(maintenanceItem);
    }
});

function createNavItem(text, href) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = href;
    a.innerText = text;
    li.appendChild(a);
    return li;
}

// Function to get the logged-in user type (for now, hardcoded)
function getUserType() {
    // You can change this later based on the login logic
    return localStorage.getItem('userType') || 'user';  // 'admin' or 'user'
}