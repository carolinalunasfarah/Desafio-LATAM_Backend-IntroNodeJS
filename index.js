const { register, read, update } = require("./operations.js");

const [action, id, name, age, type, color, illness] = process.argv.slice(2);

if (action === "register") {
    register(id, name, age, type, color, illness);
}

if (action === "read") {
    read();
}

if (action === "update") {
    update(id, name, age, type, color, illness);
}