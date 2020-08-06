// yarn add express cors body-parser
const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.json({ message: "Hola Mundo!" });
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.end();
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));

