const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const path = require('path')
const app = express();
const http = require('http').createServer(app);
const socketService = require('./services/socket.service')
const logger = require('./services/logger.service')

app.use(cookieParser());
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')));
}

if (process.env.NODE_ENV !== 'production') {
    const corsOptions = {
        origin: 'http://localhost:8080',
        credentials: true
    };
    app.use(cors(corsOptions));
}

app.use(session({
    secret: 'puki muki',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 1000*60*60*1000 }
}));

socketService.setup(http);

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
http.listen(port, () => logger.info('Example app listening on port' + port + '!'))
