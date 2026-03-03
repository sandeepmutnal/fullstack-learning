// JSON → OBJECT
function convertToObject() {
    let jsonData = '{"name":"Sandeep","age":21}';

    let obj = JSON.parse(jsonData);

    document.getElementById("output").innerText =
        "Name: " + obj.name + ", Age: " + obj.age;
}


// OBJECT → JSON
function convertToJSON() {
    let user = {
        name: "Sandeep",
        age: 21
    };

    let jsonString = JSON.stringify(user);

    document.getElementById("output").innerText = jsonString;
}