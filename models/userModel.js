const bcrypt = require('bcryptjs');

let users = [
    {
      username: 'admin',
      password: bcrypt.hashSync('12345', 10) // Contraseña encriptada
    },
    {
      username: 'user',
      password: bcrypt.hashSync('password', 10) // Contraseña encriptada
    }
  ];

function getUserByUsername(username){
    return users.find(user => user.username === username);
}

module.exports = {
    getUserByUsername
}