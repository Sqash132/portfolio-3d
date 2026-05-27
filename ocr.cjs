const { createWorker } = require('tesseract.js');

(async () => {
  const worker = await createWorker('eng');
  const ret = await worker.recognize('/Users/suyashgaur/.gemini/antigravity/brain/e5b31601-29cf-4de2-bd70-c60c8b5b6adb/media__1779882498605.png');
  console.log(ret.data.text);
  await worker.terminate();
})();
