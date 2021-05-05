var mongoose = require('mongoose');

const uri = `mongodb+srv://shayan:${process.env.DB_PASS}@cluster0.ttmdn.mongodb.net/ng-pmc?retryWrites=true&w=majority`
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connected to Database!");
});

module.exports = db;