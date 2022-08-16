const options = { method: "GET" };

fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
        return response.json();
    })
    // .then((response) => console.log(response))

    .then((data) => {
        var joke = data.value;
        document.querySelector(".one").innerHTML = joke;
    })

    .catch((err) => console.error(err));
