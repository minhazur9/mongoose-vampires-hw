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

// Vampire.find({}, (err, vampire) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(vampire);
//     }
//     process.exit();

// })


// ### Add some new vampire data

const vampire1 = {
    name: 'Count count',
    eye_color: 'red',
    dob: new Date(1800, 4, 5, 5, 50),
    loves: ['blood'],
    location: 'New York, New York, US',
    gender: 'm',
    victims: 500,
};

const vampire2 = {
    name: 'Count fem',
    eye_color: 'blue',
    dob: new Date(1850, 8, 3, 9, 10),
    loves: ['smores'],
    location: 'Boston, Massachusetts, US',
    gender: 'm',
    victims: 500,
};

const vampire3 = {
    name: 'Count brit',
    hair_color: 'brown',
    eye_color: 'green',
    dob: new Date(1790, 3, 5, 7, 18),
    loves: ['nothing'],
    location: 'London, England',
    gender: 'f',
    victims: 100,

};

const vampire4 = {
    name: 'Count helsin',
    hair_color: 'black',
    eye_color: 'brown',
    loves: ['everything'],
    dob: new Date(1805, 5, 1, 5, 19),
    location: 'London, England',
    gender: 'm',
    victims: 57,

};

const eve = {
    name: 'Eve',
    hair_color: 'red',
    eye_color: 'black',
    loves: ['drinking blood'],
    do: new Date(1, 6, 3, 500),
    location: 'Earth',
    gender: 'f',
    victime: 2400000,
}

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

// Vampire.find({ gender: "f" }, (err, allFemaleVampires) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(allFemaleVampires);
//     }
//     process.exit();
// })


// Vampire.find({victims: {$gt: 500} }, (err, allBigVampires) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(allBigVampires);
//     }
//     process.exit();
// })

// Vampire.find({victims: {$lte: 150} }, (err, allSmallVampires) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(allSmallVampires);
//     }
//     process.exit();
// })

// Vampire.find({victims: {$ne: 210234} }, (err, allFamousVampires) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(allFamousVampires);
//     }
//     process.exit();
// })

// Vampire.find({victims: {$gt: 150, $lt: 500} }, (err, allMidVampires) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(allMidVampires);
//     }
//     process.exit();
// })


/////////////////////////////////////////////////
// ### Select by exists or does not exist

// Vampire.find({title: {$exists: true} }, (err, allTitleVampires) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(allTitleVampires);
//     }
//     process.exit();
// })

// Vampire.find({victims: {$exists: false} }, (err, allPassiveVampires) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(allPassiveVampires);
//     }
//     process.exit();
// })

// Vampire.find({victims: {$exists: false}, title: {$exists: true} }, (err, allPeacefulVampires) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(allPeacefulVampires);
//     }
//     process.exit();
// })

// Vampire.find({victims: {$exists: true, $gt: 1000} }, (err, allKillerVampires) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(allKillerVampires);
//     }
//     process.exit();
// })
/////////////////////////////////////////////////
// ### Select with OR

// Vampire.find({$or: [{location: "New York, New York, US"}, {location: "New Orleans, Louisiana, US"}]}, (err, allCityVampires) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(allCityVampires);
//     }
//     process.exit();
// })

// Vampire.find({$or: [{loves: "brooding"}, {loves: "being tragic"}]}, (err, allDramaVampires) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(allDramaVampires);
//     }
//     process.exit();
// })

// Vampire.find({$or: [{victims: {$gt: 1000}}, {loves: "marshmellows"}]}, (err, allMarshmellowVampires) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(allMarshmellowVampires);
//     }
//     process.exit();
// })

// Vampire.find({$or: [{hair_color: "red"}, {eye_color: "green"}]}, (err, allColorfulVampires) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(allColorfulVampires);
//     }
//     process.exit();
// })

/////////////////////////////////////////////////
//### Select objects that match one of several values

// Vampire.find({$or: [{loves: "frilly shirtsleeves"}, {loves: "frilly collars"}]}, (err, allFashionVampires) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(allFashionVampires);
//     }
//     process.exit();
// })

// Vampire.find({$or: [{loves: "brooding"}]}, (err, allBroodingVampires) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(allBroodingVampires);
//     }
//     process.exit();
// })

// Vampire.find({$or: [{loves: "appearing innocent"}, {loves: "trickery"}, 
// {loves: "lurking in rotting mansions"}, {loves: "R&B music"}]}, (err, allBroodingVampires) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(allBroodingVampires);
//     }
//     process.exit();
// })

// Vampire.find({loves: {$eq: "fancy cloaks", $nin: ['top hats', 'virgin blood']} }, (err, allFancyVampires) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(allFancyVampires);
//     }
//     process.exit();
// })


/////////////////////////////////////////////////
//### Negative Selection

// Vampire.find({loves: "ribbons", eye_color: {$ne: 'brown'}}, (err, allRibbonVampires) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(allRibbonVampires);
//     }
//     process.exit();
// })

// Vampire.find({location: {$ne: 'Rome, Italy'}}, (err, allNotRomeVampires) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(allNotRomeVampires);
//     }
//     process.exit();
// })

// Vampire.find({loves:{$ne: ['fancy cloaks','frilly shirtsleeves','appearing innocent','being tragic','brooding']}}, 
// (err, allRibbonVampires) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(allRibbonVampires);
//     }
//     process.exit();
// })

// Vampire.find({victims: {$lte: 200}}, (err, allRibbonVampires) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(allRibbonVampires);
//     }
//     process.exit();
// })
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

// Vampire.replaceOne({name: 'Claudia'},eve, (err, claudia) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(claudia);
//     }
//     process.exit();
// })

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

// Vampire.updateOne({ name: 'Eve' }, { gender: 'm' }, { new: true }, (err, eve) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(eve);
//     }
//     process.exit();
// })

// Vampire.updateOne({ name: 'Eve' }, { name: 'moniker' }, { new: true }, (err, eve) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(eve);
//     }
//     process.exit();
// })

// Vampire.updateMany({ gender: 'f' }, { gender: 'fems' }, { new: true }, (err, fems) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(fems);
//     }
//     process.exit();
// })

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
