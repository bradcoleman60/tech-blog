const logInHandler = async (event) => {
    event.preventDefault();

    const xusername = document.querySelector('#xuser-name').value.trim();
    const xpassword = document.querySelector('#xpassword').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/', {
            method: 'POST',
            body: JSON.stringify({xusername, xpassword}),
            headers: {'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert ('Failed to log in');
        }
    }
   
};

const registrationHandler = async (event) => {
    event.preventDefault();
    const user_name = document.querySelector('#user-name').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (user_name && password) {
const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({user_name, password}),
    headers: {'Content-Type': 'application/json' }
});

if (response.ok) {
    document.location.replace('/');
}else {
    alert('Failed to sign up')
}
    }
};


document.querySelector('.login-form').addEventListener('submit', logInHandler);
document.querySelector('.registration-form').addEventListener('submit', registrationHandler);
