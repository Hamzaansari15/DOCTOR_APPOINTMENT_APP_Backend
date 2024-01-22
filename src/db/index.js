import mongoose from 'mongoose';
const databaseConnection = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DATABASE_NAME}`);
        // console.log(connectionInstance);
    } catch (error) {
        console.log('Database Connection Failed' + error)
        process.exit(1)
    }
}

export default databaseConnection;