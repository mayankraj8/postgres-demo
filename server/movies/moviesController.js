const moment = require('moment');
const lodash = require("lodash");
const { isEmpty } = require('lodash');
const { Op } = require('sequelize');

const { Movie } = require('../../model');

const createNewMovie = async (req, res) => {
    const { title, year, length, actors } = req.body;

    const movieId = `MV-${moment().unix()}`;
    const movieRecord = {
        movieId,
        title,
        year,
        length,
        actors
    }

    

    const result = await Movie.create(movieRecord);
    console.log(result.toJSON());

    if (!isEmpty(result)) {
        res.send(result);
    } else {
        res.send({ error: "Movie creations Failed" });
    }
}
const listMovies = async (req, res) => {
    const movies = await Movie.findAll();

    // To convert sequelize model to plain javascript
    const formattedMovie = movies.map(r => r.get({ plain: true }));

    if (!isEmpty(formattedMovie)) {
        res.send(formattedMovie);
    } else {
        res.send({ error: "Movie creations Failed" });
    }
}


const searchMovieTitle = async (req, res) => {
    const { title } = req.params;

    const searchResult = await Movie.findAll({
        where: {
            title: {
                [Op.like]: `%${title}%`,
            }
        },
        raw: true
    });

    console.log(searchResult);

    if (lodash.isEmpty(searchResult)) {
        res.send({ message: 'No Records Found' });
    } else if (!lodash.isEmpty(searchResult)) {
        res.send(searchResult);
    }
}
    

const deleteMovie = async (req, res) => {
    const { title } = req.params;
    console.log(title);
    const deletedMovie = await Movie.destroy({
        where: {
            "title": title
        }
    });

    console.log(deletedMovie);
    if (isEmpty(deletedMovie)) {
        res.json("Movie Deleted Successfully...");
    }
    else {
        res.json("Error in deleting the Movie ....");
    }


}
const updateMovie = async (req, res) => {
    const { movieId } = req.params;
    const data = req.body;
    const result = await Movie.update(data, {
        where: {
            movieId: movieId
        }
    });
    if (result) {
        return res.json({ message: "Movie updated successfully" });
    }
    else {
        return res.json({ message: "problem in updating" });
    }

};

module.exports = { createNewMovie,deleteMovie,searchMovieTitle,listMovies,updateMovie};