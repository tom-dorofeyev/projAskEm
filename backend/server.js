const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 3000;
const multer = require('multer')
const session = require('express-session');
const cors = require('cors');
const app = express();

//socket
// var server = app.listen(8080)
var io = require('socket.io')();

io.on('connection', (socket) => {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log(data);
    });
  });

app.use(cookieParser());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors())

app.use(session({
    secret: 'puki muki',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

//CLOUDINARY
// const cloudinary = require('cloudinary').v2;
// const upload = multer({ dest: 'uploads/' })
// const cloudinaryConfig = require('./config.json').cloudinary
// cloudinary.config(cloudinaryConfig)

// app.post('/upload/cloudinary', upload.single('imgUpload'), (req, res) => {
//     const transformation = [{ angle: 60 }]
//     console.log(req.file)
//     cloudinary.uploader.upload(req.file.path,
//         { transformation }, //OPTIONS OBJECT
//         function (error, result) {
//             res.json(result)
//         });
// })


//ROUTES

const surveyRoute = require('./api/survey/survey.routes');
const answerRoute = require('./api/answer/answer.routes');
// const userRoute = require('./api/user/user.route');
app.use('/api/survey', surveyRoute);
app.use('/api/answer', answerRoute);
// app.use('/api/user', userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))