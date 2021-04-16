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

app.get('/', (req, res) => {
    res.redirect('/movies')
})


app.get('/movies', async (req, res) => {
    const movies = await Movie.find({})
    res.render('home', { movies })
})


// app.get('/seed', async (req, res) => {
//     Movie.insertMany([
//         {
//             title: 'Captain America: The First Avenger',
//             image: 'https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_UY1200_CR69,0,630,1200_AL_.jpg',
//             comedy: 1.4,
//             immersion: 1.8,
//             eggs: 1.1,
//             emotion: 1.9,
//             development: 1.6

//         },
//         {
//             title: 'Captain Marvel',
//             image: 'https://s3.amazonaws.com/com.marvel.terrigen/prod/captainmarvel_lob_crd_06.jpg',
//             comedy: 0.9,
//             immersion: 1.2,
//             eggs: 1.8,
//             emotion: 0.9,
//             development: 1.2

//         }, {
//             title: 'Iron Man',
//             image: 'https://flxt.tmsimg.com/assets/p170620_p_v10_an.jpg',
//             comedy: 1.9,
//             immersion: 2.0,
//             eggs: 1.6,
//             emotion: 1.4,
//             development: 1.9

//         }
//     ])
//     res.redirect('/movies')
// })



app.listen(PORT, () => {
    console.log(`Connected on port ${PORT}`)
})