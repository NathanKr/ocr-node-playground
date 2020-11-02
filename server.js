const { createWorker } = require("tesseract.js");
const chalk = require('chalk');
const imgUrl = 'https://tesseract.projectnaptha.com/img/eng_bw.png'

const worker = createWorker({
  logger: m => console.log(m)
});

(async () => {
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
   const { data: { text } } = await worker.recognize(imgUrl);
  console.log(chalk.red(`processed text from ${imgUrl}`));
  console.log(text);
  await worker.terminate();
})();