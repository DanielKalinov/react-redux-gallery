const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');

app.use(cors());
app.use(express.json());
app.use(passport.initialize());
require('./config/passport')(passport);

const MONGODB_CONNECTION =
	'mongodb+srv://daniel:Xov9gsC7bIRERymc@cluster0.8uos6.mongodb.net/ReactPractice?retryWrites=true&w=majority';

mongoose.connect(
	MONGODB_CONNECTION,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false
	},
	() => console.log('Connected to MongoDB')
);

app.listen(3000, () => console.log('Server is running on port 3000'));
