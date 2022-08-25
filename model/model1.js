const { model, Schema} = require ("mongoose")

const wordrestricted= new Schema({
    word: String,
    description: String
});

module.exports = model("model1", wordrestricted);