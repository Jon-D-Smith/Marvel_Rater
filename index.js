const express = require('express');
const app = express();
const PORT = 3000;
const methodOverride = require('method-override');
const path = require('path');
const Movie = require('./models/movie')


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//App use
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.redirect('/movies')
})


app.get('/movies', (req, res) => {
    res.render('home')
})



app.listen(PORT, () => {
    console.log(`Connected on port ${PORT}`)
})