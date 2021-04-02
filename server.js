const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();
//Connect Database
connectDB();
require('./models/User');
require('./models/Profile');

//Init middleware
app.use(express.json({ extended: false }));

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT;
if (PORT == null || PORT == '') {
  PORT = 5000;
}

//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Server connection
app.listen(PORT, () => {
  console.log('====================================');
  console.log(`Server started on port ${PORT}`);
  console.log('====================================');
});
