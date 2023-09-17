const header = $('#navbarcon');
header.append(`
<nav class="navbar navbar-expand-lg ">
<div class="container-fluid">
    <a class="navbar-brand" href="#" >The Shop</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id="togglebtn">
        <i class="fa-solid fa-bars" style="color: white;"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
            <li class="nav-item">
                <a class="nav-link link active" href="/homepage.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link  link"  href="/mainpage.html" style="color: orangered;">Shop</a>
            </li>
            <li class="nav-item">
                <a class="nav-link link" href="/homepage.html#contact">Contacts</a>
            </li>
            <li class="nav-item">
                <a class="nav-link link" href="/homepage.html#aboutussection">About Us</a>
            </li>
        </ul>
        <ul class="navbar-nav ml-auto" id="needtologin">
            <li class="nav-item">
                <div class="position-relative" style="width: 45px;">
                    <a class="nav-link link" href="/shoppingcart.html" style="width: 19px;" aria-current="page">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span class="badge  position-absolute  start-100 translate-middle" id="itemsincartcounter">0</span>
                    </a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link link" href="/signin.html"><i class="fa-solid fa-user-plus"></i></a>
            </li>
        </ul>
        <ul class="navbar-nav ml-auto" style="display: none; justify-content: space-between;" id="loggedin">
            <li class="nav-item" style="margin: 9px 15px 0 15px;" >
                <p id="firstname" style="display: inline-block; color: orangered;"></p>
                
            </li>
            <li class="nav-item">
                <div class="position-relative" style="width: 45px;">
                    <a class="nav-link link" href="/shoppingcart.html" style="width: 19px;" aria-current="page">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span class="badge  position-absolute  start-100 translate-middle"  id="itemsincartcounterloggedin">0</span>
                    </a>
                </div>
            </li>
            <li class="nav-item" style="margin: 9px 15px 0 15px;">
                <a onclick="signout()" id="signoutlink"><i class="fa-solid fa-right-from-bracket"></i></a>
            </li>

        </ul>
    </div>
</div>
</nav> `
);
