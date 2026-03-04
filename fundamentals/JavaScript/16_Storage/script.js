function saveData() {
    let name = document.getElementById("nameInput").value;
    localStorage.setItem("username", name);
}

function getData() {
    let name = localStorage.getItem("username");
    document.getElementById("output").innerText = name;
}

function deleteData() {
    localStorage.removeItem("username");
    document.getElementById("output").innerText = "Deleted!";
}