const express = require('express');     //for using common JS model

const app = express();

// route handler
app.get('/', (req, res) => {    //try to access http://localhost:5000/
    res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;

app.listen(5000);   //http://localhost:5000/

