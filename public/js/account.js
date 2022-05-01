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
   }).then(result => {
       return result.json();
   }).then(rs=>{
       console.log(rs);
   });
};