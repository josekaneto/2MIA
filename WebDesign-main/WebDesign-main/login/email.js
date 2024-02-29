function loginEmail(){
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    firebaseConfig.auth().createUserWithEmailAndPassword(email,password)
    .then(user=>{
        console.log('usuario',user)
        alert('Usuário criado e logado')
    }).cath(err=>{
        console.log('Erro ao criar usuário',error)
    })

}





function loginEmail(){
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    firebaseConfig.auth().signInWithEmailAndPassword(email,password).then(()=>{
        alert('Usuário logado')
    }).cath(err=>{
        console.log('erro',error)
    })

}