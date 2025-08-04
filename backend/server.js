require('dotenv').config()
const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 2222;

const {mainroute} = require('./routes/mainroute')
app.use('/',mainroute)

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
