const Movie = require("../../models/movie");

const displayAllMovies = (movies) => {
  console.log(`\n\nANDY'S MOVIE DATABASE\n---------------------\n`);

  if (movies.length > 0) {
    movies.forEach((movie) => {
      console.log(
        `ID: ${movie._id}\nTitle: ${movie.title.toUpperCase()}\nActor: ${
          movie.actor
        }\nDirector: ${movie.director}\nGenre: ${movie.genre}\nReleased: ${
          movie.released
        }\nRating: ${movie.rating}\n`
      );
    });
  } else {
    console.log(`No Movies In Database`);
  }
};

const displaySearchedMovies = (movies) => {
  console.log(`\n\nMOVIE SEARCH RESULTS\n--------------------\n`);

  if (movies.length > 0) {
    movies.forEach((movie) => {
      console.log(
        `ID: ${movie._id}\nTitle: ${movie.title.toUpperCase()}\nActor: ${
          movie.actor
        }\nDirector: ${movie.director}\nGenre: ${movie.genre}\nReleased: ${
          movie.released
        }\nRating: ${movie.rating}\n`
      );
    });
  } else {
    console.log(`No Movies Found`);
  }
};

exports.readMovies = async (search, val) => {
  if (!search) {
    try {
      const allMovies = await Movie.find({});
      displayAllMovies(allMovies);
    } catch (err) {
      error = err;
    }
  } else {
    let error;
    let foundMovie = false;

    switch (search) {
      case "id":
        if (val.length === 24) {
          try {
            const selectedMovie = await Movie.find({ _id: val });

            if (selectedMovie[0]) {
              foundMovie = true;
              displaySearchedMovies(selectedMovie);
            } else {
              error = `Nothing Found For ID: "${val}"`;
            }
          } catch (err) {
            error = err;
          }
        } else {
          error = `Unknown ID Format`;
        }
        break;
      case "title":
        if (val !== "" && val !== true) {
          try {
            const selectedMovie = await Movie.find({ title: val });

            if (selectedMovie[0]) {
              foundMovie = true;
              displaySearchedMovies(selectedMovie);
            } else {
              error = `Nothing Found For Title: "${val}"`;
            }
          } catch (err) {
            error = err;
          }
        } else {
          error = "Unknown Title Format";
        }
        break;
      case "actor":
        if (val !== "" && val !== true) {
          try {
            const selectedMovies = await Movie.find({ actor: val });

            if (selectedMovies.length > 0) {
              foundMovie = true;
              displaySearchedMovies(selectedMovies);
            } else {
              error = `Nothing Found For Actor: "${val}"`;
            }
          } catch (err) {
            error = err;
          }
        } else {
          error = "Unknown Actor Format";
        }
        break;
      case "director":
        if (val !== "" && val !== true) {
          try {
            const selectedMovies = await Movie.find({ director: val });

            if (selectedMovies.length > 0) {
              foundMovie = true;
              displaySearchedMovies(selectedMovies);
            } else {
              error = `Nothing Found For Director: "${val}"`;
            }
          } catch (err) {
            error = err;
          }
        } else {
          error = "Unknown Director Format";
        }
        break;
      case "genre":
        if (val !== "" && val !== true) {
          try {
            const selectedMovies = await Movie.find({ genre: val });

            if (selectedMovies.length > 0) {
              foundMovie = true;
              displaySearchedMovies(selectedMovies);
            } else {
              error = `Nothing Found For Genre: "${val}"`;
            }
          } catch (err) {
            error = err;
          }
        } else {
          error = "Unknown Genre Format";
        }
        break;
      case "released":
        if (val !== "" && val !== true) {
          try {
            const selectedMovies = await Movie.find({ released: val });

            if (selectedMovies.length > 0) {
              foundMovie = true;
              displaySearchedMovies(selectedMovies);
            } else {
              error = `Nothing Found For Release Year: "${val}"`;
            }
          } catch (err) {
            error = err;
          }
        } else {
          error = "Unknown Release Year Format";
        }
        break;
      case "rating":
        if (val !== "" && val !== true) {
          try {
            const selectedMovies = await Movie.find({ rating: val });

            if (selectedMovies.length > 0) {
              foundMovie = true;
              displaySearchedMovies(selectedMovies);
            } else {
              error = `Nothing Found For Rating: "${val}"`;
            }
          } catch (err) {
            error = err;
          }
        } else {
          error = "Unknown Rating Format";
        }
        break;
    }

    if (!foundMovie) {
      console.log(`\n\nError: ${error}`);
    }
  }
};
