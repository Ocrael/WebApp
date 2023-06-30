document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    document.getElementById('register-form').addEventListener('submit', async (e) => {
        e.preventDefalut();
    })

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('reg-role').value;

    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, role }),
        });

        if (response.status === 201) {
            document.getElementById('register-message').innerText = 'User registered successfully';
        } else {
            document.getElementById('register-message').innerText = 'Registration failed';
        }
    } catch (error) {
        console.error('Error:', error);
    }
});


    try {
const response = await fetch('/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
});



if (response.status === 200) {
    const data = await response.json();
    localStorage.setItem('token', data.token);
    if (data.token) {
        const decoded = atob(data.token.split('.')[1]);
        const payload = JSON.parse(decoded);
        if (payload.role === 'admin') {
            window.location.href = '/admin.html';
        } else {
            window.location.href = '/user.html';
        }
    }
}

else {
    document.getElementById('message').innerText = 'Invalid credentials';
}    
}   catch (error) {
    console.error('Error:', error);
};