const fs = require("fs/promises");
const fileName = "myfile.txt";
const updateFile = async (fileName, fileContent) => {
  const text=await fs.readFile(fileName);
  const newtext=text.concat(fileContent);
  fs.writeFile(fileName,newtext)
  
};

module.exports = updateFile;
