const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  firstName: {
    type: String,
    lowercase: true},
lastName: {
    type: String,
    lowercase: true},
username: {
      type: String,
      unique: true
    },
profileImage: String,
catchphrase: String,
emailAddress: {
    type: String,
    lowercase: true},
password: {
      type: String,
      min: 6},
bootCampName: {
    type: String,
    lowercase: true},
bootCampCity: {
    type: String,
    lowercase: true},
bootCampGraduation: String,
skills: [{
    skill: String,
    rating: Number
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
companyName: String,
});

const User = model("User", userSchema);

module.exports = User;