const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const conversationSchema = new Schema({
      Subject: String,
      Messages: [{
        type: Schema.Types.ObjectId,
        ref: MessageId}],
})
const Conversation = mongoose.model('Conversation', conversationSchema);
module.exports = Conversation