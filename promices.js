function one() {
    return "I am One";
}

function getDataFromAws() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("data fetched");
        }, 30000);
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
