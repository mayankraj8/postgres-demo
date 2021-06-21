const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'M@yank!23', {
    host: 'localhost',
    dialect: 'postgres'
});

const movies = sequelize.define('movies', {
    movieId: {
        type: DataTypes.STRING,
        allowNull: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER
    },
    length: {
        type: DataTypes.STRING
    },
    actor: {
        type: DataTypes.STRING

    }
}, {
    tableName: "movies",
    underscored: true,
    timestamps: false
});

// `sequelize.define` also returns the model
console.log(movies === sequelize.models.movies); // true

module.exports = movies;