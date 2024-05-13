const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  role: {
    type: String,
    require: true,
    enum: ["director", "subdirector", "leader", "tecnichian"],
  },
},
{
    collection: 'user',
}
);

const User = mongoose.model('user', userSchema);
module.exports = User