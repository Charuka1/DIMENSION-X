const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || 'DIMENSION-X~PuZ0QJhY#4lzQYliGq6DiXkETMFCN7EHJVDxhA9Xrg4ohlNQNcPU', // ENTER YOUR SESSION_ID TO THIS.
MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net',
















































































































































































// DO NOT MODIFY THIS WITHOUT PERMISSION FROM THE DEVELOPER..! ❗
DOWNLOAD_URI: process.env.DOWNLOAD_URI || "",

};
