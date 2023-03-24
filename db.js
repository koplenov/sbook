const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite3",
});

class db_dto_story extends Model { }
db_dto_story.init(
    {
        city: DataTypes.STRING,
        place: DataTypes.STRING,
        hero: DataTypes.STRING,
        fairytale: DataTypes.STRING,
        description: DataTypes.STRING,
        aidiobook: DataTypes.STRING,
        videobook: DataTypes.STRING,
        book: DataTypes.STRING,
    },
    {
        sequelize,
        timestamps: false,
    }
);

module.exports = {
    db_dto_story,
    sequelize,
};
