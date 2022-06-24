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
   if(likeButton.textContent === "👎🏻"){
      likeButton.textContent = "👍🏻"
   } else {
      likeButton.textContent = "👎🏻";
      
   }
   })
  }
  toggleHeart();








 // left
 const getFirstProduct = () => {
    const beerDetailContainer = document.querySelector(".beer-details");
    const image = beerDetailContainer.querySelector("#beer-image");
    const beerName = beerDetailContainer.querySelector("#beer-name");
    const beerDescription = beerDetailContainer.querySelector("#beer-description");
    const reviewList = beerDetailContainer.querySelector("#review-list");
    const reviewDescription = document.createElement("li");

    fetch(`http://localhost:3000/beers/1`)
      .then(res => res.json())
      .then(beer => {
              image.src = `${beer.image_url}`;
              beerName.textContent = `${beer.name}`;
              beerDescription.textContent = `${beer.description}`
              reviewDescription.textContent = `${beer.reviews}`
              reviewList.append(reviewDescription)

              reviewDescription.addEventListener("click", () => {
                reviewDescription.remove();
            })
             
      })
      .catch(err => console.log(err))
}