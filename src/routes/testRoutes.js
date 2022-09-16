const router = require('express').Router();

router.get('/tests', (req, res) => {
    return res.status(200).json(
        {
            success: "true",
            message: "Getting test"
        }
    );
});

router.post('/tests', (req, res) => {
    return res.status(201).json(
        {
            success: "true",
            message: "Creating test"
        }
    )
});

router.put('/tests', (req, res) => {
    return res.status(200).json(
        {
            success: "true",
            message: "Updating test"
        }
    )
});

router.delete('/tests', (req, res) => {
    return res.status(200).json(
        {
            success: "true",
            message: "Getting test"
        }
    )
});

module.exports = router;