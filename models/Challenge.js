const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const challengeSchema = new Schema({
      challengeName: String,
      uploadedBy: [{
        type: Schema.Types.ObjectId,
        ref: RecruiterId}],
})
const Challenge = mongoose.model('Challenge', challengeSchema);
module.exports = Challenge