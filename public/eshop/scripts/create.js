    const form = document.getElementById('createProductForm');
    const button = document.getElementById('createButton');

    button.addEventListener("click", (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      e.preventDefault();
      const xhr = new XMLHttpRequest();
      xhr.addEventListener("load", (e) => {
        console.log('Product Created')
      });
      xhr.addEventListener("error", (e) => {
        console.log(e);
      });
      xhr.open("POST", `http://localhost:3000/api/products`);
      xhr.send(formData)
    });
