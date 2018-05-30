/*
var app = require('./app');
var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
    console.log('Express server listening on port ' + port);
});
*/
const config = require('./config');
const restify = require('restify');
const restifyPlugins = require('restify').plugins;
const cors = require('cors');

const server = restify.createServer({
    name: config.name,
    version: config.version
});

server.use(restifyPlugins.jsonBodyParser({ mapParams: true }));
server.use(restifyPlugins.acceptParser(server.acceptable));
server.use(restifyPlugins.queryParser({ 
    mapParams: true,
    allowDots: true
}));
server.use(restifyPlugins.fullResponse());
server.use(cors());

server.listen(config.port, () => {
    console.log('%s listening at %s', server.name, server.url);

    require('./user/UserController')(server);
    require('./skill/SkillController')(server);
    require('./permission/PermissionController')(server);
    require('./usergroup/UserGroupController')(server);
});

module.exports = server;
