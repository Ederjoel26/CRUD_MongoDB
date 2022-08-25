const { model, Schema} = require ("mongoose")

const autor = new Schema({
    autor: String, 
    age: Number, 
});

module.exports = model("uwu", autor);