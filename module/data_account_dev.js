const fs = require('fs');
const os = require('os');
const file_system = require("../files_system");


const store_data = (data) => {
    if (!fs.existsSync(file_system.data_ivatac())) {
        fs.mkdirSync(file_system.data_ivatac());
    }
    
    const token = {
        "data": {
            "Client_ID": data.Client_ID,
            "Client_Secret": data.Client_Secret,
            "Redirect_URI": "http://localhost:8000"
        }
    }

    fs.writeFile( file_system.data_ivatac() + "/data.json", JSON.stringify(token), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Token stored');
    });
}

const opendata = () => {
    fs.readdirSync(file_system.data_ivatac()).forEach(file => {
        console.log(file);
    });
}

const create = () => {
    if (!fs.existsSync(file_system.files_ivatac())) {
        fs.mkdirSync(file_system.files_ivatac());
    }
}

module.exports = {
    store_data,
    opendata,
    create
}