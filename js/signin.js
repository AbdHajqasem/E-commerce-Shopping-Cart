$(document).ready(function () {
  let loggedobj = JSON.parse(localStorage.getItem("logged"));
  if (loggedobj && loggedobj.logged) {
    window.location.href = "/homepage.html";
  }

  $("#submit").click(function (event) {
    event.preventDefault();
    let flag = true;
    $(".required").each(function () {
      if ($(this).val() === "") {
        $("#" + $(this).attr("name")).text("Required");
        flag = false;
      } else {
        $("#" + $(this).attr("name")).text("");
      }
    });

    if (flag) {
      let infoObject = {};
      $(".info").each(function () {
        infoObject[$(this).attr("name")] = $(this).val();
      });

      let userInfoLocalS = JSON.parse(localStorage.getItem("userinfo"));
      let span = $("#wrongusernameorpassword");

      if (userInfoLocalS) {
        userInfoLocalS.forEach(function (element) {
          if (infoObject.email === element.email) {
            if (infoObject.password === element.password) {
              let loggedIn = {
                logged: true,
                firstname: element.firstname
              };
              localStorage.setItem("logged", JSON.stringify(loggedIn));
              window.location.href = "/homepage.html";
            } else {
              span.text("Password Is Wrong");
              return;
            }
          }
        });
      }
      span.text("Account Not Registered");
    }
  });
});
