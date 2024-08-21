import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('adminEmail').value;
    const password = document.getElementById('adminPassword').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            window.location.href = 'admin-dashboard.html';
        })
        .catch((error) => {
            document.getElementById('adminError').textContent = 'Login failed: ' + error.message;
        });
});
