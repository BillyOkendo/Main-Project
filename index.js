let imgName = document.getElementById('card-name')
let imgSrc = document.getElementById('image-card')
let imgPrice = document.getElementById('price-tag')

let imgDescription = document.getElementById('product-des')
//Getting the image, title and the comments (GET METHOD)

function displayImageAndDetails(){
    const imageDetails = fetch ("http://localhost:3000/products/2")
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

  //list

const findData = () => {
    const listItem = document.querySelector("#product-list")

    listItem.addEventListener("click",() => {
        if(listItem = `${product.name}`){
            
        }
    })
}




 





  //leftside
function postProduct(){
    fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {'content-Type': 'application/json'},
        body: JSON.stringify(product)
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
            
            fetchData(button.target.getAttribute('index'))
            .then(product => {
                console.log("from fetch-> product id " + product.name + product.price + product.description);
               
            });
        }, false);
    });


};

function get(){
    fetchData()
    .then(products => navRender(products))
};

get()





//sliding samples
var images = [
    "https://cdn.vox-cdn.com/thumbor/SJcmPEheS_cbdujd4zbIPTpuXfg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13315959/akrales_181019_3014_0770.jpg",
    "https://5.imimg.com/data5/HG/XP/MY-29014295/vacuum-cleaner-500x500.jpg",
    "https://cdn.vox-cdn.com/thumbor/SJcmPEheS_cbdujd4zbIPTpuXfg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13315959/akrales_181019_3014_0770.jpg",
    "https://thumbs.dreamstime.com/b/comfortable-couch-orange-red-pillow-spacious-living-room-interior-comfortable-couch-orange-red-pillow-131769657.jpg",
    "https://m.media-amazon.com/images/I/71czD50UQ5L._AC_UX385_.jpg",
   "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mower-1568302588.jpg?crop=1.00xw:0.669xh;0,0.318xh&resize=1200:*",
    "https://hotpoint.co.ke/media/products/2021/11/VEL32HSVF.png",
    "https://giftsandflowers.co.ke/wp-content/uploads/2021/04/branded-mugs-in-kenya-2.jpg"
    
  ]
  var imageHead = document.getElementById("product-holder");
  var i = 0;
setInterval(function() {
      imageHead.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
        i =  0;
      }
}, 2000);



       
