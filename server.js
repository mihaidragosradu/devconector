const express = require('express');
const app = express();
const PORT = process.env.PORT;
if (PORT == null || PORT == '') {
  PORT = 5000;
}
app.get('/', (req, res) => {
  res.send('API Running');
});

//Middleware

// Server connection
app.listen(PORT, () => {
  console.log('====================================');
  console.log(`Server started on port ${PORT}`);
  console.log('====================================');
});
