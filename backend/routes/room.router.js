const express = require("express");
const router = express.Router();

const {
    createRoom,
    list
} = require("../controllers/room.controller");

router.post("/room/create", createRoom);
router.get("/rooms",list )

module.exports = router;