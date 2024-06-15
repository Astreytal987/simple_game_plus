const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const user = require('./user.route');

const app = express();
const PORT = 3001;

const DB_URL = 'mongodb+srv://keronjenos:G0Tl6Roii3fdYuk1@clusterforagame.if8gqjv.mongodb.net/'

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.json())
app.post('/', (req, res) => {
  res.status(200).json('Server working')
})

const startApp = async () => {
  try {
      await mongoose
      .connect(DB_URL)
      .then(() => console.log('Successfully connected to database'))
      app.listen(PORT, () => console.log('server started on port ' + PORT))
  } catch (e) {
      console.log(e)
  }
}

startApp()
