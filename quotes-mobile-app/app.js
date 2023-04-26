// variables
const search = document.getElementById("searchbar");
let start = 0 ;
let pinned =[];
let home = document.getElementById("home");
let searchResults = document.getElementById("search-results");
// Event Listeners
window.addEventListener("load", loadQuote);

document.getElementById("button").addEventListener("click", async () => {
  if(search.value === ""){
      displayError("search bar empty");
      return;
  }
  searchQuote();
});

document.getElementById("button").addEventListener("keypress", async (e) => {
  if(e.code === "enter"){
      if(search.value === ""){
          displayError("search bar empty");
          return;
      }
      searchQuote();
  }
});

// FUNCTIONS
// random quote functions
async function getQuote() {
  const result = await fetch("https://usu-quotes-mimic.vercel.app/api/random");
  const body = await result.json();
  return body;
}

async function loadQuote(){
    const quote = await getQuote();
    document.getElementById("quote-content").innerText = quote.content;
    document.getElementById("quote-author").innerText = `- ${quote.author}`;
}
// Search function
async function searchQuote(){
  if(start === 0){
    document.getElementById("quote").classList.toggle("searched");
    home.classList.toggle("searched");
    searchResults.classList.toggle("searched");
  }
  start = 1;
  home.innerText = "";
  searchResults.innerText = "";
  let Txt = search.value;
  const result = await fetch('https://usu-quotes-mimic.vercel.app/api/search?query='+Txt);
  const body = await result.json();
  printPinned();
  for(let i =0; i <body.results.length; i++){
    addQuote(body.results[i]);
  }
}
// buliding the quote functions
async function addQuote(item){   
  const quoteElement = document.createElement("div")
  node = document.createTextNode(item.content);
  quoteElement.appendChild(node);
  node = document.createTextNode(`- ${item.author}`);
  quoteElement.appendChild(node);
  quoteElement.setAttribute("tabindex", "0");
  let change = false;
  quoteElement.addEventListener("click", async ()=>{
    if (change === false){
      change = true;
      pinned.push(item);
      home.appendChild(quoteElement);
    }
    else{
      change = false;
      pinned = pinned.filter((quote)=> quote._id !== item._id);
      home.removeChild(quoteElement);
      searchResults.insertBefore(quoteElement, searchResults.firstChild);
    }
  });
  quoteElement.addEventListener("keypress", async (e)=>{
    if(e.code === "Enter"){
      if (change === false){
        change = true;
        pinned.push(item);
        home.appendChild(quoteElement);
      }
      else{
        change = false;
        pinned = pinned.filter((quote)=> quote._id !== item._id);
        // remove child and add to the top of other
        home.removeChild(quoteElement);
        searchResults.insertBefore(quoteElement, searchResults.firstChild);
      }
    }  
  });
  searchResults.appendChild(quoteElement);
}
// printing the pinned functions
async function printPinned(){
  for(let k = 0; k < pinned.length; k++){
    // creates and element for pinned quotes
    const quoteElement = document.createElement("div")
    node = document.createTextNode(pinned[k].content);
    quoteElement.appendChild(node);
    node = document.createTextNode(`- ${pinned[k].author}`);
    quoteElement.appendChild(node);
    home.appendChild(quoteElement);
    let change = true;
    quoteElement.setAttribute("tabindex", "0");
    quoteElement.addEventListener("click", async ()=>{
      if (change === false){
        change = true;
        pinned.push(node);
        home.appendChild(quoteElement);
      }
      else{
        change = false;
        pinned = pinned.filter((quote)=> quote._id !== pinned[k]._id);
        home.removeChild(quoteElement);
        searchResults.insertBefore(quoteElement, searchResults.firstChild);
      }
    });
    quoteElement.addEventListener("keypress", async (e)=>{
      if(e.code === "Enter"){
        if (change === false){
          change = true;
          pinned.push(item);
          home.appendChild(quoteElement);
        }
        else{
          change = false;
          pinned = pinned.filter((quote)=> quote._id !== pinned[k]._id);
          home.removeChild(quoteElement);
          searchResults.insertBefore(quoteElement, searchResults.firstChild);
        }
      }  
    });
  }
}
// error function
function displayError(error) {
  const el = document.getElementById("error-message");
  el.innerHTML = error;
  el.dataset.open = "true";
  setTimeout(() => {
    el.dataset.open = false;
    el.innerHTML = "";
  }, 5000);
}