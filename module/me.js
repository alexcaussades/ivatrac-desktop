const axios = require('axios');
const fs = require('fs');
const token = require('./token.json');


const access_token = token.access_token;
console.log(access_token);


function me() {
    axios.get('https://api.ivao.aero/v2/users/me', {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    }).then(res => {
        console.log(res.data);
    });
}


me();