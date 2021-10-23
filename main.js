'use strict'
if (localStorage.getItem('ourProducts') != null) {
  productsContainer = JSON.parse(localStorage.getItem('ourProducts'));
  displayProduct();
}
else {
  var productsContainer = [];
  alternate()
function alternate() {
  var alternative = ``
  alternative +=` <div>
<h3  class=" fs-3">No data added</h3>
</div>`;
  document.getElementById('nodata').innerHTML = alternative
  console.log(alternative)
  
}
}

var productNameInput = document.getElementById('productName');
var productPriceInput = document.getElementById('productPrice');
var productCategoryInput = document.getElementById('productCategory');
var productDescInput = document.getElementById('productDesc');

document.getElementById('addProduct').addEventListener('click', function () {
  var ourProduct = {
    name: productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    description: productDescInput.value,
  }
  console.log(ourProduct);
  productsContainer.push(ourProduct)
  localStorage.setItem('ourProducts', JSON.stringify(productsContainer));
  displayProduct();
}
)
function clearForm() {
  productNameInput.value = '';
  productPriceInput.value = '';
  productCategoryInput.value = '';
  productDescInput.value = '';
}

function displayProduct() {
  var dumpProducts = ` `
  for (var i = 0; i < productsContainer.length; i++) {
    dumpProducts += `<tr>
    <td>${i}</td>
    <td>${productsContainer[i].name}</td>
    <td>${productsContainer[i].price}</td>
    <td>${productsContainer[i].category}</td>
    <td>${productsContainer[i].description}</td>
    <td><button class="btn btn-outline-success">update</button></td>
    <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">delete</button></td>
    </tr>`
  }
  document.getElementById('displayBody').innerHTML = dumpProducts;
}

function deleteProduct(index) {
  productsContainer.splice(index, 1);
  localStorage.setItem('ourProducts', JSON.stringify(productsContainer))
  displayProduct();
}

function searchProduct(term) {
  var dumpProducts = ``
  for (var i = 0; i < productsContainer.length; i++) {
    if (productsContainer[i].name.toLowerCase().includes(term.toLowerCase()) == true) {
      dumpProducts += `<tr>
      <td>${i}</td>
      <td>${productsContainer[i].name}</td>
      <td>${productsContainer[i].price}</td>
      <td>${productsContainer[i].category}</td>
      <td>${productsContainer[i].description}</td>
      <td><button class="btn btn-outline-success">update</button></td>
      <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">delete</button></td>
      </tr>`
    }
  }
  document.getElementById('displayBody').innerHTML = dumpProducts;
}

