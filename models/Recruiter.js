const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recruiterSchema = new Schema({
      firstName: String,
      secondName: String,
      profileImage: String,
      emailAddress: String,
      password: String,
      companyName: String,
      /*
      challenges: [{type: Schema.Types.ObjectId, ref: Challenges}],
      inbox: [String],
      */
})

const Recruiter = mongoose.model('Recruiter', recruiterSchema);

module.exports = Recruiter