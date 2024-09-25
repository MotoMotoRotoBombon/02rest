const express = require('express');
const bodyParser = require('body-parser');
const projectRoutes = require('./routers/projectRoutes');
const authRoutes = require('./routers/authRoutes');
const app = express();

app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/projects', projectRoutes);


app.use((req, res, next) => {
    res.status(404).json({
        message: 'Ruta no encontrada'
    });
})

module.exports = app;