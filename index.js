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

bttn.addEventListener("click", getApiData);
