const { shell, ipcRenderer } = require('electron');
const axios = require('axios');
const token = require("../files_system.js");
const fs = require('fs');
const get_token = fs.readFileSync(token.files_ivatac() + "/token.json", 'utf8');
const access_token = JSON.parse(get_token).access_token;

document.getElementById("metar_result").style.display = "none";

// Retrieve the METAR for the airport entered by the user
// The METAR is retrieved from the IVAO API

document.getElementById("metar_sub").addEventListener("click", (e) => {
    e.preventDefault();
    getMetar(metar.value);
});


function getMetar(metar) {
    axios.get(`https://api.ivao.aero/v2/airports/${metar}/metar`, {
        headers: {
            Authorization: `Bearer ` + access_token
        }   
    }).then(res => {
        document.getElementById("metar_result").style.display = "block";
        document.getElementById("airport").innerHTML = `Airport : ${res.data.airportIcao}`;
        document.getElementById("metar_return").innerHTML = `METAR : ${res.data.metar}`;
        const time = new Date();
        //console.log(time.toISOString());
        const timeivao = new Date(res.data.updatedAt);
        //console.log(timeivao.toISOString());
        

        // calculate the time difference between the two dates and display it
        
        const time2 = Math.abs(time.getTime() - timeivao.getTime());
        
        const time3 = new Date(time2);
        time3.setHours(time3.getHours() - 1);
        
        const time4 = "0"+ time3.getHours() + ":" + time3.getMinutes();

        document.getElementById("time").innerHTML = `Last : ${time4} ago`;

    });
}


getMetar(metar.value);
