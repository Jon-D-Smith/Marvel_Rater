const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/MarvelRater", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to mongoose"));

const movieSchema = new mongoose.Schema({
  title: String,
  image: String,
  order: Number,
  comedy: Number,
  immersion: Number,
  eggs: Number,
  emotion: Number,
  development: Number,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
