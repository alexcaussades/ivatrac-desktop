const axios = require('axios');
const keys =  require('./data.json');
const fs = require('fs');


const OPENID_URL = 'https://api.ivao.aero/.well-known/openid-configuration';



const getOAuthToken = async () => {
    const openIdConfig = await axios.get(OPENID_URL).then(res => res.data);
    const token = await axios.post(openIdConfig.token_endpoint, {
        grant_type: 'client_credentials',
        client_id: keys.data["Client_ID"],
        client_secret: keys.data["Client_Secret"],
        scope: 'friends:read friends:write tracker profile' 
    }).then(res => res.data);
    store(token);
    return token;
}

const store = (token) => {
    fs.writeFile('./token.json', JSON.stringify(token), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Token stored');
    });
}

function open_token() {
    fs.readFile('./token.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        // recuperation du token en json access_token
        const token = JSON.parse(data);
        return token.access_token;
    });
}


getOAuthToken();

module.exports = {
    open_token
}
