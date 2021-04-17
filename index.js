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
app.use(express.static(__dirname + '/public'));


//Redirect to main movies page (Just in case I expand the app)
app.get('/', (req, res) => {
    res.redirect('/movies')
})

//Getting Home Page
app.get('/movies', async (req, res) => {
    const movies = await Movie.find({})
    res.render('home', { movies })
})

//New Movies
app.get('/movies/new', (req, res) => {
    res.render('new')
})

app.post('/movies', async (req, res) => {
    const movie = await new Movie(req.body);
    movie.save()
    res.redirect('/movies')
})

//Edit Movie Rating
app.get('/movies/:id/edit', async (req, res) => {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    res.render('edit', { movie })
})

app.put('/movies/:id', async (req, res) => {
    const { id } = req.params;
    const movie = await Movie.findByIdAndUpdate(id, req.body)
    res.redirect('/movies')
})

//Delete Route
app.delete('/movies/:id', async (req, res) => {
    const { id } = req.params;
    const movie = await Movie.findByIdAndDelete(id)
    res.redirect('/movies')
})


app.listen(PORT, () => {
    console.log(`Connected on port ${PORT}`)
})