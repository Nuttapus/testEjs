const mongoose = require('mongoose');
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/project02', {
  useNewUrlParser: true,
})

mongoose.connection.on('connected',function(){
    console.log('Mongoose defualt connect open')
})

require('./routes/login.routes')(app);

app.listen(4001, () => {
    console.log("Server is listening on port 4001");
});