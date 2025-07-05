import 'dotenv/config';
import app from './app';
import { connectDB } from './config/database';
import { environment } from './config/environment';

const PORT = environment.port || 3000;

// Connect to database
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});