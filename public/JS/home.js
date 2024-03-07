
const productContainers =[...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

const setupslidingEffect = () => {
productContainers.forEach((items, i ) => {
    let containerDimenstions = items.getBoundingClientRect();
    let containerWidth = containerDimenstions.width

    nxtBtn[i].addEventListener('click', () => {
        items.scrollLeft += containerWidth
    })

    preBtn[i].addEventListener('click', () => {
        items.scrollLeft -= containerWidth
    })
});

}


// temporary
productContainers.forEach((items, i ) => {
    let containerDimenstions = items.getBoundingClientRect();
    let containerWidth = containerDimenstions.width

    nxtBtn[i].addEventListener('click', () => {
        items.scrollLeft += containerWidth
    })

    preBtn[i].addEventListener('click', () => {
        items.scrollLeft -= containerWidth
    })
})
//___________________

// fetch product cards
const getProducts = (tag) => {
    return fetch('get-products', {
        method: 'post',
        headers: new Headers({"Content-Type": "application/json"}),
        body: JSON.stringify({tag: tag})
    })
    .then(res => res.json())
    .then(data => {
        return data;
    })
}

const createProductSlider = (data, parent, title) => {
    let slideContainer = document.querySelector(`${parent}`);

    slideContainer.innerHTML += `
    <section class="product">
      <h2 class="product-category">${title}</h2>
      <button class="pre-btn"><img src="../img/arrow.png" alt="" /></button>
      <button class="nxt-btn"><img src="../img/arrow.png" alt="" /></button>

${createProductsCards(data)}

    </section>
      `
    setupslidingEffect();

}


const createProductsCards = (data, parent) => {
    // parent is for search
    let start = '<div class="product-container">';
    let middle = '';
    let end = '</div>';

    for(let i = 0; i < data.length; i++){
        middle = `
        <div class="product-card">
          <div class="product-image">
            <span class="discount-tag">${data[i].discount}% off</span>
            <img src="${data[i].images[0]}" class="product-thumb" alt="" />
          </div>
          <div class="product-info" onclick="location.href = '/products/${data[i].id}'">
            <h2 class="product-brand">${data[i].name}</h2>
            <p class="product-short-des">${data[i].shortDes}</p>
            <span class="price">${data[i].shortDes}</span
            ><span class="actual-price">">${data[i].actualPrice}</span>
          </div>
        </div>
        `;
    }
    return start + middle + end;
}
// function addImg(magazine){
//     for (let i=0; i < magazine.length; i++){
//     let img = productContainers.querySelectorAll('.product-thumb');
//     img.setAttribute('src', magazine[i])
//     }
// }