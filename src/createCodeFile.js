const { v4: getUUID } = require("uuid"),
  fs = require("fs"),
  path = require("path");

if (!fs.existsSync(path.join(__dirname, "codes")))
  fs.mkdirSync(path.join(__dirname, "codes"));

if (!fs.existsSync(path.join(__dirname, "classes")))
  fs.mkdirSync(path.join(__dirname, "classes"));

const createCodeFile = (language, code, id) => {
  const jobID = getUUID(),
    fileName = `${jobID}.${language}`;

  if (id != -1) {
    try {
      const main = fs.readFileSync(path.join(__dirname, `mains/${id}.${language}`), {encoding: 'utf-8', flag: 'r'})
      fs.writeFileSync(path.join(__dirname, `codes/${fileName}`), code?.toString() + "\n" + main);
    } catch (error) {
      fs.writeFileSync(path.join(__dirname, `codes/${fileName}`), code?.toString());
    }
  } else {
    fs.writeFileSync(path.join(__dirname, `codes/${fileName}`), code?.toString());
  }

  return fileName;
};

module.exports = {
  createCodeFile,
};
