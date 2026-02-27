// Current date & time
let now = new Date();
console.log("Current:", now);

// Get parts
console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth() + 1);
console.log("Date:", now.getDate());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());

// Custom date
let christmas = new Date("2025-12-25");
console.log("Custom Date:", christmas);

// Format date
let formatted = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
console.log("Formatted:", formatted);