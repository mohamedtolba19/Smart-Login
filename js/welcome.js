let welcomeUser = document.getElementById("welcomeUser");
userContainer = JSON.parse(localStorage.getItem("users"));
user = JSON.parse(localStorage.getItem("user"));


for (let i = 0 ; i<userContainer.length ; i++)
{
    if(user.email = userContainer[i].email)
    {
        welcomeUser.innerHTML = `welcome ${userContainer[i].name}`
       
    }
  
}
