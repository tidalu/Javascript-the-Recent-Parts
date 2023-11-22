const fs = require('fs').promises;

async function* readFiles(directory) {
  const files = await fs.readdir(directory);
  for (const file of files) {
    const stats = await fs.stat(file);
    if (stats.isFile()) {
      yield {
        name: file,
        content: await fs.readFile(file, 'utf8'),
      };
    }
  }
}

const files = readFiles(".");

(async () => {
  for await (let val of files) {
    console.log(val.content);
  }
})();
