const mongoose = require('mongoose');

mongoose
.connect('mongodb://localhost:27017/BAG-E-Com')
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose.connection;
