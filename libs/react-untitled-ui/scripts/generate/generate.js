const { generateTemplateFiles } = require('generate-template-files');
const { items } = require('./items');

generateTemplateFiles(items)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
