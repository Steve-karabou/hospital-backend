import mongoose from "mongoose";
import mongoosePagination from "mongoose-paginate"

const userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true}
},
{
 timestamps: true
})

userSchema.plugin(mongoosePagination)

const User = mongoose.model("User", userSchema);

export default User;