const form = document.getElementById('updateProductForm');
const button = document.getElementById('updateButton');

button.addEventListener("click", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const productId = formData.get('id')

  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", (e) => {
    console.log(e.target.responseText);
  });
  xhr.addEventListener("error", (e) => {
    console.log(e);
  });
  xhr.open("PUT", `http://localhost:3000/api/products/${productId}`);
  xhr.send(formData);
});
