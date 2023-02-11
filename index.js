//fetching the products from the given api
fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((json) => {
    // console.log(json.products)
    const productCardTemplate = document.querySelector(
      "#product-card-template"
    );
    const productContainer = document.querySelector("#product-container");

    //iterate over the all the products
    for (var i = 0; i < 30; i++) {
      // console.log(`${json.products[i].title}`);

      //cloning the card template for next data
      const productCard = productCardTemplate.content.cloneNode(true);

      //product image
      productCard.querySelector(".product-image").src =
        json.products[i].images[0];

      //product title
      productCard.querySelector(".product-title").textContent =
        "Name: " + json.products[i].title;

      //product brand
      productCard.querySelector(".product-brand").textContent =
        "Brand: " + json.products[i].brand;
      
      //product price
      productCard.querySelector(".product-price").textContent =
        "Price: $" + json.products[i].price;

      //product rating
      productCard.querySelector(".product-rating").textContent =
        "Rating: " + json.products[i].rating;

      //product stock
      productCard.querySelector(".product-stock").textContent =
        "Stock: : " + json.products[i].stock;

      // append to html
      productContainer.appendChild(productCard);
    }
  });
