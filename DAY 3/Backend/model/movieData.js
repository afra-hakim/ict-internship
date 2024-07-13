const mongoose=require('mongoose');
const movieSchema= new mongoose.Schema({
    name:String,
    director:String,
    category:String,
    releaseYear:Number
});
const movieData=mongoose.model('movie',movieSchema);
module.exports=movieData