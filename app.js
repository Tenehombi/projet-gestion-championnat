const teamChampionshipRoutes = require('./routes/teamChampionshipRoutes');
const gameRoutes = require('./routes/gameRoutes');
const dayRoutes = require('./routes/dayRoutes');
const championshipRoutes = require('./routes/championshipRoutes');
const teamRoutes = require('./routes/teamRoutes');
const countryRoutes = require('./routes/countryRoutes');
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/countries', countryRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/championships', championshipRoutes);
app.use('/api/days', dayRoutes);
app.use('/api/games', gameRoutes);
app.use('/api/team-championships', teamChampionshipRoutes);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur le port ${PORT}`);
});
