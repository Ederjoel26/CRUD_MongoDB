const mongoose = require('mongoose');
const Schema = require("./model/uwu.js");
const Wordrestricted = require("./model/model1.js");
mongoose.connect('mongodb+srv://EderJoel:Mailo100@cluster0.tuzek.mongodb.net/Project_0?retryWrites=true&w=majority').then(() => console.log("Coneactado a MongoDB")).catch(err => console.log(err));

async function upword (word, description){
    const data = new Wordrestricted({
        word: word,
        description: description
    })
    let nuevo = await data.save();
    console.log(nuevo);
}

// Subir un usuario
async function up (nombre, edad){
    const data = new Schema({
        autor:  nombre, 
        age:    edad,
    })
    let nuevo = await data.save();
    console.log(nuevo);
}

// Buscar un usuario
async function searchOne(nombre){
    let data = await Schema.findOne({autor: nombre});
    console.log(data);
}

// Buscar usuarios del mismo nombre
async function search(nombre){
    let data = await Schema.find({autor: nombre});
    console.log(data);
}

// Mostrar todos los usuarios
async function show(){
    let data = await Schema.find().sort({autor: 1});
    console.log(data);
}

// actualizar datos 
async function update (nombre , edad){
    await Schema.updateOne({autor: nombre}, {$set: {age: edad}});
}

// eliminar un usuario 
async function remove (nombre){
    let data = await Schema.findOne({autor: nombre});
    if (!data) console.log("El usuario no existe");
    else await Schema.deleteOne({autor: nombre}).then(() => console.log("Usuario eliminado"));
}