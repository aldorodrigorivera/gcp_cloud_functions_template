module.exports = (req, res) => {
    if(req.method === "GET"){
        res.status(400).send("INVALID_REQUEST");
        return false;
    }
    return true;
};