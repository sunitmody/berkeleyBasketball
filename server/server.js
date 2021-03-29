const app = require('./index.js');
const port = 3010;

app.listen(port, () => {
  console.log(`Berkeley Basketball at http://localhost:${port}`);
})