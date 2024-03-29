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

const supportedLanguages = ['js', 'py', 'R', 'c', 'cpp'];
const compilerVersions = [
  '16.13.2',
]

const { executeJavaScript } = require('./src/languages/javascript')
const { executePython } = require('./src/languages/python')
const { executeR } = require('./src/languages/r')
const { executeC } = require('./src/languages/c')
const { executeCpp } = require('./src/languages/cpp')

app.get('/', async (request, response) => {
  return response.status(200).json({
    'supportedLanguages': supportedLanguages,
  })
});

app.post('/execute', async (request, response) => {
  let output = '';
  const {
    language = 'js',
    code,
    input = '',
    timeout,
    id = -1
  } = request.body;

  if (!supportedLanguages.includes(language)) {
    return response.status(400).send('Invalid language');
  }
  if (code === undefined || code.trim() === '') {
    return response.status(400).send('Invalid code');
  }

  const codeFile = createCodeFile(language, code, id);

  console.log(codeFile, code, input, id);

  switch (language) {
    case 'js':
      output = await executeJavaScript(codeFile, input, timeout);
      break;
    case 'py':
      output = await executePython(codeFile, input, timeout);
      break;
    case 'R':
      output = await executeR(codeFile, input, timeout);
      break;
    case 'c':
      output = await executeC(codeFile, input, timeout);
      break;
    case 'cpp':
      output = await executeCpp(codeFile, input, timeout);
      break;
  }
  removeCodeFile(codeFile.split(".")[0], language);
  return response.status(200).send(output);
});

app.listen(port, () =>
  console.log(`Listening on port ${port}`
));