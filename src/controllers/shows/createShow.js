const Show = require("../../models/show");

const displayCreatedShow = (show) => {
  console.log(`\n\nTV SHOW CREATED\n--------------------\n`);

  console.log(
    `ID: ${show._id}\nTitle: ${show.title.toUpperCase()}\nActor: ${
      show.actor
    }\nChannel: ${show.channel}\nGenre: ${show.genre}\nReleased: ${
      show.released
    }\nRating: ${show.rating}\n`
  );
};

exports.createShow = async (show) => {
  let error;
  let addedShow = false;

  if (show && show !== true) {
    const shw = show.split(",");

    if (shw.length === 6) {
      try {
        const showExists = await Show.find({ title: shw[0].trim() });

        if (showExists[0]) {
          error = "TV Show Already In DB";
        } else {
          const newShow = new Show({
            title: shw[0].trim() || "Not Specified",
            actor: shw[1].trim() || "Not Specified",
            channel: shw[2].trim() || "Not Specified",
            genre: shw[3].trim() || "Not Specified",
            rating: shw[4].trim() || "Not Specified",
            released: shw[5].trim() || "Not Specified",
          });

          try {
            const saveOk = await newShow.save();

            if (saveOk) {
              displayCreatedShow(saveOk);
              addedShow = true;
            } else {
              error = `Could Not Create TV Show`;
            }
          } catch (err) {
            error = err;
          }
        }
      } catch (err) {
        error = err;
      }
    } else {
      error = `Invalid TV Show Format`;
    }
  } else {
    error = `Unknown TV Show Format`;
  }

  if (!addedShow) {
    console.log(`\n\nError: ${error}`);
  }
};
