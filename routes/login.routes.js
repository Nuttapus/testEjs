module.exports = (app) => {
    const login = require('../controller/login.controller');

    app.get('/login/:id', login.find);
}