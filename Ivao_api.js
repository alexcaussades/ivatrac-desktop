const { app, BrowserWindow } = require('electron/main');
const fs = require('fs');
const os = require('os');
const file_system = require("./files_system");// Importing the file_system module
const axios = require('axios');
const keys1 = os.homedir() + '\\AppData\\Roaming\\ivatac_desktop\\data\\data.json';


fs.readFile(keys1, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        // recuperation des keys en json
        const keys = JSON.parse(data);
        console.log(keys);
        getOAuthToken(keys);
    });


//const keys = require(data1); // Importing the keys from the file_system module


const OPENID_URL = 'https://api.ivao.aero/.well-known/openid-configuration';

const getOAuthToken = async (keys) => {
    const openIdConfig = await axios.get(OPENID_URL).then(res => res.data);
    const token = await axios.post(openIdConfig.token_endpoint, {
        grant_type: 'client_credentials',
        client_id: keys["Client_ID"],
        client_secret: keys["Client_Secret"],
        scope: 'friends:read friends:write tracker profile' 
    }).then(res => res.data);
    store(token);
    return token;
}

const store = (token) => {
    if (!fs.existsSync(file_system.files_ivatac())) {
        fs.mkdirSync(file_system.files_ivatac());
    }
    
    fs.writeFile( file_system.files_ivatac() + "/token.json", JSON.stringify(token), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Token stored');
    });
}

function open_token() {
    fs.readFile(file_system.files_ivatac() + "/token.json", 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        // recuperation du token en json access_token
        const token = JSON.parse(data);
        return token.access_token;
    });
}
module.exports = {
    open_token
}
