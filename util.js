const path = require('path');
const fs = require('fs');
const request = require('request');

const uuid = require('uuid');

module.exports = {
  ignoreFavicon: (req, res, next) => {
    if (req.originalUrl === '/favicon.ico') {
      res.status(204).json({ nope: true });
    } else {
      next();
    }
  },
  download: (uri, callback) => {
    const filename = `${uuid.v4()}-map.png`;
    request.head(uri, (err, res, body) => {
      request(uri)
        .pipe(fs.createWriteStream(filename))
        .on('close', callback(path.join(__dirname, filename)));
    });
  },
  deleteFile: filename => {
    fs.unlink(filename, err => {
      if (err) {
        console.log(err);
      }
    });
  }
};
