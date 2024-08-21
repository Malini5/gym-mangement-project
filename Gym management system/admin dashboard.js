import { auth, db } from './firebase-config.js';
import { signOut } from 'firebase/auth';
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';

document.getElementById('logout').addEventListener('click', function() {
    signOut(auth).then(() => {
        window.location.href = 'admin-login.html';
    }).catch((error) => {
        console.error('Sign Out Error', error);
    });
});

// Add Member
document.getElementById('addMember').addEventListener('click', function() {
    
    window.location.href = 'add-member.html';
});

// Update/Delete Member
document.getElementById('updateDeleteMember').addEventListener('click', function() {

    window.location.href = 'update-delete-member.html';
});

// Create Bills
document.getElementById('createBill').addEventListener('click', function() {

    window.location.href = 'create-bill.html';
});

// Assign Fee Package
document.getElementById('assignFeePackage').addEventListener('click', function() {
    
    window.location.href = 'assign-fee-package.html';
});

// Assign Notification
document.getElementById('assignNotification').addEventListener('click', function() {

    window.location.href = 'assign-notification.html';
});

// Report Export
document.getElementById('reportExport').addEventListener('click', function() {

    exportReport();
});

// Supplement Store
document.getElementById('supplementStore').addEventListener('click', function() {

    window.location.href = 'supplement-store.html';
});

// Diet Details
document.getElementById('dietDetails').addEventListener('click', function() {

    window.location.href = 'diet-details.html';
});


function exportReport() {

    const membersRef = collection(db, 'members');
    getDocs(membersRef).then((querySnapshot) => {
        let csvContent = "data:text/csv;charset=utf-8,";
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const row = `${data.name},${data.email},${data.joinDate},${data.package}`;
            csvContent += row + "\r\n";
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'members_report.csv');
        document.body.appendChild(link);
        link.click();
    }).catch((error) => {
        console.error('Error fetching members data:', error);
    });
}

