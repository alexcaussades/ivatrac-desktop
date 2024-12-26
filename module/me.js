const axios = require('axios');
const fs = require('fs');
const token = require('../token.json');


const access_token = token.access_token;


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