import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

document.getElementById('userLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('userEmail').value;
    const password = document.getElementById('userPassword').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            window.location.href = 'user-dashboard.html';
        })
        .catch((error) => {
            document.getElementById('userError').textContent = 'Login failed: ' + error.message;
        });
});
