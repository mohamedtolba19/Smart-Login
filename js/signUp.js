// Variables

let userNameInput = document.getElementById("userNameInput");
let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let userEmailInput = document.getElementById("userEmailInput");
let userPasswordInput = document.getElementById("userPasswordInput");
let signUpBtn = document.getElementById("signUp");
let SigninCredential = document.getElementById("SigninCredential");

let userContainer ;

if(localStorage.getItem("users")!=null)
{
    

    userContainer = JSON.parse(localStorage.getItem("users"));
  
}
else
{
    userContainer = [];
}



// Functions

function validateName()
{
  
    let regex = /^[A-Z][a-z]{3,10}$/;
    if(regex.test(userNameInput.value) == true)
    {
        userNameInput.classList.add("is-valid");
        userNameInput.classList.remove("is-invalid");
        nameError.innerHTML = "";
        nameError.classList.replace("d-block" ,"d-none" );
        return true ;
      
    }
    else
    {
       
        nameError.innerHTML = "invalid name please start with capital character then add small characters in range 3 to 10";
        nameError.classList.replace("d-none" , "d-block");
        
        userNameInput.classList.add("is-invalid"); 
        userNameInput.classList.remove("is-valid"); 
    }
 

   
   }
 
        
  function checkName()
  {
     if(userNameInput.value != "")
     {
        if(validateName()== true)
        {
            userNameInput.placeholder = "Enter Your Name" ;
            userNameInput.style.setProperty('--placeholder-color', '#ccc');
            return true ;
        }
     }
     else
     {
        userNameInput.placeholder = "Name is required" ;
        userNameInput.style.setProperty('--placeholder-color', 'rgba(240, 52, 52, 0.8)');
        userNameInput.classList.add("is-invalid");
        return false ;

     }
  }
    



function validateEmail()
{ 
   
        let emailRegex = /^[\w]*@[a-zA-Z]*\.com$/ ;
        if(emailRegex.test(userEmailInput.value) == true)
        {
                    emailError.innerHTML = "";
                    emailError.classList.replace("d-block" , "d-none");
                   userEmailInput.classList.add("is-valid");
                    userEmailInput.classList.remove("is-invalid");
                    return true
                
                
            }
         
           
        
           
        
        else
        {
            
         emailError.innerHTML = "Please enter a valid email address in the format username@example.com";
         emailError.classList.replace("d-none" , "d-block");
            userEmailInput.classList.add("is-invalid");
            userEmailInput.classList.remove("is-valid");
            return false ;
        }

    }

  
   


function validatePassword()
{
    
        let passwordRegex = /^[\w!@#$%^&*()_+=[\]{}|\\,./?^-]{8,}$/ ;

    if(passwordRegex.test(userPasswordInput.value) == true)
    {
        passwordError.innerHTML= "" ;
        passwordError.classList.replace("d-block" , "d-none");
        userPasswordInput.classList.add("is-valid");
        userPasswordInput.classList.remove("is-invalid");
        return true
    }
    else
    {
        passwordError.innerHTML= "Your password must be at least 8 characters long and contain only alphanumeric and special characters" ;
        passwordError.classList.replace("d-none" , "d-block");
        userPasswordInput.classList.add("is-invalid");
        userPasswordInput.classList.remove("is-valid");
    }

 
    
}
function checkPassword()
{
   if(userPasswordInput.value != "")
   {
      if(validatePassword()== true)
      {
        userPasswordInput.placeholder = "Enter Your Password" ;
        userPasswordInput.style.setProperty('--placeholder-color', '#ccc');
          return true ;
      }
   }
   else
   {
      userPasswordInput.placeholder = "Password is required" ;
      userPasswordInput.style.setProperty('--placeholder-color', 'rgba(240, 52, 52, 0.8)');
      userPasswordInput.classList.add("is-invalid");
      return false ;

   }
}
  







function checkEmail()
{
    if(userEmailInput.value!="")
 {
    if(validateEmail()==true)
    {
        let isExisted = false ;
    for(let i = 0 ; i<userContainer.length ; i++)
    {
      if(userEmailInput.value == userContainer[i].email)
      {
         emailError.innerHTML = "email is existed";
         emailError.classList.replace("d-none" , "d-block");
         userEmailInput.classList.add("is-invalid");
         userEmailInput.classList.remove("is-valid");
         isExisted = true ;
      }
       
    }
 if(isExisted == true)
 {
    return false ;
 }
 else
 {
    userEmailInput.placeholder = "Enter Your Email" ;
    userEmailInput.style.setProperty('--placeholder-color', '#ccc');
    return true ;
 }
    }
 }
 else
{
    userEmailInput.placeholder = "Email is required" ;
    userEmailInput.style.setProperty('--placeholder-color', 'rgba(240, 52, 52, 0.8)');
    userEmailInput.classList.add("is-invalid");
    return false ;
    
    
}
}




function addUser()
{
    let user = {
        name :userNameInput.value ,
        email : userEmailInput.value ,
        password : userPasswordInput.value
    }
    userContainer.push(user);
    localStorage.setItem("users" , JSON.stringify(userContainer));
    SigninCredential.innerHTML = "success" ;
    SigninCredential.style.color = "green" ;
    SigninCredential.classList.replace("d-none" ,"d-block") ;
    clearForm();
}

function clearForm()
{
    userNameInput.value ="";
    userNameInput.classList.remove("is-valid");
    userEmailInput.value ="";
    userEmailInput.classList.remove("is-valid");
    userPasswordInput.value ="";
    userPasswordInput.classList.remove("is-valid");
    
}

// Events 

userNameInput.addEventListener("keyup" , function()
{
    validateName();
})

userPasswordInput.addEventListener("keyup" , function()
{
   validatePassword();
})


userEmailInput.addEventListener("keyup" , function()
{
    validateEmail();
})

signUpBtn.addEventListener("click" , function()
{
    if(checkName()==true & checkEmail()==true &checkPassword()==true)
    {
        addUser();
    }
    else
    {
        SigninCredential.innerHTML = "invalid credentials" ;
        SigninCredential.style.color = "rgba(240, 52, 52, 0.8)" ;
        SigninCredential.classList.replace("d-none" ,"d-block") ;
    }
 
})