const Show = require("../../models/show");

const displayAllShows = (shows) => {
  console.log(`\n\nANDY'S TV SHOW DATABASE\n---------------------\n`);

  if (shows.length > 0) {
    shows.forEach((show) => {
      console.log(
        `ID: ${show._id}\nTitle: ${show.title.toUpperCase()}\nActor: ${
          show.actor
        }\nChannel: ${show.channel}\nGenre: ${show.genre}\nReleased: ${
          show.released
        }\nRating: ${show.rating}\n`
      );
    });
  } else {
    console.log(`No TV Shows In Database`);
  }
};

const displaySearchedShows = (shows) => {
  console.log(`\n\nTV SHOW SEARCH RESULTS\n--------------------\n`);

  if (shows.length > 0) {
    shows.forEach((show) => {
      console.log(
        `ID: ${show._id}\nTitle: ${show.title.toUpperCase()}\nActor: ${
          show.actor
        }\nChannel: ${show.channel}\nGenre: ${show.genre}\nReleased: ${
          show.released
        }\nRating: ${show.rating}\n`
      );
    });
  } else {
    console.log(`No TV Shows Found`);
  }
};

exports.readShows = async (search, val) => {
  if (!search) {
    try {
      const allShows = await Show.find({});
      displayAllShows(allShows);
    } catch (err) {
      error = err;
    }
  } else {
    let error;
    let foundShow = false;

    switch (search) {
      case "id":
        if (val.length === 24) {
          try {
            const selectedShow = await Show.find({ _id: val });

            if (selectedShow[0]) {
              foundShow = true;
              displaySearchedShows(selectedShow);
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
            const selectedShow = await Show.find({ title: val });

            if (selectedShow[0]) {
              foundShow = true;
              displaySearchedShows(selectedShow);
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
            const selectedShows = await Show.find({ actor: val });

            if (selectedShows.length > 0) {
              foundShow = true;
              displaySearchedShows(selectedShows);
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

      case "channel":
        if (val !== "" && val !== true) {
          try {
            const selectedShows = await Show.find({ channel: val });

            if (selectedShows.length > 0) {
              foundShow = true;
              displaySearchedShows(selectedShows);
            } else {
              error = `Nothing Found For Channel: "${val}"`;
            }
          } catch (err) {
            error = err;
          }
        } else {
          error = "Unknown Channel Format";
        }
        break;

      case "genre":
        if (val !== "" && val !== true) {
          try {
            const selectedShows = await Show.find({ genre: val });

            if (selectedShows.length > 0) {
              foundShow = true;
              displaySearchedShows(selectedShows);
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
            const selectedShows = await Show.find({ released: val });

            if (selectedShows.length > 0) {
              foundShow = true;
              displaySearchedShows(selectedShows);
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
            const selectedShows = await Show.find({ rating: val });

            if (selectedShows.length > 0) {
              foundShow = true;
              displaySearchedShows(selectedShows);
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

    if (!foundShow) {
      console.log(`\n\nError: ${error}`);
    }
  }
};
