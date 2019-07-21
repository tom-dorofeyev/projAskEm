const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer')
const session = require('express-session');
const cors = require('cors');
const app = express();
const http = require('http').createServer(app);
const socketService = require('./services/socket.service')

app.use(cookieParser());
app.use(express.static('public'));
app.use(bodyParser.json());

const config = {
    origin: 'http://localhost:8080',
    credentials: true,
};

app.use(cors(config));

app.set('trust proxy', true)
app.use(session({
    key: 'user',
    secret: 'puki muki',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 60000}
}));

socketService.setup(http);

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
const userRoutes = require('./api/user/user.routes');
const authRoutes = require('./api/auth/auth.routes');

app.use('/api/survey', surveyRoute);
app.use('/api/answer', answerRoute);
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

const port = process.env.PORT || 3000;
http.listen(port, () => console.log('Example app listening on port' + port + '!'))
