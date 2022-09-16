const testController = {};

testController.getTest = (req, res) => {
    return res.status(200).json(
        {
            success: "true",
            message: "Getting test"
        }
    );
};

testController.createTest = (req, res) => {
    return res.status(201).json(
        {
            success: "true",
            message: "Creating test"
        }
    );
};

testController.updateTest = (req, res) => {
    return res.status(200).json(
        {
            success: "true",
            message: "Updating test"
        }
    );
};

testController.deleteTest = (req, res) => {
    return res.status(200).json(
        {
            success: "true",
            message: "Deleting test"
        }
    );
};

module.exports = testController;