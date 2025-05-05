import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/authRoute.js';
import productRoute from './routes/productRoute.js';
import cookieParser from 'cookie-parser';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,               
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

app.use("/auth",authRoute);
app.use("/product",productRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
