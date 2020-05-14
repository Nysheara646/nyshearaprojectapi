let searchButton = document.querySelector("#search");

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", () => {
  console.log("button pressed");
  sendApiRequest();
});

//An asynchronous function to fetch data from the API.
async function sendApiRequest() {
  let response = await fetch(`https://restcountries.eu/rest/v2/all`);
  console.log(response);
  let data = await response.json();
  console.log(data);
  useApiData(data);
}

//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data) {
  document.querySelector("#content").innerHTML = `
<div class="card-group">
  <div class="card">
     <img src="${data.results[1].flag}" class="card-img-top" alt="">
    <div class="card-body">
    <h5 class="card-title">${data.results[1].name}</h5>
    <p class="card-text">${data.results[1].capital}</p>
      <p class="card-text">${data.results[1].population}</p>
    <p class="card-text">${data.results[1].languages}</p>
    </div>
  </div>
  <div class="card">
     <img src="${data.results[55].flag}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${data.results[55].name}</h5>
    <p class="card-text">${data.results[55].capital}
      <p class="card-text">${data.results[55].population}</p>
      <p class="card-text">${data.results[55].languages}</p>
    </div>
  </div>
  <div class="card">
     <img src="${data.results[100].flag}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${data.results[100].name}</h5>
  <p class="card-text">${data.results[100].capital}
       <p class="card-text">${data.results[100].population}</p>
      <p class="card-text">${data.results[100].languages}</p>
    </div>
  </div>
</div>

<div class="card-group">
  <div class="card">
   <img src="${data.results[96].flag}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${data.results[96].name}</h5>
    <p class="card-text">${data.results[96].capital}
     <p class="card-text">${data.results[96].population}</p>
      <p class="card-text">${data.results[96].languages}</p>
    </div>
  </div>
  <div class="card">
     <img src="${data.results[198].flag}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${data.results[198].name}</h5>
   <p class="card-text">${data.results[198].capital}
       <p class="card-text">${data.results[198].population}</p>
      <p class="card-text">${data.results[198].languages}</p>
    </div>
  </div>
  <div class="card">
     <img src="${data.results[212].flag}" class="card-img-top" alt="">
    <div class="card-body">
    <h5 class="card-title">${data.results[212].name}</h5>
   <p class="card-text">${data.results[212].capital}
     <p class="card-text">${data.results[212].population}</p>
      <p class="card-text">${data.results[212].languages}</p>
    </div>
  </div>
</div>
<div class="card-group">
  <div class="card">
    <img src="${data.results[20].flag}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${data.results[20].name}</h5>
    <p class="card-text">${data.results[20].capital}
    <p class="card-text">${data.results[20].population}</p>
   <p class="card-text">${data.results[20].languages}</p>
    </div>
  </div>
  <div class="card">
     <img src="${data.results[65].flag}" class="card-img-top" alt="">
    <div class="card-body">
     <h5 class="card-title">${data.results[65].name}</h5>
      <p class="card-text">${data.results[65].capital}
       <p class="card-text">${data.results[65].population}</p>
      <p class="card-text">${data.results[65].languages}</p>
    </div>
  </div>
  <div class="card">
    <img src="${data.results[84].flag}" class="card-img-top" alt="">
    <div class="card-body">
          <h5 class="card-title">${data.results[84].colorway}</h5>
      <p class="card-text">${data.results[84].capital}
     <p class="card-text">${data.results[84].population}</p>
      <p class="card-text">${data.results[84].languages}</p>
    </div>
  </div>
</div>
`;
}
