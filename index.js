let imgName = document.getElementById('card-name')
let imgSrc = document.getElementById('image-card')
let imgPrice = document.getElementById('price-tag')

let imgDescription = document.getElementById('product-des')
//Getting the image, title and the comments (GET METHOD)

function displayImageAndDetails(){
    const imageDetails = fetch ("http://localhost:3000/products/1")
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
const toggleButton = () => {
    const likeButton = document.querySelector("#like-button")
      
    likeButton.addEventListener("click", (event)  =>{
   if(likeButton.textContent === "👎🏻"){
      likeButton.textContent = "👍🏻"
   } else {
      likeButton.textContent = "👎🏻";
      
   }
   })
  }
  toggleButton();






 





  //leftside
  function fetchProducts(product){
    console.log("render product " + product.id)
    const productName = document.querySelector('#card-name');
    const productImage = document.querySelector('#image-card');
    const productDescription = document.querySelector('#product-des');
    


    
  }
    
    function updateDescription(product){

        button.preventDefault();        
        product.description = productEditDescription.value;
        patchProduct(product)
    };


   



function patchProduct(product){
    console.log(product, product.id)
    fetch(`http://localhost:3000/products/${product.id}`,
        {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(product)
        })
        .then(response => response.json())
        .then(data => fetchProducts(data))
        .catch(err => console.log(`Error: ${err}`))
};

function postProduct(product){
    fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {'content-Type': 'application/json'},
        body: JSON.stringify(beer)
    })
    .then(response => response.json())
    .then(data => fetchProducts(data))
    .catch(err => console.log(`Error: ${err}`))
}

function fetchData(product=null){
    let baseURL = 'http://localhost:3000/products/'
    return new Promise((resolve, reject) => {
        let url = product == null ? baseURL : `${baseURL + product}`
        fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => console.log(`Error: ${err}`));
        })
    };


function navRender(products){
    const navProductList = document.querySelector('#product-list');
    while (navProductList.firstElementChild){
        navProductList.removeChild(navProductList.lastElementChild)
    };

    products.forEach(product => {
        const navElement = document.createElement('li');
        navElement.textContent = product.name;
        navElement.setAttribute('index', product.id);
        navProductList.append(navElement)

        navElement.addEventListener('click', (button)=> {
            
            console.log("EventPhase: " + button.eventPhase)
            
            fetchData(button.target.getAttribute('index'))
            .then(product => {
                console.log("from fetch-> product id " + product.id);
                fetchProducts(product);
            });
        }, false);
    });


};

function get(){
    fetchData()
    .then(products => navRender(products))

    fetchData(1)
    .then(products => fetchProducts(products))
    
    
};

get()