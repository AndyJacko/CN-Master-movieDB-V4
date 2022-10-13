const Show = require("../../models/show");

const displayDeletedShow = (show) => {
  console.log(`\n\nTV SHOW DELETED\n--------------------\n`);

  console.log(
    `ID: ${show._id}\nTitle: ${show.title.toUpperCase()}\nActor: ${
      show.actor
    }\nChannel: ${show.channel}\nGenre: ${show.genre}\nReleased: ${
      show.released
    }\nRating: ${show.rating}\n`
  );
};

exports.deleteShow = async (id) => {
  let error;
  let deletedShow = false;

  if (id && id !== true && id.length === 24) {
    try {
      const selectedShow = await Show.find({ _id: id });
      const delShow = await Show.deleteOne({ _id: id });

      if (delShow.deletedCount === 1) {
        displayDeletedShow(selectedShow[0]);
        deletedShow = true;
      } else {
        error = `No TV Show Found With ID: ${id}`;
      }
    } catch (err) {
      error = err;
    }
  } else {
    error = `Unknown ID Format`;
  }

  if (!deletedShow) {
    console.log(`\n\nError: ${error}`);
  }
};
