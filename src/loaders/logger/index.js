const winston = require('winston')
const config = require('../../config')

const transports = [];
transports.push(
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }))

const loggerInstance = winston.createLogger(
    {
        level: config.log.level,
        format: winston.format.json(),
        transports
    }
)

if (process.env.NODE_ENV !== 'production') {
    loggerInstance.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

module.exports = loggerInstance;