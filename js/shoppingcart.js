  let container = $("#con");
  let container1 = $("#con1");
  let totalPriceElement = $("#totalprice");
  let totalPrice = 0.0;
  let checkout = $("#checkout");

  function products() {
    let itemsInCart = JSON.parse(localStorage.getItem('additem'));
    if (!itemsInCart || itemsInCart.length === 0) {
      container1.html('<div style="display:flex; align-items:center;justify-content:center;"><h1>No-Items</h1></div>');
      return;
    }
    itemsInCart.forEach(element => {
      totalPrice += element[0].price;
      totalPriceElement.text("$" + totalPrice);
      localStorage.setItem("totalprice", JSON.stringify(totalPriceElement.text().substring(1)));
      container.append(`
        <div class="row align-items-center" id="contentscontainer">
          <div class="col-4">
            <img src="${element[0].image}" alt="" style="height: 50px; width: 50px;">
          </div>
          <div class="col-8">
            <div class="row">
              <div class="col-12"><p id="title">${element[0].title}</p></div>
              <div class="col-12"><p id="price-${element[0].id}">$${element[0].price}</p></div>
              <div class="col-4 d-flex align-items-center justify-content-between" id="divcounter">
                <button style="display: flex; align-items: center; justify-content: center;" class="counterbtn" onclick="dencrease(${element[0].id},${element[0].price})">-</button>
                <input type="text" value="1" id="${element[0].id}" class="countnum">
                <button style="display: flex; align-items: center; justify-content: center;" class="counterbtn" onclick="increase(${element[0].id},${element[0].price})">+</button>
              </div>
              <div class="col-12 d-flex justify-content-end">
                <button id="remove-${element[0].id}" onclick="removeItem(${element[0].id})" class="button">
                  <i class="fa-solid fa-trash" id="removeicon"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      `);
    });
  }

  products();

  function increase(id, firstPrice) {
    let counter = $("#" + id);
    let plus = parseInt(counter.val()) + 1;
    counter.val(plus);
    let price = $("#price-" + id);
    let priceNumber = parseFloat(price.text().substring(1));
    let newPrice = (priceNumber + firstPrice).toFixed(2);
    let totalPriceElementNUmber = parseFloat(totalPriceElement.text().substring(1));
    let newTotalprice = (totalPriceElementNUmber + firstPrice).toFixed(2);
    price.text("$" + newPrice);
    totalPriceElement.text("$" + newTotalprice);
    localStorage.setItem("totalprice", JSON.stringify(totalPriceElement.text().substring(1)));
  }

  function dencrease(id, firstPrice) {
    let counter = $("#" + id);
    if (parseInt(counter.val()) > 1) {
      let minus = parseInt(counter.val()) - 1;
      counter.val(minus);
      let price = $("#price-" + id);
      let priceNumber = parseFloat(price.text().substring(1));
      let newPrice = (priceNumber - firstPrice).toFixed(2);
      let totalPriceElementNUmber = parseFloat(totalPriceElement.text().substring(1));
      let newTotalprice = (totalPriceElementNUmber - firstPrice).toFixed(2);
      price.text("$" + newPrice);
      totalPriceElement.text("$" + newTotalprice);
      localStorage.setItem("totalprice", JSON.stringify(totalPriceElement.text().substring(1)));
    }
  }

  function removeItem(id) {
    let itemsInCart = JSON.parse(localStorage.getItem('additem'));

    itemsInCart = itemsInCart.filter(element => element[0].id !== id);
    localStorage.setItem('additem', JSON.stringify(itemsInCart));
    container.empty();
    products();
    itemsInCart = JSON.parse(localStorage.getItem('additem'));
    let totalPrice = 0.0;
    itemsInCart.forEach(element => {
      totalPrice += getTotalPriceForAnItem(element[0].id);
    });
    totalPriceElement.text("$" + totalPrice);
    localStorage.setItem("totalprice", JSON.stringify(totalPriceElement.text().substring(1)));
    updatecountItemInCart();
  }

  function getTotalPriceForAnItem(id) {
    let price = $("#price-" + id);
    if (!price) {
      return 0;
    }
    let priceNumber = parseFloat(price.text().substring(1)) || 0;
    return priceNumber;
  }

  function countItemInCart() {
    let shoppingCart = JSON.parse(localStorage.getItem("additem")) || [];
    return shoppingCart.length;
  }

  function updatecountItemInCart() {
    let counter = $("#itemsincartcounter");
    let counterLoggedIn=$("#itemsincartcounterloggedin");
    counter.text(countItemInCart());
    counterLoggedIn.text(countItemInCart());
  }

  updatecountItemInCart();

  checkout.click(function() {
    let loggedobj = JSON.parse(localStorage.getItem("logged"));
    if (!loggedobj || !loggedobj.logged) {
      window.location.href = `/signin.html`;
    } else {
      window.location.href = `/checkoutpage.html`;
    }
  });

