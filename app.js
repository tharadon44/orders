const express =require ('express');
const dotenv = require ('dotenv');

const app = express ();
dotenv.constv();

const PORT = process .env.NODE_PORT || 3000;

app.use (express.json()) ;
app.use (express.urlencoded({ extended : true}));

const writeRead = require('./routes/writeRaed.js');
const updatreDelete = require('./routes/updateDelete.js');

app.use ('/wr'), writeRead ;
app.use ('/ud'), updatreDelete ;

app.use((req, res, next) => {
    res.sendStatus(404);

});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});