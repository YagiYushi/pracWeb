const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('success');
});

app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.listen(3000);