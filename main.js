const { sequelize, db_dto_story } = require('./db')

const fastify = require('fastify')({
    logger: true
})

fastify.get('/find/one/by/id/:id', function (request, reply) {
    const { id } = request.params
    return db_dto_story.findOne({
        where: {
            id
        }
    })
})


fastify.get('/find/all/by/city/:city', function (request, reply) {
    const { city } = request.params
    return db_dto_story.findAll({
        where: {
            city
        }
    })
})

const port = process.env.PORT || 3000;
const start = async () => {
    try {
        await sequelize.sync();
        await fastify.listen({ port });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();

