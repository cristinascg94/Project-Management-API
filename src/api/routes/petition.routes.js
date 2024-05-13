const express = require("express");
const router = express.Router();

const {
  newPetition,
  modifyPetition,
} = require("../controllers/petition.controller");

router.post("/newPetition", newPetition);
router.put("/updatePEtition", modifyPetition);

module.exports = router;
