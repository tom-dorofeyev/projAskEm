
const socketIO = require('socket.io');
const roomService = require('./room-service');

var io;
var activeUsersCount = 0;
let currAnswering = [];
//currAnswering array:
// [
//     {
//         surveyId: 'dsjfnods8273ro66heisd',
//         answering:0
//     }
// ]

function setup(http) {
    io = socketIO(http);
    io.on('connection', (socket) => {
        console.log('a user connected');
        var room;
    
        socket.on('watchingResults', ({surveyId, member}) => {
            room = roomService.placeInRoom(member, surveyId)
            console.log('Placed', member, 'in room:', room);
            if(room.surveyId) socket.join(room.surveyId)
        })

        socket.on('leftResults', (surveyId) => {
            room = roomService.findSurveyRoom(surveyId);
            if(room) socket.leave(room.surveyId)
        })
        
        socket.on('surveySubmitted', surveyId => {
            room = roomService.findSurveyRoom(surveyId)
            if (!room) return
            if(room.surveyId) io.to(room.surveyId).emit('surveySubmit', surveyId)
        })

    });

}



module.exports = {
    setup
}