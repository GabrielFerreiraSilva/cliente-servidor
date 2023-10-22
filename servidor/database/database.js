const users = [
    {
        login: "user1@email.com",
        password: "password1"
    },
    {
        login: "user2@email.com",
        password: "password2"
    },
    {
        login: "user3@email.com",
        password: "password3"
    },
    {
        login: "user4@email.com",
        password: "password4"
    },
    {
        login: "user5@email.com",
        password: "password5"
    }
];

function searchUser(userToSearch){
    return users.some(user => user.login === userToSearch.login && user.password === userToSearch.password);
}

module.exports = {
    searchUser
}