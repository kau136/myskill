const express = require("express");

const router = express.Router();

const { postFormData } = require("../controllers/formData.controller");

router.post("/", postFormData);

module.exports = router;
