const Room = require('../models/room.model');

//add new room
exports.createRoom = (req, res) => {
    const room = new Room(req.body);
    room.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "error"
            });
        }
        res.json({data});
    });
};

exports.read = (req, res) => {
    return res.json(req.category);
};

//delete room
exports.remove = (req, res) => {
    const room = req.room;
    room.remove((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Can not delete"
            });
        }
        res.json({
            message: "Room deleted"
        });
    });
};

//display room
exports.list = (req, res) => {
    Room.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Can not view"
            });
        }
        res.json(data);
    });
};

//update room
exports.update = (req, res) => {
    const room = req.room;
    room.name = req.body.name;
    room.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Can not update"
            });
        }
        res.json(data);
    });
};

//get room by ID
exports.orderById = (req, res, next, id) => {
    Room.findById(id).exec((err, room) => {
        if (err || !room) {
            return res.status(400).json({
                error: "Room does not exist"
            });
        }
        req.room = room;
        next();
    });
};

exports.getOrderById=(req,res)=>{
    Room.findById(req.params.categoryId)
        .then(room=>res.json(room))
        .catch(err=>res.status(400).json('Error'+ err));
}