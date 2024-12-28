const { shell, ipcRenderer } = require('electron');
const data_ivao = require("./data_account_dev");
const file_system = require("./files_system");

console.log(document.getElementById(clientid.value));
console.log(document.getElementById(clientsecert.value));


document.getElementById("apiivao").addEventListener("click", (e) => {
    e.preventDefault();
    
    data_ivao.create_data(clientid.value, clientsecert.value);
    
});

