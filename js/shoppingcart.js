let container=document.getElementById("con");
let addedItems=localStorage.getItem('additem');
if(addedItems){
    let itemsInCart=JSON.parse(addedItems);
    products(itemsInCart);
}
function products(itemsInCart){
    itemsInCart.forEach(element => {
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
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div>
            <div class="row justify-content-between">
                <div class="col-md-8 col-6 d-flex ">
                    <p id="price-${element[0].id}">${element[0].price}$</p>
                </div>
                <div class="col-md-2 col-5 d-flex align-items-center justify-content-between" id="divcounter">
                    <button style="display: flex; align-items: center; justify-content: center;" class="counterbtn "onclick=dencrease(${element[0].id})>-</button>
                    <input type="text" value="1" id="${element[0].id}" class="countnum">
                    <button style="display: flex; align-items: center; justify-content: center;" class="counterbtn " onclick=increase(${element[0].id}) >+</button>
                </div>
            </div>
        </div>
    </div>` 
    });
}
function increase(id){
   let counter= document.getElementById(id);
   let plus=parseInt(counter.value)+1;
   counter.value=plus;
   let price=document.getElementById(`price-${id}`);
   let newPrice=parseFloat(price.innerText)/plus;
   newPrice=parseFloat(price.innerText)+newPrice;
   price.innerText=newPrice;
}
function dencrease(id){
    let counter=document.getElementById(id);
    if(parseInt(counter.value)>1){
    let minus=parseInt(counter.value)-1;
    counter.value=minus;

    }
}


