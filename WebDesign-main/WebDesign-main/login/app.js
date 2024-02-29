const firebaseConfig = {
  apiKey: "AIzaSyBjDEGSguKkePCg03JfBkbY8f74zG-ngQc",
  authDomain: "projeto2miatest.firebaseapp.com",
  projectId: "projeto2miatest",
  storageBucket: "projeto2miatest.appspot.com",
  messagingSenderId: "458622335158",
  appId: "1:458622335158:web:41eb897af7ac046e5dce17"
};

firebase.initializeApp(firebaseConfig);



// const emailField = document.getElementById("email");
// const passwordField = document.getElementById("password")
// const loginButton = document.getElementById("loginButton")

// loginButton.addEventListener("click", ()=>{
//   const email = emailField.value;
//   const password = passwordField.value;

//   firebase.auth().signInWithEmailAndPassword(email, password)
//   .then((userCredential)=>{
//     const user = userCredential.user;
//     console.log("Usuário logado : ", user)
//   })
//   .catch((error)=>{
//     const errorMessage = error.message;
//     console.error("Erro de autenticação : ", errorMessage)
//   })
// })