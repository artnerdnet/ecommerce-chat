const form = document.getElementById('deleteProductForm');
const button = document.getElementById('deleteButton');

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

  xhr.open("DELETE", `http://localhost:3000/api/products/${productId}`, true);
  xhr.send();
});
