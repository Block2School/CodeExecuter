const { createCodeFile } = require("./src/createCodeFile");
const { removeCodeFile } = require("./src/removeCodeFile");

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8082;
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const supportedLanguages = ['js'];
const compilerVersions = [
  '16.13.2',
]

const { executeJavaScript } = require('./src/languages/javascript')

app.get('/', async (request, response) => {
  return response.status(200).json({
    'supportedLanguages': supportedLanguages,
  })
});

app.post('/execute', async (request, response) => {
  let output = '';
  const { language = 'js', code, input = '', timeout } = request.body;

  if (!supportedLanguages.includes(language)) {
    return response.status(400).send('Invalid language');
  }
  if (code === undefined || code.trim() === '') {
    return response.status(400).send('Invalid code');
  }

  const codeFile = createCodeFile(language, code);

  console.log(codeFile, code, input);

  switch (language) {
    case "js":
      output = await executeJavaScript(codeFile, input, timeout);
      break;
  }
  removeCodeFile(codeFile.split(".")[0], language);
  return response.status(200).send(output);
});

app.listen(port, () =>
  console.log(`Listening on port ${port}`
));