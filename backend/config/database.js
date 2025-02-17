// const mongoose = require("mongoose");

// const connectDatabase = () => {
//   mongoose
//     .connect(process.env.DB_URI), {
//       // useNewUrlParser: true,
//       // useUnifiedTopology: true,
//       // useCreateIndex: true,

//     .then((data) => {
//       console.log(`Mongodb connected with server: ${data.connection.host}`);
//     });
// };

// module.exports = connectDatabase;

const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
    .catch((error) => {
      console.error(`Error connecting to MongoDB: ${error.message}`);
    });
};

module.exports = connectDatabase;
