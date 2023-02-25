// This handles the login and registration forms

const logInHandler = async (event) => {
    event.preventDefault();

    const user_name = document.querySelector('#xuser-name').value.trim();
    const password = document.querySelector('#xpassword').value.trim();

    console.log("user_name" , user_name)
    console.log("password" , password)

    if (user_name && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({user_name, password}),
            headers: {'Content-Type': 'application/json' },
        });
        console.log(response)
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert (`Failed to log in ${user_name}`);
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
