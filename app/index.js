const express = require('express');

const { staticMap } = require('./static-map-api');
const { download, ignoreFavicon, deleteFile } = require('./util');

const app = express();

app.use(ignoreFavicon);

app.get('/:cep', (req, res) => {
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

const port = process.env.PORT || 8000;

app.listen(port, () =>
  console.log(`App is listening on http://localhost:${port}`)
);
