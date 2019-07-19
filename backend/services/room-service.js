
// This is a room service that allows up to 2 people in a room

module.exports = {
    placeInRoom,
    findSurveyRoom
}

function placeInRoom(member, surveyId) {
    var room = findSurveyRoom(surveyId)
    if (room) {
        room.members.push(member);
        return room
    }
    return createRoom(member, surveyId)
}

const gRooms = [];
// room object
// {
//     sureyId:'',
//     members: []
// }

function findSurveyRoom(surveyId) {
	return gRooms.find(room => room.surveyId === surveyId);
}

function createRoom(member, surveyId){
    var newRoom = {
        members: [member],
        surveyId,
    }
    gRooms.push(newRoom);
    return newRoom;
}
