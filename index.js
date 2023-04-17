require('dotenv').config();

const express = require("express");
const connection = require('./src/database/index');

const patientsRoutes = require('./src/routes/patients');
const doctorsRoutes = require('./src/routes/doctors');
const nursesRoutes = require('./src/routes/nurses');
const attendancesRoutes = require('./src/routes/attendances');

const app = express();
app.use(express.json());

connection.sync({alter: true});

app.use(patientsRoutes);
app.use(doctorsRoutes);
app.use(nursesRoutes);
app.use(attendancesRoutes);

app.listen(6666, () => {
  console.log("Servidor online");
});
