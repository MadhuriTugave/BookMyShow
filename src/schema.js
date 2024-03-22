const { Schema } = require('mongoose');
const mongoose = require('mongoose');
const bookMovieSchema = new Schema({
    movie: {type:String},
    slot:{type:String},
    seats: {
      
          A1: { type: Number, default:0 },
        A2: { type: Number, default:0 },
        A3: { type: Number, default:0 },
        A4: { type: Number, default:0 },
        D1: { type: Number, default:0 },
        D2: { type: Number, default:0 }
    }

}, { timestamps: true })

module.exports = mongoose.model('bookmovieticket', bookMovieSchema);
