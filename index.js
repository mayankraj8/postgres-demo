const express = require('express');

const apiRoutes = require('./server/apiRoutes');

const app = express();
app.use(express.json());

app.use('/api', apiRoutes());

app.listen(4000, () => {
    console.log('Server is up and and running successfully in port 4000');
})



//const createNewMovie = async () => {
//    const movieId = `MV-${moment().unix()}`;
//    const movieRecord = {
//        movieId,
//        title: 'Tenet',
//        year: 2020,
//        length: '120min',
 //       actors: 'Robert'
 //   }

 //   const result = await Movie.create(movieRecord);

 //   console.log(result.toJSON());
//}

//createNewMovie();