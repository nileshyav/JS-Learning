// const options = { method: "GET" };

// fetch("https://api.chucknorris.io/jokes/random")
//     .then((response) => {
//         return response.json();
//     })
//     // .then((response) => console.log(response))

//     .then((data) => {
//         var joke = data.value;
//         console.log("---------------------");
//         console.log(joke);
//     })

//     .catch((err) => console.error(err));

// another way to call api using async await

var loadData = async function () {
    url = "https://api.chucknorris.io/jokes/random";
    var res = await fetch(url);
    var dta = await res.json();
    console.log(dta.value);
};

loadData();
