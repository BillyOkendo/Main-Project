let imgName = document.getElementById('card-name')
let imgSrc = document.getElementById('image-card')
let imgdescription = document.getElementById('product-des')
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
  imgLikesCount.textContent =`${imageDetails.likes} likes`;
 

  
}

