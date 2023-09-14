// let name
// let admin
// name = "John"
// admin = name
// alert(admin)
// let currentVisitor
// let planetEarth


let userName = prompt("Who's there?", '');

if (userName === "Admin") {
    let pass = prompt("Enter password", '');
    if (pass === "TheMaster") {
        alert("Welcome");
        }else if (pass === '' || pass === null) {
            alert("Canceled");
        } else {
            alert("Wrong password");
        }
    
} else if (userName === '' || userName === null) {
        alert("Canceled")
} else {
        alert("I don't know you");
}
