// Function that returns a Promise
function fetchData() {
    return new Promise(function(resolve, reject) {

        setTimeout(function() {
            resolve("Data received from server 📦");
        }, 2000);

    });
}

// Async function
async function getData() {

    console.log("Fetching data...");

    let result = await fetchData();

    console.log(result);

    console.log("Program finished 🚀");
}

getData();