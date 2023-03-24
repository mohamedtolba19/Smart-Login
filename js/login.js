// Variables
let userEmailLogin = document.getElementById('userEmailLogin');
let emailErrorLogin = document.getElementById("emailErrorLogin");
let userPasswordLogin = document.getElementById('userPasswordLogin');
let passwordErrorLogin = document.getElementById("passwordErrorLogin");
let login = document.getElementById("login");
let error = document.getElementById("error");
let userContainer ;
if(localStorage.getItem("users")!=null)
{
   userContainer= JSON.parse(localStorage.getItem("users"));
   console.log(userContainer);
}
else
{
    userContainer = [];
}

// Functions

function loginUser()
{
if(checkEmail() == true & checkPassword()==true)
{
    error.innerHTML = "";
    error.classList.replace("d-block" ,"d-none" );
    if (validateEmail()== true & validatePassword()==true)
    {

        let isExisted = false ;
    for(let i = 0 ; i<userContainer.length ; i++ )
    {
        if (userEmailLogin.value == userContainer[i].email && userPasswordLogin.value == userContainer[i].password)
        {
            isExisted = true ;
        }
    }
    if(isExisted)
    {
        let user = {
            email:userEmailLogin.value,
            password : userPasswordLogin.value
        }
        localStorage.setItem("user" , JSON.stringify (user))
      login.setAttribute("href" , "welcome.html");
    }
    else
    {
error.innerHTML = "incorrect email or password";
error.classList.replace("d-none" , "d-block");
    }

}

    }
    else
{
    error.innerHTML = "All inputs is Required";
    error.classList.replace("d-none" , "d-block");
}
   
    
}



function validateEmail()
{ 
   
        let emailRegex = /^[\w]*@[a-zA-Z]*\.com$/ ;
        if(emailRegex.test(userEmailLogin.value) == true)
        {
                    emailErrorLogin.innerHTML = "";
                    emailErrorLogin.classList.replace("d-block" , "d-none");
                   userEmailLogin.classList.add("is-valid");
                    userEmailLogin.classList.remove("is-invalid");
                    return true
                
                
            }
         
           
        
           
        
        else
        {
            
         emailErrorLogin.innerHTML = "Please enter a valid email address in the format username@example.com";
         emailErrorLogin.classList.replace("d-none" , "d-block");
            userEmailLogin.classList.add("is-invalid");
            userEmailLogin.classList.remove("is-valid");
            return false ;
        }

    }

 

    function validatePassword()
{
    
        let passwordRegex = /^[\w!@#$%^&*()_+=[\]{}|\\,./?^-]{8,}$/ ;

    if(passwordRegex.test(userPasswordLogin.value) == true)
    {
        passwordErrorLogin.innerHTML= "" ;
        passwordErrorLogin.classList.replace("d-block" , "d-none");
        userPasswordLogin.classList.add("is-valid");
        userPasswordLogin.classList.remove("is-invalid");
        return true
    }
    else
    {
        passwordErrorLogin.innerHTML= "Your password must be at least 8 characters long and contain only alphanumeric and special characters" ;
        passwordErrorLogin.classList.replace("d-none" , "d-block");
        userPasswordLogin.classList.add("is-invalid");
        userPasswordLogin.classList.remove("is-valid");
        return false ;
    }

 
    
}



function checkEmail()
{
    if(userEmailLogin.value!="")
 {
  return true ;
 }
 else
{
    userEmailLogin.placeholder = "Email is required" ;
    userEmailLogin.style.setProperty('--placeholder-color', 'rgba(240, 52, 52, 0.8)');
    userEmailLogin.classList.add("is-invalid");
    return false ;
    
    
}
}

function checkPassword()
{
   if(userPasswordLogin.value != "")
   {
    return true ;
   }
   else
   {
      userPasswordLogin.placeholder = "Password is required" ;
      userPasswordLogin.style.setProperty('--placeholder-color', 'rgba(240, 52, 52, 0.8)');
      userPasswordLogin.classList.add("is-invalid");
      return false ;

   }
}

// Events 
login.addEventListener("click" , function()
{
    loginUser();
    
})

userEmailLogin.addEventListener("keyup" , function ()
{
    validateEmail()
})

userPasswordLogin.addEventListener("keyup" , function()
{
    validatePassword();
})