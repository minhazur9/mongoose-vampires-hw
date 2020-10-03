// 1. Require Mongoose
const mongoose = require('mongoose');
// 2. Require your Model
const Vampire = require('./models/vampire');
// 3. Require your extra data source
const vampireData = require('./populateVampires');
// 4. Connect your database
const connectionString = 'mongodb://localhost:27017/mongoose-vampires';
mongoose.connect(connectionString, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', () => {
    console.log('Connection Failed');
})

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

// Vampire.collection.insertMany(vampireData, (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(data);
//     }
//     process.exit();
// })

Vampire.find({}, (err,v) => {
    console.log(v)
})


// ### Add some new vampire data

const vampire1 = {
    name: 'Count count',
    eye_color: 'red',
    dob: new Date(1800, 4, 5, 5, 50),
    love: ['blood'],
    location: 'New York, New York, US',
    gender: 'm',
    victims: 500,
};

const vampire2 = {
    name: 'Count fem',
    eye_color: 'blue',
    dob: new Date(1850, 8, 3, 9, 10),
    love: ['smores'],
    location: 'Boston, Massachusetts, US',
    gender: 'm',
    victims: 500,
};

const vampire3 = {
    name: 'Count brit',
    hair_color: 'brown',
    eye_color: 'green',
    dob: new Date(1790, 3, 5, 7, 18),
    love: ['nothing'],
    location: 'London, England',
    gender: 'f',
    victims: 100,

};

const vampire4 = {
    name: 'Count helsin',
    hair_color: 'black',
    eye_color: 'brown',
    love: ['everything'],
    dob: new Date(1805, 5, 1, 5, 19),
    location: 'London, England',
    gender: 'm',
    victims: 57,

};

// Vampire.create(vampire4, (err, createdVampire) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(createdVampire);
//     }
//     process.exit();
// })


/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
