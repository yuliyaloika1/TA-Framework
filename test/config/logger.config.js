const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

const logger = winston.createLogger({
    level: 'debug',
    transports: [
        new winston.transports.Console({level: 'debug' }),
        new winston.transports.File({ filename: 'combined.log', level: 'info' }),
        new DailyRotateFile({
            filename: './log',
            datePattern: 'yyyy-MM-dd.',
            prepend: true,
            localTime: true,
            level: process.env.NODE_ENV === 'development' ? 'debug' : 'info'
        })
    ],
    format: winston.format.simple()

});

module.exports = logger;