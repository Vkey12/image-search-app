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
    const url = 'https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}'
    
    //sending a request to the api and waits for response 
    const response = await fetch (url)
    const data = await response.json()
}