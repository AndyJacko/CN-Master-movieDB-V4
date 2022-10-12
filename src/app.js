require("./db/connection");
const yargs = require("yargs/yargs")(process.argv.slice(2)).argv;
const mongoose = require("mongoose");

const { createMovie } = require("./controllers/movies/createMovie");
const { readMovies } = require("./controllers/movies/readMovies");
const { updateMovie } = require("./controllers/movies/updateMovie");
const { deleteMovie } = require("./controllers/movies/deleteMovie");

const app = async (yargs) => {
  try {
    if (yargs.action && yargs.action.length > 0) {
      switch (yargs.action) {
        case "create":
          await createMovie(yargs.movie);
          break;

        case "read":
          if (yargs.search) {
            await readMovies(yargs.search, yargs.val);
          } else {
            await readMovies();
          }
          break;

        case "update":
          await updateMovie();
          break;

        case "delete":
          await deleteMovie();
          break;

        default:
          console.log(`\n\nUnknown Action`);
          break;
      }
    } else {
      console.log(`\n\nNo Action Supplied`);
    }

    mongoose.disconnect();
  } catch (err) {
    console.log(err);
    mongoose.disconnect();
  }
};

app(yargs);
