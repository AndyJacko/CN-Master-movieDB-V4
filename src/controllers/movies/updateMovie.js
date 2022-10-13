const Movie = require("../../models/movie");

const displayUpdatedMovie = (movie) => {
  console.log(`\n\nMOVIE UPDATED\n--------------------\n`);

  console.log(
    `ID: ${movie._id}\nTitle: ${movie.title.toUpperCase()}\nActor: ${
      movie.actor
    }\nDirector: ${movie.director}\nGenre: ${movie.genre}\nReleased: ${
      movie.released
    }\nRating: ${movie.rating}\n`
  );
};

exports.updateMovie = async (id, movie) => {
  let error;
  let updateMovie = false;

  if (id && id !== true && id.length === 24) {
    if (movie && movie !== true) {
      const mov = movie.split(",");

      if (mov.length === 6) {
        const newMovie = new Movie({
          _id: id,
          title: mov[0].trim() || "Not Specified",
          actor: mov[1].trim() || "Not Specified",
          director: mov[2].trim() || "Not Specified",
          genre: mov[3].trim() || "Not Specified",
          rating: mov[4].trim() || "Not Specified",
          released: mov[5].trim() || "Not Specified",
        });

        try {
          const updatedMovie = await newMovie.updateOne(newMovie);

          if (updatedMovie.matchedCount === 1) {
            if (updatedMovie.modifiedCount === 1) {
              const selectedMovie = await Movie.find({ _id: id });
              displayUpdatedMovie(selectedMovie[0]);
              updateMovie = true;
            } else {
              error = `Movie With ID: ${id} Already Up To Date`;
            }
          } else {
            error = `No Movie Found With ID: ${id}`;
          }
        } catch (err) {
          error = err;
        }
      } else {
        error = `Invalid Movie Format`;
      }
    } else {
      error = `Unknown Movie Format`;
    }
  } else {
    error = `Unknown ID Format`;
  }

  if (!updateMovie) {
    console.log(`\n\nError: ${error}`);
  }
};
