// const mongoose = require("mongoose");
// const app = require("./app");

// const { DB_HOST, PORT = 3000 } = process.env;

// mongoose
//   .connect(DB_HOST)
//   .then(() => app.listen(PORT))
//   .catch((error) => {
//     console.log(error.message);
//     process.exit(1);
//   });
const app = require("./app");
const db = require("./config/db");

const { PORT = 3000 } = process.env;

db.then((result) => {
  app.listen(PORT, () => {
    console.log(`Server running. Use our API on port: ${PORT}`);
  });
}).catch(console.error);
