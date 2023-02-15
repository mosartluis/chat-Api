const checkUserCredentials = require('./auth.controllers')
const response = require('../utils/handleResponses')

const postLogin = (req, res) => {
    const { email, password } = req.body
    checkUserCredentials(email, password)
    .then((data) => {
        if (data){
            response.success({
                res,
                status: 200,
                message: 'Correct Credentials!'
            })
        }else {
            response.error({
                res,
                status: 401,
                message: 'Invalida Credentials'
            })
        }        
    }).catch((err) => {
        response.error({
            res,
            status: 400,
            data: err,
            message: 'Something Bad'
        })
    }); 
}

module.exports = postLogin