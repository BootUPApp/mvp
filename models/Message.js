const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const messageSchema = new Schema({
      Conversation: {
          type: Schema.Types.ObjectId,
          ref: ConversationId},
      Message: String,
      from: {
          type: Schema.Types.ObjectId,
          ref: senderId},
      to: {
          type: Schema.Types.ObjectId,
          ref: recipientId},
})
const Message = mongoose.model('Message', messageSchema);
module.exports = Message