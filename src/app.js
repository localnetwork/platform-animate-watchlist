const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const animeRoutes = require('./routes/animeRoutes');
const authorRoutes = require('./routes/authorRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.use('/api/auth', authRoutes);
app.use('/api/watchlist', animeRoutes);
app.use('/api/authors', authorRoutes);

app.use((req, res) => res.status(404).json({ error: 'Route not found' }));
app.use(errorHandler);

module.exports = app;
