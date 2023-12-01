import mongoose from 'mongoose';

const Connection = async () => {
    const URL = 'Add your URL of mongodb';

    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error);
    }
}

export default Connection;
