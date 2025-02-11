const bttn = document.querySelector(".bttn");
console.log(bttn);

let dataFromApi;

function getApiData() {
  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=dSzdtuY6df5wGgussJA6WmGElflSsrYBOPRTVvaz&count=3`
  )
    .then((response) => response.json())
    .then((data) => {
      dataFromApi = data;
      console.log(data);
    })
    .catch((error) => console.error("Error:", error));
    }
    function getErDone() {
let paragraph = document.createElement("p");
    paragraph.textContent = `One of my favorite photos are ${img}`;

    bttn.addEventListener("click", getApiData);

}



// create a function to the data
// inisde the function loop over data that came from api
// for each item in the array, create variables for TITLE< 
// render them to the screen using appendchild