var fs = require('fs')

function logMessage(message) {
    process.emit('test:log', message);
}

function readTextFile(fileName) {
    return fs.readFileSync('./test_data/' + fileName, 'utf-8')
}

module.exports = {
    logMessage,
    readTextFile
}