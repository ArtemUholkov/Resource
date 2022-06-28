const searchResult = document.querySelector(".search-result-text");
const info = window.location.search.split('=');
console.log(window.location.search, info);
searchResult.innerHTML =
    "Your search result for " + info[1];