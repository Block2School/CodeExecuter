const executePython = async (codeFile, inputs, timeout = 8) => {
  const runCode = require('../executeCode');
  return await runCode(codeFile, inputs, {
    command: 'python3',
    args: [],
    timeout,
    language: 'py',
    version: '3.9.5',
    needCompile: false,
  });
};

module.exports = {
  executePython,
};