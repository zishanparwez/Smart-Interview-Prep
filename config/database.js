const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    uri: 'mongodb://localhost:27017/interview-data',
    secret: 'crypto',
    db: 'interview-data'
}