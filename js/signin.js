let loggedobj=JSON.parse(localStorage.getItem("logged"));
if(loggedobj&&loggedobj.logged){
  window.location.href = `/homepage.html`;
}
let btn = document.getElementById("submit");

btn.addEventListener("click", function(event) {
  let flag=true;
  let Elements = document.getElementsByClassName("required");

  Array.from(Elements).forEach(element => {
    if (element.value === "") {
      let span = document.getElementById(element.name);
      span.innerText = "Required";
      flag=false;
    }
    else{
      let span = document.getElementById(element.name);
      span.innerText = "";
    }
  });
  event.preventDefault();

  if (flag) {
    let userInfoElements = document.getElementsByClassName("info");
    let infoObject = {};
    Array.from(userInfoElements).forEach(element => {
      infoObject[element.name] = element.value;
    });
    let userInfoLocalS=JSON.parse(localStorage.getItem("userinfo"));
    let span = document.getElementById("wrongusernameorpassword");
    if(userInfoLocalS){
      
    userInfoLocalS.forEach(element=>{

        if(infoObject.email===element.email){
            if(infoObject.password===element.password){
              let loggedIn={};
                 loggedIn.logged=true
                 loggedIn.firstname=element.firstname
                 
                localStorage.setItem("logged",JSON.stringify(loggedIn));
                window.location.href = `/homepage.html`;
            }
            else{
              span.innerText = "Password Is Wrong"; 
              return;
            }
        }
    })
  }
    span.innerText = "Account Not Registered";  
  } 
});