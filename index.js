const { register } = require("./operations.js");

const [action, name, age, type, color, illness] = process.argv.slice(2);

if (action === "register") {
    register(name, age, type, color, illness);
}
