let arrItem;
let shoppingCart=JSON.parse(localStorage.getItem("additem"))||[];
console.log(shoppingCart);
async function products() {
    try {
        let items = await fetch('https://fakestoreapi.com/products');
        arrItem = await items.json();
        let container = document.getElementById('itemscontainer');

        arrItem.forEach(element => {
            container.innerHTML += `
                <div class=" col-lg-3 col-md-4 col-11" id="items">
                    <div class="row justify-content-center">
                        <div class="col-11" id="imgcontainer">
                            <img src="${element.image}" alt="" >
                        </div>
                        <div class="col-12">
                            <p id="title">${element.title}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <p>${element.price}$</p>
                        </div>
                        <div class="col-6 d-flex justify-content-end ">
                            <input type="button" value="Add to cart" id="num" class="button" onclick=addToCart(${element.id})>
                        </div>
                    </div>
                </div>
            `;  
        });
    } catch (error) {
        console.log(error.toString());
    }
}
products();

function addToCart(id){
shoppingCart=JSON.parse(localStorage.getItem("additem"))||[]; 
  let addedItems=arrItem.filter((e)=>e.id===id)

  if(shoppingCart.findIndex((e)=>e[0].id===id)>=0)
  {
    return;
  }  
  
  shoppingCart.push(addedItems);
  localStorage.setItem("additem",JSON.stringify(shoppingCart));
  
}



