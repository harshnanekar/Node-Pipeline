const app = require('express')();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!', process.env.NODE_ENV);
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});