


const createCards = ()=>{
    productCards.innerHTML= `
    <div class="product-card">
    <div class="product-image">
      <span class="discount-tag">50% off</span>
      <img src="img/card6.png" class="product-thumb" alt="" />
      <button class="card-btn">add to whislist</button>
    </div>
    <div class="product-info">
      <h2 class="product-brand">brand</h2>
      <p class="product-short-des">a short line about the cloth..</p>
      <span class="price">$20</span><span class="actual-price">$40</span>
    </div>
    <div class="product-card">
    <div class="product-image">
      <span class="discount-tag">50% off</span>
      <img src="img/card6.png" class="product-thumb" alt="" />
      <button class="card-btn">add to whislist</button>
    </div>
    <div class="product-info">
      <h2 class="product-brand">brand</h2>
      <p class="product-short-des">a short line about the cloth..</p>
      <span class="price">$20</span><span class="actual-price">$40</span>
    </div>
    <div class="product-card">
    <div class="product-image">
      <span class="discount-tag">50% off</span>
      <img src="img/card6.png" class="product-thumb" alt="" />
      <button class="card-btn">add to whislist</button>
    </div>
    <div class="product-info">
      <h2 class="product-brand">brand</h2>
      <p class="product-short-des">a short line about the cloth..</p>
      <span class="price">$20</span><span class="actual-price">$40</span>
    </div>
    <div class="product-card">
    <div class="product-image">
      <span class="discount-tag">50% off</span>
      <img src="img/card6.png" class="product-thumb" alt="" />
      <button class="card-btn">add to whislist</button>
    </div>
    <div class="product-info">
      <h2 class="product-brand">brand</h2>
      <p class="product-short-des">a short line about the cloth..</p>
      <span class="price">$20</span><span class="actual-price">$40</span>
    </div>
    <div class="product-card">
    <div class="product-image">
      <span class="discount-tag">50% off</span>
      <img src="img/card6.png" class="product-thumb" alt="" />
      <button class="card-btn">add to whislist</button>
    </div>
    <div class="product-info">
      <h2 class="product-brand">brand</h2>
      <p class="product-short-des">a short line about the cloth..</p>
      <span class="price">$20</span><span class="actual-price">$40</span>
    </div>
    <div class="product-card">
    <div class="product-image">
      <span class="discount-tag">50% off</span>
      <img src="img/card6.png" class="product-thumb" alt="" />
      <button class="card-btn">add to whislist</button>
    </div>
    <div class="product-info">
      <h2 class="product-brand">brand</h2>
      <p class="product-short-des">a short line about the cloth..</p>
      <span class="price">$20</span><span class="actual-price">$40</span>
    </div>
    <div class="product-card">
    <div class="product-image">
      <span class="discount-tag">50% off</span>
      <img src="img/card6.png" class="product-thumb" alt="" />
      <button class="card-btn">add to whislist</button>
    </div>
    <div class="product-info">
      <h2 class="product-brand">brand</h2>
      <p class="product-short-des">a short line about the cloth..</p>
      <span class="price">$20</span><span class="actual-price">$40</span>
    </div>
    `;
    for (let i=0; i < magazine.length; i++){
        let img = document.getElementById('product-thumb');
        img.setAttribute('src', magazine[i])
        }
};
createCards(magazine);