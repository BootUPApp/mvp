const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require("./User.model");

const recruiterSchema = new Schema({
      firstName: String,
      lastName: String,
      username:[{type: Schema.Types.ObjectId, ref: User}],
      profileImage: String,
      password: [{type: Schema.Types.ObjectId, ref: User}],
      companyName: String,
      //challenges: [{type: Schema.Types.ObjectId, ref: Challenge}],
     // inbox: [String],
})

const Recruiter = mongoose.model('Recruiter', recruiterSchema);

module.exports = Recruiter