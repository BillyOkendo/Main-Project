let imgName = document.getElementById('card-name')
let imgSrc = document.getElementById('image-card')
let imgPrice = document.getElementById('price-tag')

let imgDescription = document.getElementById('product-des')
//Getting the image, title and the comments (GET METHOD)

function displayImageAndDetails(){
    const imageDetails = fetch ("http://localhost:3000/Product/1")
    .then(resp => resp.json())
    .then(data => renderImageAndDetails(data))
    return imageDetails
}
displayImageAndDetails()

function renderImageAndDetails(imageDetails){
  imgName.textContent = imageDetails.name;
  imgSrc.src = imageDetails.image;
  imgDescription.textContent = imageDetails.description;

  imgPrice.textContent = imageDetails.price;
  

  
}




// like button 
const toggleHeart = () => {
    const likeButton = document.querySelector("#like-button")
      
    likeButton.addEventListener("click", (event)  =>{
   if(likeButton.textContent === "♡"){
      likeButton.textContent = "♥"
   } else {
      likeButton.textContent = "♡";
      
   }
   })
  }
  toggleHeart();









  //leftdiv
  function fetchProducts(Product){
  console.log("render Product " + Product.id)
  const productName = document.querySelector('card-name');
  const productImage = document.querySelector('#image-card');
  const productDescription = document.querySelector('#product-des');
  const productPrice = document.querySelector('#product-des');
  }
  // Target Description FORM
//   const beerDescriptionForm= document.querySelector('#description-form');
//   const beerEditDescription = document.querySelector('#description');
//   beerDescriptionForm.reset();
// productName.textContent = Product.name,                   // beer name
//     productImage.src = Product.image_url,                     // beer image
//     productDescription.textContent = Product.description,     // beer desc.
//     productEditDescription.value = Product.description        //beer desc. form

  // update description
  
// function updateDescription(button){

//     button.preventDefault();        
//     Product.description = productEditDescription.value;
//     patchProduct(Product)
// };





  function patchProduct(Product){
    console.log(Product, Product.id)
    fetch(` http://localhost:3000/Product/${Product.id}`,
    
        {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(Product)
        })
        .then(response => response.json())
        .then(data => fetchBeers(data))
        .catch(err => console.log(`Error: ${err}`))
};


function postProduct(Product){
    fetch('Product', {
        method: 'POST',
        headers: {'content-Type': 'application/json'},
        body: JSON.stringify(Product)
    })
    .then(response => response.json())
    .then(data => fetchProduct(data))
    .catch(err => console.log(`Error: ${err}`))
}

function fetchData(Product=null){
    let baseURL = 'http://localhost:3000/Product/'
    return new Promise((resolve, reject) => {
        let url = Product == null ? baseURL : `${baseURL + Product}`
        fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => console.log(`Error: ${err}`));
        })
    };


function navRender(Product){
    // Navigation Beer List
    const navProductList = document.querySelector('#product-list');
    while (navProductList.firstElementChild){
        navProductList.removeChild(navProductList.lastElementChild)
    };

     Product.forEach(Product => {
        const navElement = document.createElement('li');
        navElement.textContent = Product.name;
        navElement.setAttribute('index', Product.id);
        navProductList.append(navElement)

        navElement.addEventListener('click', (button)=> {
            
            console.log("EventPhase: " + button.eventPhase)
            
            fetchData(button.target.getAttribute('index'))
            .then(Product => {
                console.log("from fetch-> Product id " + Product.id);
                fetchProducts(Product);
            });
         }, false);
     });


};


function get(){
    fetchData()
    .then(Products => navRender(Products))
    fetchData(1)
    .then(Products => fetchProducts(Products))
    
    
};
  

get()

  
