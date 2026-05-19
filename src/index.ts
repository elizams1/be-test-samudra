import 'dotenv/config';
import express from 'express';
import type { Application, Request, Response } from 'express';
import orderRoutes from './routes/order.routes';
import userRoutes from './routes/user.routes';

const app: Application = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'API berjalan dengan baik',
    endpoints: {
      order: '/api/order',
    },
  });
});

app.use('/api/order', orderRoutes);
app.use('/api/user', userRoutes)

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint tidak ditemukan',
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server berjalan di http://localhost:${PORT}`);
});