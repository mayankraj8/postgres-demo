const express = require('express');

const apiRoutes = require('./server/apiRoutes');
const moment=require('moment');
const movies = require('./model/Movie');
const app = express();
app.use(express.json());

app.use('/api', apiRoutes());

app.listen(4000, () => {
    console.log('Server is up and and running successfully in port 4000');
})



// const createNewMovie = async () => {
//     const movieId = `MV-${moment().unix()}`;
//     const movieRecord = {
//         movieId,
//         title: 'Ram leela',
//         year: 2013,
//         length: '120min',
//         actor: 'Ranveer Singh'
//     }

//     const result = await movies.create(movieRecord);

//     console.log(result.toJSON());
// }

// createNewMovie();