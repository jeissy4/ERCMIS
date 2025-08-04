const express = require('express');
const mainroute = express.Router();

mainroute.use((req, res, next) => {
    const now = new Date();
    const dateTimeKE = now.toLocaleString('en-KE', { hour12: false, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
    res.on('finish', () => {
        const duration = Date.now() - now;
        const log = `${dateTimeKE} | ${req.ip} | ${req.method} ${req.originalUrl} | ${res.statusCode} | ${duration}ms | ${req.headers['user-agent']}\n`;
        console.log(log);
    });
    next();
});

const {route1} = require('./route1')
mainroute.get('/api/ercmis', route1);

mainroute.post('/api/ercmis', route1);
// 
const {routempesacallback} = require('./routermpesacallback')
mainroute.post('/api/ercmis/callback', routempesacallback);


const router = require('./mpesaRoutes')
mainroute.post('/stkpush', router);
mainroute.post('/callback', router);
// read log
const {readLogData} = require('./readLogData')
mainroute.get('/api/ercmis/callback/log', readLogData);


module.exports = {mainroute};