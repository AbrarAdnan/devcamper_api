const mongoose = require('mongoose');

const connectDB = async () => {
	const conn = await mongoose.connect(process.env.MONGO_URI, {
		//useNewUrlParser: true,
		//useCreateIndex: true,
		//useFindAndModify: false,
		// These above are no longer necessary
		useUnifiedTopology: true,
	});

	console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
