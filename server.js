// api-buku/server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import dictionaryRoutes from './routes/DictionaryRoutes.js';

// Konfigurasi Dotenv
dotenv.config();

// Inisialisasi Express
const app = express();

// Middleware
app.use(express.json()); // Untuk parsing body JSON
app.use(cors({
    origin: 'http://localhost:3000' // Izinkan permintaan dari React Dev Server
}));

// Koneksi Database
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ MongoDB Terhubung');
    } catch (error) {
        console.error(`❌ Gagal terhubung ke MongoDB: ${error.message}`);
        process.exit(1);
    }
};

connectDB();

// Routes
app.use('/api/dictionary', dictionaryRoutes);

// Endpoint Tes
app.get('/', (req, res) => {
    res.send('API Kamus Berjalan!');
});

// Jalankan Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});