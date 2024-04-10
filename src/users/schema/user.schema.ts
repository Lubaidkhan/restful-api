import * as mongoose from "mongoose";
import * as bcrypt from 'bcrypt';

export const userSchema = new mongoose.Schema({

    name:String,
    email:String,
    password:String
})

userSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    // this.confirmPassword = undefined;
  })

  userSchema.methods.comparePassword = async function (canditatePassword) {
    const isMatch = await bcrypt.compare(canditatePassword, this.password)
    return isMatch
  }
  
  