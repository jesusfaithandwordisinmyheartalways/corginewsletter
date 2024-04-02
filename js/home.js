




function userLogin() {
    let userName = document.getElementById('username').value;
    let usernameError = document.getElementById('username-err');
    let eyeIconShadow = document.getElementById('eye-icon')

    if(userName.length === 0) {
        usernameError.style.visibility = 'hidden';
        return false;
    }

    if(!userName.match(/^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/)) {
        usernameError.style.visibility = 'visible';
        eyeIconShadow.style.zIndex = '-3'
        return false;
    }

    if(userName.match(/^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/)) {
        usernameError.style.visibility = 'hidden';
        eyeIconShadow.style.zIndex = '3'
        return true;
    }

}



let eyeIcon = document.getElementById('eye-icon');
let userPassword = document.getElementById('user-pswrd');
let eyeOpenIcon =    document.getElementById('eye-icon-open')
eyeIcon.onclick = function() {
    if(userPassword.type === 'password') {
        userPassword.type = 'text';
        eyeIcon.style.display = 'none'
        eyeOpenIcon.style.display = 'block'
    } 
}

eyeOpenIcon.onclick = function() {
    if(userPassword.type === 'text') {
        userPassword.type = 'password';
        eyeIcon.style.display = 'block'
        eyeOpenIcon.style.display = 'none'
    }
}











function userConfirmPassword() {
   let passwordName =  document.querySelector('.user-pswrd').value;
   let confirmUserPasswrd =  document.querySelector('.confirm-pswrd').value;
   let confirmPasswordSpan = document.getElementById('confirm-passwrd-error')
   let passwordMatch = document.getElementById('passwords-match')
   

      if(confirmUserPasswrd.length === 0) {
          confirmPasswordSpan.style.visibility = 'hidden';
          return false;
      }

   if(passwordName !== confirmUserPasswrd) {
     confirmPasswordSpan.style.visibility = 'visible';
     passwordMatch.style.visibility = 'hidden';
        return false;
   }

     setTimeout(() => {
         if(passwordName === confirmUserPasswrd) {
            confirmPasswordSpan.style.visibility = 'hidden'
            passwordMatch.style.visibility = 'visible'
            return true;
       }
    }, 1000)

    
    setTimeout(() => {
        if(passwordName === confirmUserPasswrd) {
           confirmPasswordSpan.style.visibility = 'hidden'
           passwordMatch.style.visibility = 'hidden'
           return true;
      }
   }, 3000)




}






function userEmailLogin() {

  

   let userEmail =  document.getElementById('user-email').value;
   let emailsSpanError = document.getElementById('email-error');

   if(userEmail.length === 0) {
    emailsSpanError.style.visibility = 'hidden';
    return false;
   }

   if(!userEmail.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
    emailsSpanError.style.visibility = 'visible';
    return false;
   }

   if(userEmail.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
    emailsSpanError.style.visibility = 'hidden';
    return true;
   }

}






function passUser() {
    document.getElementById('pop-up').style.display = 'block';
    document.getElementById('Popup-Section').style.visibility = 'visible';
    document.body.style.backgroundColor = 'black';
    document.getElementById('form-container').reset()
   

    let userNameErrTag = document.getElementsByName('user-name-error');
     let userConfirmPasswrdErrorTag = document.getElementsByName('confirm-passwrd-error')
      let userEmailErrorTag =  document.getElementsByName('email-err')

    if(userNameErrTag.checkValidity() || userConfirmPasswrdErrorTag.checkValidity() || userEmailErrorTag.checkValidity()) {
        userNameErrTag.style.display = 'none';
        userConfirmPasswrdErrorTag.style.display = 'none';
        userEmailErrorTag.style.display = 'none';
        return true;
    } 


}





function closePopUp() {
    document.getElementById('pop-up').style.display = 'none'
    document.getElementById('Popup-Section').style.visibility = 'hidden';
    document.body.style.opacity = "1"
    document.body.style.backgroundColor = 'white';
    emailsSpanError.style.display = 'none'
    confirmPasswordSpan.style.display = 'none'
    usernameError.style.display = 'none'
    document.formLogin.username.focus()
   
}










const form = document.getElementById('form-container')
    form.addEventListener('submit', function(event) {
        event.preventDefault()

        const formData = new FormData(form)
        const forms = new URLSearchParams(formData)
        console.log(...forms)

        fetch('http://127.0.0.1:5500/home.html?username=&user-pswrd=&confirm-user-passwrd=&user-email=' , {
            method: 'POST',
            body: forms,
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    })