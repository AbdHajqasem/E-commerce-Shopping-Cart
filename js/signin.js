let loggedobj=JSON.parse(localStorage.getItem("logged"));
if(loggedobj.logged){
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
    userInfoLocalS.forEach(element=>{
        if(infoObject.email===element.email){
            if(infoObject.password===element.password){
              let loggedIn={};
                 loggedIn.logged=true
                 loggedIn.firstname=element.firstname
                 
                localStorage.setItem("logged",JSON.stringify(loggedIn));
                window.location.href = `/homepage.html`;
            }
        }
    })
    let span = document.getElementById("wrongusernameorpassword");
    span.innerText = "Wrong Username or Password";
  } 
});