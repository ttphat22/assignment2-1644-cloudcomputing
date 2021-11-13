const categoryRouter = require('./category')
const tagRouter = require('./tag')
const userRouter = require('./user')
const postRouter = require('./post')

function route(app) {
    
    app.use('/category',categoryRouter);
    app.use('/tag',tagRouter);
    app.use('/user',userRouter);
    app.use('/post',postRouter);

    app.get('/', (req,res,next) => {
        res.render('home')
    })

    app.get('/create', (req,res,next) => {

    })

    app.post('/createOne', (req,res,next) => {

    })

    app.get('/update', (req,res,next) => {

    })

    app.post('/updateOne', (req,res,next) => {

    })

    app.get('/detele', (req,res,next) => {

    })
}

module.exports = route;