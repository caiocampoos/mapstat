import 'dotenv/config';
import { connectDB } from './db/connect';
import server from './server';
import { Logger } from './utils/logger';

(async () => {
  try {
    await connectDB({
      dbName: process.env['MONGO_DB_NAME'],
    });
    Logger.info('Connected to MongoDB successfully 🚀');
  } catch (err) {
    Logger.error('Error connecting to MongoDB', err);
  }

  server.listen(process.env['PORT'], () => {
    Logger.info(`Server started on port http://localhost:${process.env['PORT']}`);
  });
})();
