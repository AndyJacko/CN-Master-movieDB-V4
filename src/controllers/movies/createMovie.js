const Movie = require("../../models/movie");

const displayCreatedMovie = (movie) => {
  console.log(`\n\nMOVIE CREATED\n--------------------\n`);

  console.log(
    `ID: ${movie._id}\nTitle: ${movie.title.toUpperCase()}\nActor: ${
      movie.actor
    }\nDirector: ${movie.director}\nGenre: ${movie.genre}\nReleased: ${
      movie.released
    }\nRating: ${movie.rating}\n`
  );
};

exports.createMovie = async (movie) => {
  let error;
  let addedMovie = false;

  if (movie && movie !== true) {
    const mov = movie.split(",");

    if (mov.length === 6) {
      try {
        const movieExists = await Movie.find({ title: mov[0].trim() });

        if (movieExists[0]) {
          error = "Movie Already In DB";
        } else {
          const newMovie = new Movie({
            title: mov[0].trim() || "Not Specified",
            actor: mov[1].trim() || "Not Specified",
            director: mov[2].trim() || "Not Specified",
            genre: mov[3].trim() || "Not Specified",
            rating: mov[4].trim() || "Not Specified",
            released: mov[5].trim() || "Not Specified",
          });

          try {
            const saveOk = await newMovie.save();

            if (saveOk) {
              displayCreatedMovie(saveOk);
              addedMovie = true;
            } else {
              error = `Could Not Create Movie`;
            }
          } catch (err) {
            error = err;
          }
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

  if (!addedMovie) {
    console.log(`\n\nError: ${error}`);
  }
};
