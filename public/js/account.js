const saveData = (event) => {
    event.preventDefault();
   var episodicTitle = document.querySelector('[name="episodic-title"]').value;
   var quantity = document.querySelector('[name="quantity-needed"]').value;
   var costOfItem = document.querySelector('[name="cost-of-item"]').value;
   var startDates = document.querySelector('[name="start-date"]').value;
   var returnDates = document.querySelector('[name="return-date"]').value;
   var locationRequest = document.querySelector('[name="location"]').value;
   var itemRequested = document.querySelector('[name="item"]').value;


   const data = {
       "epsiodicTitle":episodicTitle,
       "item":itemRequested,
       "quantity":quantity,
        "costOfItem":costOfItem,
        "startDates":startDates,
        "returndate":returnDates,
        "location":locationRequest
   };
   console.log(data);

   fetch("/api/forms/request", {
       method:'POST',
       mode:'cors',
       headers: {
           'Content-Type':'application/json',
       },
       body: JSON.stringify(data)
   }).then(response => response.json())
     .then(rs=>{
       console.log(rs);
   }).catch(err => {
       console.log(err);
   });
};
//search input
var searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
    var searchInput = document.getElementById('search-input').value;
    var data = {
        "title": searchInput
    }
    fetch('http://localhost:8080/api/inventories/search/', {
       method:'POST',
       mode:'cors',
       headers: {
           'Accept':'application/json',
           'Content-Type':'application/json',
       },
       body: JSON.stringify(data)
    }).then(result => {
        console.log('result', result);
        return result.text();
    }).then(rs=>{
        console.log(rs);
        console.log(rs.split('},{'));
        var searchResults = document.getElementById('search-results');
        searchResults.innerHTML = rs;
    });
});
