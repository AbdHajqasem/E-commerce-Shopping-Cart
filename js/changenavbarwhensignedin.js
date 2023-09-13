let notLogged = document.getElementById("needtologin");
let isLogged = document.getElementById("loggedin");
let login = JSON.parse(localStorage.getItem('logged'));
let firstName=document.getElementById("firstname");

if (login&&login.logged == true) {
    isLogged.style.display = "flex"; 
    notLogged.style.display = "none"; 
    firstName.innerText=login.firstname;
}
function signout(){
login.logged=false;
localStorage.setItem("logged",JSON.stringify(login));
window.location.href=`/signin.html`
}
