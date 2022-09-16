const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    return res.status(200).json(
        {
            success: "true",
            message: "Getting test"
        }
    )
});

app.listen(3000, () => console.log(`server listening on port 3000`));