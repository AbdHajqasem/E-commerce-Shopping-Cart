let container=document.getElementById("con");
let totalPriceElement=document.getElementById("totalprice");
let totalPrice=0.0;
function products(){
    let itemsInCart=JSON.parse(localStorage.getItem('additem'));
    if(!itemsInCart||itemsInCart.length==0){
        container.innerHTML="no item";
        return;
    }
    itemsInCart.forEach(element => {
    totalPrice+=element[0].price;
    totalPriceElement.innerText=totalPrice+"$";
     container.innerHTML+=
     `<div class="row align-items-center bg-danger" style="margin:5px 0 5px 0 ;">
        <div class="col-3">
            <img src="${element[0].image}" alt="">
        </div>
        <div class="col-8 ">
            <div class="row justify-content-between">
                <div class="col-md-8 col-6">
                    <p>${element[0].title}</p>
                </div>
                <div class="col-md-2 col-5 ">
                <button id="remove-${element[0].id}" onclick=removeItem(${element[0].id})>
                    <i class="fa-solid fa-trash" id="removeicon"></i>
                    </button>
                </div>
            </div>
            <div class="row justify-content-between">
                <div class="col-md-8 col-6 d-flex ">
                    <p id="price-${element[0].id}">${element[0].price}$</p>
                </div>
                <div class="col-md-2 col-5 d-flex align-items-center justify-content-between" id="divcounter">
                    <button style="display: flex; align-items: center; justify-content: center;" class="counterbtn "onclick=dencrease(${element[0].id},${element[0].price})>-</button>
                    <input type="text" value="1" id="${element[0].id}" class="countnum">
                    <button style="display: flex; align-items: center; justify-content: center;" class="counterbtn " onclick=increase(${element[0].id},${element[0].price}) >+</button>
                </div>
            </div>
        </div>
    </div>` 
    });
}
products();
function increase(id,firstPrice){
   let counter= document.getElementById(id);
   let plus=parseInt(counter.value)+1;
   counter.value=plus;
   let price=document.getElementById(`price-${id}`);
   let newPrice=parseFloat(price.innerText)+firstPrice;
   let newTotalprice=parseFloat(totalPriceElement.innerText)+firstPrice;
   let newTotalprice1=newTotalprice.toFixed(2);
   price.innerText=newPrice +"$";
   totalPriceElement.innerText=newTotalprice1+"$";

   
}
function dencrease(id,firstPrice){
    let counter=document.getElementById(id);
    if(parseInt(counter.value)>1){
    let minus=parseInt(counter.value)-1;
    counter.value=minus;
    let price=document.getElementById(`price-${id}`);
    let newPrice=parseFloat(price.innerText)-firstPrice;
    let newPrice1=newPrice.toFixed(2);
    let newTotalprice=parseFloat(totalPriceElement.innerText)-firstPrice;
    let newTotalprice1=newTotalprice.toFixed(2);
    price.innerText=newPrice1+"$";
    totalPriceElement.innerText=newTotalprice1+"$";
    }
}

function removeItem(id) {
    let price=document.getElementById(`price-${id}`);
    let currentTotalPrice=parseFloat(totalPriceElement.innerText)-parseFloat(price.innerText);
    console.log(currentTotalPrice);
    totalPriceElement.innerText=currentTotalPrice+"$";
    let itemsInCart = JSON.parse(localStorage.getItem('additem'));
    itemsInCart = itemsInCart.filter(element => element[0].id !== id);
    localStorage.setItem('additem', JSON.stringify(itemsInCart));
    container.innerHTML="";
    products();
}




