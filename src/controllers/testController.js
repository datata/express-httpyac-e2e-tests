const testContoller = {};

testContoller.getTest = (req, res) => {
    return res.status(200).json(
        {
            success: "true",
            message: "Getting test"
        }
    );
};

testContoller.createTest = (req, res) => {
    return res.status(201).json(
        {
            success: "true",
            message: "Creating test"
        }
    );
};

testContoller.updateTest = (req, res) => {
    return res.status(200).json(
        {
            success: "true",
            message: "Updating test"
        }
    );
};

testContoller.deleteTest = (req, res) => {
    return res.status(200).json(
        {
            success: "true",
            message: "Updating test"
        }
    );
};

module.exports = testContoller;