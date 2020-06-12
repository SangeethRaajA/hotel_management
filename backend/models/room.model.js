const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    code:{
        type: String        
    },
    amount:{
        type: Number
    },
    wing:{
        type: String
    },
    pax:{
        type: Number
    },
    category:{
        type: String
    },
    
},
{ timestamps: true }
);

module.exports = mongoose.model('Room',roomSchema);