const bcrypt = require('bcrypt')

const hashPassword = (plainPassword) => {
    return bcrypt.hashSync(plainPassword, 10)
}

//? Retorna un Boollean
const comparePassword = (plainPassword, hashedPassword) => {
    return bcrypt.compareSync(plainPassword, hashedPassword)
}

// console.log(hashPassword('root'))
// Console.log(comparePassword('Root', '%&GYHYhhyhyyh)($%&"!'))
 module.exports = {
    hashPassword,
    comparePassword
 }