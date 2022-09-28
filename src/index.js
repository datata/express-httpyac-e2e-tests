const express = require('express');
const app = express();
const testRoutes = require('./routes/testRoutes.js');
const {swaggerDocs: V1SwaggerDocs} = require('./routes//swagger/swagger.js')
require('dotenv').config();

const port = process.env.PORT || 3000;

app.use('/api', testRoutes);

app.listen(port, () => {
    console.log(`server listening on port: ` + port);
    V1SwaggerDocs(app, port)
}
);