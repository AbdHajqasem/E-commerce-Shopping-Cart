let inputsValues = {};
let next = $("#next");
let next1 = $("#next1");
let previous = $("#previous");
let con1 = $("#firstcon");
let con2 = $("#secondcon");
let con3 = $("#Thirdcon");
let con4 = $("#fourthcon");
let Elements = document.getElementsByClassName("required");
let Elements1 = document.getElementsByClassName("required1");

function validateRequiredFields(elements) {
  let flag = true;
  Array.from(elements).forEach((element) => {
    if (element.value === "") {
      let span = document.getElementById(element.name);
      span.innerText = "Required";
      flag = false;
    } else {
      let span = document.getElementById(element.name);
      span.innerText = "";
    }
  });

  return flag;
}
next.click(function (event) {
  if (!validateRequiredFields(Elements)) {
    event.preventDefault();
  }
  else{
    con1.hide();
    con2.show();
    inputsValues.country=$("#usercountry").val();
    inputsValues.city=$("#usercity").val();
    inputsValues.street=$("#userstreet").val();
  }
});

next1.click(function (event) {
  if (!validateRequiredFields(Elements1)) {
    event.preventDefault();
  }
  else{
    con2.hide();
    con3.show();
    con4.show();
    inputsValues.cardNumber=$("#usercardnumber").val();
    inputsValues.expiryDate=$("#userexpirydate").val();
    inputsValues.cvv=$("#usercvv").val();
    con3.empty();
    con3.append(`
      <div class="row">
      <div class="col-12">
        <p>Country: ${inputsValues.country}</p>
      </div>
      <div class="col-12">
        <p>City: ${inputsValues.city}</p>
      </div>
      <div class="col-12">
        <p>Street: ${inputsValues.street}</p>
      </div>
      <div class="col-12">
        <p>Card number: ${inputsValues.cardNumber}</p>
      </div>
      <div class="col-12">
        <p>Expiry date: ${inputsValues.expiryDate}</p>
      </div>
      <div class="col-12">
        <p>CVV: ${inputsValues.cvv}</p>
      </div>
    </div>
    <div class="col-4 incon d-flex justify-content-start" id="btncon">
      <input type="button" id="previous1" value="Previous" class="btns">
    </div>`)
    con4.empty();
    con4.append(`    
    <div class="row ">
    <div class="col-12 d-flex justify-content-center">
      <p style="display: inline-block;">Total-Price:</p>
      <p style="display: inline-block;">$${JSON.parse(localStorage.getItem("totalprice"))}</p>
    </div>
    </div>
    <div class="row justify-content-center">
    <div class="col-4 incon " id="btncon">
      <input type="button" id="confirm" value="Confirm" class="btns">
    </div>
  </div>`)
  }
});

    previous.click(function() {
        con2.hide();
        con1.show();
      });
    con3.on("click", "#previous1", function() {
        con3.hide();
        con4.hide();
        con2.show();
      });
      

      

 
  