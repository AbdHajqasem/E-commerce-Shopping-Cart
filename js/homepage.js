let notLogged = document.getElementById("needtologin");
let isLogged = document.getElementById("loggedin");
let login = JSON.parse(localStorage.getItem('logged'));
let firstName=document.getElementById("firstname");

if (login.logged == true) {
    isLogged.style.display = "flex"; 
    notLogged.style.display = "none"; 
    firstName.innerText=login.firstname;
}
else{
    
}
