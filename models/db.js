const mongoose = require("mongoose");
const DB = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.xzfzv.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(
  DB,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("MangoDB connection Succeeded");
    } else {
      console.log("error in DB connection:" + err);
    }
  }
);

require("./meme.model");
