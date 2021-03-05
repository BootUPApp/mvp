const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require("./User.model");

const graduateSchema = new Schema({
      firstName: {
            type: String,
            lowercase: true},
      lastName: {
            type: String,
            lowercase: true},
      username: [{type: Schema.Types.ObjectId, ref: User}],
      profileImage: String,
      catchphrase: String,
      emailAddress: {
            type: String,
            lowercase: true},
      password: [{type: Schema.Types.ObjectId, ref: User}],
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
     /*completedChallenges: [{
              type: Schema.Types.ObjectId,
              ref: Challenge}]
*/
})
const Graduate = mongoose.model('Graduate', graduateSchema);
module.exports = Graduate