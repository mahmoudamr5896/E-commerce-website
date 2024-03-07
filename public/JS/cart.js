//creat small product card

const creatSmallCards=(data) => {
    return`

    <div class="sm-product">

                    <img src="${data.image}" class="sm-product-img" alt="product image">
                    <div class="sm-text">
                        <p class="sm-product-name">${data.name}</p>
                        <p class="sm-des">${data.shortDes}</p>
                    </div>
                    <div class="item-container">
                        <button class="counter-btn decrement">-</button>
                        <p class="item-count">${data.item}</p>
                        <button class="counter-btn increment">+</button>
                    </div>

                    <p class="sm-price" data-price="${data.sellPrice}">$${data.sellPrice * data.item}</p>
                    <button class="sm-delete-btn"><img src="img/c4.ico"></button>

                </div>
   `;
}

let totalBill = 0;

const setProducts = (name) => {
     const element = document.querySelector(`.${name}`);

     let data = json.pars(localStorage.getItem(name));
     if(data == null){
        element.innerHTML = `<img src="img/empty-card.jpg" class="empty-img">`;
     }
     else{
        for(let i=0; i<data.length; i++){
            element.innerHTML += creatSmallCards(data[i])
            if(name == 'cart'){
                totalBill += Number(data[i].sellPrice * data[i].item);
            }
        }

        let billPrice = document.querySelector('.bill')
        billPrice.innerHTML =`$${totalBill}`;
     }
}

setProducts (`cart`);
setProducts (`wishlist`);   