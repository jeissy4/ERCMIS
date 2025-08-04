// this is a route that is going to be hosted on namecheap, how do i write to a log file inside the namecheap server

const express = require('express');
const routempesacallback = express.Router()
const fs = require('fs');
const path = require('path');

routempesacallback.post('/api/ercmis/callback', async (req, res) => {
    const dt = req.body;
    console.log(dt);

    // Write to log file
    const logMessage = `[${new Date().toISOString()}] ${JSON.stringify(dt)}\n`;
    const logPath = path.join(__dirname, 'mpesa-callback.log');
    fs.appendFile(logPath, logMessage, (err) => {
        if (err) {
            console.error('Failed to write to log file:', err);
        }
    });

    // how do i open the mpesa-callback.log file on namecheap express server and view its data

    res.send({ hMessage: 'Accessed POST api/ercmis/callback', ...dt });
});

module.exports = {routempesacallback};

