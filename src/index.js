console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const container = document.querySelector('#dog-image-container')
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const ulContainer = document.querySelector("#dog-breeds")
const dropDown = document.querySelector("#breed-dropdown")
let breedsArray = [] // moving this to global variable

ulContainer.addEventListener('click', handleClick)
dropDown.addEventListener('change', handleChange)
//- on page load, fetches the images using the url above ⬆️
//- parses the response as `JSON`
//- adds image elements to the DOM **for each** 🤔 image in the array
function getImages() {
  fetch(imgUrl)
  .then(response => response.json())
  .then(images => {
    const imgs = images.message
    // take this array of images
    // turn it into img elements
    let imgsArray = createImgElement(imgs)
    renderImg(imgsArray)
  })
}
function createImgElement(imgs){
  return imgs.map((img) => {
    let i = `<img src=${img}>`
    return i    
  })
  }
      // append each img element to the DOM 
function renderImg(imgsArray){
    imgsArray.forEach(element => {
      renderImg(element)
    })
  }
function renderImg(element){
  // += here so that it's additive, vs replacing
  container.innerHTML += element
}


//- on page load, fetches all the dog breeds using the url above ⬆️
//- adds the breeds to the page in the `<ul>` provided in `index.html`
function getBreeds() {
  fetch(breedUrl)
  .then(response => response.json())
  .then(breeds => {
    breedsArray = Object.keys(breeds.message)
    const breedsLis = createLiElement(breedsArray)
    renderLis(breedsLis)
  })
}
function createLiElement(breedsArray){
  return breedsArray.map((breed) => {
    let li = `<li id="${breed}">${breed}</li>`
  //  console.log(li)
    return li    
  })
  }
function renderElement(element){
   // += here so that it's additive, vs replacing
  ulContainer.innerHTML += element
 }
// append each li to the ul
function renderLis(breedsLis){
  breedsLis.forEach(element => {
    renderElement(element)
  })
}
// toggle colors
function handleClick(event){
  if (event.target.nodeName === 'LI') {
  }
    if (event.target.style.color === 'red'){
    event.target.style.color = 'black'
    } else {
    event.target.style.color = 'red'
    }
}

function handleChange(event) {
  const letter = event.target.value
  console.log(breedsArray)
  // filter out the breeds that start with the letter
  const filteredBreeds = breedsArray.filter(breed => breed.startsWith(letter))
  const filteredBreedsLis = createLiElement(filteredBreeds)
  ulContainer.innerHTML = ''
  renderLis(filteredBreedsLis)
}
// console.log('I was clicked')
// getImages()
getBreeds()