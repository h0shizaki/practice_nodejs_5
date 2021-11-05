const express = require('express')
const app = express();
const db = require('./src/models')
const initRoutes = require('./src/routes/web')

global.__basedir = __dirname ;

app.use(express.urlencoded({extended: true}))
initRoutes(app);

db.sequelize.sync()

const PORT = 3000;
app.listen(PORT , ()=>console.log(`Server running on ${PORT}`))