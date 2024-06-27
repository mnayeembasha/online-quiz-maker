const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const quizRoutes = require('./routes/quizRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/quizzes', quizRoutes);

mongoose.connect('mongodb://localhost:27017/quizdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error(err);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

