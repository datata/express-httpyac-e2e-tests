const express = require('express');
const app = express();
const testRoutes = require('./routes/testRoutes.js');

app.use('/api', testRoutes);

app.listen(3000, () => console.log(`server listening on port 3000`));