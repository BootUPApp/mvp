const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recruiterSchema = new Schema({
      firstName: String,
      lastName: String,
      profileImage: String,
      emailAddress: String,
      password: String,
      companyName: String,
      //challenges: [{type: Schema.Types.ObjectId, ref: Challenge}],
     // inbox: [String],
})

const Recruiter = mongoose.model('Recruiter', recruiterSchema);

module.exports = Recruiter