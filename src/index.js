const express = require('express');
const app = express();
const testRoutes = require('./routes/testRoutes.js');
require('dotenv').config();

const port = process.env.PORT || 3000;

app.use('/api', testRoutes);

app.listen(port, () => console.log(`server listening on port: ` + port));