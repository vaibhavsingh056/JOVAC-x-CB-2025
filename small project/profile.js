
fetch('https://api.github.com/users/vaibhavsingh056')
  .then(response => response.json())
  .then(data => {
    document.getElementById("fullData").textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => console.log("Error fetching data:", error));
