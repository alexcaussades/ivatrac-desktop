const fs = require('fs');
const os = require('os');

const getFiles = async (path) => {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, files) => {
            if (err) {
                reject(err);
            }
            resolve(files);
        });
    });
}

const getFilesSync = (path) => {
    return fs.readdirSync(path);
}

const createFile = async (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile
        (path, data, (err) => {
            if (err) {
                reject(err);
            }
            resolve('File created');
        });
    }
    );
}

const createFileSync = (path, data) => {
    fs.writeFileSync
    (path, data);
}

const deleteFile = async (path) => {
    return new Promise((resolve, reject) => {
        fs.unlink(path, (err) => {
            if (err) {
                reject(err);
            }
            resolve('File deleted');
        });
    });
}

const deleteFileSync = (path) => {  

}

const createDir = async (path) => {
    return new Promise((resolve, reject) => {
        fs.mkdir(path, (err) => {
            if (err) {
                reject(err);
            }
            resolve('Directory created');
        });
    });
}

const createDirSync = (path) => {
    fs.mkdirSync(path);
}

const deleteDir = async (path) => {
    return new Promise((resolve, reject) => {
        fs.rmdir(path, { recursive: true }, (err) => {
            if (err) {
                reject(err);
            }
            resolve('Directory deleted');
        });
    });
}

const deleteDirSync = (path) => {
    fs.rmdirSync(path, {
        recursive: true
    });
}

const getHomeDir = () => {
    return os.homedir();
}

const getTmpDir = () => {
    return os.tmpdir();
}

const getTmpFile = () => {
    return os.tmpfile();
}

const getAppdata = () => {
    return os.homedir() + '\\AppData\\Roaming';
}


const files_ivatac = () => {
    return  os.homedir() + '\\AppData\\Roaming\\ivatac_desktop';
}

const files_ivatac_token = () => {
    return files_ivatac() + '/token.json';
}



module.exports = {
    getFiles,
    getFilesSync,
    createFile,
    createFileSync,
    deleteFile,
    deleteFileSync,
    createDir,
    createDirSync,
    deleteDir,
    deleteDirSync,
    getHomeDir,
    getTmpDir,
    getTmpFile,
    getAppdata,
    files_ivatac,
    files_ivatac_token
}


