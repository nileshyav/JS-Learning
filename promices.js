/*
function one() {
    return "I am One";
}

function getDataFromAws() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("data fetched");
        }, 300);
    });
}

function three() {
    return "I am three";
}

var callMe = async () => {
    var valOne = one();
    console.log(valOne);

    var valTwo = await getDataFromAws();
    console.log(valTwo);

    var valThree = three();
    console.log(valThree);
};

callMe();
*/

// producing code
var getData = function () {
    var url = "https://api.chucknorro/jokes/random";
    var res = fetch(url);
    return new Promise((resolve, reject) => {
        if (res.ok == true) {
            resolve(res);
        } else {
            reject("Request is failed");
        }
    });
};

var response = getData();

// consuming code
response
    .then((req) => {
        return req.json();
    })

    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
