
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import {sendEmailVerification, getAuth, signInWithPopup, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword,  
    onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyB6KExJyzOEvASdqWHOtfQfrErFUQJ4dAk",
  authDomain: "raqpa-e1f76.firebaseapp.com",
  databaseURL: "https://raqpa-e1f76-default-rtdb.firebaseio.com",
  projectId: "raqpa-e1f76",
  storageBucket: "raqpa-e1f76.appspot.com",
  messagingSenderId: "674483883486",
  appId: "1:674483883486:web:d876f59b3659405844614f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

sign-up.addEventListener('click', (e) => {
    var email = document.getElementById('emailreg').value;
    var password = document.getElementById('passwordreg').value;

    createUserWithEmailAndPassword(auth, email, password).then(cred => {
        alert("Usuario creado");
        sendEmailVerification(auth.currentUser).then(() =>{
            alert('Se ha enviado un correo de verificación');
        });
    }).catch(error => {
        const errorCode = error.code;

        if(errorCode == 'auth/email-already-in-use')
        alert('El correo ya está en uso');
        else if(errorCode == 'auth/invalid-email')
        alert('El correo no es válido');
        else if(errorCode == 'auth/weak-password')
        alert('La contraseña debe tener al menos 6 caracteres');
        
    });
});