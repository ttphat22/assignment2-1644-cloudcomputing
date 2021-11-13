const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');
const route = require('./routes');
const layouts = require('handlebars-layouts');
const hbs = require('hbs');
const fs = require('fs');
require('./database/dbconnect');

app.use(express.urlencoded({extended:true}))
app.set('view engine','hbs')
app.use(express.static(path.join(__dirname, '/public')))


hbs.handlebars.registerPartial('layouts', hbs.handlebars.compile(fs.readFileSync(path.join(__dirname, '..', '/views/layouts.hbs'), 'utf-8')));
hbs.handlebars.registerHelper(layouts(hbs.handlebars));


hbs.handlebars.registerHelper("compare", (a,b) => {
    if (a == b){
        return 'selected';
    } else {
        return '';
    }
});



route(app);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening in ${PORT}`)
})
