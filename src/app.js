require('dotenv').config();
const express = require('express');

const app = express()


app.get('/', (req, res) => {
    res.json({
        status: "success",
        message: "this is server response",
    });
});


app.listen(process.env.PORT, () => {
    console.log(`Server up and running...`);
})