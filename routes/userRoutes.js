const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/business-info", userController.addBusinessInfo);
router.post("/owner-info", userController.addOwnerInfo);

module.exports = router;
