
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
const auth =getAuth(app);

signin.addEventListener('click', (e) => {
    var email = document.getElementById('emaillog').value;
    var password = document.getElementById('passwordlog').value;

    signInWithEmailAndPassword(auth, email, password).then(cred => {
        alert("Usuario logueado");
        console.log(cred.user);
    }).catch(error => {
        const errorCode = error.code;

        if(errorCode == 'auth/invalid-email')
        alert('El correo no es válido');
        else if(errorCode == 'auth/user-disabled')
        alert('El usuario ha dsido deshabilitado');
        else if(errorCode == 'auth/user-not-found')
        alert('El usuario no existe');
        else if(errorCode == 'auth/wrong-password')
        alert('Contraseña incorrecta');
    });
});

cerrar.addEventListener('click', (e) => {
    auth.signOut().them(() =>{
        alert('Sesión cerrada');
    }).catch((error) => {
        alert('Error al cerrar sesión');
    });
}) 

auth.onAuthStateChanged(user => {
    if(user){
        console.log("Usuario Activo");
        var email = user.emailVerified;
        if(emailVerified){
            window.open("https://www.google.com/")
        }else{
            auth.signOut();
        }
    }else{
        console.log("Usuario Inactivo");
    }
});