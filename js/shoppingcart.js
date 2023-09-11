let container=document.getElementById("con");
let container1=document.getElementById("con1");
let totalPriceElement=document.getElementById("totalprice");
let totalPrice=0.0;

function products(){
    let itemsInCart=JSON.parse(localStorage.getItem('additem'));
    if(!itemsInCart||itemsInCart.length==0){
        container1.innerHTML=`<div style="display:flex; align-items:center;justify-content:center;"><h1>No-Items</h1></div>`;
        return;
    }
    itemsInCart.forEach(element => {
    totalPrice+=element[0].price;
    totalPriceElement.innerText="$"+totalPrice;
     container.innerHTML+=`
     <div class="row align-items-center" id="contentscontainer">
     <div class="col-4">
       <img src="${element[0].image}" alt="" style="height: 50px; width: 50px;">
     </div>
     <div class="col-8">
       <div class="row">
      <div class="col-12"><p id="title">${element[0].title}</p></div>
      <div class="col-12"><p id="price-${element[0].id}">$${element[0].price}</p></div>

      <div class="col-4 d-flex align-items-center justify-content-between" id="divcounter">
       <button style="display: flex; align-items: center; justify-content: center;" class="counterbtn "onclick=dencrease(${element[0].id},${element[0].price})>-</button>
       <input type="text" value="1" id="${element[0].id}" class="countnum">
       <button style="display: flex; align-items: center; justify-content: center;" class="counterbtn " onclick=increase(${element[0].id},${element[0].price}) >+</button>
   </div>
   <div class="col-12 d-flex justify-content-end">
     <button id="remove-${element[0].id}" onclick=removeItem(${element[0].id}) class="button">
       <i class="fa-solid fa-trash" id="removeicon"></i>
       </button>
   </div>
   </div>
 </div>
 </div>
`
    });
}
products();

function increase(id,firstPrice){
   let counter= document.getElementById(id);
   let plus=parseInt(counter.value)+1;
   counter.value=plus;
   let price=document.getElementById(`price-${id}`);
   let priceNumber = price.innerText.substring(1);
   let newPrice=parseFloat(priceNumber)+firstPrice;
   newPrice=newPrice.toFixed(2);
   let totalPriceElementNUmber=totalPriceElement.innerText.substring(1);
   let newTotalprice=parseFloat(totalPriceElementNUmber)+firstPrice;
   let newTotalprice1=newTotalprice.toFixed(2);
   price.innerText="$"+newPrice;
   totalPriceElement.innerText="$"+newTotalprice1;  
}
function dencrease(id,firstPrice){
    let counter=document.getElementById(id);
    if(parseInt(counter.value)>1){
    let minus=parseInt(counter.value)-1;
    counter.value=minus;
    let price=document.getElementById(`price-${id}`);
    let priceNumber = price.innerText.substring(1);
    let newPrice=parseFloat(priceNumber)-firstPrice;
    newPrice=newPrice.toFixed(2);
    let totalPriceElementNUmber=totalPriceElement.innerText.substring(1);
    let newTotalprice=parseFloat(totalPriceElementNUmber)-firstPrice;
    newTotalprice=newTotalprice.toFixed(2);
    price.innerText="$"+newPrice;
    totalPriceElement.innerText="$"+newTotalprice;
    }
}

function removeItem(id) {
    let itemsInCart = JSON.parse(localStorage.getItem('additem'));


    itemsInCart = itemsInCart.filter(element => element[0].id !== id);
    localStorage.setItem('additem', JSON.stringify(itemsInCart));
    container.innerHTML="";
    products();
    itemsInCart = JSON.parse(localStorage.getItem('additem'));
    let totalPrice=0.0;
    itemsInCart.forEach(element=>{
        totalPrice+=getTotalPriceForAnItem(element[0].id)  
    })
    totalPriceElement.innerText="$"+totalPrice;
    updatecountItemInCart();
}

function getTotalPriceForAnItem(id){ 
 let price=document.getElementById(`price-${id}`);
 if(!price){
    return 0;
 }
 let priceNumber = Number(price.innerText.substring(1))||0;
 return priceNumber;
}

function countItemInCart(){
    let shoppingCart=JSON.parse(localStorage.getItem("additem"))||[]; 
    return shoppingCart.length;
  }
  function updatecountItemInCart(){
    let counter=document.getElementById("itemsincartcounter");
    counter.innerText=countItemInCart();
  }
  updatecountItemInCart();





