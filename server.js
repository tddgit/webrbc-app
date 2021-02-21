const express = require('express');
const app = express();

console.log('Server started');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(5001);
