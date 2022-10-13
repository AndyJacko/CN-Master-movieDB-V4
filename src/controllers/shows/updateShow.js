const Show = require("../../models/show");

const displayUpdatedShow = (show) => {
  console.log(`\n\nTV SHOW UPDATED\n--------------------\n`);

  console.log(
    `ID: ${show._id}\nTitle: ${show.title.toUpperCase()}\nActor: ${
      show.actor
    }\nChannel: ${show.channel}\nGenre: ${show.genre}\nReleased: ${
      show.released
    }\nRating: ${show.rating}\n`
  );
};

exports.updateShow = async (id, show) => {
  let error;
  let updateShow = false;

  if (id && id !== true && id.length === 24) {
    if (show && show !== true) {
      const shw = show.split(",");

      if (shw.length === 6) {
        const newShow = new Show({
          _id: id,
          title: shw[0].trim() || "Not Specified",
          actor: shw[1].trim() || "Not Specified",
          channel: shw[2].trim() || "Not Specified",
          genre: shw[3].trim() || "Not Specified",
          rating: shw[4].trim() || "Not Specified",
          released: shw[5].trim() || "Not Specified",
        });

        try {
          const updatedShow = await newShow.updateOne(newShow);

          if (updatedShow.matchedCount === 1) {
            if (updatedShow.modifiedCount === 1) {
              const selectedShow = await Show.find({ _id: id });
              displayUpdatedShow(selectedShow[0]);
              updateShow = true;
            } else {
              error = `TV Show With ID: ${id} Already Up To Date`;
            }
          } else {
            error = `No TV Show Found With ID: ${id}`;
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
  } else {
    error = `Unknown ID Format`;
  }

  if (!updateShow) {
    console.log(`\n\nError: ${error}`);
  }
};