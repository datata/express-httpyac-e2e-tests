const express = require('express');
const app = express();

app.get('/tests', (req, res) => {
    return res.status(200).json(
        {
            success: "true",
            message: "Getting test"
        }
    )
});

app.post('/tests', (req, res) => {
    return res.status(201).json(
        {
            success: "true",
            message: "Creating test"
        }
    )
});

app.put('/tests', (req, res) => {
    return res.status(200).json(
        {
            success: "true",
            message: "Updating test"
        }
    )
});

app.delete('/tests', (req, res) => {
    return res.status(200).json(
        {
            success: "true",
            message: "Getting test"
        }
    )
});

app.listen(3000, () => console.log(`server listening on port 3000`));