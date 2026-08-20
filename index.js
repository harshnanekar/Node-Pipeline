require('dotenv').config();

const app = require('express')();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log(`Environment: ${process.env.NODE_ENV}`);
  res.send('Hello World!');
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ${process.env.NODE_ENV} and ${process.env.API_KEY}`);
});