const accessKey = "l76lDykETnr5MY2xW-vU11vGXAAx-MOxO_Wu3oD_-r0"

// get the form element
const formEl = document.querySelector("form")
// get input element
const inputEl = document.getElementById("search-input")
//get search results element
const searchResults = document.querySelector(".search-results")
//get "show more" button element
const showMore = document.getElementById("show-more-button")


let inputData = ""
let page = 1;

async function searchImage(){
    inputData = inputEl.value;
    //create url for request to API
    const url = `https://api.unsplash.com/search/photos?query=${inputData}&client_id=${accessKey}&page=${page}`
    //sending a request to the api and waits for response 
    const response = await fetch (url)
    const data = await response.json()

    //extaction of results array from JSON data
    const results = data.results

    //clear search results if it's the first page
    if (page === 1) {
        searchResults.innerHTML = ""
    }
    // itterate through the results and create elements for each image
    results.map((results) =>{
        const imageWrapper = document.createElement('div')
        imageWrapper.classList.add("search-result")

        const image = document.createElement('img')
        image.src = results.urls.small
        image.alt = results.alt_description

        const imageLink = document.createElement('a')
        imageLink.href = results.links.html
        imageLink.target = "_blank"
        imageLink.textContent = results.alt_description

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        
        searchResults.appendChild(imageWrapper); // apend the image wrapper to the search results

    });
    //incremet of page number
    page++ 
    //display the "show more" button if the page number is greater than 1
    if(page > 1){
       showMore.style.display = "block" 
    }
}

formEl.addEventListener("submit", (event) =>{
    event.preventDefault()
    page = 1;
    searchImage()
})

showMore.addEventListener("click", () =>{
    searchImage()
})

