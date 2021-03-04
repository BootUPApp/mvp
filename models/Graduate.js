const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const graduateSchema = new Schema({
      firstName: {
            type: String,
            lowercase: true},
      secondName: {
            type: String,
            lowercase: true},
      username: {
            type: String,
            unique: true},
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
      bootCampGraduation: Date,
      skills:[String],
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
      completedChallenges: [{
              type: Schema.Types.ObjectId,
              ref: ChallengeId}]
})
const Graduate = mongoose.model('Graduate', graduateSchema);
module.exports = Graduate