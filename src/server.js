const app = require('./index');

const port = process.env.PORT || 5555;

app.listen(port, () => console.log('Server On'));
