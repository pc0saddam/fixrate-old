function element(id) {
    return document.getElementById(id);
    }
    let allSearchData = ""; 
    function getResults() {
    let search = element("search-input").value;
    allSearchData = ""; 
    hideSearchResults();
    clearSearchResults();
    clearSearchData(); 
    if (search.length > 1) {
    let counter = 0; 
    for (let x of names) {
    if (counter < 10) {
    if (x.toLowerCase().includes(search.toLowerCase())) {
    element("search-results").innerHTML +=
    "<div class='search-item' onclick='displayData(\"" + x + "\")'><p>" + x + "</p></div>";
      counter++;
      }
      }
    if (x.toLowerCase().includes(search.toLowerCase()))
    allSearchData += "<p>" + x + "</p>";
    }
    displaySearchResults();
    }
    }
    function displaySearchResults() {
    element("search-results").style.display = "block";
    }
    function clearSearchResults() {
    element("search-results").innerHTML = "";
    }
    function hideSearchResults() {
    element("search-results").style.display = "none";
    }
    function displayData(name) {
    element("search-data").innerHTML = "<p>" + name + "</p>";
    hideSearchResults();
    }
    function displayAllData(names) {
    element("search-data").innerHTML = names;
    hideSearchResults();
    }
    function clearSearchData() {
    element("search-data").innerHTML = "";
    }
    element("search-input").oninput = function() {
    getResults();
    };
    element("search-input").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    event.preventDefault();
    displayAllData(allSearchData);
    }
   }); 
