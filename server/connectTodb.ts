import mongoose from 'mongoose';

const { MONGO_URL } = process.env;

const connection: { isConnected: number | null } = { isConnected: null };

export const connectToDatabase = async () => {
  try {
    if (connection.isConnected) {
      console.log('Already connected to the database');
      return;
    }

    if (!MONGO_URL) {
      throw new Error('MONGO_URL environment variable is not defined');
    }

    const db = await mongoose.connect(MONGO_URL, {
      dbName: 'CheckIT',
    });

    connection.isConnected = db.connections[0].readyState;
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};
