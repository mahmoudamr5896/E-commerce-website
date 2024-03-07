const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/dark-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" onkeydown = "if (event.keyCode == 13)
                    document.getElementById('btnSearch').click()"  class="search-box" placeholder="search brand, product">
                    <button id="btnSearch" class="search-btn">search</button>
                </div>
                <a>
                <img src="img/user.png" id="user-img" alt="">
                <div class="login-logout-popup hide">
                <p class="account-info"> name </p>
                <button class="btn" id="user-btn">Log in</button>
                </div> 
                </a>

                <a href="../cart.html"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <div style="
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        width: 100% !important;
        padding: 10px 10vw !important;
        list-style: none !important;
        border-top: 1px solid #d1d1d1 !important;"
         class="links-container">
            <span class="link-item"><a href="../index.html" class="link">home</a></span>
            <span class="link-item"><a href="../Woman.html" class="link">women</a></span>
            <span class="link-item"><a href="../Men.html" class="link">men</a></span>
            <span class="link-item"><a href="../kids.html" class="link">kids</a></span>
            <span class="link-item"><a href="../Accessories.html" class="link">accessories</a></span>
            <span class="link-item"><a href="../about.html" class="link">About US</a></span>
        </div>
    `;
}

createNav();

// nav loginInfo popup
const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popupText = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');
const searchInput = document.querySelector('.search-box');
const searchBtn = document.querySelector('.search-btn');


searchBtn.addEventListener('click', () => {
    search();
})

function search(){

    let input = searchInput.value.toUpperCase(  );
    if(input){
         if(input.includes('KIDS') ){
            location.href = '../kids.html';
         }else if(input.includes('ACCESSORIES')){
            location.href = '../Accessories.html';
         }else if(input.includes('SHIRT')){
            if(input.includes('WOMAN') || input.includes('WOMEN')){
                location.href = '../Woman.html';
            } else{
                location.href = '../ment-shirts.html';
            }
         }else if(input.includes('SHOE')){
            if(input.includes('WOMAN') || input.includes('WOMEN')){
                location.href = '../Wshoes.html'; 
            } else{
                location.href = '../Mshoes.html';
            }
         }else if(input.includes('SWEAT')){
            if(input.includes('WOMAN') || input.includes('WOMEN')){
                location.href = '../Msweatshirts.html'; 
            } else{
                location.href = '../Wswtshirts.html';
            }
         }else if(input.includes('TROUSERS')){
            if(input.includes('WOMAN') || input.includes('WOMEN')){
                location.href = '../Wtrousers.html'; 
            } else{
                location.href = '../Mtrousers.html';
            }
         }else if(input.includes('WATCH')){
            if(input.includes('WOMAN') || input.includes('WOMEN')){
                location.href = '../Wwatches.html'; 
            } else{
                location.href = '../Mwatches.html';
            }
         }else if(input.includes('DRESS')){
                location.href = '../Wdresses.html'; 
         }else if(input.includes('FORMAL')){
            if(input.includes('WOMAN') || input.includes('WOMEN')){
                location.href = '../Wformal.html'; 
            } else{
                location.href = '../Mformal.html';
            }
         }else if(input.includes('MEN')){
            location.href = '../Men.html';
         }else if(input.includes('WOMAN') || input.includes('WOMEN')){
            location.href = '../Woman.html';
         } else{
            location.href = '../no-search-results.html';
            document.querySelector('.error-msg').innerHTML=`
            no serch results for ${input}`
         }
    }
}



userImageButton.addEventListener('click', () => {
    userPopup.classList.toggle('hide');
})
window.onload = () => {
if(sessionStorage.user){
        let user = JSON.parse(sessionStorage.user);
        // means there're user data in the session from the backend.. so logded in
            popupText.innerHTML = `${user.name}`;
            actionBtn.innerHTML = 'log out';
            actionBtn.addEventListener('click', () => {
                sessionStorage.clear();
                location.reload();
            })
}else{
    // user is logged out
    popupText.innerHTML = 'login to place order';
    actionBtn.innerHTML = 'log in';
    actionBtn.addEventListener('click', () => {
        location.href = '/login';
    })
}
}