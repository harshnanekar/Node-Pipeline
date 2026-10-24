require('dotenv').config();

const app = require('express')();

const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.send('OK!');
  // res.status(500).send("Intentional failure")
});

app.get('/', (req, res) => {
  console.log(`Environment: ${process.env.NODE_ENV}`);
  res.send('Hello World!');
});

app.get("/version", (req, res) => {
  res.json({
    version: process.env.APP_VERSION || "original",
    port: process.env.PORT || 3000
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ${process.env.NODE_ENV} and key ${process.env.API_KEY}`);
});