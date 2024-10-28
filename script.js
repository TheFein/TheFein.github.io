document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Save user data to localStorage
    localStorage.setItem(email, password);
    
    document.getElementById('message').textContent = 'Registration successful! You can now log in.';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Check if user exists in localStorage
    const storedPassword = localStorage.getItem(email);
    
    if (storedPassword && storedPassword === password) {
        document.getElementById('message').textContent = 'Login successful!';
    } else {
        document.getElementById('message').textContent = 'Invalid email or password.';
    }
});
