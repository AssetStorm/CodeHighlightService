const express = require('express');
const highlightJs = require('highlight.js');
var app = express();

app.use(express.json());

app.post('/', function (req, res) {
  res.json({
    "Success": true,
    "highlighted_code": highlightJs.highlight(
      req.body.lang, req.body.code).value
  });
});

const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`)
});
