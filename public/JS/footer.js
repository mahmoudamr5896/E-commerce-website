const createFooter = () => {

    let footer = document.querySelector('footer');
    footer.innerHTML = `
    <div class="footer-content">
      <img src="./img/light-logo.png" class="logo" alt="" />
      <div class="footer-ul-container">
        <ul class="category">
          <span class="category-title">men</span>
          <span><a href="../ment-shirts.html" class="footer-link">t-shirts</a></span>
          <span><a href="../Wswtshirts.html" class="footer-link">sweatshirts</a></span>
          <span><a href="../Mtrousers.html" class="footer-link">trousers</a></span>
          <span><a href="../Mshoes.html" class="footer-link">shoes</a></span>
          <span><a href="../Mformal.html" class="footer-link">formals</a></span>
          <span><a href="../Mwatches.html" class="footer-link">watch</a></span>
        </div>
        <div class="category">
          <span class="category-title">women</span>
          <span><a href="../Wswtshirts.html" class="footer-link">sweatshirts</a></span>
          <span><a href="../Wtrousers.html" class="footer-link">trousers</a></span>
          <span><a href="../Wshoes.html" class="footer-link">shoes</a></span>
          <span><a href="../Wformal.html" class="footer-link">formals</a></span>
          <span><a href="../Wdresses.html" class="footer-link">Dresess</a></span>
          <span><a href="../Wwatches.html" class="footer-link">watch</a></span>
        </div>
      </div>
      <p class="footer-title">about company</p>
      <p class="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        consequuntur dicta atque odio soluta assumenda voluptate minima iure,
        quasi libero accusamus est accusantium enim. Corporis harum temporibus
        reiciendis assumenda numquam?
      </p>
      <p class="info">
        support emails - help@clothing.com, customersupport@clothing.com
      </p>
      <p class="info">telephone - 180 00 00 001, 180 00 00 002
        <div class="footer-social-container">
          <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
          </div>
          <div>
            <a href="https://www.facebook.com/" class="social-link">instagram</a>
            <a href="https://twitter.com/i/flow/login" class="social-link">facebook</a>
            <a href="https://www.instagram.com" class="social-link">twitter</a>
          </div>
        </div>
      </p>
    </div>
    <p class="footer-credit">Clothing, Best apparels online store</p>
    `;
}
createFooter ();