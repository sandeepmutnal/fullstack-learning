// Function that returns a Promise
function checkNumber(num) {

    return new Promise(function(resolve, reject) {

        if (num % 2 === 0) {
            resolve("The number is Even ✅");
        } else {
            reject("The number is Odd ❌");
        }

    });

}

// Calling the Promise
checkNumber(4)

.then(function(result) {
    console.log("Success:", result);
})

.catch(function(error) {
    console.log("Error:", error);
})

.finally(function() {
    console.log("Program finished 🚀");
});