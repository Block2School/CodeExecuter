const executeR = async (codeFile, inputs, timeout = 8) => {
  const runCode = require('../executeCode');
  return await runCode(codeFile, inputs, {
    command: 'Rscript',
    args: [],
    timeout,
    language: 'R',
    version: '3.9.5',
    needCompile: false,
  });
};

module.exports = {
  executeR,
};