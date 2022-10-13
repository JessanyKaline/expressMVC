const users = require("../model/user.json");

const getAll= (req,res) => {
    
    res.status(200).send(users);

}

module.exports = {
    getAll,
}