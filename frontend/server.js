const express = require("express");
const app = express();
const port = 3003;

app.use(express.static('src'));

app.listen(port, () => {console.log(`Listening at port ${port}`)});
