const express = require('express');

const { staticMap } = require('./static-map-api');
const { download, ignoreFavicon, deleteFile } = require('./util');

const app = express();

app.use(ignoreFavicon);

app.use('/:cep', (req, res) => {
  const cep = req.params.cep;
  download(staticMap(cep), filepath => () => {
    res.sendFile(filepath);
    res.on('finish', function() {
      try {
        deleteFile(filepath);
      } catch (err) {
        console.log(err, filepath);
      }
    });
  });
});

app.listen('8000', () => console.log('app listening'));
