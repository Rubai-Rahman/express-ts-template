import 'dotenv/config';
import app from './app';
import { connectDB } from './config/database';
import { config } from './config/config';

const PORT = config.PORT || 3000;

// Connect to database
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});