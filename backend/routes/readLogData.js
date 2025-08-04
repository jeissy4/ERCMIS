
const express = require('express');
const readLogData = express.Router()
const fs = require('fs');
const path = require('path');


// Route to view the log file contents
readLogData.get('/api/ercmis/callback/log', (req, res) => {
    const logPath = path.join(__dirname, 'mpesa-callback.log');
    fs.readFile(logPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Could not read log file.');
        }
        res.type('text/plain').send(data);
    });
});

module.exports = {readLogData};