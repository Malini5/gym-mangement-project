import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

document.getElementById('memberLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('memberEmail').value;
    const password = document.getElementById('memberPassword').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          
            window.location.href = 'member-dashboard.html';
        })
        .catch((error) => {
            document.getElementById('memberError').textContent = 'Login failed: ' + error.message;
        });
});
