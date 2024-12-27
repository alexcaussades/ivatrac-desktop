const axios = require('axios');
const fs = require('fs');
const token = require("../files_system.js");

const get_token = fs.readFileSync(token.files_ivatac() + "/token.json", 'utf8');
const access_token = JSON.parse(get_token).access_token;


document.getElementById('me').addEventListener('click', me);


function me() {
    axios.get('https://sso.ivao.aero/authorize', {
        headers: {
            Authorization: `Bearer ${access_token}`,
            Accept: 'application/json',
            scope : 'profile'
        }
    }).then(res => {
        console.log(res.data);
    });
}


me();