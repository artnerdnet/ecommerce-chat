document.onload = function() {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", (e) => {
    if (e.target.responseText.length > 0) listProducts(JSON.parse(e.target.responseText))
  });
  xhr.addEventListener("error", (e) => {
    console.log(e);
  });

  xhr.open("GET", `http://localhost:3000/api/products/`, true);
  xhr.send();
}();

const listProducts = (products) => {
  const ul = document.getElementById('product_listing_ul');
  
  products.forEach(product => {
    const li = document.createElement('li');
    const dateCreated = new Date(product.timestamp).toLocaleDateString();
    const { name, price, picture, stock, description, _id } = product;

    const productText = {
      id: `Id: ${_id}`,
      title: `Title: ${name}`,
      description: `Description: ${description}`,
      price: `Price: $${price}`,
      thumbnail: `Image thumbnail: ${picture}`,
      stock: `Current stock: ${stock}`,
    }

    Object.keys(productText).forEach((item, index)=> {
      const span  = document.createElement('span');
      span.appendChild(document.createTextNode(productText[item]));
      li.appendChild(span)
    })

    ul.appendChild(li);
    return ul;
  })  
}
