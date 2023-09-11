let shoppingCart=JSON.parse(localStorage.getItem("additem"))||[];
let container=document.getElementById("con");
let itemsContainer=document.getElementById("itemscontainer")
let urlParams = new URLSearchParams(window.location.search);

let id = urlParams.get('itemid');
if(!id||isNaN(Number(id))){
    window.location.href=`/mainpage.html`;
}

async function ftch(){
try{let item= await fetch(`https://fakestoreapi.com/products/${id}`);
let itembody= await item.json();
    container.innerHTML +=` <div class="row" style="margin:15px">
    <div class="col-md-6 col-10" id="imgcontainer">
        <img src="${itembody.image}" alt="">
    </div>
    <div class="col-md-6 col-12  my-xl-custom" >
        <div class="row justify-content-center">
            <div class="col-11">
                <h5>${itembody.title}</h5>
            </div>
            <div class="col-11">
                <h4>$${itembody.price}</h4>
            </div>
            <div class="col-11">
                <h5>Product Details</h5>
            </div>
            <div class="col-11">
                <p>${itembody.description}</p>
            </div>
            <div class="col-11">
               <input type="button" value="Add to cart" id="button" onclick=addToCart(${itembody.id})>
            </div>
    </div>
</div>
    `
    let sameType= await fetch('https://fakestoreapi.com/products/category/jewelery')
let sameTypeBody= await sameType.json();
sameTypeBody.forEach(element => {
    itemsContainer.innerHTML += `
    <div class="col-md-4 col-10 col-xl-3">
    <div class="row justify-content-end" id="contentscontainer">
      <div class="col-3" id="morebuttoncontainer" style="position: relative;">
        <button  class="more" id="more-${element.id}" onclick=addToDescriptionPage(${element.id})><i class="fa-solid fa-plus" style="color: white;"></i></button>
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
        <input type="button" value="Add to cart" id="button" onclick=addToCart(${element.id})>
      </div>
    </div>
   </div>
    `;  
}
catch(error){
    container.innerHTML =`<h1>ID not valid, redirect to main page after 3sec </h1>`
    setTimeout(e=>  window.location.href=`/mainpage.html`,3000);
}
}
ftch();
function addToCart(id){
      shoppingCart=JSON.parse(localStorage.getItem("additem"))||[]; 
      
      if(shoppingCart.findIndex((e)=>e[0].id===id)>=0)
      {
        return;
      }  
      shoppingCart.push(itemDescriptionglo);
      localStorage.setItem("additem",JSON.stringify(shoppingCart));
      
    }