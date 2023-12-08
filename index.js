const { register, read } = require("./operations.js");

const [action, id, name, age, type, color, illness] = process.argv.slice(2);

if (action === "register") {
    register(id, name, age, type, color, illness);
}

if (action === "read") {
    read();
}
