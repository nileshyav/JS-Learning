function attatchLishners(params) {
    let count = 0;
    document
        .getElementById("clickme")
        .addEventListener("click", function xyz() {
            console.log("Button clicked", ++count);
        });
}

attatchLishners();
