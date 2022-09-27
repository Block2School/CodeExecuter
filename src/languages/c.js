const path = require("path");

const executeC = async (codeFile, inputs, timeout = 12) => {
  const runCode = require('../executeCode');
  return await runCode(codeFile, inputs, {
    command: 'gcc',
    args: [
      '-o',
      `${path.join(__dirname, `../classes/${codeFile.split(".")[0]}`)}.out`
    ],
    timeout,
    language: 'c',
    version: '16.13.2',
    needCompile: true,
  });
};

module.exports = {
  executeC,
};