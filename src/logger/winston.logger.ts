import * as winston from 'winston';

export const logger = winston.createLogger({
  // TODO: 安定したらinfoに変更
  level: 'debug',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'tmp/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'tmp/combined.log', level: 'debug' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}