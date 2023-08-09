const {Client} = require("pg");

const conexion = async () => {
    const client = new Client({
        host:"localhost",
        database:"employee",
        user:"suldery",
        password: "secret"
    });
    await client.connect();
    return client;
}

const conexion = async () => {
    const client = new Client({
        host:"localhost",
        database:"invoice",
        user:"suldery",
        password: "secret"
    });
    await client.connect();
    return client;
}

const conexion = async () => {
    const client = new Client({
        host:"localhost",
        database:"methods",
        user:"suldery",
        password: "secret"
    });
    await client.connect();
    return client;
}

const conexion = async () => {
    const client = new Client({
        host:"localhost",
        database:"salaryemployee",
        user:"suldery",
        password: "secret"
    });
    await client.connect();
    return client;
}


module.exports = conexion;
