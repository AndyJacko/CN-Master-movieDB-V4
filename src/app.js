require("./db/connection");
const yargs = require("yargs/yargs")(process.argv.slice(2)).argv;
const mongoose = require("mongoose");

const { createMovie } = require("./controllers/movies/createMovie");
const { readMovies } = require("./controllers/movies/readMovies");
const { updateMovie } = require("./controllers/movies/updateMovie");
const { deleteMovie } = require("./controllers/movies/deleteMovie");

const { createShow } = require("./controllers/shows/createShow");
const { readShows } = require("./controllers/shows/readShows");
const { updateShow } = require("./controllers/shows/updateShow");
const { deleteShow } = require("./controllers/shows/deleteShow");

const app = async (yargs) => {
  if (yargs.action && yargs.action.length > 0) {
    try {
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
          await updateMovie(yargs.id, yargs.movie);
          break;

        case "delete":
          await deleteMovie(yargs.id);
          break;

        case "createShow":
          await createShow(yargs.show);
          break;

        case "readShow":
          if (yargs.search) {
            await readShows(yargs.search, yargs.val);
          } else {
            await readShows();
          }
          break;

        case "updateShow":
          await updateShow(yargs.id, yargs.show);
          break;

        case "deleteShow":
          await deleteShow(yargs.id);
          break;

        default:
          console.log(`\n\nUnknown Action`);
          break;
      }

      await mongoose.disconnect();
    } catch (err) {
      console.log(err);
      await mongoose.disconnect();
    }
  } else {
    console.log(`\n\nNo Action Supplied`);
  }
};

app(yargs);
