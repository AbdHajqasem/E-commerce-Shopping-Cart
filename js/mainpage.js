

  let itemsInCartCounter = $("#itemsincartcounter");
  let itemsInCartCounterLocalS = JSON.parse(localStorage.getItem("counter")) || 0;
  let arrItem;
  let itemDescription = [];
  let shoppingCart = JSON.parse(localStorage.getItem("additem")) || [];

  async function products() {
    try {
      let items = await fetch('https://fakestoreapi.com/products');
      arrItem = await items.json();
      let container = $('#itemscontainer');

      arrItem.forEach(element => {
        container.append(`
          <div class="col-md-4 col-10 col-xl-3">
            <div class="row justify-content-end" id="contentscontainer">
              <div class="col-3" id="morebuttoncontainer" style="position: relative;">
                <button class="more" id="more-${element.id}" onclick="addToDescriptionPage(${element.id})"><i class="fa-solid fa-plus" style="color: white;"></i></button>
              </div>
              <div class="col-12" id="imgcontainer">
                <img src="${element.image}" alt="">
              </div>
              <div class="col-12 d-flex justify-content-center">
                <p id="title">${element.title}</p>
              </div>
              <div class="col-12 d-flex justify-content-center">
                <p>$${element.price}</p>
              </div>
              <div class="col-12 d-flex justify-content-center">
                <input type="button" value="Add to cart" id="button" onclick="addToCart(${element.id})">
              </div>
            </div>
          </div>
        `);
      });
    } catch (error) {
      console.log(error.toString());
    }
  }

  products();

  function addToCart(id) {
    itemsInCartCounterLocalS = JSON.parse(localStorage.getItem("counter")) || 0;
    shoppingCart = JSON.parse(localStorage.getItem("additem")) || [];
    let addedItems = arrItem.filter((e) => e.id === id);

    if (shoppingCart.findIndex((e) => e[0].id === id) >= 0) {
      return;
    }

    shoppingCart.push(addedItems);
    localStorage.setItem("additem", JSON.stringify(shoppingCart));
    updatecountItemInCart();
  }
  function countItemInCart() {
    let shoppingCart = JSON.parse(localStorage.getItem("additem")) || [];
    return shoppingCart.length;
  }

  function updatecountItemInCart() {
    let counter = $("#itemsincartcounter");
    counter.text(countItemInCart());
  }

  updatecountItemInCart();
  function addToDescriptionPage(id) {
    window.location.href = `/description.html?itemid=${id}`;
  }



