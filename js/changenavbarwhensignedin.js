
    let notLogged = $("#needtologin");
    let isLogged = $("#loggedin");
    let login = JSON.parse(localStorage.getItem('logged'));
    let firstName = $("#firstname");
  
    if (login && login.logged == true) {
      isLogged.show();
      notLogged.hide();
      firstName.text(login.firstname);
    }
  
    function signout() {
      login.logged = false;
      localStorage.setItem("logged", JSON.stringify(login));
      window.location.href = "/signin.html";
    }
  
  