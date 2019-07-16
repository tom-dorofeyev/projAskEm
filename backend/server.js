const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 3000;
const multer = require('multer')
const session = require('express-session');
const cors = require('cors');
const app = express();

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

//SOCKET.IO
// const http = require('http').Server(app);
// const io = require('socket.io')(http);
// const socketPort = 8081;

// io.on('connection', function (socket) {
//     console.log('user connected')
//     socket.emit('news', { hello: 'world' });
//     socket.on('my other event', function (data) {
//         console.log(data);
//     });
// });

// http.listen(socketPort, () => {
//     console.log(`socket listening on port ${socketPort}`)
// });

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



const answerRoute = require('./api/answer/answer.routes');
const surveyRoute = require('./api/survey/survey.routes');
// const userRoute = require('./api/user/user.route');
app.use('/api/survey', surveyRoute);
// app.use('/api/user', userRoute);
app.use('/api/answer', answerRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))