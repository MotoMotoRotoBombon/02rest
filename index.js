const app = require('./app');
const port = 3001;

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})