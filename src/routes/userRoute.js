const express = require("express");
const router = express.Router();

const controllers = require("../controller/userController");

router.get("/all", controllers.getAll);


module.exports = router;
