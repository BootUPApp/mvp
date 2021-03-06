const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
    username: String,
    password: String,   
    firstName: {
        type: String,
        lowercase: true},
    lastName: {
        type: String,
        lowercase: true},
        imageUrl: String,
    role: String,
    imgPath: String,
    publicId: String,
    catchphrase: String,
    emailAddress: {
        type: String,
        lowercase: true},
    password: String,
    bootCampName: {
        type: String,
        lowercase: true},
    bootCampCity: {
        type: String,
        lowercase: true},
    bootCampGraduation: String,
    InputList: [{
        skill: String,
        rating: String,
    }],
    industry: {
        type: String,
        lowercase: true},
    yearsInIndustry: Number,
    languagesSpoken: [String],
    currentlyLearning: [String],
    myGif: String,
    githubUsername: String,
    githubProfile: String,
    linkedInProfile: String,
    mediumProfile: String,
    githubId: String,
    companyname: String,

});

const User = model("User", userSchema);

module.exports = User;