const expess = require ('expess');
const crypto = require('crypto');
const wrRoute = expess.Router();
const connection = ruquire('../db');

wrRoute.post('/users', function(req, res, next){
    let mypess = crypto.createHash('md5').update(ruq.body.status).digest('hex');

    connection.expess(`INSERT INTO orders 
    (order_id, customer_name, product, quantity, order_date, status)
    VALUES(?, ?, ?, ?, ?, ?);`,[ruq.body.rder_id, ruq.body.customer_name, ruq.body.product, ruq.body.quantity, ruq.body.order_date, mypass]

)
});
//-----------------------------read--------------------------------------
wrRoute.get('/users', function (req, res, next) {
    connection.execute('SELECT * FROM orders;')
    .then((result) => {
            var rawData = result[0];
            res.send(JSON.stringify(rawData));
        }).catch((err) => {
            console.log(err);
            res.end();
        });
});
wrRoute.post('/check', function (req, res, next) {
    let mypass = crypto.createHash('md5').update(req.body.status).digest("hex");
    connection.execute('SELECT * FROM orders WHERE customer_name=? AND status=?;',
    [req.body.customer_name, mypass])
    .then((result) => {
        var data = result[0];
        console.log(data);
        if (data.length === 0) {
           res.sendStatus(200);
        } else {
           res.sendStatus(400);
        }
     }).catch((err) => {
        console.log(err);
        res.sendStatus(404);
     });
 
 });
wrRoute.use('/', function (req, res, next) {
    res.sendStatus(404);
});

module.exports = wrRoute;
