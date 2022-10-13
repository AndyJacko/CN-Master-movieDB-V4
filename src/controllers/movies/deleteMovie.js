const Movie = require("../../models/movie");

const displayDeletedMovie = (movie) => {
  console.log(`\n\nMOVIE DELETED\n--------------------\n`);

  console.log(
    `ID: ${movie._id}\nTitle: ${movie.title.toUpperCase()}\nActor: ${
      movie.actor
    }\nDirector: ${movie.director}\nGenre: ${movie.genre}\nReleased: ${
      movie.released
    }\nRating: ${movie.rating}\n`
  );
};

exports.deleteMovie = async (id) => {
  let error;
  let deletedMovie = false;

  if (id && id !== true && id.length === 24) {
    try {
      const selectedMovie = await Movie.find({ _id: id });
      const delMovie = await Movie.deleteOne({ _id: id });

      if (delMovie.deletedCount === 1) {
        displayDeletedMovie(selectedMovie[0]);
        deletedMovie = true;
      } else {
        error = `No Movie Found With ID: ${id}`;
      }
    } catch (err) {
      error = err;
    }
  } else {
    error = `Unknown ID Format`;
  }

  if (!deletedMovie) {
    console.log(`\n\nError: ${error}`);
  }
};
