const express = require('express');
const userRoute = require('./routes/userRoute');

const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

userRoute(app);

app.listen(port, () => console.log(`API rodandando na porta: ${port}`));