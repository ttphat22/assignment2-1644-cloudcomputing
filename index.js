require('./models/db');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars');
const productController = require('./controller/productController');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('views',path.join(__dirname,'/views/'))

app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}))

app.set('view engine','hbs');


// app.get('/', function (req, res) {
//     res.send('Hello world')
// })


// port where app is served
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Server is listening on Port 3000");
})


app.use('/',productController);


app.use(express.static("public"));

