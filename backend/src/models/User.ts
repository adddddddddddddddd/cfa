import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  job: { type: String },                               // Métier (optionnel, ou required selon vos besoins)
  birthDate: { type: Date },                           // Date de naissance
});

export default mongoose.model("User", UserSchema);
