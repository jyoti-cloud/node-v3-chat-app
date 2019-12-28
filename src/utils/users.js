const users = [];

//addUser, removeUser,getUser,getUsersInRoom
const addUser = ({ id, username, room }) => {
    //clean the Data
    username = username == undefined ? '' : username.trim().toLowerCase();
    room = room.trim().toLowerCase();


    //validate the data
    if (!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }
    //check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    //validate username

    if (existingUser) {
        return {
            error: 'Username is in use!'
        }
    }
    //store user
    const user = { id, username, room };
    users.push(user)
    return { user }

}
//Remove user

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}
const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}
addUser({
    id: 22,
    username: 'jyoti',
    room: 'Punjab'
})
addUser({
    id: 23,
    username: 'ricky',
    room: 'Greater Noida'
})
addUser({
    id: 24,
    username: 'anhad',
    room: 'Greater Noida'
})

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}