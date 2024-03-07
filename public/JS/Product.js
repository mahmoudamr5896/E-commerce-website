const productImages = document.querySelectorAll(".product-images img"); // selecting all image thumbs
const productImageSlide = document.querySelector(".image-slider"); // seclecting image slider element

let activeImageSlide = 0; // default slider image

productImages.forEach((item, i) => { // loopinh through each image thumb
    item.addEventListener('click', () => { // adding click event to each image thumbnail
        productImages[activeImageSlide].classList.remove('active'); // removing active class from current image thumb
        item.classList.add('active'); // adding active class to the current or clicked image thumb
        productImageSlide.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
        activeImageSlide = i; // updating the image slider variable to track current thumb
    })
})

// button size is active 
const sizeBtns = document.querySelectorAll('.size-radio-btn'); // selecting size buttons
let checkedBtn = 0; // current selected button

sizeBtns.forEach((item, i) => { // looping through each button
    item.addEventListener('click', () => { // adding click event to each 
        sizeBtns[checkedBtn].classList.remove('check'); // removing check class from the current button
        item.classList.add('check'); // adding check class to clicked button
        checkedBtn = i; // upading the variable
    })
})

//____________________________________________
const setData = (data) => {

let title = document.querySelector('title');

        productImages.forEach((img, i) => {
            if(data.images[i]){
                img.src = data.images[i];
            } else{
                img.style.display = 'none';
            }
        })

        productImages[0].click();

        // setup size buttons
            sizeBtns.forEach(items => {
                if(!data.sizes.includes(item.innerHTML)){
                    item.style.display = 'none';
                }
            })

        // setting up texts 
            const name = document.querySelector('.product-brand');
            const shortDes = document.querySelector('.product-short-des');
            const des = document.querySelector('.des');

            title.innerHTML += name.innerHTML = data.name;
            shortDes.innerHTML - data.shortDes;
            des.innerHTML = data.des;

            // pricing
            const sellPrice = document.querySelector('.product-price')
            const actualPrice = document.querySelector('.product-actual-price')
            const discount = document.querySelector('.product-discount')

            sellPrice.innerHTML = `$${data.sellPrice}`;
            actualPrice.innerHTML = `$${data.actualPrice}`;
            discount.innerHTML = `(${data.discount} %off)`;
        }

const fetchProductData = () => {
    fetch('/get-products', {
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify({id:productId})
    }).then((res) => res.json())
    .then(data => {
        setData(data);
        getProducts(data.tags[1]).then(data => createProductSlider(data, '.container-for-card-slider', 'similar products'))
    })
    .catch(err => {
        location.replace('/404');
    })
}


let productId = null
if(location.pathname != '/products'){
    productId = decodeURI(location.pathname.split('/').pop());
}


// // arrow function ___________________________________________
// var modal = document.getElementById('id01');
            
//             // When the user clicks anywhere outside of the modal, close it
//             window.onclick = function(event) {
//               if (event.target == modal) {
//                 modal.style.display = "none";
//               }
//             }





























