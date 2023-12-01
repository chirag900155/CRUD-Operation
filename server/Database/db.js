import mongoose from 'mongoose';

const Connection = async () => {
    const URL = 'mongodb+srv://ChiragGwalani:Chirag123@cluster0.6smf1n8.mongodb.net/Crud-Application?retryWrites=true&w=majority';

    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error);
    }
}

export default Connection;