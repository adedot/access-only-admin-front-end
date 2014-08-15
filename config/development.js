var config = module.exports = {};

config.env = 'development';
config.hostname = 'localhost';
config.force = false;

//postgres database
config = {};
config.uri = process.env.POSTGRES_URI || 'localhost';

module.exports = config;