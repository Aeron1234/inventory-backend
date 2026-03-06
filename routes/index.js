const express = require("express");
const router = express.Router();
const useController = require("../controllers/useController");

//Route to get all users
router.get("/products", useController.getAllProducts);

//Route to create new user
router.post("/products", useController.createProduct);

module.exports = router;
