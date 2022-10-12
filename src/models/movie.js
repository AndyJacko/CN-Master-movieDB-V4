const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String, required: true, unique: true },
  actor: { type: String, required: false, default: "Not Specified" },
  director: { type: String, required: false, default: "Not Specified" },
  genre: { type: String, required: false, default: "Not Specified" },
  rating: { type: String, required: false, default: "Not Specified" },
  released: { type: String, required: false, default: "Not Specified" },
});

module.exports = mongoose.model("Movie", movieSchema);
