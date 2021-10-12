import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  author: {
    id: {type: String, require: true, max:255},
    name: { type: String, require: true, max: 100 },
    surname: { type: String, require: true, max: 100 },
    age: { type: Number, require: true, max: 3 },
    avatar: { type: String, require: false },
    alias: { type: String, require: false, max: 10 },
  },
  text: { type: String, require: true, max: 300 }
});

const Message = mongoose.model('Product', messageSchema);

export default Message;