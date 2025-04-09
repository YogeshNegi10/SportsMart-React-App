// server.js
import express from 'express';
import cors from 'cors';
import checkoutRoutes from './routes/checkoutRoutes.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
  origin: ['http://localhost:5173',], // Replace with your frontend URL
  methods: ['GET', 'POST'],
  credentials: true,
}));
app.use(express.json());

app.use('/api', checkoutRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
