const express = require('express');
const app = express();
const db = require("./utils/database");
const responseHandlers = require('./utils/handleResponses')
app.use(express.json());
const initMoldels = require ("./models/initModels");
const messageRouters = require('./messages/messages.router');
const conversationsRouters = require('./conversations/conversations.router');
const authRouter =require('./auth/auth.routers')
const userRouter = require('./users/users.router')
const participantRouters = require('./participants/participants.router')


app.get('/', (req, res) => {
    responseHandlers.success({
        res,
        status: 200,
        message: 'Servidor inicializado correctamente',
        data: {
            "users": "http://localhost:9000/api/v1/users",
            "conversations": "http://localhost:9000/api/v1/conversations",
            "participants": "http://localhost:9000/api/v1/participants",
            "messages": "http://localhost:9000/api/v1/messages"
        }
    })
});

db.authenticate()
    .then(() => console.log("Las credenciales de la DB son correctas"))
    .catch((err) => console.log(err));

db.sync()
    .then(() => {
        console.log("La base de datos ha sido actualizada");
    })
    .catch((err) => {
        console.log(err);
    })

    initMoldels()

    
app.use("api/v1/users", userRouter);
app.use("api/v1/messages", messageRouters);
app.use("api/v1/participants", participantRouters);
app.use("api/v1/coversations", conversationsRouters);

app.use('/api/v1/auth', authRouter);



//? Esta debe ser la ultima ruta en mi app
app.use('*', (req, res)=> {
    responseHandlers.error({
        res,
        status: 404,
        message: 'URL not found, please try with http://localhost:9000/',
    })
})

app.listen(9000,() => {
    console.log('Server started at port 9000')
});

