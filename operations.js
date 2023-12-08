const fs = require("fs");

// First we need to read the file to transform apppointments
const fileContent = fs.readFileSync("appointments.json", "utf8");
const appointmentsParse = JSON.parse(fileContent);

// Register
const register = (name, age, type, color, illness) => {
    // Math.floor rounds a random number between 0-100 to the nearest integer, then transform it to string
    const id = Math.floor(Math.random() * 100).toString();
    if (!name || !age || !type || !color || !illness) {
        console.log("Please enter all require data");
        return;
    }
    appointmentsParse.push({ id, name, age, type, color, illness });
    fs.writeFileSync("appointments.json", JSON.stringify(appointmentsParse));
    // console.log(appointmentsParse);
};

// Read
const read = () => {
    console.log(appointmentsParse);
};

module.exports = { register, read };
