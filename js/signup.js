let loggedobj = JSON.parse(localStorage.getItem("logged"));

if (loggedobj && loggedobj.logged) {
    window.location.href = "/homepage.html";
}

let userInfo = JSON.parse(localStorage.getItem("userinfo")) || [];

$("#submit").on("click", function (event) {
    event.preventDefault();
    let flag = true;
    $(".required").each(function () {
        if ($(this).val() === "") {
            let fieldName = $(this).attr("name");
            $("#" + fieldName).text("Required");
            flag = false;
        } else {
            let fieldName = $(this).attr("name");
            $("#" + fieldName).text("");
        }
    });

    let phone = $("#phone");
    let mail = $("#mail");

    if (phone.val().length!==10 && phone.val()!="") {
        $("#mobile").text("The mobile number should contain 10 digits");
        flag = false;
    } 

    if (!mail.val().includes("@")&&mail.val()!="") {
        $("#email").text("Email should contain '@'");
        flag = false;
    } 

    if (flag) {
        let infoObject = {};
        $(".info").each(function () {
            infoObject[$(this).attr("name")] = $(this).val();
        });
        userInfo.push(infoObject);
        localStorage.setItem("userinfo", JSON.stringify(userInfo));
        window.location.href = "/signin.html";
    }
});